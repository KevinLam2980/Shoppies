import React from 'react'
import Nominations from './Nominations'
import MovieInfo from './MovieInfo'
import styled from 'styled-components'

const StyledNominationSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    width: 60%;
    overflow-y: scroll;

    #nominationSectionHeader {
        height: 100px;
        width: 100%;
        border-bottom: 2px solid #E50914;
    }
`

const NominationSection = () => {

    return (
        <StyledNominationSection id="nominationSection">
            <div id="nominationSectionHeader"></div>
            <Nominations/>
            <MovieInfo/>
        </StyledNominationSection>
    )
}

export default NominationSection