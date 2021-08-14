import React, { Component } from 'react'
import { getMovies } from '../services/fakeMovieService'
import Pagination from './common/pagination'

export default class Movies extends Component {
state={
 movies: []
}

deleteMovie = (movie) =>{
    const movies = this.state.movies.filter(m => m._id !==movie._id)
    this.setState({movies})
} 

componentDidMount(){
   this.setState({movies: getMovies()})
}
    render() {
        //obect destructuring 
        const {movies} = this.state
        const {length:count}= movies  //get length of movies and use as count variable

        return (
            <React.Fragment>
                {
                    count===0 ? <h3>sorry no movie available</h3>
                    :
                    <>
                <h3> Total {count} movies available in the below list.</h3>
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
                            movies.map(m=><tr key={m._id}>    
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
                </>
    }
    <Pagination />
            </React.Fragment>
        )
    }
}
