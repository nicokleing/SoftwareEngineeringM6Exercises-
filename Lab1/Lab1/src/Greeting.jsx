// Greeting.jsx
import React from 'react';

const Greeting = ({ name, children }) => {
  return (
    <div>
      <h1>Hello {name ? name : 'World'}</h1>
      {children && <p>{children}</p>}
    </div>
  );
};

export default Greeting;
