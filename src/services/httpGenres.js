import http from "../services/httpServices";
// import config from '../config.json'
const url = `/genres`;
export async function getGenres() {
    const { data: response } = await http.get(url);
    return response;
}