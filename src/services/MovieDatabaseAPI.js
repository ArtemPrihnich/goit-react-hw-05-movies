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

// async function getMovieImage(id) {
//     const responce = await axios.get(`${URL}/movie/${id}/images?api_key=${KEY}&language=en-US`)
// }

const api = {
    trendingMovies,
    getMovieDetails
}

export default api