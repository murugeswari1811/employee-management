import React from 'react'
import Home from './Home'
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Main = () => {
    const location = useLocation();
  return (
    <>
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
              <img className="h-6 w-6 transition-all duration-300 group-active:translate-y-1" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/App_Store_%28iOS%29.svg/512px-App_Store_%28iOS%29.svg.png" />    
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
     <Home />
    </div>
    

    </>
  )
}

export default Main
