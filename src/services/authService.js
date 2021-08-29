import config from '../config.json'
import http from '../services/httpServices'
import jwtDecode from 'jwt-decode'

const url = `${config.backendServerURL}/login`

async function login(email, password) {
    return await http.post(url, { email, password })
}

http.setJwt(getJwt()) //set token to axios headers 

//decode token 
function getCurrentUser() {
    try {
        const token = localStorage.getItem('token')
        const user = jwtDecode(token)
        return user
    } catch (ex) {
        return null
    }
}

function getJwt() {
    return localStorage.getItem('token')
}

function saveToken(token) {
    localStorage.setItem('token', token)
    window.location = "/" //mount all components again with redirect to home page
}

function logout() {
    localStorage.removeItem('token')
    window.location = "/" //redirect to home page
}

const auth = {
    logout,
    login,
    getJwt,
    saveToken,
    getCurrentUser
}
export default auth