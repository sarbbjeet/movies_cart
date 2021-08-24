//Axios Interceptors
//handle unexpected errors from center
import axios from "axios";

axios.interceptors.response.use(null, error => {
    const expectedError = error.response && error.response.status >= 400 &&
        error.response.status <= 500
    if (!expectedError)
        alert(error) //unexpected error such as network error or bugs 
    else
        alert(error)
        //console.error(error) //expected error

    //alert(error) //expected error
    return Promise.reject(error)
})

const http = {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete

}
export default http