import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Movie from './Movie'
import {StyledSearchResults} from '../styles/ComponentStyles'

const SearchResults = (props) => {
    const [movieIds, setMovieIds] = useState([])
    const { nominatedMovies, searchRes } = props

    // update search results with latest api request
    useEffect(() => {
        let movies = []
        nominatedMovies.forEach(movie => {
            movies.push(movie.imdbID)
        })
        setMovieIds(movies)
    }, [nominatedMovies])

    return (
        <StyledSearchResults>
            {   
                searchRes && searchRes.length > 0 ? searchRes
                    .filter(movie => {
                        return !movieIds.includes(movie.imdbID)
                    })
                    .map(movie => {
                        return (
                            <Movie movie={movie} key={movie.imdbID} />
                        )
                    }) : null
            }
        </StyledSearchResults>
    )
}

const mapStateToProps = state => {
    return {
        searchRes: state.searchResults,
        nominatedMovies: state.nominatedMovies,
        movieSearchLoading: state.movieSearchLoading
    }
}

export default connect(mapStateToProps, {})(SearchResults)