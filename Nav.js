import React,{useState} from 'react'
import './App.css';
import Login from './Login';
import './Login.css';
import Signup from './Signup';

const Nav = () => {
const [isSignUp, setIsSignUp] = useState(false);
const handleButtonClick = () => {
    setIsSignUp(!isSignUp);
  };
  return (
    <div>
        <div className={`container ${isSignUp ? 'slide' : ''}`}>
        <div className='left'>
          <div className='head'>{isSignUp ? 'Welcome Back!' : 'Hello Friends!!'}</div> 
          <div className='para'>{isSignUp ? 'Enter your details and start your journey with us' : 'To keep connected with us please Login details'}</div>
          <br/>
          <div className='Signup'>
            <button type="signup" onClick={handleButtonClick}>{isSignUp ? 'Sign In' : 'Sign Up'}</button>
          </div>
        </div>
        <div className='right'>
          {isSignUp ? <Signup/> : <Login/>}
        </div>
      </div>
      
    </div>
  )
}

export default Nav
