import React, { Component } from 'react'

export default class MoviesTable extends Component {
    render() {
        const {movies,deleteMovie} = this.props
        return (
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
                            movies.map(m=> <tr key={m._id}>    
                            <td>{m.title}</td>
                            <td>{m.genre.name}</td>
                            <td>{m.numberInStock}</td>
                            <td>{m.dailyRentalRate}</td>
                            <td><button 
                                className="btn btn-danger btn-sm"
                                onClick = {()=>deleteMovie(m)}>
                                    delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            
        )
    }
}
