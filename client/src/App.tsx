import React from 'react';
import './App.css';
import Chat from './Chat/Chat';
import Sidebar from './Chat/Sidebar';
import UserSearch from './Chat/UserSearch';

function App() {
  return (
    <>
      <div id='App'>
        <Sidebar />
        <Chat />
        <UserSearch />
      </div>
    </>
  )
  
}

export default App;
