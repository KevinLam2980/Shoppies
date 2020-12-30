import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import SearchMovie from './SearchMovie'

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
        <div>
            {
                searchRes && searchRes.length > 0 ? searchRes.filter(movie => {
                    return !movieIds.includes(movie.imdbID)
                })
                .map(movie => {
                    return (
                        <SearchMovie movie={movie} key={movie.imdbID}/>
                    )
                }) : null
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        searchRes: state.searchResults,
        nominatedMovies: state.nominatedMovies
    }
  }

export default connect(mapStateToProps, {})(SearchResults)