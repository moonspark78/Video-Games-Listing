import axios from "axios";


const key ="18c9b396805b44a3b6f4bc7d3e8ee0e8";
const axioCreate = axios.create({
    baseURL: "http://api.rawg.io/api",
});


const getGenreList = axioCreate.get("/genres?key="+key);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getGenreList
}