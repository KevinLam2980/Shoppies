import React from 'react'
import SearchBar from './SearchBar'
import SearchResults from './SearchResults'
import styled from 'styled-components'

const StyledSearchSection = styled.div`
    display: flex;
    background-color: #1f1f1f;
    width: 40%;
    flex-direction: column;
    height: 100%;

    div#searchHeader {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #1f1f1f;
        width: 100%;
        height: 100px;
        border-bottom: 2px solid #E50914;
    }
`

const SearchSection = () => {

    return (
        <StyledSearchSection id='searchSection'>
            <div id='searchHeader'>
                <SearchBar/>
            </div>
            <SearchResults/>
        </StyledSearchSection>
    )
}

export default SearchSection