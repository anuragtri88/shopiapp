import React from 'react'
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import SplashScreen from './Pages/SplashScreen/SplashScreen';
import Main from './Pages/Authentication/AuthScreen';
import Login from './Pages/Authentication/Login';
import Signup from './Pages/Authentication/Signup';
import Verification from './Pages/Authentication/Verification';
import Dashboard from './Pages/Dashboard/Dashboard';
import Header from './Pages/Dashboard/Component/Header';
import Shop from './Pages/Shop';
import Clothing from './Pages/Clothing';


const App = () => {
  
  return (
    <div className='app'>
      <Router>
        <Header/>
        <Routes>
          <Route exact path="/" element={<SplashScreen />}/>
          <Route exact path="/auth" element={<Main/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/signup" element={<Signup/>}/>
          <Route exact path="/verification" element={<Verification/>}/>
          <Route exact path="/dashboard" element={<Dashboard/>}/>
          <Route exact path="/shop" element={<Shop heading='Shop'/>}/>
          <Route exact path="/clothing" element={<Clothing heading='Clothing'/>}/>

        </Routes>
      </Router>
    </div>
  )
}

export default App