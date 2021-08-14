import React, { Component } from 'react'
import _ from 'lodash'
export default class Pagination extends Component {

    //props required
    //pageSize - movie in a page 
    // itemCount -total number of movies
    //pageCount - number of page (pagination number 1,2 ..etc)
    
    highlightSelectedPage =(page)=> this.props.selectedPage ===page ? "page-item active" : "page-item"

    render() {
        const {selectedPage, numberOfPage, handlePageChange} = this.props
        const pages =  _.range(1,numberOfPage+1)
        console.log("selected page=", selectedPage)
        return (
         <nav>
             <ul className="pagination">
                {
                    pages.map(page=> <li key={page} className={this.highlightSelectedPage(page)}><a onClick={()=>handlePageChange(page)} className="page-link" >{page}</a></li>)
            
                }
                 {/* <li className="page-item"><a className="page-link" >1</a></li>
                 <li className="page-item"><a className="page-link" >2</a></li>
                 <li className="page-item"><a className="page-link" >3</a></li> */}
             </ul>
         </nav>
        )
    }
}
