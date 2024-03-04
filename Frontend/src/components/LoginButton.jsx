import React from 'react';
import { Link } from 'react-router-dom';

const LoginButton = () => {
  return (
    <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition duration-300">
      <Link to="/login">Login</Link>
    </button>
  );
};

export default LoginButton;
