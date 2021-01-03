import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { nominateMovie, getMovieInfo } from '../state/actions'
import { useNotification } from './notifications/NotificationsProvider'
import { StyledMovie, StyledNominatedMovie } from '../styles/ComponentStyles'



const Movie = (props) => {
    const { movie, nominateMovie, nominatedMovies, nominated, getMovieInfo } = props
    const dispatchNotification = useNotification()

    const choosediv = (e) => {
        if (document.querySelectorAll('.active').length !== 0) {
            let selectedEls = document.querySelectorAll('.active')
            selectedEls.forEach(element => {
                element.classList.remove('active')
            });
        }
        document.querySelector(`#${movie.imdbID}`).classList.toggle('active')
    }
    const nominate = () => {
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