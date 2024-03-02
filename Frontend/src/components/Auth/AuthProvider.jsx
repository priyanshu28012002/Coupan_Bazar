// import React, { createContext, useContext, useState, useEffect } from 'react';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [authenticated, setAuthenticated] = useState(false);

//   useEffect(() => {
//     const token = sessionStorage.getItem('token');
//     if (token) {
//       console.log(typeof token);
//       setAuthenticated(true);
//     }
//     console.log(authenticated);
//   }, []); // Empty dependency array to run only once after initial render
  
//   // const login = () => {
//   //   sessionStorage.setItem('token', 'your_token_here');
//   //   setAuthenticated(true);
//   // };
  
//   // const logout = () => {
//   //   sessionStorage.removeItem('token');
//   //   setAuthenticated(false);
//   // };

//   return (
//     <AuthContext.Provider value={{ authenticated }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);
