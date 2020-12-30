import React from 'react'
import SearchBar from './SearchBar'
import SearchResults from './SearchResults'
import Nominations from './Nominations'

const Dashboard = () => {

    return (
        <div>
            <SearchBar/>
            <SearchResults/>
            <Nominations />
        </div>
    )
}

export default Dashboard