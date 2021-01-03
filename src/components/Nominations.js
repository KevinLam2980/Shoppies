import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import Movie from './Movie'
import { useNotification } from './notifications/NotificationsProvider'
import {StyledNominations} from '../styles/ComponentStyles'


const Nominations = (props) => {
    const {nominatedMovies} = props
    const dispatchNotification = useNotification()

    // notification when 5 movies have been chosen
    useEffect(() => {
        if (nominatedMovies.length === 5) {
            dispatchNotification({
                type: "INFO",
                message: `5 movies have been chosen, click submit to send in your choices!`
            })
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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