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
        background-color: rgba(20,20,20);
        width: 100%;
        height: 100px;
        border-bottom: 2px solid #E50914;
    }
    @media (max-width: 850px) {
        height: calc(60vh - 75px);
        width: 100%;
        div#searchHeader {
            height: 75x;
            background-color: black;
        }
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