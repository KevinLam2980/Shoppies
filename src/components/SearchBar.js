import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {searchMovies} from '../state/actions'
import axios from 'axios'


const SearchBar = (props) => {
    const [searchValue, setSearchValue] = useState("")

    const onChangeHandler = (e) => {
        setSearchValue(e.target.value)
      }
    
    useEffect(() => {
        if (searchValue.trim() != ""){
            let searchString = searchValue.trim().replace(/ /g, '%20')
            axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=dd7713c4&s=${searchString}&type=movie`)
            .then(res => {
                console.log(res.data.Search)
                props.searchMovies(res.data.Search)
            })
            .catch(err => {
                console.error(err)
            })
        }
    }, [searchValue])

    return (
        <div>
            <form>
                <input
                    type='text'
                    name='searchMovie'
                    onChange={onChangeHandler}
                    value={searchValue}
                >
                </input> 
            </form>
        </div>
    )
}

export default connect(null, {searchMovies})(SearchBar) 