import React, { useState, useEffect } from 'react';

const PostForm = ({ onNewPostCreated, editPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState('');

  useEffect(() => {
    if (editPost) {
      setTitle(editPost.title);
      setContent(editPost.content);
      setCategory(editPost.category);
      setTags(editPost.tags);
    } else {
      setTitle('');
      setContent('');
      setCategory('');
      setTags('');
    }
  }, [editPost]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onNewPostCreated({ title, content, category, tags });
    setTitle('');
    setContent('');
    setCategory('');
    setTags('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        style={{
          border: '1px solid #ccc',
          width: '98%',
          padding: '10px',
          margin: '10px',
          borderRadius: '5px',
          fontSize: '16px',
        }}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        style={{
          border: '1px solid #ccc',
          width: '98%',
          padding: '10px',
          margin: '10px',
          borderRadius: '5px',
          fontSize: '16px',
        }}
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        style={{
          border: '1px solid #ccc',
          width: '98%',
          padding: '10px',
          margin: '10px',
          borderRadius: '5px',
          fontSize: '16px',
        }}
      />
      <input
        type="text"
        placeholder="Tags"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
        style={{
          border: '1px solid #ccc',
          width: '90%',
          padding: '10px',
          paddingRight: '50px',
          margin: '10px',
          borderRadius: '5px',
          fontSize: '16px',
        }}
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default PostForm;
