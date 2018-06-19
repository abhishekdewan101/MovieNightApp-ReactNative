import { combineReducers } from 'redux';

import fetchMovieListReducer from '../network/movielist/MovieListReducer';

export default combineReducers({
    fetchMovieList: fetchMovieListReducer
});