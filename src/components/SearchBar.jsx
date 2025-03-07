import React, { useState } from 'react';
import '../styles/SearchBar.css';
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query); // Send the search query to the parent component
    }
  };

  return (
    <div className='search'>
         <form className="search-bar" onSubmit={handleSearch}>
         
         
      <input
     
        type="text"
        placeholder="Search term"
        value={query}
        onChange={handleInputChange}
      />
      <button type="submit">Show filter</button>
    </form>
    </div>
   
  );
};

export default SearchBar;
