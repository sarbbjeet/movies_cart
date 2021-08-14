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
handleGenreSelect = (genre) => {
     //when user click on any genre button then pagination go back to 1st page 
    this.setState({selectedGenre:genre, selectedPage:1})
}

handleSort = (path)=>{
   const {sortedColumn} = this.state 
   if(sortedColumn.path === path)
     sortedColumn.order= (sortedColumn.order ==='asc') ? 'desc' : 'asc'
   else
    sortedColumn.path = path
 this.setState({sortedColumn})
}

//filter movies by using genre 
handleGenreFilter = ()=> {
  if(this.state.selectedGenre ==='' || this.state.selectedGenre ==='All Genres')
   return this.state.movies 
   return this.state.movies.filter(m=>
          m.genre.name===this.state.selectedGenre)
}

componentDidMount(){
   this.setState({movies: getMovies()})
}
    render() {
        //obect destructuring 
        const {movies, selectedPage, pageSize,selectedGenre ,sortedColumn } = this.state
        const filtered = this.handleGenreFilter() 
        const {length:count}= filtered   //get length of movies and use as count variable
        const numberOfPage= Math.ceil(count/pageSize)
        //sort
        const sorted = _.orderBy(filtered,[sortedColumn.path],[sortedColumn.order]) 
        //paginate after filtering data 
        const paginateItems = paginate(sorted,pageSize,selectedPage)
        if(movies.length===0) return( <h3>sorry no movie available</h3> )  
        return (
            <>
              <h3>total {movies.length} movies are available in the below list.</h3>
            <div className="row">
                <div className="col-2">
                <ListGroup selectedGenre={selectedGenre}
                    handleGenreSelect={this.handleGenreSelect}/>
                </div>
                <div className="col">
               <MoviesTable 
               deleteMovie={this.deleteMovie} 
               movies = {paginateItems}
               onSort = {this.handleSort} /> 
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
