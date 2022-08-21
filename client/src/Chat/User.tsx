import React from 'react'
import Applogo from '../Assets/Applogo.png'

interface UserProps {
  userIcon: string;
  userName: string;
}

const User = ({ userIcon, userName }: UserProps) => {
  return (
    <div>
       <div className='user'>
          <img className='userIcon' src={userIcon || Applogo} alt='PFP' height='40px'/>
          <div className='userRight'>
            <h3 className='userName'>
              {userName || "Not Found"}
            </h3>
          </div>
        </div>
    </div>
  )
}

export default User