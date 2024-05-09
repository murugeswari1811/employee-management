import React from 'react'
import { useLocation } from 'react-router-dom';
import { RiEmotionHappyFill } from "react-icons/ri";
import { BsFillSearchHeartFill } from "react-icons/bs";
import { PiHeartStraightFill } from "react-icons/pi";


const ServerFour = () => {
    const location = useLocation();

  return (
    <div>
       <div className='flex text-white h-screen'>
      <div className='bg-gray-800 p-3 space-y-3 overflow-y-scroll scrollbar scrollbar-thumb-gray-300 scrollbar-track-gray-100"'>
      <a href="/home" className='block group relative bg-gray-200 hover:bg-[#E7F937] transition-all duration-100 text-black h-12 w-12 rounded-full flex justify-center items-center hover:rounded-2xl'>
             <div className='absolute -left-3 flex'>
                <div className={`${location.pathname==="/home" ? "h-10":"h-8 opacity-0 group-hover:opacity-100 group-hover:scale-100"} bg-white w-1  rounded-r transition-full duration-200 origin-left`}></div>
            </div>
              <img className="h-10 w-10 transition-all duration-300 group-active:translate-y-1" src="https://blog.hootsuite.com/wp-content/uploads/2021/05/all-apps-5.png" />    
            </a>
            <hr className='border-t-0.06 border-gray-500 border-t-2 rounded'/>

            <a href="/server" className='block group relative bg-gray-200 hover:bg-[#E7F937] transition-all duration-100 text-black h-12 w-12 rounded-full flex justify-center items-center hover:rounded-2xl'>
                <div className='absolute -left-3 flex'>
                    <div className={`${location.pathname==="/server" ? "h-10":"h-8 opacity-0 group-hover:opacity-100 group-hover:scale-100"} bg-white w-1  rounded-r transition-full duration-200 origin-left`}></div>
                </div>
              <img className="h-6 w-6 transition-all duration-300 group-active:translate-yg-1" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/App_Store_%28iOS%29.svg/512px-App_Store_%28iOS%29.svg.png" />    
            </a> 
            <hr className='border-t-0.06 border-gray-500 border-t-2 rounded'/>

            <a href="/servertwo" className='block group relative bg-gray-200 hover:bg-[#E7F937] transition-all duration-100 text-black h-12 w-12 rounded-full flex justify-center items-center hover:rounded-2xl'>
                <div className='absolute -left-3 flex'>
                    <div className={`${location.pathname==="/servertwo" ? "h-10":"h-8 opacity-0 group-hover:opacity-100 group-hover:scale-100"} bg-white w-1  rounded-r transition-full duration-200 origin-left`}></div>
                </div>
              <img className="h-6 w-10 transition-all duration-300 group-active:translate-y-1" src="https://w7.pngwing.com/pngs/139/867/png-transparent-logo-business-cards-graphy-apps-miscellaneous-text-trademark.png" />    
            </a> 
            <hr className='border-t-0.06 border-gray-500 border-t-2 rounded'/>

            <a href="/serverthree" className='block group relative bg-gray-200 hover:bg-[#E7F937] transition-all duration-100 text-black h-12 w-12 rounded-full flex justify-center items-center hover:rounded-2xl'>
                <div className='absolute -left-3 flex'>
                    <div className={`${location.pathname==="/serverthree" ? "h-10":"h-8 opacity-0 group-hover:opacity-100 group-hover:scale-100"} bg-white w-1  rounded-r transition-full duration-200 origin-left`}></div>
                </div>
              <img className="h-8 w-8 transition-all duration-300 group-active:translate-y-1" src="https://static.vecteezy.com/system/resources/previews/023/987/004/original/line-app-logo-line-app-logo-transparent-line-app-icon-transparent-free-free-png.png" />    
            </a> 
            <hr className='border-t-0.06 border-gray-500 border-t-2 rounded'/>

            <a href="/serverfour" className='block group relative bg-gray-200 hover:bg-[#E7F937] transition-all duration-100 text-black h-12 w-12 rounded-full flex justify-center items-center hover:rounded-2xl'>
                <div className='absolute -left-3 flex'>
                    <div className={`${location.pathname==="/serverfour" ? "h-10":"h-8 opacity-0 group-hover:opacity-100 group-hover:scale-100"} bg-white w-1  rounded-r transition-full duration-200 origin-left`}></div>
                </div>
              <img className="h-6 w-6 transition-all duration-300 group-active:translate-y-1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2AoDbmAGhHPPHDB_KrlkGoFwaiR_GDYVnQbDywP6xVQ&s" />    
            </a> 
            <hr className='border-t-0.06 border-gray-500 border-t-2 rounded'/>

            <a href="/serverfive" className='block group relative bg-gray-200 hover:bg-[#E7F937] transition-all duration-100 text-black h-12 w-12 rounded-full flex justify-center items-center hover:rounded-2xl'>
                <div className='absolute -left-3 flex'>
                    <div className={`${location.pathname==="/serverfive" ? "h-10":"h-8 opacity-0 group-hover:opacity-100 group-hover:scale-100"} bg-white w-1  rounded-r transition-full duration-200 origin-left`}></div>
                </div>
              <img className="h-8 w-6 transition-all duration-300 group-active:translate-y-1" src="https://cdn.logojoy.com/wp-content/uploads/20230629132442/Amazon-logo-1024x690.jpg" />    
            </a> 
            <hr className='border-t-0.06 border-gray-500 border-t-2 rounded'/>

            <a href="/serversix" className='block group relative bg-gray-200 hover:bg-[#E7F937] transition-all duration-100 text-black h-12 w-12 rounded-full flex justify-center items-center hover:rounded-2xl'>
                <div className='absolute -left-3 flex'>
                    <div className={`${location.pathname==="/serversix" ? "h-10":"h-8 opacity-0 group-hover:opacity-100 group-hover:scale-100"} bg-white w-1  rounded-r transition-full duration-200 origin-left`}></div>
                </div>
              <img className="h-8 w-8 transition-all duration-300 group-active:translate-y-1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEa4nh6xOczDZWWR0aYEdVcW9z8YpX-fIG883aDlWCUQ&s" />    
            </a> 
            <hr className='border-t-0.06 border-gray-500 border-t-2 rounded'/>

      </div> 
      <div className='text-black flex  justify-center'>
        <div className='bg-gray-600 overflow-y-scroll' style={{ flex: '0 0 auto', width: '300px' }}>
          <div className='text-center shadow-md text-[#F5391B] text-xl px-2 py-2'>Categories</div>
          <div>
            <p className='mt-2 px-4 py-3 text-white bg-gray-800'><RiEmotionHappyFill className='inline-block text-[#F5391B] mr-4'/>Entertainment</p>
            <p className='mt-2 px-4 py-3 text-white bg-gray-800'><RiEmotionHappyFill className='inline-block text-[#F5391B] mr-4'/>Sports</p>
            <p className='mt-2 px-4 py-3 text-white bg-gray-800'><RiEmotionHappyFill className='inline-block text-[#F5391B] mr-4'/>Communication</p>
            <p className='mt-2 px-4 py-3 text-white bg-gray-800'><RiEmotionHappyFill className='inline-block text-[#F5391B] mr-4'/>Religion</p>
            <p className='mt-2 px-4 py-3 text-white bg-gray-800'><RiEmotionHappyFill className='inline-block text-[#F5391B] mr-4'/>Nature</p>
            <p className='mt-2 px-4 py-3 text-white bg-gray-800'><RiEmotionHappyFill className='inline-block text-[#F5391B] mr-4'/>Rituals</p>
            <p className='mt-2 px-4 py-3 text-white bg-gray-800'><RiEmotionHappyFill className='inline-block text-[#F5391B] mr-4'/>Foods</p>
            <p className='mt-2 px-4 py-3 text-white bg-gray-800'><RiEmotionHappyFill className='inline-block text-[#F5391B] mr-4'/>Makeup</p>
            <p className='mt-2 px-4 py-3 text-white bg-gray-800'><RiEmotionHappyFill className='inline-block text-[#F5391B] mr-4'/>Advertising</p>
            <p className='mt-2 px-4 py-3 text-white bg-gray-800'><RiEmotionHappyFill className='inline-block text-[#F5391B] mr-4'/>Infotainment</p>

          </div>
        </div>
        <div className='bg-gray-800 overflow-y-scroll' style={{ flex: '0 0 auto', width: '900px' }}>
          <div className='text-center bg-gray-600 shadow-md text-[#F5391B] text-xl px-2 py-2'>Discover Ideas</div>
          <div>
            <input type="text" className='ml-16 mt-4 bg-gray-500 px-60 py-2 placeholder:text-gray-300 rounded-2xl' placeholder='Search here...'/>
           <button className='bg-[#F5391B] px-6 ml-4 py-1 rounded-2xl'><BsFillSearchHeartFill className='inline-block text-2xl '/></button> 
          </div>
          <div className='mt-4 ml-12 flex flex-row gap-6 flex-wrap'>
            <img className="relative rounded-3xl h-96 w-96" src="https://i.pinimg.com/345x/cd/cd/81/cdcd81c42e7b527b800c42253b0cc505.jpg"/>
            <img className="rounded-3xl h-96 w-96" src="https://i.pinimg.com/564x/3f/05/2c/3f052c9b0f402d3373b9e0916c53bac7.jpg"/>
            <img className="rounded-3xl h-96 w-96" src="https://i.pinimg.com/564x/c4/57/bd/c457bd9496170bfa3845b7cee775df65.jpg"/>
            <img className="rounded-3xl h-96 w-96" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtHojaQDGkKNnqZOkQdbeqaJJNMxKUaD1-ZdFSJi9X8g&s"/>
            <img className="rounded-3xl h-96 w-96" src="https://i.pinimg.com/474x/95/9d/b8/959db87944669f6554a2f7ddf89cf0f4.jpg"/>
            <img className="rounded-3xl h-96 w-96" src="https://images.ctfassets.net/h67z7i6sbjau/5uM9CgVVuilKs3y5qMa4Aj/32182de6eb96cbb8a71e92d17115a221/og_image_inspired-education_1200x630px.jpg_2x.jpg?fm=webp&q=85"/>
            <img className="rounded-3xl h-96 w-96" src="https://i.pinimg.com/originals/93/1b/a7/931ba7aeb922938c5f61d261433e1d74.jpg"/>
            <img className="rounded-3xl h-96 w-96" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJDaVsTox-2O4hfD1LrObFGi0QMJfLynWro9U6iirqZA&s"/>

          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ServerFour
