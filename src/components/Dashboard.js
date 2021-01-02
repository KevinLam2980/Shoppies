import React from 'react'
import SearchSection from './SearchSection'
import Nominations from './Nominations'
import NominationSection from './NominationSection'
import Nav from './Nav'
import styled from 'styled-components'
import {Container} from '../styles/CommonComponents'

const StyledDashboard = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #1f1f1f;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    div#main {
        height: 100%;
    }
    div#mainSection {
        display: flex;
        height: 100%;
        width: 100%;
    }
    @media (max-width: 850px) {
        height: 100%;
        overflow: scroll;
        div#mainSection {
            flex-direction: column
        }
}
`

const Dashboard = () => {

    return (
        <StyledDashboard>
            <Nav/>
            <Container id='main'>
                <div id="mainSection">
                    <SearchSection/>
                    <NominationSection/>
                </div>
           
            </Container>
       
        </StyledDashboard>
    )
}

export default Dashboard