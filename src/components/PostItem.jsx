import React from 'react';

const PostItem = ({ post, onEdit, onDelete }) => {
  const { title, content } = post;

  return (
    <div className="PostItem">
      <h3>{title}</h3>
      <p>{content}</p>
      <button onClick={() => onEdit(post)}>Edit</button>
      <button onClick={() => onDelete(post)}>Delete</button>
    </div>
  );
};

export default PostItem;
