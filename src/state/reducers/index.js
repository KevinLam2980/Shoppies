import {
    MOVIE_SEARCH_SUCCESS,
    NOMINATE_MOVIE,
    GET_MOVIE_START,
    GET_MOVIE_SUCCESS,
    GET_MOVIE_FAIL
        } from '../actions'

const initialAppState = {
    searchResults: [],
    nominatedMovies: [],
    movieInfo: null,
    getInfoLoading: false
}

export const shoppiesReducer = (state = initialAppState, action) => {
    switch(action.type) {
        case MOVIE_SEARCH_SUCCESS:
            return {
                ...state, 
                searchResults: action.payload
            }
        case NOMINATE_MOVIE:
            return {
                ...state,
                nominatedMovies: [...state.nominatedMovies, action.payload],
                searchResults: state.searchResults.filter(movie => {
                    return movie.imdbID !== action.payload.imdbID
                })
            }
        case GET_MOVIE_START:
            return {
                ...state,
                getInfoLoading: true
            }
        case GET_MOVIE_SUCCESS:
            return {
                ...state,
                getInfoLoading: false,
                movieInfo: action.payload
            }
        case GET_MOVIE_FAIL:
            return {
                ...state,
                getInfoLoading: false,
                movieInfo: null
            }
        default:
            return state
    }
}