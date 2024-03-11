import React from 'react';
import { useNavigate } from 'react-router-dom';

const SecondaryNavBar = () => {
  const history = useNavigate();

  const handleButtonClick = (category) => {
    // Navigate to a specific route with the selected category as a parameter
    console.log(category)
    history(`/products/${category}`);
  };

  return (
    <div className="bg-gray-200 py-auto">
      <div className="container mx-auto flex flex-wrap justify-center">
        <button onClick={() => handleButtonClick('healthcare')} className="mx-4 my-2 px-4 py-2 bg-white text-gray-700 font-medium rounded-md shadow-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100" style={{ width: '150px', height: '40px' }}>Healthcare</button>
        <button onClick={() => handleButtonClick('electronics')} className="mx-4 my-2 px-4 py-2 bg-white text-gray-700 font-medium rounded-md shadow-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100" style={{ width: '150px', height: '40px' }}>Electronics</button>
        <button onClick={() => handleButtonClick('fashion')} className="mx-4 my-2 px-4 py-2 bg-white text-gray-700 font-medium rounded-md shadow-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100" style={{ width: '150px', height: '40px' }}>Fashion</button>
        <button onClick={() => handleButtonClick('food')} className="mx-4 my-2 px-4 py-2 bg-white text-gray-700 font-medium rounded-md shadow-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100" style={{ width: '150px', height: '40px' }}>Food</button>
        <button onClick={() => handleButtonClick('beauty')} className="mx-4 my-2 px-4 py-2 bg-white text-gray-700 font-medium rounded-md shadow-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100" style={{ width: '150px', height: '40px' }}>Beauty</button>
        <button onClick={() => handleButtonClick('books')} className="mx-4 my-2 px-4 py-2 bg-white text-gray-700 font-medium rounded-md shadow-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100" style={{ width: '150px', height: '40px' }}>Books</button>
      </div>
    </div>
  );
};

export default SecondaryNavBar;
