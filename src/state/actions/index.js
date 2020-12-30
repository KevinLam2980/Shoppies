export const MOVIE_SEARCH_SUCCESS = 'MOVIE_SEARCH_SUCCESS'

export const searchMovies = searchRes => dispatch => {
    dispatch({type: MOVIE_SEARCH_SUCCESS, payload: searchRes})
}