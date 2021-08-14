import React, { Component } from 'react'
import { getMovies } from '../services/fakeMovieService'
import paginate from '../utils/paginate'
import Pagination from './common/pagination'

export default class Movies extends Component {
state={
 movies: [], 
 selectedPage: 1,
 pageSize:4
}

deleteMovie = (movie) =>{
    const movies = this.state.movies.filter(m => m._id !==movie._id)
    this.setState({movies})
} 


handlePageChange = (pageNum)=>{
    this.setState({selectedPage: pageNum})
}


componentDidMount(){
   this.setState({movies: getMovies()})
}
    render() {
        //obect destructuring 
        const {movies, selectedPage, pageSize} = this.state
        const {length:count}= movies  //get length of movies and use as count variable
        const numberOfPage= Math.ceil(count/pageSize)
        const paginateItems = paginate(movies,pageSize,selectedPage)
        if(count===0) return( <h3>sorry no movie available</h3> )  
        return (
            <React.Fragment>
                <h3>total {count} movies are available in the below list.</h3>
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
        </React.Fragment>
        )
    }
}
