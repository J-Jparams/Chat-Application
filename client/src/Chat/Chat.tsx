import React from 'react';
import '../Css/ChatApp/Chat.css';
import Applogo from '../Assets/Applogo.png';

const Chat = () => {
  return (
    <div id='Chat'>
      <div className='chatHeader'>
        <img src={Applogo} alt='Group Chat Logo' height='40px'/>
        <h2 className='chatHeaderName'>Group Name</h2>
      </div>

      <div className='chatChat'>
        <div>
          BOX
        </div>
        <div>
            
        </div>
      </div>

      <div className='chatMessage'>
        <input type='text' placeholder='Message'/>
        <button type='submit'>Send</button>
      </div>
    </div>
  )
}

export default Chat