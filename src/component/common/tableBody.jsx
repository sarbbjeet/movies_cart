import _ from 'lodash'
import React, { Component } from 'react'

export default class TableBody extends Component {
  
    //condition to check column contain button(c.content) or normal data(!c.content)
    renderCell = (m,c)=>{
    if(c.content)  //true
      return <td key={c.key}>{c.content(m)}</td>
      /*nested key words (ex. genre.name) not applicable on below expression  
        <td>{m[c.path]}</td>)  
        so use lodash */     
    return <td key={c.path + c.name}>{ _.get(m,c.path)}</td>
    }


    render() {
        //props 
        //columns ...contain column info [{path:'title', name:'Title'}]
        //data  ... array to infomation   

        const {columns, data}  = this.props
        return (
                 <tbody>
                        {
                            data.map(m=> 
                             <tr key={m._id}>
                                 {
                                   columns.map(c=> 
                                   this.renderCell(m,c))
                                 }     
                            </tr>)
                        }
                    </tbody>
                
        )
    }
}
