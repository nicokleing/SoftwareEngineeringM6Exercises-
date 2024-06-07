// src/BigCats.jsx
import React, { useState } from 'react';
import SingleCat from './SingleCat';

const catsData = [
  { id: 1, name: 'Cheetah', latinName: 'Acinonyx jubatus', image: 'https://example.com/cheetah.jpg' },
  { id: 2, name: 'Cougar', latinName: 'Puma concolor', image: 'https://example.com/cougar.jpg' },
  { id: 3, name: 'Jaguar', latinName: 'Panthera onca', image: 'https://example.com/jaguar.jpg' },
  { id: 4, name: 'Leopard', latinName: 'Panthera pardus', image: 'https://example.com/leopard.jpg' },
  { id: 5, name: 'Lion', latinName: 'Panthera leo', image: 'https://example.com/lion.jpg' },
  { id: 6, name: 'Snow leopard', latinName: 'Panthera uncia', image: 'https://example.com/snow-leopard.jpg' },
  { id: 7, name: 'Tiger', latinName: 'Panthera tigris', image: 'https://example.com/tiger.jpg' },
];

const BigCats = () => {
  const [cats, setCats] = useState(catsData);

  const sortCats = () => {
    const sortedCats = [...cats].sort((a, b) => a.name.localeCompare(b.name));
    setCats(sortedCats);
  };

  const reverseCats = () => {
    const reversedCats = [...cats].reverse();
    setCats(reversedCats);
  };

  const filterPanthera = () => {
    const filteredCats = catsData.filter(cat => cat.latinName.startsWith('Panthera'));
    setCats(filteredCats);
  };

  const resetCats = () => {
    setCats(catsData);
  };

  return (
    <div>
      <button onClick={sortCats}>Sort Alphabetically</button>
      <button onClick={reverseCats}>Reverse Order</button>
      <button onClick={filterPanthera}>Filter Panthera Family</button>
      <button onClick={resetCats}>Reset List</button>
      <div>
        {cats.map(cat => (
          <SingleCat key={cat.id} name={cat.name} latinName={cat.latinName} image={cat.image} />
        ))}
      </div>
    </div>
  );
};

export default BigCats;
