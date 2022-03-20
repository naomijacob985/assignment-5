import React from 'react';
import { useState } from 'react';
const Title = ({ onAdd }) => {
  const [user, setUser] = useState('');
  const [title, setTitle] = useState('');
  const [blog, setBlog] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    onAdd({ user, title, blog });
    setUser('');
    setTitle('');
    setBlog('');
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <select
          value={user}
          onChange={(e) => setUser(e.target.value)}
          className="form-select"
          aria-label="User select"
        >
          <option defaultValue>Select the user</option>
          <option>Leanne Graham</option>
          <option>Ervin Howell</option>
          <option>Clementine Bauch</option>
        </select>
      </div>
      <label>Title: </label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label>Blog Post:</label>
      <input
        type="text"
        value={blog}
        onChange={(e) => setBlog(e.target.value)}
      />

      <input type="submit" value="Submit" />
    </form>
  );
};

export default Title;
