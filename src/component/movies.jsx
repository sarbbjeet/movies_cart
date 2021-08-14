import React, { Component } from 'react'
import { getMovies } from '../services/fakeMovieService'
import paginate from '../utils/paginate'
import ListGroup from './common/listGroup'
import Pagination from './common/pagination'

export default class Movies extends Component {
state={
 movies: [], 
 selectedPage: 1,
 pageSize:4,
 selectedGenre:''
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
        const {movies, selectedPage, pageSize,selectedGenre } = this.state
        const filtered = this.handleGenreFilter() 
        const {length:count}= filtered   //get length of movies and use as count variable
        const numberOfPage= Math.ceil(count/pageSize)
        //paginate after filtering data 
        const paginateItems = paginate(filtered,pageSize,selectedPage)
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
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>  
                            <th>Stock</th>
                            <th>Rate</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            paginateItems.map(m=> <tr key={m._id}>    
                            <td>{m.title}</td>
                            <td>{m.genre.name}</td>
                            <td>{m.numberInStock}</td>
                            <td>{m.dailyRentalRate}</td>
                            <td><button 
                                className="btn btn-danger btn-sm"
                                onClick = {()=>this.deleteMovie(m)}>
                                    delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
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
