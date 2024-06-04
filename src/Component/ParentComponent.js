// ParentComponent.js
import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const data = "Hello from Parent";

  return (
    <div>
      <h2>Parent Component</h2>
      <ChildComponent data={data} />
    </div>
  );
}

export default ParentComponent;
