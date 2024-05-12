const axios = require('axios');


const key ="18c9b396805b44a3b6f4bc7d3e8ee0e8";
const axiosCreate = axios.axiosCreate({
    baseURL: "http://api.rawg.io/api"
});


const getGenreList = axios.axiosCreate.get("/genres?key="+key);