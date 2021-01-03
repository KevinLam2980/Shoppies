import axios from 'axios'

export const NOMINATE_MOVIE = 'NOMINATE_MOVIE'
export const GET_MOVIE_START = 'GET_MOVIE_START'
export const GET_MOVIE_SUCCESS = 'GET_MOVIE_SUCCESS'
export const GET_MOVIE_FAIL = 'GET_MOVIE_FAIL'
export const REMOVE_MOVIE = 'REMOVE_MOVIE'
export const SEARCH_START = 'SEARCH_START'
export const SEARCH_MOVIE_SUCCESS = 'SEARCH_MOVIE_SUCCESS'
export const SEARCH_MOVIE_FAIL = 'SEARCH_MOVIE_FAIL'

// add search result movie to nomination list
export const nominateMovie = movie => dispatch => {
    dispatch({type: NOMINATE_MOVIE, payload: movie})
}

// remove search result movie to nomination list
export const removeNominatedMovie = movie => dispatch => {
    dispatch({type: REMOVE_MOVIE, payload: movie})
}

// populate search results with API request results
export const searchMovie = searchText => dispatch => {
    dispatch({type: SEARCH_START})
    axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=dd7713c4&s=${searchText}&type=movie`)
            .then(res => {
                dispatch({type: SEARCH_MOVIE_SUCCESS, payload: res.data.Search})
            })
            .catch(err => {
                console.error(err)
                dispatch({type: SEARCH_MOVIE_FAIL})
            })
}

// get full movie info for selected movie
export const getMovieInfo = movieId => dispatch => {
    dispatch({type: GET_MOVIE_START})
    axios.get( `https://www.omdbapi.com/?apikey=dd7713c4&i=${movieId}&plot=full`)
    .then(res => {
        dispatch({type: GET_MOVIE_SUCCESS, payload: res.data})
    })
    .catch(err => {
        console.error(err)
        dispatch({type: GET_MOVIE_FAIL})
    })
}