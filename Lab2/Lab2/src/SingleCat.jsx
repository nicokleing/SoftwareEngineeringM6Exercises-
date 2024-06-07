// SingleCat.jsx
import React from 'react';

const SingleCat = ({ name, latinName, image }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', textAlign: 'center' }}>
      <img src={image} alt={name} style={{ width: '100px', height: '100px' }} />
      <h2>{name}</h2>
      <p><i>{latinName}</i></p>
    </div>
  );
};

export default SingleCat;
