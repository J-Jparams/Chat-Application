import React from 'react';
import '../Css/ChatApp/Sidebar.css';
import Applogo from '../Assets/Applogo.png';

const Sidebar = () => {
  return (
    <div id='Sidebar'>
      <div className='searchChat'>
        <input placeholder='Search'/>
      </div>
      <div className='chats'>
        <div className='chat'>
  
          <div className='chatIcon'>
            <img src={Applogo} height='40px'/>
          </div>

          <div className='chatRight'>
            <h3>Group Name</h3>
            <p>Last Chat</p>
          </div>

          <div className='chatDate'>
            Sunday
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar