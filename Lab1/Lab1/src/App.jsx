// App.jsx
import React from 'react';
import Greeting from './Greeting';

const App = () => {
  return (
    <div>
      <Greeting name="John">Welcome to the React world!</Greeting>
      <Greeting>Enjoy learning React!</Greeting>
    </div>
  );
};

export default App;
