import config from '../config.json'
import http from '../services/httpServices'

const url = `${config.backendServerURL}/login`

export async function login(email, password) {
    return await http.post(url, { email, password })
}

export function logout() {

    localStorage.removeItem('token')

}