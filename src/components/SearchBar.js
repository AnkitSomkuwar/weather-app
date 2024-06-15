import React, {useState} from 'react'
import './SearchBar.css'

const SearchBar = ({onSearch}) => {
  const [query, setQuery] = useState('')

  const handleSearch = e => {
    e.preventDefault()
    if (query) {
      onSearch(query)
      setQuery('')
    }
  }

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Enter your city name"
      />

      <button type="submit">Search</button>
    </form>
  )
}

export default SearchBar
