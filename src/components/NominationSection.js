import React from 'react'
import Nominations from './Nominations'
import MovieInfo from './MovieInfo'
import styled from 'styled-components'

const StyledNominationSection = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 60%;
    overflow-y: scroll;
    background-color: #1f1f1f;

    #nominationSectionHeader {
        height: 100px;
        width: 100%;
        border-bottom: 2px solid #E50914;
        display: flex;
        background-color: #1f1f1f;
        justify-content: center;
        align-items: center;
        h2 {
            color: white;
            font-size: 2rem;
        }
    }

    #nominatedMovieView {
        height: calc(100vh - 100px);
    }
`

const NominationSection = () => {

    return (
        <StyledNominationSection id="nominationSection">
            <div id="nominationSectionHeader">
                <h2>Nominations:</h2>
            </div>
            <div id="nominatedMovieView">
                <Nominations/>
                <MovieInfo/>
            </div>
           
        </StyledNominationSection>
    )
}

export default NominationSection