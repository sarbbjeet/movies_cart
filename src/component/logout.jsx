import {useEffect} from 'react'
import auth from '../services/authService'

export default function Logout() {
    useEffect(() => {
       auth.logout() //call to logout method
    }, [])
    return (
        null
    )
}
