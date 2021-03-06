import React from 'react'
import { connect } from 'react-redux'
import { removeNominatedMovie } from '../state/actions'
import { useNotification } from './notifications/NotificationsProvider'
import { StyledMovieInfo } from '../styles/ComponentStyles'


const MovieInfo = (props) => {
    const { movieInfo, removeNominatedMovie, nominatedMovies } = props
    const dispatchNotification = useNotification()

    // remove movie from nominations list
    const RemoveMovie = () => {
        removeNominatedMovie(movieInfo)
        dispatchNotification({
            type: "SUCCESS",
            message: `'${movieInfo.Title}' removed from nominations`
        })
    }

    // submit nominations after 5 movies have been selected and submit button is pressed
    const submitNominations = () => {
        dispatchNotification({
            type: "SUCCESS",
            message: `Your nominations have been submited!`
        })
    }

    if (movieInfo !== null) {
        return (
            <StyledMovieInfo id='movieData'>
                <div id='movieDataMain'>
                    <div className='movieDescription'>
                        <p>{movieInfo.Plot}</p>
                    </div>
                    <div className='movieDetails'>
                        <div className='movieDetailsLeft'>
                            <p>Genre: {movieInfo.Genre}</p>
                            <p>Rated: {movieInfo.Rated}</p>
                            <p>Director: {movieInfo.Director}</p>
                            <p>Released: {movieInfo.Released}</p>
                            <p>Writer(s): {movieInfo.Writer}</p>
                        </div>
                        <div className='movieDetailsMiddle'>
                            <p>Actor(s): {movieInfo.Actors}</p>
                            <p>Production: {movieInfo.Production}</p>
                            <p>Award(s): {movieInfo.Awards}</p>
                            <p>Country: {movieInfo.Country}</p>
                        </div>
                        <div className='movieDetailsRight'>
                            <p>Language: {movieInfo.Language}</p>
                            <p>Runtime: {movieInfo.Runtime}</p>
                            <p>Metascore: {movieInfo.Metascore}</p>
                            <p>imdbRating: {movieInfo.imdbRating}</p>
                            <p>imdbVotes: {movieInfo.imdbVotes}</p>
                        </div>
                    </div>
                </div>
                <div id='movieButtons'>
                    <a
                        className='imdbBTN'
                        href={`https://www.imdb.com/title/${movieInfo.imdbID}/?ref_=fn_al_tt_1`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >See on IMDB</a>
                    <button
                        className='removeBTN'
                        onClick={RemoveMovie}
                    >Remove movie</button>
                    {
                        nominatedMovies && nominatedMovies.length === 5 ?
                            <button
                                className='submitBTN'
                                onClick={submitNominations}
                            >Submit nominations</button> : 
                            <button
                            className='submitBTN'
                            onClick={submitNominations}
                            disabled
                        >Submit nominations</button>
                    }
                </div>
            </StyledMovieInfo>
        )
    } else {
        return (
            <StyledMovieInfo id='movieData'>
            </StyledMovieInfo>
        )
    }

}

const mapStateToProps = state => {
    return {
        movieInfo: state.movieInfo,
        nominatedMovies: state.nominatedMovies,
        getInfoLoading: state.getInfoLoading
    }
}

export default connect(mapStateToProps, { removeNominatedMovie })(MovieInfo)