import React, {useEffect} from 'react'
import SearchSection from './SearchSection'
import NominationSection from './NominationSection'
import Nav from './Nav'
import {Container} from '../styles/CommonComponents'
import {connect} from 'react-redux'
import {StyledDashboard} from '../styles/ComponentStyles'
import {setLocalStorageState} from '../state/actions'


const Dashboard = (props) => {
    const {setLocalStorageState, state} = props

    const LOCAL_STORAGE_ITEMS = 'localStorageState'

    // if there is state stored in local storage, set global state with that data
    useEffect(() => {
        const storageItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_ITEMS))
        if (storageItems) {
            setLocalStorageState(storageItems)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // set/update local storage state everytime state is changed
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_ITEMS, JSON.stringify(state))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state])

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
export default connect(mapStateToProps, {setLocalStorageState})(Dashboard)