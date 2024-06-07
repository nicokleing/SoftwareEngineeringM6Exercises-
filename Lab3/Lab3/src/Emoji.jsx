// src/Emoji.jsx
import React, { useState } from 'react';

const Emoji = () => {
  const [isHappy, setIsHappy] = useState(true);

  const handleMoodChange = () => {
    setIsHappy(!isHappy);
  };

  return (
    <div className="Emoji componentBox">
      <span style={{ fontSize: '2rem' }}>
        {isHappy ? '😊' : '😢'}
      </span>
      <button onClick={handleMoodChange}>Change Mood</button>
    </div>
  );
};

export default Emoji;
