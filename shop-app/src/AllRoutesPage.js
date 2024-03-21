import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SplashScreen from './Pages/SplashScreen/SplashScreen';
import Main from './Pages/Authentication/AuthScreen';
import Login from './Pages/Authentication/Login';
import Signup from './Pages/Authentication/Signup';
import Verification from './Pages/Authentication/Verification';
import Dashboard from './Pages/Dashboard/Dashboard';



const AllRoutesPage = () => {
  return (
    <Router>
        <Routes>
        <Route exact path="/" Component={SplashScreen}/>
        <Route exact path="/auth" Component={Main}/>
        <Route exact path="/login" Component={Login}/>
        <Route exact path="/signup" Component={Signup}/>
        <Route exact path="/verification" Component={Verification}/>
        <Route exact path="/dashboard" Component={Dashboard}/>


        </Routes>
    </Router>
  )
}

export default AllRoutesPage