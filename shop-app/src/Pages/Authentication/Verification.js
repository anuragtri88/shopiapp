import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Verification = () => {
    const [otp, setOtp] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setOtp(e.target.value);
    }

    const generateOTP = () => {
        const randomOTP = Math.floor(100 + Math.random() * 900);
        setOtp(randomOTP.toString());
        setShowPopup(true);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Otp submitted:', otp)
        navigate('/dashboard');
    }

  return (
    <div className='verification-page'>
        <h2>Verification Code</h2>
        <form onSubmit={handleSubmit}>
            <input className='otpField'  type='text' value={otp} onChange={handleChange} maxLength={3} pattern='\d{3}' title='ENter a 3-digit OTP' required />
            <Button type='Submit'>Verify</Button>
        </form>
        {showPopup && (
            <div className='otp-popup'>
                <p>Your OTP:</p>
                <h3>{otp}</h3>
            </div>
        )}
        <Button onClick={generateOTP}>Generate Otp</Button>
    </div>
  )
}

export default Verification