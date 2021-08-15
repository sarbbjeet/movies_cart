import React, { Component } from 'react'
import { getMovies } from '../services/fakeMovieService'
import paginate from '../utils/paginate'
import ListGroup from './common/listGroup'
import Pagination from './common/pagination'
import MoviesTable from './moviesTable'
import _ from 'lodash'

export default class Movies extends Component {
state={
 movies: [], 
 selectedPage: 1,
 pageSize:4,
 selectedGenre:'',
 sortedColumn: {path:'title', order: 'asc'}
}

deleteMovie = (movie) =>{
    const movies = this.state.movies.filter(m => m._id !==movie._id)
    this.setState({movies})
} 

//handle pagination page select event
handlePageChange = (pageNum)=>{
    this.setState({selectedPage: pageNum})
}



//filter movies by using genre 
handleGenreFilter = ()=> {
  if(this.state.selectedGenre ==='' || this.state.selectedGenre ==='All Genres')
   return this.state.movies 
   return this.state.movies.filter(m=>
          m.genre.name===this.state.selectedGenre)
}

  /* when user click on any genre button then pagination go back to 
    1st page that why selectedPage:1 */  
handleGenreSelect = (genre) => this.setState({selectedGenre:genre, selectedPage:1})
  

//save sortedcolumn data to this.state sortedcolumn={path:'title', order:'asc'}
handleSort = (sortedColumn)=> this.setState({sortedColumn})

// life cycle hook to read movies from js file
componentDidMount(){
   this.setState({movies: getMovies()})
}
    render() {
        //obect destructuring 
        const {movies, selectedPage, pageSize,selectedGenre ,sortedColumn } = this.state
        const filtered = this.handleGenreFilter() //get filtered data
        const {length:count}= filtered   //get length of movies and use as count variable
        const numberOfPage= Math.ceil(count/pageSize)  
         //sorted columns according to the user event on the movie table header  
        const sorted = _.orderBy(filtered,[sortedColumn.path],[sortedColumn.order]) 
         //paginate after filtering data 
        const paginateItems = paginate(sorted,pageSize,selectedPage)

        if(movies.length===0) return( <h3>sorry no movie available</h3> )  
        return (
            <>
            <h3>total {movies.length} movies are available in the below list.</h3>
            <div className="row">
                {/* list group to filter genre */}
              <div className="col-2">
                <ListGroup selectedGenre={selectedGenre}
                handleGenreSelect={this.handleGenreSelect}/>
              </div>
              {/* movie table */}
              <div className="col">
               <MoviesTable 
                 deleteMovie={this.deleteMovie} 
                 movies = {paginateItems}
                 onSort = {this.handleSort}
                 sortedColumn = {sortedColumn}
                />
                {/* pagination under movie table same column  */}
               <Pagination 
                 numberOfPage={numberOfPage} 
                 selectedPage={selectedPage}
                 handlePageChange={this.handlePageChange} />
               </div>
            </div>
        </>
        )
    }
}
