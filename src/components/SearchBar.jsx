import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch(term);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearch}
        style={{
          border: '1px solid #ccc',
          width: '98%',
          padding: '10px',
          margin: '10px',
          borderRadius: '5px',
          fontSize: '16px',
        }}
      />
    </div>
  );
};

export default SearchBar;
