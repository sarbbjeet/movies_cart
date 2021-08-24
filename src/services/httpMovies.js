import http from '../services/httpServices'
import config from '../config.json'

const moviesUrl = `${config.backendServerURL}/movies`;
export async function getMovies() {

    return await http.get(moviesUrl) //retuen promise

}

//modified movie object according to back-end server is required
function mapToViewModel(movie) {
    return {
        title: movie.title,
        genreId: movie.genreId,
        numberInStock: movie.stock,
        dailyRentalRate: movie.rate
    }
}

export async function saveMovie(movie) {
    if (movie._id)
        return await http.put(moviesUrl + '/' + movie._id, mapToViewModel(movie))
    return await http.post(moviesUrl, mapToViewModel(movie))

}

export async function deleteMovie(movie) {
    return await http.delete(moviesUrl + '/' + movie._id)

}