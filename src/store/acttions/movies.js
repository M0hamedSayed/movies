
import { axiosInstance } from '../../Network/axiosConfig';

export const getMovies = (page) => async (dispatch) => {
    try {
        const api = await axiosInstance.get(`https://api.themoviedb.org/3/movie/popular?api_key=7a1c19ea3c361a4d3cc53eb70ef8298c&page=${page}`);
        const data = await api.data.results;
        console.log(data);
        dispatch({
            type: "GET_MOVIES",
            payload: data
        })
    } catch (error) {
        console.log(error);
    }

}