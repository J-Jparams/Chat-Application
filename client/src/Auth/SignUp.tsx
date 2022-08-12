import React from 'react';
import '../Css/SignUp.css';
import Applogo from '../Assets/Applogo.png';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className='SignUp'>
      <div className='signup-box'>
        <div className='signup-title'>
          <img src={Applogo} alt="logo" />
          <h1 className='text'>QUADNARD CHAT</h1>
        </div>
        <form>
          
          <input 
            type='text'
            className='signup-inputs'
            placeholder='Username...'
            required 
          />
          
          <input 
            type='password'
            className='signup-inputs'
            placeholder='Password...' 
            required 
          />
                   
          <input 
            type='password'
            className='signup-inputs' 
            placeholder='Confirm Password...' 
            required 
          />

          <button
            type='submit'
            className='signup-btn'
          >
          Register
          </button>

          <Link to='/login'>
            <button className='signup-login'>
              Have An Account?
            </button>
          </Link>

        </form>
      </div>
    </div>
  )
}

export default SignUp