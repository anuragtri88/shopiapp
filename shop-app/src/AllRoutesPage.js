import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SplashScreen from './Pages/SplashScreen/SplashScreen';
import Main from './Pages/Authentication/AuthScreen';


const AllRoutesPage = () => {
  return (
    <Router>
        <Routes>
        <Route exact path="/" Component={SplashScreen}/>
        <Route exact path="/auth" Component={Main}/>
        </Routes>
    </Router>
  )
}

export default AllRoutesPage