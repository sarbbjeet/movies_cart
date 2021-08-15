import React, { Component } from 'react'

export default class TableHeader extends Component {
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
                                    <th key={i} onClick = {()=> onSort(c.path)}>{c.name}</th> )

                            }
                        </tr>
            </thead>
        )
    }
}
