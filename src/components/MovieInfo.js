import React from 'react'
import {connect} from 'react-redux'
import {removeNominatedMovie} from '../state/actions'
import styled from 'styled-components'

const StyledMovieInfo = styled.div`
height: 60%;
padding: 0 2rem;
color: white;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
overflow-y: hidden;

#movieDataMain {
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    margin-bottom: 1rem;
    height: calc(100% - 175px);
    .movieDescription {
        width: 100%;
        margin-bottom: 1.5rem;
        padding: 1rem;
        box-shadow: 0 7px 7px -6px #E50914;
        background-color: rgba(20,20,20);
        p {
            padding-top: 0.5rem;
            line-height: 1.5;
        }
    }
    .movieDetails {
        display: flex;
        width: 100%;
        line-height: 1.2;
        padding: 1rem;
        background-color: rgba(20,20,20);
        box-shadow: 0 7px 7px -6px #E50914;
    }
    .movieDetailsLeft, .movieDetailsRight, .movieDetailsMiddle{
        width: 33.3%;
    }
    .movieDetailsMiddle{
        margin: 0 0.5rem;
    }
    .movieDetailsLeft *, .movieDetailsRight *, .movieDetailsMiddle *  {
        padding: 0.5rem 0.75rem;
        border-bottom: 1px solid #1f1f1f;
    }
}
button.removeBTN {
    font-size: 1rem;
    border: 2px solid #E50914;
    border-radius: 10px;
    background-color: black;
    color: white;
    padding: 0.5rem 1rem;
    margin-left: 1rem;
    &:active, &:focus {
        outline: 0;
    }
}
.imdbBTN {
    font-size: 1rem;
    border: 2px solid #E50914;
    border-radius: 10px;
    background-color: black;
    color: white;
    padding: 0.5rem 1rem;
    text-decoration: none;
    &:active, &:focus {
        outline: 0;
    }
}


`

const MovieInfo = (props) => {
    const {movieInfo, removeNominatedMovie} = props

    const RemoveMovie = () => {
        removeNominatedMovie(movieInfo)
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
                        <p>Director: {movieInfo.Director}</p>
                        <p>Writer(s): {movieInfo.Writer}</p>
                        <p>Actor(s): {movieInfo.Actors}</p>
                    </div>
                    <div className='movieDetailsMiddle'>
                        <p>Production: {movieInfo.Production}</p>
                        <p>Award(s): {movieInfo.Awards}</p>
                        <p>Country: {movieInfo.Country}</p>
                        <p>Language: {movieInfo.Language}</p>
                        <p>Released: {movieInfo.Released}</p>

                    </div>

                    <div className='movieDetailsRight'>
                        <p>Runtime: {movieInfo.Runtime}</p>
                        <p>Rated: {movieInfo.Rated}</p>
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
                >IMDB</a>
                <button
                className='removeBTN'
                onClick={RemoveMovie}
                >Remove</button>
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
        movieInfo: state.movieInfo
    }
  }

export default connect(mapStateToProps, {removeNominatedMovie})(MovieInfo)