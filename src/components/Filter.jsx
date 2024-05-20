import React, { useState, useEffect } from 'react';

const Filter = ({ posts, onFilterChange }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedTags, setSelectedTags] = useState('');

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    applyFilters(category, selectedTags);
  };

  const handleTagsChange = (e) => {
    const tags = e.target.value;
    setSelectedTags(tags);
    applyFilters(selectedCategory, tags);
  };

  const applyFilters = (category, tags) => {
    const tagArray = tags.split(',').map(tag => tag.trim());
    onFilterChange(category, tagArray);
  };

  return (
    <div>
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="">All Categories</option>
        {Array.from(new Set(posts.map(post => post.category))).map((category, index) => (
          <option key={index} value={category}>{category}</option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Enter tags"
        value={selectedTags}
        onChange={handleTagsChange}
        style={{
          border: '1px solid #ccc',
          width: '50%',
          padding: '10px',
          margin: '10px',
          borderRadius: '5px',
          fontSize: '16px',
        }}
      />
    </div>
  );
};

export default Filter;
