import React from 'react';
import '../Css/SignUp.css';
import Applogo2 from '../Assets/Applogo2.png';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <>
      <div className='left-Register'>
        <img src={Applogo2} alt="logo" height="300px"/>
      </div>
      <div className='SignUp'>
        <div className='signup-box'>
          <div className='signup-title'>
            <h1 className='before'>What Are You <br /> Waiting For?</h1>
            <h1 className='text'>Join Lingo Today.</h1>
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
    </>
  )
}

export default SignUp