import React from 'react'
import {connect} from 'react-redux'


const SearchResults = (props) => {

    return (
        <div>
            {
                props.searchRes && props.searchRes.length > 0 ? props.searchRes.map(movie => {
                    return (
                        <p>{movie.Title}</p>
                    )
                }) : null
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        searchRes: state.searchResults
    }
  }

export default connect(mapStateToProps, {})(SearchResults)