import React, { useEffect, useState } from 'react';
import '../Css/ChatApp/UserSearch.css';
import Applogo from '../Assets/Applogo.png'
import User from './User';

const UserSearch = () => {
  const [data, setData]:any = useState("");




  useEffect(() => {
    let unmounted = false;
    fetch("http://localhost:3002/allUsers")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (!unmounted) {
          setData(data);
        }
      })
      .catch((err) => {
        console.log(err.message, "UserSearchError");
      });

    return () => {
      unmounted = true;
    };
  }, []);

  return (
    <>
      <div id='UserSearch'>
        <div className='searchUser'>
          <input type='text' placeholder='Search User'/>
        </div>

        <div className='users'>
        <div>
          {data &&
            data?.map((post:any, UserSearch:any) => {
              return (
                <User 
                  key={UserSearch}
                  userIcon={post.userIcon}
                  userName={post.userName}
                />
              )
            })
          }
        </div>
          {/* <User userIcon='' userName=''/> */}
        </div>
      </div>
    </>
  )
}

export default UserSearch