import React, { useEffect, useState } from 'react';
import '../Css/ChatApp/Sidebar.css';
import Applogo from '../Assets/Applogo.png';
import GroupChat from './GroupChat';

const Sidebar = () => {
  const [data, setData]:any = useState("");






  useEffect(() => {
    let unmounted = false;
    fetch("http://localhost:3001/groupChats")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if(!unmounted) {
          setData(data);
        }
      })
      .catch((err) => {
        console.log(err.message, "SideBarError");
      });

    return () => {
      unmounted = true;
    };
  }, []);

  return (
    <div id='Sidebar'>
      <div className='searchChat'>
        <input placeholder='Search'/>
      </div>
      <div className='chats'>
        {/* The Line below is for mapping groupChats */}
        <div>
          {data &&
            data?.map((post:any, SideBar:any) => {
              return (
                <GroupChat 
                  key={SideBar}
                  groupName={post.groupName} 
                  lastChat={post.lastChat} 
                  lastChatDate={post.lastChatDate}
                />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Sidebar