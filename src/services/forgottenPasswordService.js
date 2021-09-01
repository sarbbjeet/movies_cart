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

const forgottenPassword = {
    findAccount,
};

export { forgottenPassword };