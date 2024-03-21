  import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
  

  const Signup = () => {
  const [formData,setFormData] = useState({
      name: '',
      username:'',
      email: '',
      password: '',
      reenterPassword: '',
  });

  const [passwordMatch, setPasswordMatch] = useState(true);
  const navigate = useNavigate();

  const handleChange = (e) => {
      const {name, value} = e.target;
      setFormData(prevState =>({
        ...prevState,
      [name]: value
      }));
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      if (formData.password !== formData.reenterPassword) {
        setPasswordMatch(false);
        return;
      }
      console.log('Form Submitted',formData);
      navigate('/verification');
  }
  return (
  <div className='signup-form'>
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            className='form-control'
            placeholder='Name'
            value={formData.name}
            onChange={handleChange} />
          <input
            type="text"
            name="username"
            className='form-control'
            placeholder='Username'
            value={formData.username}
            onChange={handleChange} />
          <input
            type="email"
            name="email"
            className='form-control'
            placeholder='Email'
            value={formData.email}
            onChange={handleChange} />
          <input
            type="password"
            name="password"
            className='form-control'
            placeholder='Password'
            value={formData.password}
            onChange={handleChange} />
          <input
            type="password"
            name="reenterPassword"
            className='form-control'
            placeholder='reenterPassword'
            value={formData.reenterPassword}
            onChange={handleChange}  />
            {!passwordMatch && <p style={{color: 'red'}}>Password do not match</p>}
            <Button type='submit' style={{display:'none'}}>Submit</Button>
      </form>
  </div>
  )
  }

  export default Signup