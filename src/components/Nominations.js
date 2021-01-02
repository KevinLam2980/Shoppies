import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import Movie from './Movie'
import styled from 'styled-components'
import { useNotification } from './notifications/NotificationsProvider'

const StyledNominations = styled.div`
    width: 100%;
    height: 35%;
    display: flex;
    justify-content: center;
    align-items: center;
    perspective: 700px;
    padding: 1rem;
    transition: 1s;

    .nominatedMovie {
        transition: 0.5s ease-out;
        transform: rotateY(45deg);
        z-index: -2;
        --webkit-transform: rotateY(45deg);
        box-shadow: -15px 10px 10px black;
        &:hover {
            box-shadow: -15px 10px 10px #E50914;
        }
    }
    .active{
        transform: rotateY(0) scale(1.1);
        --webkit-transform: rotateY(0) scale(1.1);
        z-index: 2;
        box-shadow: 0 10px 10px #E50914;
        &:hover {
            box-shadow: 0 10px 10px #E50914;
        }
    }
    .active ~ .nominatedMovie{
        transform: rotateY(-45deg);
        --webkit-transform: rotateY(-45deg);
        z-index: -1;
        box-shadow: 15px 10px 10px black;
        &:hover {
            box-shadow: 15px 10px 10px #E50914;
        }
    }
    }
`

const Nominations = (props) => {
    const {nominatedMovies} = props
    const dispatchNotification = useNotification()

    useEffect(() => {
        if (nominatedMovies.length === 5) {
            dispatchNotification({
                type: "INFO",
                message: `5 movies have been chosen, click submit to send in your choices!`
            })
        }
    }, [nominatedMovies])

    return (
        <StyledNominations id="nominations">
            {
                nominatedMovies && nominatedMovies.length > 0 ? nominatedMovies.map(movie => {
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