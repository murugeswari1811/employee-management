import { useState } from 'react'
import './App.css'
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Message from './components/Message';
import ServerOne from './servers/server1';
import Main from './components/main';
import ServerTwo from './servers/server2';
import ServerThree from './servers/server3';
import ServerFour from './servers/server4';
import ServerFive from './servers/server5';
import ServerSix from './servers/server6';
import General from './components/general';
import ServerSeven from './servers/server7';
import ServerEight from './servers/server8';
import ServerNine from './servers/server9';
import ServerTen from './servers/server10';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/home" element={<Main />} />
        <Route path="/general/:channelid" element={<General/>} />
        <Route path="/" element={<Message />} />
        <Route path="/server" element={<ServerOne />} />
        <Route path="/servertwo" element={<ServerTwo />} />
        <Route path="/serverthree" element={<ServerThree />} />
        <Route path="/serverfour" element={<ServerFour />} />
        <Route path="/serverfive" element={<ServerFive />} />
        <Route path="/serversix" element={<ServerSix />} />
        <Route path="/seven" element={<ServerSeven />} />
        <Route path="/eight" element={<ServerEight />} />
        <Route path="/nine" element={<ServerNine />} />
        <Route path="/ten" element={<ServerTen />} />











        </Routes>
      </BrowserRouter>
     
    </>
  )
}

export default App
