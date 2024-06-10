import React, { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './Login.css'; // Import the CSS file

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    setUsername('');
    setPassword('');
  };

  return (
    <div className='login-container'>
      <div className='text'>
        <h2>Sign In</h2>
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
      <div className='p small-font'>or use your account</div>
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
            <button type="submit">Sign In</button>
          </Link>
        </div>
        <div className='forget'>
          Forgot password? <span className='click-here'>Click Here!!</span>
        </div>
      </form>
    </div>
  );
}

export default Login;
