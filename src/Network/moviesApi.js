
import { axiosInstance } from './axiosConfig';

export const getMovies = async () => {
    try {
        const api = await axiosInstance.get("movie/popular?api_key=e6d27c29954d4ccbc2120e3d3365dc97");
        return await api.data.results;
    } catch (error) {
        console.log(error);
    }
}

export const getMovieDetail = async (id) => {
    try {
        const movieDetail = await axiosInstance.get(`movie/${id}?api_key=e6d27c29954d4ccbc2120e3d3365dc97`);
        return movieDetail;
    } catch (error) {
        console.log(error);
    }
}


export const searchMovie = async (MovieName) => {
    try {
        const api = await axiosInstance.get(`https://api.themoviedb.org/3/search/movie?api_key=e6d27c29954d4ccbc2120e3d3365dc97&query=${MovieName}`);
        return await api.data.results;
    } catch (error) {
        console.log(error);
    }
}

export const getMoviesByPage = async (page) => {
    try {
        const api = await axiosInstance.get(`https://api.themoviedb.org/3/movie/popular?api_key=7a1c19ea3c361a4d3cc53eb70ef8298c&page=${page}`);
        return await api.data.results;
    } catch (error) {
        console.log(error);
    }
}