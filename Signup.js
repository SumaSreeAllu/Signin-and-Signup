import React, { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './Login.css';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className='Signup-container'>
      <div className='text'>
        <h2>Sign Up</h2>
      </div>
      <div className='caption-icons'>
        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
          <FaGoogle className='icon' />
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
        <FaLinkedinIn className='icon' /></a>
        <a href="https://www.linkedin.com/home" target="_blank" rel="noopener noreferrer">
        <FaFacebookF className='icon' /></a>
      </div>
      <div className='p small-font'>or use your email id for registration</div>
      <form onSubmit={handleSubmit}>
        <div className='input-group'>
          <FaUser className='icon' />
          <input
            type="text"
            id="username"
            value={username}
            placeholder='Username'
            onChange={handleUsernameChange}
          />
        </div>
        <div className='input-group'>
          <MdEmail className='icon' />
          <input
            type="text"
            id="Email"
            value={email}
            placeholder='Email'
            onChange={handleEmailChange}
          />
        </div>
        <div className='input-group'>
          <FaLock className='icon' />
          <input
            type="password"
            id="password"
            value={password}
            placeholder='Password'
            onChange={handlePasswordChange}
          />
        </div>
        <div className='submit'>
          <Link to='/home'>
            <button type="submit">Sign Up</button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Signup;
