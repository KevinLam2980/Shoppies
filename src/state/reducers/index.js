import {MOVIE_SEARCH_SUCCESS} from '../actions'

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
        default:
            return state
    }
}