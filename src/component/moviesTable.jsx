import React, { Component } from 'react'
import Table from './common/table'

export default class MoviesTable extends Component {
    
    render() {
        const {movies,deleteMovie,sortedColumn, onSort} = this.props
        const columns = [
            {name:'Title', path:'title'},
            {name:'Genre', path:'genre.name'},
            {name:'Stock', path: 'numberInStock'},
            {name: 'Rate', path: 'dailyRentalRate'},
            {key:'delete', content:(item)=>{
                return <button className="btn btn-danger btn-sm"
                               onClick={()=>deleteMovie(item)}>delete</button>
            } 
            }
        ]
        return (
            <Table columns={columns} 
                   sortedColumn={sortedColumn} 
                   deleteItem={deleteMovie} 
                   data={movies}
                   onSort={onSort}
                   />
            
        )
    }
}
