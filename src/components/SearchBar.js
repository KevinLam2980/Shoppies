import React, {useState} from 'react'


const SearchBar = () => {
    const [searchValue, setSearchValue] = useState("")

    const onChangeHandler = (e) => {
        setSearchValue(e.target.value)
      }

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

export default SearchBar 