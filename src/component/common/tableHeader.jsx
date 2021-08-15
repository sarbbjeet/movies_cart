import React, { Component } from 'react'

export default class TableHeader extends Component {
    
    handleSortIcon =(sortedColum,c)=>{
        let _class="fa fa-sort-" 
        if(c.path !==sortedColum.path)
         return null 
         _class +=sortedColum.order==='asc' ? 'asc' : 'desc'   
        return <i className={_class}></i>

    }
    //props required
    //sortedColumn  --object
    //columns --array contain [{path: 'title', name:'Title'}]
    //raiseSort -- function 
    //
    render() {
        const {columns, sortedColumn, onSort} = this.props
        return (
            <thead>
                        <tr>
                            {
                                columns.map((c,i)=> 
                                    <th key={i} onClick = {()=> onSort(c.path)}>{c.name}
                                       {this.handleSortIcon(sortedColumn,c)}
                                         </th> )

                            }
                        </tr>
            </thead>
        )
    }
}
