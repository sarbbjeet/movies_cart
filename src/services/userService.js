import config from '../config.json'
import http from '../services/httpServices'

const url = `/users`

function mapToViewModel(data) {
    return {
        email: data.username,
        password: data.password,
        name: data.name
    }
}

export async function register(data) {
    return await http.post(url, mapToViewModel(data))

}