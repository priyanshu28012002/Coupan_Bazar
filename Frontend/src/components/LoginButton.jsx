import React from 'react';
import { Link } from 'react-router-dom';

const LoginButton = () => {
  return (
    <div>
      <button onClick={handleLoginClick}>Login</button>
    </div>
  );
};

export default LoginButton;
