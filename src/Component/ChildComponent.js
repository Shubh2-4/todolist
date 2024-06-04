// ChildComponent.js
import React from 'react';
import GrandChildComponent from './GrandChildComponent';

const ChildComponent = (props) => {
  return (
    <div>
      <h3>Child Component</h3>
      <GrandChildComponent data={props.data} />
    </div>
  );
}

export default ChildComponent;
