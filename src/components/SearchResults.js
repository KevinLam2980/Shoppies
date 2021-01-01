import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import Movie from './Movie'
import styled from 'styled-components'

const StyledSearchResults = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    height: 100%;
    padding-bottom: 100px;
    border-right: 2px solid #E50914;
`

const SearchResults = (props) => {
    const [movieIds, setMovieIds] = useState([])
    const {nominatedMovies, searchRes} = props

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
                searchRes && searchRes.length > 0 ? searchRes.filter(movie => {
                    return !movieIds.includes(movie.imdbID)
                })
                .map(movie => {
                    return (
                        <Movie movie={movie} key={movie.imdbID}/>
                    )
                }) : null
            }
        </StyledSearchResults>
    )
}

const mapStateToProps = state => {
    return {
        searchRes: state.searchResults,
        nominatedMovies: state.nominatedMovies
    }
  }

export default connect(mapStateToProps, {})(SearchResults)