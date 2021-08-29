//Axios Interceptors
//handle unexpected errors from center
import axios from "axios";
import { toast } from "react-toastify";
// import auth from "./authService";   //bidirectional mistake 

axios.interceptors.response.use(null, error => {
    const expectedError = error.response && error.response.status >= 400 &&
        error.response.status <= 500
    if (!expectedError)
    // toast.error(`expected error: ${error.message}`)
        toast.error(`expected error: ${error.response.data.message}`)
        //  alert(error) //unexpected error such as network error or bugs 
    else
        toast.error(`unexpected error: ${error.response.data.message}`) //custom message

    //alert(error) //expected error
    return Promise.reject(error)
})

/*add token header with axios so whenever user access any 
       routes token header automatically added */
function setJwt(token) {
    axios.defaults.headers.common['x-auth-token'] = token
}

const http = {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
    setJwt
}
export default http