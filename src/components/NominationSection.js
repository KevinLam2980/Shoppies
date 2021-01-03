import React from 'react'
import Nominations from './Nominations'
import MovieInfo from './MovieInfo'
import {StyledNominationSection} from '../styles/ComponentStyles'


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