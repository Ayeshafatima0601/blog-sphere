import React, { useState, useEffect } from 'react';
import './App.css';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import SearchBar from './components/SearchBar';
import Filter from './components/Filter';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [editPost, setEditPost] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);

  useEffect(() => {
    filterPosts();
  }, [posts, searchTerm, selectedCategory, selectedTags]);

  const handleNewPostCreated = (newPostObject) => {
    if (editPost) {
      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post.title === editPost.title ? newPostObject : post
        )
      );
      setEditPost(null);
    } else {
      setPosts((previousItems) => [...previousItems, newPostObject]);
    }
  };

  const handleEdit = (post) => {
    setEditPost(post);
  };

  const handleDelete = (post) => {
    setPosts((previousItems) =>
      previousItems.filter((item) => item.title !== post.title)
    );
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleFilterChange = (category, tags) => {
    setSelectedCategory(category);
    setSelectedTags(tags);
  };

  const filterPosts = () => {
    let filtered = posts;

    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.content.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    if (selectedTags.length > 0) {
      filtered = filtered.filter(post =>
        selectedTags.every(tag => post.tags.includes(tag.trim()))
      );
    }

    setFilteredPosts(filtered);
  };

  return (
    <div className="App">
      <h1>BlogSphere</h1>
      <PostForm onNewPostCreated={handleNewPostCreated} editPost={editPost} />
      <SearchBar onSearch={handleSearch} />
      <Filter posts={posts} onFilterChange={handleFilterChange} />
      <PostList posts={filteredPosts} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default App;
