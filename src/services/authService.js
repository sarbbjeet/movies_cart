import config from '../config.json'
import http from '../services/httpServices'
import jwtDecode from 'jwt-decode'

const url = `${config.backendServerURL}/login`

export async function login(email, password) {
    return await http.post(url, { email, password })
}

//decode token 
export function getCurrentUser() {
    try {
        const token = localStorage.getItem('token')
        const user = jwtDecode(token)
        return user
    } catch (ex) {
        return null
    }
}
export function saveToken(token) {
    localStorage.setItem('token', token)
    window.location = "/" //mount all components again with redirect to home page
}

export function logout() {
    localStorage.removeItem('token')
    window.location = "/" //redirect to home page
}