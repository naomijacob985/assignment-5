import React from 'react';
import './style.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Title from './components/Title';
import DisplayPost from './components/DisplayPost';
import axios from 'axios';
import api from './api/posts';

export default function App() {
  const [showAddPost, setShowAddPost] = useState(false);
  const [posts, setPosts] = useState([]);
  const API_URL = 'http://localhost:5000/posts';

  useEffect(() => {
    const getPosts = async () => {
      const postsFromServer = await fetchPosts()
      setPosts(postsFromServer)
    }
      getPosts()
     }, [])

// // fetch posts
    const fetchPosts = async () => {
      const res =  await fetch ('https://jsonplaceholder.typicode.com/posts')
      const data = await res.json()
      return data
    }

  const addPost = async (post) => {
    const res =  await fetch ('https://jsonplaceholder.typicode.com/posts' , {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(post)
    })
    const data = res.json()

    setPosts([...posts, data]);
  };

  const deleteTask = async (blog) => {
    await fetch ('https://jsonplaceholder.typicode.com/posts',{
      method: 'DELETE'
    })
    setPosts(posts.filter((post) => post.blog !== blog));
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
