export const MOVIE_SEARCH_SUCCESS = 'MOVIE_SEARCH_SUCCESS'
export const NOMINATE_MOVIE = 'NOMINATE_MOVIE'

export const searchMovies = searchRes => dispatch => {
    dispatch({type: MOVIE_SEARCH_SUCCESS, payload: searchRes})
}

export const nominateMovie = movie => dispatch => {
    dispatch({type: NOMINATE_MOVIE, payload: movie})
}