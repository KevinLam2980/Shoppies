import React from 'react'
import { connect } from 'react-redux'
import Movie from './Movie'
import styled from 'styled-components'

const StyledNominations = styled.div`
    width: 100%;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    perspective: 700px;
    padding: 1rem;

    .nominatedMovie {
        transition: 0.5s ease-out;
        transform: rotateY(45deg);
        z-index: -2;
        --webkit-transform: rotateY(45deg);
        box-shadow: -15px 10px 10px black;
    }
    .active{
        transform: rotateY(0) scale(1.1);
        --webkit-transform: rotateY(0) scale(1.1);
        z-index: 2;
        box-shadow: 0 10px 10px black;
    }
    .active ~ .nominatedMovie{
        transform: rotateY(-45deg);
        --webkit-transform: rotateY(-45deg);
        z-index: 1;
        box-shadow: 15px 10px 10px black;
    }
`

const Nominations = (props) => {

    return (
        <StyledNominations id="nominations">
            {
                props.nominatedMovies && props.nominatedMovies.length > 0 ? props.nominatedMovies.map(movie => {
                    return (
                        <Movie movie={movie} key={movie.imdbID} nominated={true}/>
                    )
                }) : null
            }
        </StyledNominations>
    )
}

const mapStateToProps = state => {
    return {
        nominatedMovies: state.nominatedMovies
    }
  }

export default connect(mapStateToProps, {})(Nominations)