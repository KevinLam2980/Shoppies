import React from 'react'
import SearchSection from './SearchSection'
import NominationSection from './NominationSection'
import Nav from './Nav'
import {Container} from '../styles/CommonComponents'
import {connect} from 'react-redux'
import {StyledDashboard} from '../styles/ComponentStyles'


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

const mapStateToProps = state => {
    return {
        state: state
    }
  }
export default connect(mapStateToProps, {})(Dashboard)