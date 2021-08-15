import React, { Component } from 'react'

export default class MoviesTable extends Component {

    raiseSort = (path)=>{
        const {sortedColumn} = this.props 
        if(sortedColumn.path === path)
          sortedColumn.order= (sortedColumn.order ==='asc') ? 'desc' : 'asc'
        else
         sortedColumn.path = path
      this.props.onSort(sortedColumn) //pass sortedColumn rather than path 
     }
    
    render() {
        const {movies,deleteMovie, onSort} = this.props
        return (
                 <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th onClick = {()=> this.raiseSort('title')}>Title</th>
                            <th onClick = {()=> this.raiseSort('genre.name')} >Genre</th>  
                            <th onClick = {()=> this.raiseSort('numberInStock')}>Stock</th>
                            <th onClick = {()=> this.raiseSort('dailyRentalRate')}>Rate</th>
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
