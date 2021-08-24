import axios from 'axios'

const moviesUrl = 'http://localhost:3002/api/movies'
export async function getMovies() {

    return await axios.get(moviesUrl) //retuen promise

}