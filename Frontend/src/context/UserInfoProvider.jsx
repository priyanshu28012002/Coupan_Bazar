import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { addListener } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';


// Create a context
const UserInfoContext = createContext();

// Create a provider component
export const UserInfoProvider = ({ children }) => {
//     const [id, setId] = useState(null);
//     setId(id);
//   const Userid = useSelector(state => state.auth.userData._id);
//   setId(Userid);
  const [userInfo, setUserInfo] = useState(null);
 //const usernamedata = useSelector(state => state.auth.userData.username);

 const username = 'a' //useSelector(state => state.auth.userData.username);
 const func = async (username)=>{
  try {

    console.log(username + "  going to set the user info ");
    const config = {
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'username': username
      },
      data: {},
      
  }
    const response = await axios.get('/api/v1/coupon/user-coupons',
    config
     );
      console.log("the contest api "+response);
      if (response.data.success)  {
        setUserInfo(response.data.data);  
      }
   
  } catch (error) {
    console.error("My error"+error)
  }
 }
  useEffect(() => {
    const fetchData = async () => {
      func(username);
    };

    fetchData();
  }, []);

  return (
    <UserInfoContext.Provider value={{ userInfo }}>
      {children}
    </UserInfoContext.Provider>
  );
};

// Custom hook to consume the context
export const useUserInfo = () => useContext(UserInfoContext);
