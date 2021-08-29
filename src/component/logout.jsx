import {useEffect} from 'react'
import { logout } from '../services/authService'

export default function Logout() {
    useEffect(() => {
       logout() //call to logout method
    }, [])
    return (
        null
    )
}
