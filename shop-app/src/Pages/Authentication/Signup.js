import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../actions/signupActions';
import { updateFormData } from '../../Slice/signupReducers';



  

  const Signup = () => {
    const formData = useSelector(state => state.signup);
    const dispatch = useDispatch();
  // const [formData,setFormData] = useState({
  //     name: '',
  //     username:'',
  //     email: '',
  //     password: '',
  //     reenterPassword: '',
  // });

  const [passwordMatch, setPasswordMatch] = useState(true);
  const navigate = useNavigate();

  const handleChange = (e) => {
      const {name, value} = e.target;
      dispatch(updateFormData({[name]: value}));
      // setFormData(prevState =>({
      //   ...prevState,
      // [name]: value
      // }));
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Form Submitted',formData);
      dispatch(registerUser(formData));
      if (formData.password !== formData.reenterPassword) {
        setPasswordMatch(false);
        return;
      }
      navigate('/verification');
  }
  return (
  <div className='signup-form'>
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            className='form-control'
            placeholder='Name'
            onChange={handleChange} required />
          <input
            type="text"
            name="username"
            value={formData.username}
            className='form-control'
            placeholder='Username'
            onChange={handleChange} required/>
          <input
            type="email"
            name="email"
            value={formData.email}
            className='form-control'
            placeholder='Email'
            onChange={handleChange} required/>
          <input
            type="password"
            name="password"
            value={formData.password}
            className='form-control'
            placeholder='Password'
            onChange={handleChange} required/>
          <input
            type="password"
            name="reenterPassword"
            value={formData.reenterPassword}
            className='form-control'
            placeholder='reenterPassword'
            onChange={handleChange} required />
            {!passwordMatch && <p style={{color: 'red'}}>Password do not match</p>}
            <Button type='submit' style={{display:'none'}}>Submit</Button>
      </form>
  </div>
  )
  }

  export default Signup