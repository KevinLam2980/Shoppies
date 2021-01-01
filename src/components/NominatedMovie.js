import React from 'react'

const NominatedMovie = (props) => {
    const {movie, nominateMovie, nominatedMovies} = props

    return (
        <div>
              <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://www.prokerala.com/movies/assets/img/no-poster-available.jpg'} alt={`${movie.Title} movie poster`} />
              <div className='nominatedMovieDetails'>
                    <div className='nominatedMovieName'>
                        <h2>{`${movie.Title} (${movie.Year})`}</h2>
                    </div>
                    <div className='nominatedMovieButtons'>
                        <button>View</button>
                        <button>Remove</button>
                    </div>
               
                </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        nominatedMovies: state.nominatedMovies
    }
  }

export default connect(mapStateToProps, {nominateMovie})(Movie)