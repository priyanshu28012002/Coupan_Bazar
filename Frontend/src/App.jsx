import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Cart from './pages/Cart.jsx';
import Contact from './pages/Contact';
import ListCouponPage from './pages/ListCouponPage';
import Login from './pages/Login';
import LandingPage from './pages/LandingPage';
import SignUp from './pages/SignUp';
import ProductPage from './pages/ProductPage.jsx';
import UserContext from './context/UserContext.js';
import { ThemeProvider } from './context/ThemeProvider.jsx';
import {store} from '../src/app/store.js';
import { Provider } from 'react-redux'


function App() {

  return (
    <Provider store = {store}>
     <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp />} /> 
          <Route path="/about" element={<About/>} />      
          <Route path="/home" element={<Home/>} /> 
          <Route path="/contact" element={<Contact/>} /> 
          <Route path="/cart" element={<Cart/>} /> 
          <Route path="/listCoupon" element={<ListCouponPage/>} /> 
          <Route path="/productDescription" element={<ProductPage/>} /> 

      </Routes>
      </Router>
      </ThemeProvider>
      </Provider>

       
  );
}

export default App;
