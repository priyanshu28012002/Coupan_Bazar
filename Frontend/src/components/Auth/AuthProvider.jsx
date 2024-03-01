// // AuthProvider.js
// import React, { createContext, useContext, useState, useEffect } from 'react';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {


//   const [authenticated, setAuthenticated] = useState(false);

//   useEffect(() => {
//     // Check if user is authenticated from session storage
//     const token = sessionStorage.getItem('token');
//     if (token) {
//       setAuthenticated(true);
//     }
//   }, []);
  

// //   const login = () => {
// //     // Perform login logic here
// //     // Assuming successful login, set authenticated to true and store token in session storage
// //     sessionStorage.setItem('token', 'your_auth_token_here');
// //     setAuthenticated(true);
// //   };

// //   const logout = () => {
// //     // Perform logout logic here
// //     // Clear session storage and set authenticated to false
// //     sessionStorage.removeItem('token');
// //     setAuthenticated(false);
// //   };

// return (
//   <AuthContext.Provider value={{ authenticated }}>
//     {children}
//   </AuthContext.Provider>
// );
// };

// export const useAuth = () => useContext(AuthContext);



import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    console.log("Going to Check the Token");
    // Check if user is authenticated from session storage
    const token = sessionStorage.getItem('token');
    console.log("previoud "+authenticated)
    //console.log(token.length);
    //const len = token.length
    if ( token ) {
      setAuthenticated(true);
    }
    console.log("alter "+authenticated)
  }, []);
  
  return (
    <AuthContext.Provider value={{ authenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
