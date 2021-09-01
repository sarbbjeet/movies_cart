import http from "./httpServices";

const baseUrl = "/forgotten-password";

const findAccount = async(email) => {
    const url = baseUrl + "/find-account";
    try {
        return await http.post(url, { email });
    } catch (ex) {
        return ex.response;
    }
};

const verifyCode = async({ email, code }) => {
    const url = baseUrl + "/verify-secret-code";
    try {
        return await http.post(url, { email, code });
    } catch (ex) {
        return ex.response;
    }
};

const resetPassword = async(email) => {
    const url = baseUrl + "/reset-password";
    try {
        return await http.post(url, { email });
    } catch (ex) {
        return ex.response;
    }
};

const forgottenPassword = {
    findAccount,
    resetPassword,
    verifyCode,
};

export { forgottenPassword };