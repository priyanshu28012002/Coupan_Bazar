
import React from 'react';

const SecondaryNavBar = () => {
  return (
    <div className="bg-gray-200 py-auto">
      <div className="container mx-auto flex flex-wrap justify-center">
        <button className="mx-4 my-2 px-4 py-2 bg-white text-gray-700 font-medium rounded-md shadow-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100" style={{ width: '150px', height: '40px' }}>Healthcare</button>
        <button className="mx-4 my-2 px-4 py-2 bg-white text-gray-700 font-medium rounded-md shadow-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100" style={{ width: '150px', height: '40px' }}>Electronics</button>
        <button className="mx-4 my-2 px-4 py-2 bg-white text-gray-700 font-medium rounded-md shadow-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100" style={{ width: '150px', height: '40px' }}>Fashion</button>
        <button className="mx-4 my-2 px-4 py-2 bg-white text-gray-700 font-medium rounded-md shadow-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100" style={{ width: '150px', height: '40px' }}>Food</button>
        <button className="mx-4 my-2 px-4 py-2 bg-white text-gray-700 font-medium rounded-md shadow-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100" style={{ width: '150px', height: '40px' }}>Beauty</button>
        <button className="mx-4 my-2 px-4 py-2 bg-white text-gray-700 font-medium rounded-md shadow-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100" style={{ width: '150px', height: '40px' }}>Books</button>
      </div>
    </div>
  );
};

export default SecondaryNavBar;
