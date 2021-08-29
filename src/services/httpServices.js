//Axios Interceptors
//handle unexpected errors from center
import axios from "axios";
import { toast } from "react-toastify";
import auth from "./authService";

axios.interceptors.response.use(null, error => {
    const expectedError = error.response && error.response.status >= 400 &&
        error.response.status <= 500
    if (!expectedError)
        toast.error(`expected error: ${error.message}`)
        //  alert(error) //unexpected error such as network error or bugs 
    else
        toast.error(`unexpected error: ${error.message}`)


    //alert(error) //expected error
    return Promise.reject(error)
})

/*add token header with axios so whenever user access any 
       routes token header automatically added */
axios.defaults.headers.common['x-auth-token'] = auth.getJwt()

const http = {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete

}
export default http