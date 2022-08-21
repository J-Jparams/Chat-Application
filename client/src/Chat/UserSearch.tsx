import React, { useState } from 'react';
import '../Css/ChatApp/UserSearch.css';
import Applogo from '../Assets/Applogo.png'
import User from './User';

const UserSearch = () => {

  return (
    <div id='UserSearch'>
      <div className='searchUser'>
        <input type='text' placeholder='Search User'/>
      </div>

      <div className='users'>
       
       <User userIcon='' userName=''/>

        <div className='user'>
          <img className='userIcon' src={Applogo} alt='PFP' height='40px'/>
          <div className='userRight'>
            <h3 className='userName'>
              User Name
            </h3>
          </div>
        </div>

        <div className='user'>
          <img className='userIcon' src={Applogo} alt='PFP' height='40px'/>
          <div className='userRight'>
            <h3 className='userName'>
              User Name
            </h3>
          </div>
        </div>

        <div className='user'>
          <img className='userIcon' src={Applogo} alt='PFP' height='40px'/>
          <div className='userRight'>
            <h3 className='userName'>
              User Name
            </h3>
          </div>
        </div>

      </div>

    </div>
  )
}

export default UserSearch