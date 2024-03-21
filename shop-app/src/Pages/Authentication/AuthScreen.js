import React from 'react'
import { Button } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';

const AuthScreen = () => {

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  }

  const handleSignUp = () => {
    navigate('/signup');
  }

  return (
    <div className='auth-screen'>
        <h1>Logo</h1>
        <Button variant="outline-secondary" onClick={handleLogin}>Login</Button>
        <Button variant="outline-secondary" onClick={handleSignUp}>Signup</Button>

    </div>
  )
}

export default AuthScreen