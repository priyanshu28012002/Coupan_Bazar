import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import AuthUser from './components/Auth/AuthUser';
//import { AuthProvider } from './components/Auth/AuthProvider.jsx';
import LandingPage from './pages/LandingPage';
import SignUp from './pages/SignUp';


function App() {
  // const { getToken } = AuthUser();
  // const token = getToken();
  // console.log("My Token: " + token);

  // const renderHome = () => {
  //   if (token !== null) {
  //     return <Home />;
  //   } else {
  //     return <Navigate to="/LandingPage" />;
  //   }
  // };

  // const renderAbout = () => {
  //   if (token !== null) {
  //     return <About />;
  //   } else {
  //     return <Navigate to="/" />;
  //   }
  // };

  // const renderContact = ({ location }) => {
  //   if (token !== null) {
  //     return <Contact />;
  //   } else {
  //     return <Navigate to="/login" state={{ from: location.pathname }} />;
  //   }
  // };
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
