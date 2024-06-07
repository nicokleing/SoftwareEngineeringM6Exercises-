// src/AddCatForm.jsx
import React, { useState } from 'react';

const AddCatForm = ({ onAddCat }) => {
  const [name, setName] = useState('');
  const [latinName, setLatinName] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCat({ id: Date.now(), name, latinName, image });
    setName('');
    setLatinName('');
    setImage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Latin Name:
          <input
            type="text"
            value={latinName}
            onChange={(e) => setLatinName(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Image URL:
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </label>
      </div>
      <button type="submit">Add Cat</button>
    </form>
  );
};

export default AddCatForm;
