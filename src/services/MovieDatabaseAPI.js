import axios from "axios";

const URL = 'https://api.themoviedb.org/3'
const KEY = 'b19d34c8bb86b10263dd24c38a77e36e'

async function trendingMovies() {
    const responce = await axios.get(`${URL}/trending/movie/day?api_key=${KEY}`)
    return responce
}

async function getMovieDetails(id) {
    const responce = await axios.get(`${URL}/movie/${id}?api_key=${KEY}`)
    return responce
}

async function getCastInformation(id) {
    const responce = await axios.get(`${URL}/movie/${id}/credits?api_key=${KEY}&language=en-US`)
    return responce
}

async function getReviews(id) {
    const responce = await axios.get(`${URL}/movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`)
    return responce
}

async function getMovieList(name) {
    const responce = await axios.get(`${URL}/search/movie?api_key=${KEY}&language=en-US&query=${name}&page=1&include_adult=false`)
    return responce
}

const api = {
    trendingMovies,
    getMovieDetails,
    getCastInformation,
    getReviews,
    getMovieList
}

export default api