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
        placeholder="Search Category"
        value={searchTerm}
        onChange={handleSearch}
        style={{
          width: '300px',
        }}
      />
    </div>
  );
};

export default SearchBar;
