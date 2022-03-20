import React from 'react';

const User = (props) => {
  return (
    <div class="container m-3">
      <select>
        <option>{props.title[0]}</option>
        <option>{props.title[1]}</option>
        <option>{props.title[2]}</option>
        <option>{props.title[3]}</option>
      </select>
    </div>
  );
};

User.defaultProps = {
  title: {
    0: 'Select the User',
    1: '1 - Leanne Graham',
    2: '2 - Ervin Howell',
    3: '3 - Clementine Bauch',
  },
};

export default User;
