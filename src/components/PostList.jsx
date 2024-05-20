import React from 'react';
import PostItem from './PostItem';

const PostList = ({ posts, onEdit, onDelete }) => {
  return (
    <div>
      <h2>Post List</h2>
      {posts.map((post) => (
        <PostItem key={post.title} post={post} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default PostList;
