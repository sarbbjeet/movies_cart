import React, { Component } from 'react'
import Table from './common/table'
import {Link} from 'react-router-dom'
import auth from '../services/authService'

export default class MoviesTable extends Component {
    columns = [
        {name:'Title', path:'title' , content:(item)=><Link to={`/movies/${item._id}`} >{item.title}</Link>},
        {name:'Genre', path:'genre.name'},
        {name:'Stock', path: 'numberInStock'},
        {name: 'Rate', path: 'dailyRentalRate'},
        // {key:'delete', content:(item)=>{
        //     return <button className="btn btn-danger btn-sm"
        //                    onClick={()=>deleteMovie(item)}>delete</button>
        // } 
        // }
    ]



    deleteColumn ={
        key:'delete', content:(item)=>{
                return <button className="btn btn-danger btn-sm"
                               onClick={()=> this.props.deleteMovie(item)}>delete</button>
            } 
        }

        componentDidMount(){
            //super()
            const user =  auth.getCurrentUser()
            if(user && user.admin) { this.columns.push(this.deleteColumn)} 
           
        }

    render() {
        const {movies,deleteMovie,sortedColumn, onSort} = this.props
        // const columns = [
        //     {name:'Title', path:'title' , content:(item)=><Link to={`/movies/${item._id}`} >{item.title}</Link>},
        //     {name:'Genre', path:'genre.name'},
        //     {name:'Stock', path: 'numberInStock'},
        //     {name: 'Rate', path: 'dailyRentalRate'},
        //     // {key:'delete', content:(item)=>{
        //     //     return <button className="btn btn-danger btn-sm"
        //     //                    onClick={()=>deleteMovie(item)}>delete</button>
        //     // } 
        //     // }
        // ]

        return (
            <Table columns={this.columns} 
                   sortedColumn={sortedColumn} 
                   deleteItem={deleteMovie} 
                   data={movies}
                   onSort={onSort}
                   />
            
        )
    }
}
