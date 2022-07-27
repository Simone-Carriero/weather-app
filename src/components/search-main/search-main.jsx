import React, {useState} from 'react'
import './search-main.styles.scss'

const SearchMain = ({fetchData}) => {
    const [searchTerm, setSearchTerm] = useState('')
    
    
    const handleChange = ({ target }) => setSearchTerm(target.value)

    const handleClick = () => fetchData(searchTerm)

    const handleKeyUp = (e) => {
        if (e.key === 'Enter') {
            fetchData(searchTerm)
        }
    }
    

    return (
        <div className='search-main'>
            <div className='search-main__input-wrapper'>
                <input
                    type="search" placeholder='Search city...' id='search'
                    value={searchTerm}
                    onChange={handleChange}
                    onKeyUp={handleKeyUp}
                />
            </div>
            <button
                className='search-main__button'
                onClick={handleClick}
            >Search</button>
        </div>
  )
}

export default SearchMain