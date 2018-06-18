import { combineReducers } from 'redux';
import getReducer from '../reducers/GetReducer';

export default combineReducers({
    get: getReducer
});