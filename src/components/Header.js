import React from 'react';

const Header = (props) => {
  return (
    <div class="container m-3">
      <h1>{props.title}</h1>
    </div>
  );
};

Header.defaultProps = {
  title: 'React Blog',
};

export default Header;
