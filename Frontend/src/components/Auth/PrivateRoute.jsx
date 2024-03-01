// import React from 'react';
// import {  Navigate } from 'react-router-dom';
// import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
// import AuthUser from './AuthUser';

// const PrivateRoute = ({ element, ...rest }) => {
//   const { token } = AuthUser(); // Get the token from AuthUser

//   // If token exists, render the provided element, otherwise, redirect to login
//   return token ? <Route {...rest} element={element} /> : <Navigate to="/login" />;
// };

// export default PrivateRoute;
// PrivateRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import AuthUser from './AuthUser';

const PrivateRoute = ({ element: Element, ...rest }) => {
  const { token } = AuthUser(); // Get the token from AuthUser

  // If token exists, render the provided element, otherwise, redirect to login
  return token ? <Route {...rest} element={<Element />} /> : <Navigate to="/login" />;
};

export default PrivateRoute;
