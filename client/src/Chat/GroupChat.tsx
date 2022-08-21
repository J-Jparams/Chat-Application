import React from 'react'
import Applogo from '../Assets/Applogo.png';

interface GroupChatProps {
    groupName: string;
    lastChat: string;
    lastChatDate: string;
    chatIcon?: string | undefined;

}

const GroupChat = ({ groupName, lastChat, lastChatDate, chatIcon }: GroupChatProps) => {
  return (
    <>
      <div className='chat'>
        <div className='chatIcon'>
          <img src={chatIcon || Applogo} height='40px'/>
        </div>

        <div className='chatRight'>
          <h3>{groupName}</h3>
          <p>{lastChat || ""}</p>
        </div>

        <div className='chatDate'>
          {lastChatDate || ""}
        </div>
      </div>
    </>
  )
}

export default GroupChat