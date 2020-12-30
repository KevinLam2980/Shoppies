import {
    MOVIE_SEARCH_SUCCESS,
    NOMINATE_MOVIE
        } from '../actions'

const initialAppState = {
    searchResults: [],
    nominatedMovies: []
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
        default:
            return state
    }
}