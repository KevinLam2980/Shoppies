import React, {useState} from 'react'
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
    img {
        width: 120px;
        height: 150px;
        border: 1px solid black;
    }
    .movieDetails {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
    }
    .movieName {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 70%;
        padding: 1rem;
    }
    button {
        height: 150px;
        width: 15%;
    }

    border-bottom: 1px solid black;
`

const StyledNominatedMovie = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 300px;
    align-items: center;
    justify-content: space-evenly;
    text-align: center;
    color: white;
    border: 2px solid blue;
    img {
        width: 100%;
        height: 80%;
    }
    .nominatedMovieDetails {
        height: 20%;
    }
`


const Movie = (props) => {
    const {movie, nominateMovie, nominatedMovies, nominated, getMovieInfo} = props
    // const [hovered, setHovered] = useState(false);

    const toggleHover = (e) => {
        e.stopPropagation()
        // if(document.querySelectorAll('.active').length != 0){
        //     let selectedEls = document.querySelectorAll('.active')
        //     selectedEls.forEach(element => {
        //         element.classList.remove('active');
        //     });
            
        // }
        // console.log('here')
        // setHovered(!hovered);

    }
    
    const choosediv = (e) => {
        // e.stopPropagation()
        if(document.querySelectorAll('.active').length != 0){
            let selectedEls = document.querySelectorAll('.active')
            selectedEls.forEach(element => {
                element.classList.remove('active')
            });
        }
        // setHovered(!hovered);
        // e.target.classList.toggle('active')
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

    if (nominated === true){
        return (
            <StyledNominatedMovie 
            // className="nominatedMovie"
            // onClick={this.addActiveClass.bind(this)}
            // className={hovered ? 'nominatedMovie active' : 'nominatedMovie'}
            id={movie.imdbID}
            className="nominatedMovie"
            onMouseEnter={e => toggleHover(e)}
            onMouseLeave={e => toggleHover(e)}
            onClick={e => {
                choosediv(e)
                getMovieInfo(movie.imdbID)
            }}
          >
                <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://www.prokerala.com/movies/assets/img/no-poster-available.jpg'} alt={`${movie.Title} movie poster`} />
                <div className='nominatedMovieDetails'>
                    <div className='nominatedMovieName'>
                        <h2>{`${movie.Title} (${movie.Year})`}</h2>
                    </div>
                    {/* <div className='nominatedMovieButtons'>
                        <button>View</button>
                        <button>Remove</button>
                    </div> */}
                
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
                    <button>View</button>
                    <button>Add</button>
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