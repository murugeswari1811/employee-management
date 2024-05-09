import React from 'react'
import { DATA } from './data'
import { HiOutlineUserGroup } from "react-icons/hi";
import { BsSearch } from "react-icons/bs";
import { LuBellRing } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import  { useState } from 'react';
import { BsJournalBookmarkFill } from "react-icons/bs";
import { MdOutlineMessage } from "react-icons/md";
import { MdOutlineForum } from "react-icons/md";
import { MdMiscellaneousServices } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import { FcLike } from "react-icons/fc";
import { TfiComments } from "react-icons/tfi";
import './server.css'


const ServerNine = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
      };
      const handleOptionSelect = (option) => {
        setInputValue(option);
        setIsOpen(false); 
      };
  return (
        <div className='flex flex-row max-h-screen max-w-full gap-1 overflow-hidden'>
            <div className='m-2 rounded-l-2xl min-h-screen w-[10%] bg-[#bcb9ff]'>
            {[...Array(20)].map((n,i)=>(
            <div className='flex flex-col items-center justify-center group'>
                <p className='mt-2 text-2xl text-blue-600'><HiOutlineUserGroup className='group-hover:transition-transform transform group-hover:scale-125'/></p>
                <p className='text-xs font-medium text-[#0571FA]'>Mopper</p>

            </div>
                 ))}
            </div>
        {/* 1st div */}



            <div className='w-screen h-24 '>
                <div className='flex flex-row'>
                <p className='inline-block mt-2 ml-1 font-bold text-blue-600 text-lg '>Employee Management</p>
                <span className='inline-block ml-[20%] mt-2 '><input type="text" className='relative border-2 border-black rounded-xl px-4 py-1'/><BsSearch className='absolute top-4 ml-48'/></span>
                <span className='absolute top-1 text-2xl mt-2 ml-[60%] '><LuBellRing /></span>
                <span className='inline-block ml-[15%] mt-2 input-with-dropdown'><input type="text" className='relative border-2 border-black rounded-xl px-6 py-1' value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}/><button className='absolute top-4 right-24' onClick={toggleDropdown}><IoIosArrowDown /></button></span>
                {isOpen && (
          <div className="absolute top-[7%] ml-[66%] ">
            <div className=" bg-blue-500 border-2 border-black px-16" onClick={() => handleOptionSelect('Option A')}>
              Option A
            </div> 
            <div className="bg-blue-500  border-2 border-black px-16" onClick={() => handleOptionSelect('Option B')}>
              Option B
            </div>
          </div>
        )}
                <img src="https://cdn.openart.ai/published/APD76KGmAyceS1FBIbwM/SikmfNcL_ThF8_1024.webp" className='ml-4 h-10 w-10 absolute top-2 right-8 rounded-full '/>
                </div>
                {/* pink bg-red-100*/}
                <div className='flex flex-row mt-2 ml-[18%] w-[50%] h-screen'>
                    
                    <div className='mt-2 flex flex-col'>
                        <div className='flex flex-row py-4'>
                        <p className='ml-4 text-blue-600 text-xl font-bold tracking-wide'>Feeds</p>
                        <p className='ml-72 text-blue-400 text-sm'>Recents</p>
                        <p className='ml-4 text-blue-700 text-sm'>Friends</p>
                        <p className='ml-4 text-blue-400 text-sm'>Popular</p>
                        </div>
                       
                        <div className='overflow-y-scroll h-full'>
                        {[...Array(10)].map(()=>(
                            <>
                            <div className='mt-2 flex flex-col ml-6 bg-blue-100 h-[60%] w-[93%] rounded-2xl  '>
                            <div className='inline'>
                                <img className="h-12 w-12 rounded-full m-4" src="https://cdn.openart.ai/published/APD76KGmAyceS1FBIbwM/SikmfNcL_ThF8_1024.webp"/>
                            </div>
                            <div className='inline flex flex-col ml-20 mt-[-11%]'>
                                <p className='text-sm'>Name</p>
                                <p className='text-sm text-gray-500'>Date</p>
                            </div>
                            <p className='mt-2 ml-4 mr-2 text-sm font-small'>There is a reason why you find BMW in the heart of the top athelates and celebrites - because it does what other can't do</p>
                            <div className='inline ml-2 mt-4'>
                            <video  autoplay muted loop controls="false" className='ml-6 inline w-56 rounded-xl'><source src="/vidOne.mp4" type="video/mp4" /></video>                                
                            <video autoplay muted loop controls="false" className='ml-4 inline w-56 rounded-xl'><source src="/vidTwo.mp4" type="video/mp4" /></video>
                            </div>
                            <div className='mt-4 flex flex-row '>
                                <p className='text-sm ml-12'><IoEyeOutline className='inline-block text-xl'/> 9992</p>
                                <p className='text-sm ml-4'><FcLike className='inline-block text-xl'/> Like</p>
                                <p className='text-sm ml-4'><TfiComments className='inline-block '/> Comments</p>
                            </div>

                        </div>
                            </>
                        ))}
                        
                        </div>
                    </div>

                        

                </div>

                <div>

                <div className='h-screen w-[18%] fixed'>

                    <div className='flex flex-col items-center mt-[-240%]'>
                        <img src="https://cdn.openart.ai/published/APD76KGmAyceS1FBIbwM/SikmfNcL_ThF8_1024.webp" className=' mt-4 h-24 w-24 rounded-full'/>
                        <p className='text-blue-800 text-m  mt-2 font-bold'>Murugeswari.P</p>
                        <p className='text-gray-600 text-sm '>murugeswari@gmail.com</p>
                    </div>

                    <div  className='mt-6 '>
                        <div className='m-1 w-48 px-4 py-2 rounded-full bg-blue-700 text-white text-sm font-medium'><BsJournalBookmarkFill className='inline-block mr-2 font-medium'/>New Feeds</div>
                        <div className='m-1 w-48 px-4 py-2 hover:rounded-full hover:bg-blue-700 hover:text-white text-sm text-blue-700 font-medium'><MdOutlineMessage className='inline-block mr-2 font-medium'/>Message</div>
                        <div className='m-1 w-48 px-4 py-2 hover:rounded-full hover:bg-blue-700 hover:text-white text-sm text-blue-700 font-medium'><MdOutlineForum className='inline-block mr-2 font-medium'/>Forums</div>
                        <div className='m-1 w-48 px-4 py-2 hover:rounded-full hover:bg-blue-700 hover:text-white text-sm text-blue-700 font-medium'><MdMiscellaneousServices className='inline-block mr-2 font-medium'/>Services</div>
                    </div>
                    <div className=' w-96 h-screen ml-[340%] mt-[-165%]'>
                        <div >
                            <div className='pt-4'>
                                <p className='ml-2 text-blue-500 '>Stories</p>
                            </div>
                            <div className=' flex flex-row overflow-x-scroll ' id="element-class">
                                {[...Array(20)].map((video)=>(
                                    <>
                                        <video autoplay muted loop className='mt-4 ml-2 w-20 rounded-xl ' ><source src="/story.mp4" type="video/mp4"/></video>
                                    </>
                                ))}
                            
                            </div>
                             
                            

                        </div>
                        <div className='h-56 w-full '>
                            <div className='mt-4'>
                                <p className='px-2 py-2 text-blue-500 ml-2'>Suggestions</p>
                            </div>
                            <div className='flex flex-col overflow-y-scroll max-h-44'>
                                {[...Array(30)].map(()=>(
                                
                                <div className='mt-2 ml-2 flex flex-row '>
                                    <img className='h-10 w-10 rounded-full ' src="https://cdn.openart.ai/published/APD76KGmAyceS1FBIbwM/SikmfNcL_ThF8_1024.webp" />
                                    <div className='ml-2 flex flex-col'>
                                        <p className='text-xs font-medium'>Name</p>
                                        <p className='text-xs text-gray-500 '>Date</p>
                                    </div>
                                    <p className='ml-40 text-sm'><button className='px-6  bg-blue-500 text-white rounded-xl'>Follow</button></p>
                                </div>
                               
                                    ))}
                        </div>
                            
                        </div>
                        <div className='h-56 w-full '>
                            <div className='px-1 py-1'>
                                <p className='mt-2 ml-2 text-blue-500'>Recommendation</p>
                            </div>
                            <div className=' mt-4 flex flex-row overflow-x-scroll ' id="element-class">
                                {[...Array(20)].map((video)=>(
                                    <>
                                    <img className="ml-2 h-32 w-32" src="https://www.southernliving.com/thmb/xFlQn020pc1NJAl4ksr7_o_B5u4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-598083938-1-22dab883ff2a43d8b2751d9f363f2d5d.jpg"/>
                                    </>
                                ))}
                            
                            </div>
                        </div>
                    </div>


                </div>

                </div>

            

            </div>
            {/* 2nd div */}



        </div>


  )
}

export default ServerNine
