// src/SingleCat.jsx
import React from 'react';

const SingleCat = ({ name, latinName, image, onDelete }) => {
  return (
    <div className="SingleCat">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p><i>{latinName}</i></p>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default SingleCat;
