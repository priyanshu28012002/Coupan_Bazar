import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import LandingPage from './pages/LandingPage';
import SignUp from './pages/SignUp';


function App() {
  

  return (
    // <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp />} /> 
          <Route path="/about" element={<About/>} />      
          <Route path="/home" element={<Home/>} /> 
          <Route path="/contact" element={<Contact/>} /> 

        </Routes>
      </Router>
   // </AuthProvider>
       
  );
}

export default App;
