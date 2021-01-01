import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {searchMovie} from '../state/actions'
import axios from 'axios'
import styled from 'styled-components'

const StyledSearchBar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    input {
        color: white;
        background-color: black;
        border: 2px solid #E50914;
        width: 50%;
        min-width: 200px;
        border-radius: 10px;
        text-align: center;
        padding: 0.5rem 0.5rem;
        font-size: 1.1rem;
        &:active, &:focus {
            outline: none;
        }
    }
`


const SearchBar = (props) => {
    const [searchValue, setSearchValue] = useState("")
    const {searchMovie, nominatedMovies} = props

    const onChangeHandler = (e) => {
        setSearchValue(e.target.value)
      }
      useEffect(() => {
        if (searchValue.trim() !== ""){
            let searchString = searchValue.trim().replace(/ /g, '%20')
            searchMovie(searchString)
        }
    }, [nominatedMovies, searchValue])
    

    return (
        <StyledSearchBar>
            <input
                type='text'
                name='searchMovie'
                onChange={onChangeHandler}
                value={searchValue}
            >
            </input> 
        </StyledSearchBar>
    )
}

const mapStateToProps = state => {
    return {
        nominatedMovies: state.nominatedMovies
    }
  }

export default connect(mapStateToProps, {searchMovie})(SearchBar)