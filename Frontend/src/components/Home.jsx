// Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
// //import { useHistory } from 'react-router-dom';

import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';
const Home = () => {
  return (
    <div>
      <NavBar/>
      <h1>Home Component</h1>
      <Link to="/about">Go to About</Link>
      <Footer/>
    </div>
  );
};

export default Home;

// const HomePage = (props) => {
//   const history = useHistory();
//   const { userData } = history.location.state;

//   return (
//     <div>
//       <h1>Welcome, {userData.fullName}!</h1>
//       <p>Username: {userData.username}</p>
//       <p>Email: {userData.email}</p>
//       <p>Gender: {userData.gender}</p>
//       <p>Contact Number: {userData.contactNo}</p>
//     </div>
//   );
// };

// export default HomePage;