import { FETCH_MOVIE_LIST } from './MovieListActions';

const initialState = {
    movieList : []
};

const fetchMovieListReducer = function(state = initialState, action) {
    console.log("Fetch Movie List Reducer Called with action - " + action.type);
    switch(action.type) {
        case FETCH_MOVIE_LIST:
            state = Object.assign({},state,{movieList:action.payload});
            return state;
        default:
            return state;
    }
}

export default fetchMovieListReducer;