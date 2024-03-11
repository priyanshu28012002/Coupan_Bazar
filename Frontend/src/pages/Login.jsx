
import NavBar from '../components/NavBar.jsx';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthUser from '../components/Auth/AuthUser.js'

import SecNavBar from '../components/SecNavBar.jsx';
import Footer from '../components/Footer.jsx';
import GridContainer from '../components/HomePage/Container.jsx';
import { CouponSlider, TopDealSlider, RecommendationSlider } from '../components/CouponSlider.jsx';
import { useDispatch } from 'react-redux';
import { loginUser } from '../features/user/userAuthSlice.js';

const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [loginError, setLoginError] = useState(null);
  const history = useNavigate();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const { setToken } = AuthUser();

  const handleLogin = (e)=> { // Adjust handleLogin to accept dispatch
    e.preventDefault();
  
    setLoading(true);
    setLoginError(null);
    const userCredentials = {
      username,
      password,
      email
    };
    console.log(userCredentials);
  
    // Dispatch the loginUser async thunk
    dispatch(loginUser(userCredentials))
      .unwrap() // Unwrap the promise to access the fulfilled value
      .then((userData) => {
        // Handle successful login

        console.log('Login successful!', userData);
        history("/home");
        //setLoading(false);
        // Navigate to the home page or perform other actions upon successful login
      })
      .catch((error) => {
        // Handle login failure
        setLoginError(error.message);
        setEmail("");
        setPassword("");
        setLoading(false);
        console.error('Login failed:', error);
        // Display error message to the user or perform other actions upon login failure
      });
  };
  return (
    <>
    <NavBar/>
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-md mx-auto px-4 py-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form>
        <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-semibold mb-2">Username</label>
            <input
              type="text"
              id="username"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter your Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-semibold mb-2">Password</label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>


          <div className=' error text-red-500 font-bold'>
          {loginError && <div className="text-danger">{loginError}</div>}
          </div>
          <div className='text-black'>
        
        <Link to="/signup">Make New Acount</Link>
        </div>
          <button
            type="button"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            onClick={handleLogin}
          >
           {loading ? "Please Wait..." : "LOGIN"}
          </button>
        </form>
      </div>
    </div>
   
  


    
    </>
  )
}


export default Login;