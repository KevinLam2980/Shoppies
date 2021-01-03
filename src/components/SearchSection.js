import React from 'react'
import SearchBar from './SearchBar'
import SearchResults from './SearchResults'
import {StyledSearchSection} from '../styles/ComponentStyles'

const SearchSection = () => {

    return (
        <StyledSearchSection id='searchSection'>
            <div id='searchHeader'>
                <SearchBar />
            </div>
            <SearchResults />
        </StyledSearchSection>
    )
}

export default SearchSection