import axios from 'axios'
import { Redirect } from 'react-router-dom'

export const MOVIE_SEARCH_SUCCESS = 'MOVIE_SEARCH_SUCCESS'
export const NOMINATE_MOVIE = 'NOMINATE_MOVIE'
export const GET_MOVIE_START = 'GET_MOVIE_START'
export const GET_MOVIE_SUCCESS = 'GET_MOVIE_SUCCESS'
export const GET_MOVIE_FAIL = 'GET_MOVIE_FAIL'

export const searchMovies = searchRes => dispatch => {
    dispatch({type: MOVIE_SEARCH_SUCCESS, payload: searchRes})
}

export const nominateMovie = movie => dispatch => {
    dispatch({type: NOMINATE_MOVIE, payload: movie})
}

export const getMovieInfo = movieId => dispatch => {
    dispatch({type: GET_MOVIE_START})
    axios.get( `http://www.omdbapi.com/?apikey=dd7713c4&i=${movieId}&plot=full`)
    .then(res => {
        console.log(res.data)
        dispatch({type: GET_MOVIE_SUCCESS, payload: res.data})
    })
    .catch(err => {
        console.error(err)
        dispatch({type: GET_MOVIE_FAIL})
    })
}