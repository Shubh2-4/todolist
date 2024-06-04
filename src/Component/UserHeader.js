// UserHeader.js
import React from 'react';

const UserHeader = ({ name, email }) => {
  return (
    <div>
      <h2>User Header</h2>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  );
}

export default UserHeader;
