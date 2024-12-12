import React from 'react'

// src/services/authService.js

const BACKEND_URL = import.meta.env.VITE_EXPRESS_BACKEND_URL;


const signup = async (formData) => {
    //res is response
  try {
    const res = await fetch(`${BACKEND_URL}/users/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    const json = await res.json();
    if (json.err) {
      console.log(json.err);
    }

    //check for token and store it in local storage before returning the json
    if (json.token) {
        localStorage.setItem('token', json.token); // add this line to store the JWT token in localStorage
  
      }

    return json;
  } catch (err) {
    console.log(err);
    
  }
};

// src/services/authService.js

const signin = async (user) => {
    try {
      const res = await fetch(`${BACKEND_URL}/users/signin`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      })
      const json = await res.json()
  
      if (json.token) {
        localStorage.setItem('token', json.token); // add this line to store the JWT token in localStorage
  
        const user = JSON.parse(atob(json.token.split('.')[1]));
  
        return user
      }
      if (json.err) {
        throw new Error(json.err)
      }
    } catch (err) {
      return {error: err.message}
    }
  }
  
  //check for token
  const getUser = () =>  {
    const token = localStorage.getItem('token');
    if (!token) return null;
    const user = JSON.parse(atob(token.split('.')[1]));//atob decode the token,grab the user split and grab the token
    return user;
  }
  
  //sign out
  const signout = () => {
    localStorage.removeItem('token');
  };

export {
  signup, signin,getUser, signout
};


