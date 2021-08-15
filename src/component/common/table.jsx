import React, { Component } from 'react'
import TableBody from './tableBody'
import TableHeader from './tableHeader'

export default class Table extends Component {

    raiseSort = (path)=>{
        const {sortedColumn} = this.props  
        if(sortedColumn.path === path)
          sortedColumn.order= (sortedColumn.order ==='asc') ? 'desc' : 'asc'
        else
         sortedColumn.path = path
      this.props.onSort(sortedColumn) //pass sortedColumn rather than path 
     }
     
    render() {
        const {columns, sortedColumn, deleteItem, data} = this.props
        return (
            <table className="table table-bordered">
            <TableHeader columns={columns} 
               sortedColumn ={sortedColumn} 
               onSort ={this.raiseSort} />

           <TableBody 
              columns ={columns} 
              deleteRow ={deleteItem}
              data={data}
              />
           </table>
        )
    }
}
