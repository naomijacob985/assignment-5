import React from 'react';
import './style.css';
import { useState } from 'react';
import Header from './components/Header';
import Title from './components/Title';
import DisplayPost from './components/DisplayPost';
import { useState } from 'react';

export default function App() {
  const [showAddPost, setShowAddPost] = useState(false);
  const [posts, setPosts] = useState([
    { title: '1', blog: 'doc' },
    { title: 2, blog: 'mtg' },
    { title: 3, blog: 'feb' },
  ]);

  const addPost = (post) => {
    setPosts([...posts, post]);
  };
  const deleteTask = async (article) => {
    setPosts(posts.filter((post) => post.article !== article));
  };

  return (
    <div>
      <Header />
      <Title posts={posts} onAdd={addPost} showPost={showAddPost} />
      <div className="col-md-6">
        <DisplayPost posts={posts} onDelete={deleteTask} />
      </div>
    </div>
  );
}
