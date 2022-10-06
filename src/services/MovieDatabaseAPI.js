import axios from "axios";

const URL = 'https://api.themoviedb.org/3'
const KEY = 'b19d34c8bb86b10263dd24c38a77e36e'

async function trendingMovies() {
    const responce = await axios.get(`${URL}/trending/movie/day?api_key=${KEY}`)
    return responce
}

const api = {
    trendingMovies
}

export default api