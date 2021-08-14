import React, { Component } from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
export default class Pagination extends Component {

    //props required
    //pageSize - movie in a page 
    // itemCount -total number of movies
    //pageCount - number of page (pagination number 1,2 ..etc)
    
    highlightSelectedPage =(page)=> this.props.selectedPage ===page ? "page-item active" : "page-item"

    render() {
        const {numberOfPage, handlePageChange} = this.props
        const pages =  _.range(1,numberOfPage+1)
       // console.log("selected page=", selectedPage)
        return (
         <nav>
             <ul className="pagination">
                {
                    pages.map(page=> <li key={page} className={this.highlightSelectedPage(page)}><a onClick={()=>handlePageChange(page)} className="page-link" >{page}</a></li>)
            
                }
             </ul>
         </nav>
        )

}
}

// validate props   
    Pagination.propTypes={
        selectedPage: PropTypes.number.isRequired,
        numberOfPage:PropTypes.number.isRequired,
        handlePageChange: PropTypes.func.isRequired
    }
