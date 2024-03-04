import React from 'react';
import { Link } from 'react-router-dom';

const SignUpButton = () => {
    return (
      <button 
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-4 transition duration-300">
        <Link to="/signup">SignUp</Link>
      </button>
    );
  };

export default SignUpButton;
