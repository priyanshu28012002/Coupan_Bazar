
import NavBar from '../components/NavBar.jsx';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthUser from '../components/Auth/AuthUser.js'

const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const history = useNavigate();

  const { setToken } = AuthUser();
  const  handleLogin = () => {
    // Your login logic here
    const credentials = {
      username,
      password,
      email
    };
    fetch('/api/v1/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        console.log('User logged in successfully:', data.data);
        // Redirect to home page or perform any other action upon successful login
        // save the user ant its token in the session storage\
        console.log('User logged in successfully'+ data.data.accessToken);
        setToken(data.data.user, data.data.accessToken);
        
       // history("/home", { userData: data.data });
       history("/home");
      } else {
        console.error('User login failed:', data.message);
        // Display error message to the user
        // Example:
        // setError(data.message);
      }
    })
    .catch(error => {
      console.error('Error logging in user:', error);
      // Handle error here
      // Example:
      // setError('An error occurred while logging in. Please try again later.');
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
            
          </div>
          <div className='text-black'>
        
        <Link to="/signup">Make New Acount</Link>
        </div>
          <button
            type="button"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            onClick={handleLogin}
          >
            Login
          </button>
        </form>
      </div>
    </div>
    
    
    </>
  )
}


export default Login;