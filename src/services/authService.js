import http from "../services/httpServices";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";

const url = `/login`;

async function login(email, password) {
    return await http.post(url, { email, password });
}

http.setJwt(getJwt()); //set token to axios headers

//resend verfication link
async function reVerification() {
    try {
        const user = getCurrentUser();
        const { data: response } = await http.post("/users/verification-link", {
            user,
        });
        if (response.success) {
            logout();
            return toast.info(response.message);
        }
        return toast.error(response.message);
    } catch (ex) {
        return toast.error(ex.message);
    }
}

//decode token
function getCurrentUser() {
    try {
        const token = localStorage.getItem("token");
        const user = jwtDecode(token);
        return user;
    } catch (ex) {
        return null;
    }
}

//account verified status
function accountVerifiedStatus() {
    try {
        const user = getCurrentUser();
        if (user.isVerified !== undefined) return user.isVerified;
        return false;
    } catch (ex) {
        console.log("h2");
        return false;
    }
}

function getJwt() {
    return localStorage.getItem("token");
}

function saveToken(token) {
    localStorage.setItem("token", token);
    // window.location = "/" //mount all components again with redirect to home page
}

function logout() {
    localStorage.removeItem("token");
    window.location = "/"; //redirect to home page
}

const auth = {
    logout,
    login,
    getJwt,
    saveToken,
    getCurrentUser,
    accountVerifiedStatus,
    reVerification,
};
export default auth;