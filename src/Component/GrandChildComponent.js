// GrandChildComponent.js
import React from 'react';

const GrandChildComponent = (props) => {
  return (
    <div>
      <h4>GrandChild Component</h4>
      <p>Data received from parent: {props.data}</p>
    </div>
  );
}

export default GrandChildComponent;
