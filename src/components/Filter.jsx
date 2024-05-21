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
      <input
        type="text"
        placeholder="Enter tags"
        value={selectedTags}
        onChange={handleTagsChange}
       style={{
        marginLeft: '10px',
       }}
      />
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="" className="categories">All Categories</option>
        {Array.from(new Set(posts.map(post => post.category))).map((category, index) => (
          <option key={index} value={category}>{category}</option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
