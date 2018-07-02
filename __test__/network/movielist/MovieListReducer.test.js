import fetchMovieListReducer from '../../../src/network/movielist/MovieListReducer';
import { FETCH_MOVIE_LIST } from '../../../src/network/movielist/MovieListActions';

describe('Testing FetMovieListReducer',() => {
    it('should provide a default state when action is anything other than FETCH_MOVIE_LIST',() => {
        const action = {type:"UNDEFINED_TYPE"}
        expect(fetchMovieListReducer(undefined,action)).toEqual({movieList:[]});     
    })

    it('should provide a altered state when provided FETCH_MOVIE_LIST and accompanying payload',() => {
        const mockPayload = 'this is mock payload';
        const action = {
            type: FETCH_MOVIE_LIST,
            payload: mockPayload,
        }
        expect(fetchMovieListReducer(undefined,action)).toEqual({
            movieList:mockPayload
        })
    });

    it('should provide original state altered with the payload provided when action is FETCH_MOVIE_LIST',() => {
        const mockPayload = 'this is mock payload';
        const action = {
            type: FETCH_MOVIE_LIST,
            payload: mockPayload,
        };
        const orignalState = {
            defaultStateVariable: 4,
        }
        expect(fetchMovieListReducer(orignalState,action)).toEqual({
            defaultStateVariable: 4,
            movieList: mockPayload
        });
    });
});