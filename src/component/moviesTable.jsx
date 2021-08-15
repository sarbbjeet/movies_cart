import React, { Component } from 'react'
import TableBody from './common/tableBody'
import TableHeader from './common/tableHeader'

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
        const {movies,deleteMovie,sortedColumn} = this.props
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
                 <table className="table table-bordered">
                     <TableHeader columns={columns} 
                        sortedColumn ={sortedColumn} 
                        onSort ={this.raiseSort} />

                    <TableBody 
                       columns ={columns} 
                       deleteRow ={deleteMovie}
                       data={movies}
                       />
            
                </table>
            
        )
    }
}
