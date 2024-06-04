// UserAddress.js
import React from 'react';

const UserAddress = ({ address }) => {
  return (
    <div>
      <h2>User Address</h2>
      <p>Street: {address.street}</p>
      <p>City: {address.city}</p>
      <p>State: {address.state}</p>
      <p>Zip: {address.zip}</p>
    </div>
  );
}

export default UserAddress;
