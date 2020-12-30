import React from 'react'
import {connect} from 'react-redux'
import {nominateMovie} from '../state/actions'


const SearchMovie = (props) => {
    const {movie, nominateMovie, nominatedMovies} = props

    const nominate = () => {
        if (nominatedMovies.length < 5){
            nominateMovie(movie)
        }
        else {
            console.log('there be too many bro')
        }
    }
    return (
        <div 
        className="movie"
        onClick={nominate}
        >
            <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://www.prokerala.com/movies/assets/img/no-poster-available.jpg'} alt={`${movie.Title} movie poster`} />
            <h2>{`${movie.Title} (${movie.Year})`}</h2>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        nominatedMovies: state.nominatedMovies
    }
  }

export default connect(mapStateToProps, {nominateMovie})(SearchMovie)