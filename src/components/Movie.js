import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { nominateMovie, getMovieInfo } from '../state/actions'
import { useNotification } from './notifications/NotificationsProvider'
import { StyledMovie, StyledNominatedMovie } from '../styles/ComponentStyles'



const Movie = (props) => {
    const { movie, nominateMovie, nominatedMovies, nominated, getMovieInfo } = props
    const dispatchNotification = useNotification()

    // allows user to click to view desired nominated movie
    const choosediv = (e) => {
        // removes active class from all other elements to make sure there is only one active class element.
        if (document.querySelectorAll('.active').length !== 0) {
            let selectedEls = document.querySelectorAll('.active')
            selectedEls.forEach(element => {
                element.classList.remove('active')
            });
        }
        document.querySelector(`#${movie.imdbID}`).classList.toggle('active')
    }

    // allows user to click on search result movie to nominate it
    const nominate = () => {
        // check to make sure there are no more than 5 movies
        if (nominatedMovies.length < 5) {
            nominateMovie(movie)
            dispatchNotification({
                type: 'SUCCESS',
                message: `'${movie.Title}' added to nominations.`
            })
        } else {
            dispatchNotification({
                type: 'ERROR',
                message: 'You can only nominate 5 movies.'
            })
        }
    }

    // auto select last movie in nominated list when adding or removing movie
    useEffect(() => {
        if (nominatedMovies.length !== 0) {
            if (document.querySelectorAll('.active').length !== 0) {
                let selectedEls = document.querySelectorAll('.active')
                selectedEls.forEach(element => {
                    element.classList.remove('active')
                })
            }
            document.querySelector(`#${nominatedMovies[nominatedMovies.length - 1].imdbID}`).classList.add('active')
            getMovieInfo(`${nominatedMovies[nominatedMovies.length - 1].imdbID}`)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [nominatedMovies])

    // displays movie cards in nomination section
    if (nominated === true) {
        return (
            <StyledNominatedMovie
                id={movie.imdbID}
                className="nominatedMovie"
                onClick={e => {
                    choosediv(e)
                    getMovieInfo(movie.imdbID)
                }}
            >
                <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://www.prokerala.com/movies/assets/img/no-poster-available.jpg'} alt={`${movie.Title} movie poster`} />
                <div className='nominatedMovieName'>
                    <h2>{`${movie.Title} (${movie.Year})`}</h2>
                </div>
            </StyledNominatedMovie>
        )
      // displays movie cards in search results section   
    } else {
        return (
            <StyledMovie
                className="movie"
                onClick={nominate}
            >
                <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://www.prokerala.com/movies/assets/img/no-poster-available.jpg'} alt={`${movie.Title} movie poster`} />
                <div className='movieDetails'>
                    <div className='movieName'>
                        <h2>{`${movie.Title} (${movie.Year})`}</h2>
                    </div>
                    <button className='addBTN'>Add</button>
                </div>
            </StyledMovie>
        )
    }

}

const mapStateToProps = state => {
    return {
        nominatedMovies: state.nominatedMovies
    }
}

export default connect(mapStateToProps, { nominateMovie, getMovieInfo })(Movie)