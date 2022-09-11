import React from 'react';
import '../Css/Login.css';
import Applogo2 from '../Assets/Applogo2.png';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <div className='left-Login'>
        <img src={Applogo2} alt="logo" height="300px"/>
      </div>
      <div className='Login'>
        <div className='login-box'>
          <div className='login-title'>
            <h1 className='before'>What Are You <br /> Waiting For?</h1>
            <h1 className='text'>All That's Left <br /> Is To Login!</h1>
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
            Login
            </button>

            <Link to='/'>
              <button className='login-signup'>
                Need An Account?
              </button>
            </Link>

          </form>
        </div>
      </div>
    </>
  )
}

export default Login