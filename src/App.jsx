import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, useNavigate } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Landing from './components/Landing/Landing';
import Dashboard from './components/Dashboard/Dashboard';
import SignupForm from './components/SignupForm/SignupForm';
import SigninForm from './components/SigninForm/SigninForm';
import * as authService from '../src/services/authService';
import Profile from './components/Profile/Profile';
import { Navigate } from 'react-router-dom';
const App = () => {
  //we will use this state to store the logged user data
  const [user, setUser] = useState(authService.getUser())//if it's in storage it will use at the login user
const navigate= useNavigate();
  const handleSignout = () => {
   authService.signout()
    setUser(null)
  }

  // if (!user){
  //   Navigate("/")
  // }
  return (
    <>
      <NavBar user={user} handleSignout={handleSignout} />
     <Routes>
     { user ? (
          <Route path="/" element={<Dashboard user={user} />} />
        ) : (
          <Route path="/" element={<Landing />} />
        )}
         <Route path='/signup' element={<SignupForm setUser={setUser} />} /> 
         <Route path='/signin' element={<SigninForm setUser={setUser} />} />
         <Route path="/profile/:id" element={<Profile/>}/>
     </Routes>
    </>
  )
}

export default App
