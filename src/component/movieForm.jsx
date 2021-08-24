import Joi from 'joi-browser'
import React from 'react'
import { getGenres } from '../services/httpGenres'
import { saveMovie } from '../services/fakeMovieService'
import { getMovies } from '../services/httpMovies'
import Form from './common/form'

export default class MovieForm extends Form {
    state = {
        data:{
            _id:"",
            title: "",
            genreId :"",
            stock:"",
            rate:""  
        },
        genres:[],
        errors : {}
    }
  //validate schema
  schema = {
      _id: Joi.string(),
      title: Joi.string().required().label("Title"),
      genreId: Joi.string().required().label("Genre"),
      stock: Joi.number().required().label("number of Stock"),
      rate: Joi.number().required().label("Rate")
  }

 async componentDidMount(){
    //get genres list
    const genres = await getGenres()
    this.setState({genres})
    const movieId = this.props.match.params.id;
    if(movieId === "new") return  //add new movie
    const {data: movies} = await getMovies()
    const movie= movies.find(m=>m._id===movieId)
    if(!movie) return this.props.history.replace("/not-found")
    this.setState({data: this.mapToViewModel(movie)}) 
  }

  mapToViewModel(movie){
   return {
       _id: movie._id, 
       title: movie.title,
       genreId: movie.genre._id._id,
       stock: movie.numberInStock,
       rate: movie.dailyRentalRate
   }
  }

  doSubmit(){
    //server code 
    console.log("data=",this.state.data)
    saveMovie(this.state.data)
    this.props.history.push('/movies') 
  } 
    render() {
        return (
            <div>  
                 <h3>movie form</h3>
            <form onSubmit={this.handleSubmit}>
                {this.renderInput('title', 'Title')}
                {this.renderSelect('genreId', 'Genre', this.state.genres)}
                {this.renderInput('stock', 'Stock')}
                {this.renderInput('rate', 'Rate')}
                {this.renderButton('Save')}
                
            </form>
            </div>
        )
    }
}
