import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import NavBar from '../components/NavBar.jsx';

const SignUp = () => {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [contactNo, setContactNo] = useState('');
  const history = useNavigate();

  const handleSignUp = () => {
    // Create the user object
    const user = {
      fullName,
      username,
      password,
      email,
      gender,
      contactNo
    };
    console.log(user);
  
    // Make a POST request to the API endpoint
    fetch('/api/v1/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        console.log(data)
        // If registration is successful, redirect to another page
        // You can access user data from the response as data.data
        console.log('User registered successfully:', data.data);
        // Redirect to home page 
        history("/home", { userData: data.data });
        
      } else {
        // If registration fails, display an error message
        console.error('User registration failed:', data.message);
        // Display error message to the user
        // Example:
        // setError(data.message);
      }
    })
    .catch(error => {
      console.error('Error registering user:', error);
      // Handle error here
      // Example:
      // setError('An error occurred while registering. Please try again later.');
    });
  };


  return (
    <>
     <NavBar/>
  
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-md mx-auto px-4 py-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <form className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-semibold mb-2">Name</label>
            <input
              type="text"
              id="fullName"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter your FULL Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="userId" className="block text-sm font-semibold mb-2">User ID</label>
            <input
              type="text"
              id="username"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Choose a username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-semibold mb-2">Password</label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Choose a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
            <label htmlFor="gender" className="block text-sm font-semibold mb-2">Gender</label>
            <select
              id="gender"
              className="w-full px-3 py-2 border rounded-md"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">Select your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="contactNo" className="block text-sm font-semibold mb-2">Contact No</label>
            <input
              type="text"
              id="contactNo"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter your contact number"
              value={contactNo}
              onChange={(e) => setContactNo(e.target.value)}
            />
          </div>
          <div className=' error text-red-500 font-bold'>
            
        </div> 
          <div className="col-span-2">
          <button
            className="text-blue-500 hover:underline focus:outline-none"
            onClick={() => history('/login')}
          >
            Allready have a acount ?
          </button>

          </div>
          <button
            type="button"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            onClick={handleSignUp}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default SignUp;
