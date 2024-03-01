import { useState } from 'react';

export default function AuthUser() {
    const [token, setToken] = useState("");
    const [user, setUser] = useState("");

    const getToken = () =>{
        const tokenString = sessionStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken;
    }

    const getUser = () =>{
        const userString = sessionStorage.getItem('user');
        const user_detail = JSON.parse(userString);
        return user_detail;
    }

    const saveToken = (user, token) => {
        sessionStorage.setItem('token', JSON.stringify(token));
        sessionStorage.setItem('user', JSON.stringify(user));
        
        setToken(token);
        setUser(user);
        console.log('Token saved:', token); 
        console.log("User is Save "+user.fullName);// Log saved token
    }

    const logout = () => {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('user');
        setToken("");
        setUser("");
        console.log('Logged out');
    }

    const getUserDetails = () => {
        const userString = sessionStorage.getItem('user');
        const userDetail = JSON.parse(userString);
        return userDetail;
      };

    return {
        setToken: saveToken,
        token,
        user,
        getUser,
        logout,
        getToken,
        getUserDetails
    }
}

