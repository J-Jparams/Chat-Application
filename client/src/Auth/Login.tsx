import React from 'react';
import '../Css/Login.css';
import Applogo from '../Assets/Applogo.png';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='Login'>
      <div className='login-box'>
        <div className='login-title'>
          <img src={Applogo} alt="logo" />
          <h1 className='text'>QUADNARD CHAT</h1>
        </div>
        <form>
          
          <input 
            type='text'
            className='login-inputs'
            placeholder='Username...'
            required 
          />
          
          <input 
            type='password'
            className='login-inputs'
            placeholder='Password...' 
            required 
          />
                   
          <button
            type='submit'
            className='login-btn'
          >
          Register
          </button>

          <Link to='/'>
            <button className='login-signup'>
              Have An Account?
            </button>
          </Link>

        </form>
      </div>
    </div>
  )
}

export default Login