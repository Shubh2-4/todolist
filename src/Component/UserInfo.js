// UserInfo.js
import React from 'react';
import UserHeader from './UserHeader';
import UserAddress from './UserAddress';

const UserInfo = ({ user }) => {
  return (
    <div>
      <UserHeader name={user.name} email={user.email} />
      <UserAddress address={user.address} />
    </div>
  );
}

export default UserInfo;
