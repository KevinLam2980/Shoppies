import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {nominateMovie, getMovieInfo} from '../state/actions'
import styled from 'styled-components'

const StyledMovie = styled.div`
    display: flex;
    height: 150px;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
    color: white;
    text-align: center;
    background-color: rgba(20,20,20);
    border-bottom: 1px solid black;
    transition: 0.7s;
    cursor: pointer;
    img {
        width: 120px;
        height: 150px;
        border: 1px solid black;
    }
    .movieDetails {
        width: calc(100% - 120px);
        display: flex;
        justify-content: space-evenly;
    }
    .movieName {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 1rem;
    }
    button.addBTN {
        height: 150px;
        background-color: #E50914;
        border: none;
        outline: none;
        transition: 0.6s ease-out;
        display: hidden;
        overflow: hidden;
        width: 0;
        padding: 0;
    }
    &:hover {
        box-shadow: 0 0 7px 2px #E50914;
        z-index: 2;
    }
    &:hover button {
            display: inline-block;
            width: 15%;
            border: none;
            overflow: hidden;
        }
    @media (max-width: 850px) {
        height: 100px;
        img {
            height: 100px;
        }
        button.addBTN {
            height: 100px;
            background-color: #E50914;
            border: 1px solid black;
            outline: none;
            transition: 0.6s ease-out;
            display: hidden;
            overflow: hidden;
            width: 15%;
            padding: 0;
    }
    }
`

const StyledNominatedMovie = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 150px;
    max-width: 175px;
    height: 90%;
    justify-content: center;
    text-align: center;
    color: white;
    background-color: rgba(20,20,20); 
    font-size: 1rem;
    cursor: pointer;
    img {
        width: 100%;
        height: 80%;
        align-self: flex-start
    }
    .nominatedMovieName {
        height: 20%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.5rem;
    }
    @media (max-width: 1200px) {
    font-size: 0.85rem;
  }
    @media (max-width: 1050px) {
        font-size: 0.8rem;
    }
  
    /* @media (max-width: 768px) {
    font-size: 0.5rem;
  } */
`


const Movie = (props) => {
    const {movie, nominateMovie, nominatedMovies, nominated, getMovieInfo} = props
    
    const choosediv = (e) => {
        if(document.querySelectorAll('.active').length != 0){
            let selectedEls = document.querySelectorAll('.active')
            selectedEls.forEach(element => {
                element.classList.remove('active')
            });
        }
        document.querySelector(`#${movie.imdbID}`).classList.toggle('active')
}
    const nominate = () => {
        if (nominatedMovies.length < 5){
            nominateMovie(movie)
        }
        else {
            console.log('there be too many bro')
        }
    }

    useEffect(() => {
        if (nominatedMovies.length !== 0){
            if(document.querySelectorAll('.active').length !== 0){
                let selectedEls = document.querySelectorAll('.active')
                selectedEls.forEach(element => {
                    element.classList.remove('active')
                })
            }
            document.querySelector(`#${nominatedMovies[nominatedMovies.length - 1].imdbID}`).classList.add('active')
            getMovieInfo(`${nominatedMovies[nominatedMovies.length - 1].imdbID}`)
        }
    }, [nominatedMovies])

    if (nominated === true){
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

export default connect(mapStateToProps, {nominateMovie, getMovieInfo})(Movie)