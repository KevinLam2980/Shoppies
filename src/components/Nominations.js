import React from 'react'
import { connect } from 'react-redux'
import SearchMovie from './SearchMovie'

const Nominations = (props) => {

    return (
        <div id="nominations">
            {
                props.nominatedMovies && props.nominatedMovies.length > 0 ? props.nominatedMovies.map(movie => {
                    return (
                        <SearchMovie movie={movie} />
                    )
                }) : null
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        nominatedMovies: state.nominatedMovies
    }
  }

export default connect(mapStateToProps, {})(Nominations)