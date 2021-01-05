import {
    NOMINATE_MOVIE,
    GET_MOVIE_START,
    GET_MOVIE_SUCCESS,
    GET_MOVIE_FAIL,
    REMOVE_MOVIE,
    SEARCH_START,
    SEARCH_MOVIE_SUCCESS,
    SEARCH_MOVIE_FAIL,
    SET_LOCALSTORAGE_STATE
        } from '../actions'

const initialAppState = {
    searchResults: [],
    nominatedMovies: [],
    movieInfo: null,
    getInfoLoading: false,
    movieSearchLoading: false,
}

export const shoppiesReducer = (state = initialAppState, action) => {
    switch(action.type) {
        case SEARCH_START:
            return {
                ...state,
                movieSearchLoading: true
            }
        case SEARCH_MOVIE_SUCCESS:
            return {
                ...state, 
                searchResults: action.payload,
                movieSearchLoading: false
            }
        case SEARCH_MOVIE_FAIL:
            return {
                ...state,
                movieSearchLoading: false
            }
        case NOMINATE_MOVIE:
            return {
                ...state,
                nominatedMovies: [...state.nominatedMovies, action.payload],
                searchResults: state.searchResults.filter(movie => {
                    return movie.imdbID !== action.payload.imdbID
                })
            }
        case REMOVE_MOVIE:
            return {
                ...state,
                movieInfo: null,
                nominatedMovies: state.nominatedMovies.filter(movie => {
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
        case SET_LOCALSTORAGE_STATE:
            return action.payload
        default:
            return state
    }
}