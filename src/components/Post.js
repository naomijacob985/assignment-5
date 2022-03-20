import React from 'react';

const Post = ({ post, onDelete }) => {
  return (
    <div>
      <h3>
        {post.user}
        <button onClick={() => onDelete(post.blog)}>Delete</button>
      </h3>
      <p>Post Title: {post.title}</p>
      <p>Blog Post: {post.blog}</p>
    </div>
  );
};

export default Post;


