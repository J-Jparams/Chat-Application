import React, { useState } from 'react';
import '../Css/ChatApp/Sidebar.css';
import Applogo from '../Assets/Applogo.png';
import GroupChat from './GroupChat';

const Sidebar = () => {
  // const [data, setData] = useState;

  return (
    <div id='Sidebar'>
      <div className='searchChat'>
        <input placeholder='Search'/>
      </div>
      <div className='chats'>
        {/* The Line below is for mapping groupChats */}
        {/* <div>
          {data &&
            data.map((post:any, index:any) => {
              return (
                <GroupChat 
                  key={index}
                  groupName={post.groupName} 
                  lastChat={post.lastChat} 
                  lastChatDate={post.lastChatDate}
                  chatIcon={Applogo}
                />
              )
            })
          }
        </div> */}
        <GroupChat 
          groupName="Satchel Boys" 
          lastChat={"What"} 
          lastChatDate='2/1/22' 
        />

      </div>
    </div>
  )
}

export default Sidebar