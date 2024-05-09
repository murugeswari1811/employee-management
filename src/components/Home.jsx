import React, { useEffect } from 'react'
import { VscVerifiedFilled } from "react-icons/vsc";
import { FaAddressBook } from "react-icons/fa";
import { HiSpeakerphone } from "react-icons/hi";
import { IoMdPersonAdd } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FiHash } from "react-icons/fi";
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { LiaSlackHash } from "react-icons/lia";
import { IoIosNotifications } from "react-icons/io";
import { MdPushPin } from "react-icons/md";
import { GrGroup } from "react-icons/gr";
import { FiBookmark } from "react-icons/fi";
import { HiShare } from "react-icons/hi";
import axios from 'axios';




import '../App.css'
const Home = () => {
  const {channelid}=useParams()
  const [unread,setUnread]=useState(true)
  const [close,setClose]=useState(false)
  const [messages,setMessages]=useState([])

  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{
      setMessages(res.data)
    })
  },[])
  return (
    <>
   
      <div className='bg-gray-700 w-60 flex flex-col'>
        <button className='py-4 shadow-md h-12 flex items-center text-[#E873FF] hover:bg-gray-600 transition' style={{fontFamily:"sans-serif"}}><VscVerifiedFilled className='text-white mr-2'/>Header</button>
        <div className='py-4 flex-1 overflow-y-scroll scrollbar-hide space-y-3'>
            <p className=' ml-8 font-sm  ' style={{fontFamily:"anaglyph"}}>Channel (unread)</p>
            <p className=' ml-8 font-sm ' style={{fontFamily:"anaglyph"}}>Channel (unread)</p>

        {/* {[...Array(40)].map((n,i)=>(
            <a className='mt-5 ml-12 font-medium'> 
              Channel {i+1}
           </a>
        ))} */}
        <div  className='text-gray-300 flex flex-col justify-center'>
           <p className='mt-4 flex block px-1 py-1 hover:bg-gray-800 group text-sm ml-2 '> <FaAddressBook className='inline-block mr-2 mt-1'/>Welcome <IoMdPersonAdd className='inline-block ml-auto mt-1 opacity-0 group-hover:opacity-100'/></p>
           <p className='flex mt-1 block px-1 py-1  hover:bg-gray-800 group text-sm ml-2'> < HiSpeakerphone className='inline-block mr-2 mt-1'/>Announcement <IoMdPersonAdd className='inline-block ml-auto mt-1 opacity-0 group-hover:opacity-100'/></p>

        </div>
        <div className='flex items-center shadow-md py-4 hover:bg-gray-600 transition'>
          <button onClick={()=>setClose(true)} className='ml-2 text-[#E873FF] '><MdKeyboardArrowDown  className={`${close?"-rotate-180 inline-block text-gray-300":""}inline-block text-gray-300`}/> Tailwind Css</button>
           
        </div>
        <div  className='text-gray-300 flex flex-col justify-center '>
              {close? <a href={`/general/${1}`} className=' relative flex block px-1 py-1  hover:bg-gray-800 group text-sm ml-2'> <FiHash className='inline-block mr-2 mt-1'/>General <IoMdPersonAdd className='inline-block ml-auto mt-1 opacity-0 group-hover:opacity-100'/></a>:""}
              <a href={`/general/${2}`} className='flex mt-1 block px-1 py-1  hover:bg-gray-800 group text-sm ml-2'> < FiHash className='inline-block mr-2 mt-1'/>Plugins <IoMdPersonAdd className='inline-block ml-auto mt-1 opacity-0 group-hover:opacity-100'/></a>
              <a href={`/general/${3}`} className='flex mt-1 block px-1 py-1 hover:bg-gray-800 group text-sm ml-2'> <FiHash className='inline-block mr-2 mt-1'/>Help <IoMdPersonAdd className='inline-block ml-auto mt-1 opacity-0 group-hover:opacity-100'/></a>
              <a href={`/general/${4}`} className='flex mt-1 block px-1 py-1 hover:bg-gray-800 group text-sm ml-2'> <FiHash className='inline-block mr-2 mt-1'/>Internal <IoMdPersonAdd className='inline-block ml-auto mt-1 opacity-0 group-hover:opacity-100'/></a>

            </div>
            <div className='flex items-center shadow-md py-4 hover:bg-gray-600 transition'>
          <button className='ml-2 text-[#E873FF] '><MdKeyboardArrowDown className={`${close?"rotate-180 inline-block text-gray-300":""}inline-block text-gray-300`}/> Tailwind Labs</button>
           
        </div>
        <div  className='text-gray-300 flex flex-col justify-center '>
              {unread?<div className='bg-white h-4 w-2 rounded-r-xl absolute mt-8'></div>:""}
              <a href={`/general/${5}`} className='flex block px-1 py-1  hover:bg-gray-800 group text-sm ml-2'> <FiHash className='inline-block mr-2 mt-1'/>Tailwind-ui <IoMdPersonAdd className='inline-block ml-auto mt-1 opacity-0 group-hover:opacity-100'/></a>
              <a href={`/general/${6}`} className='flex mt-1 block px-1 py-1  hover:bg-gray-800 group text-sm ml-2'> < FiHash className='inline-block mr-2 mt-1'/>headless-ui <IoMdPersonAdd className='inline-block ml-auto mt-1 opacity-0 group-hover:opacity-100'/></a>
              <a href={`/general/${7}`} className='flex mt-1 block px-1 py-1 hover:bg-gray-800 group text-sm ml-2'> <FiHash className='inline-block mr-2 mt-1'/>refactoring-ui <IoMdPersonAdd className='inline-block ml-auto mt-1 opacity-0 group-hover:opacity-100'/></a>
              <a href={`/general/${8}`} className='flex mt-1 block px-1 py-1 hover:bg-gray-800 group text-sm ml-2'> <FiHash className='inline-block mr-2 mt-1'/>headicons<IoMdPersonAdd className='inline-block ml-auto mt-1 opacity-0 group-hover:opacity-100'/></a>

            </div>
        </div>

      </div>
      <div className='bg-gray-600 flex-1 flex flex-col'>
      <div className='px-3 h-12 flex items-center shadow-md text-[#E873FF]' style={{fontFamily:"sans-serif"}}>Messages
      <LiaSlackHash className='text-gray-400 text-2xl ml-auto '/>
      <IoIosNotifications className='text-gray-400 text-2xl ml-2'/>
      <MdPushPin className='text-gray-400 text-2xl ml-2'/>
      <GrGroup className='text-gray-400 text-2xl ml-2'/>
      <FiBookmark className='text-gray-400 text-2xl ml-2'/>
      <HiShare className='text-gray-400 text-2xl ml-2 mr-8'/>
      <input type="text" className='px-1 py-1 bg-gray-700 rounded-2xl placeholder:text-white mr-8 text-center' placeholder='Search...'/>

      
      
      </div>
        <div className='a-3 flex-1 space-y-6 overflow-y-scroll'>
       {messages.map((n,i)=>(
            <p className='mt-5 ml-12  justify-center'> 
             <span>Msg {i+1} : </span><span className='text-[#33FFE9]' style={{fontFamily:"Mukta"}}>{n.title}</span>
           </p>
        ))}
        </div>
      </div>
    </>
  )
}

  
export default Home
