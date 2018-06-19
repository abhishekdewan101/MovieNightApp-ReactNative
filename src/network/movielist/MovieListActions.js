import { getMovieList } from "../MovieApiManager";

export const fetchMovieList = () => dispatch => {
    return getMovieList().subscribe({
        next : value => dispatch({
            type: FETCH_MOVIE_LIST,
            payload: value.results
        }),
        error : err => console.log(err),
        complete : () => console.log("Completed Fetch Movie List")
    });
}

export const FETCH_MOVIE_LIST = "FETCH_MOVIE_LIST";