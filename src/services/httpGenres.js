import axios from 'axios'
const url = "http://localhost:3002/api/genres"
export async function getGenres() {
    const { data: response } = await axios.get(url)
    return response
}