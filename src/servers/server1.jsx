import React from 'react'
import { useLocation } from 'react-router-dom';
import { IoMdDownload } from "react-icons/io";


const ServerOne = () => {
    const location = useLocation();

  return (
    <div>
       <div className='flex text-white h-screen w-screen'>
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
            <div className=' text-black flex justify-center '>
                <div className='flex'>
                <div className='bg-gray-700' style={{ flex: '0 0 auto', width: '300px' }}>
                    <div className='text-[#37D9F9] flex justify-center items-center px-2 py-3 shadow-md'>Apps Store</div>
                    <div className="relative flex w-32 flex-col rounded-xl bg-gray-200 bg-clip-border text-gray-700 shadow-md mt-2 ml-16">
                    <div className="p-6">
                        <img className="h-10 w-16 ml-2" src="https://blog.hootsuite.com/wp-content/uploads/2021/05/all-apps-25.png"/>
    
                    </div>
                    <button
                        className="select-none rounded-lg bg-blue-500 py-2 px-12 text-center align-middle font-sans text-xl font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        data-ripple-light="true"
                    >
                        <IoMdDownload />
                    </button>
                </div>


                <div className="relative flex w-32 flex-col rounded-xl bg-gray-200 bg-clip-border text-gray-700 shadow-md mt-2 ml-16">
                    <div className="p-6">
                        <img className="h-10 w-16 ml-2" src="https://static.vecteezy.com/system/resources/thumbnails/022/493/563/small/3d-render-camera-icon-isolated-on-transparent-background-camera-icon-for-web-site-app-ui-and-logo-free-png.png"/>
    
                    </div>
                    <button
                        className="select-none rounded-lg bg-blue-500 py-2 px-12 text-center align-middle font-sans text-xl font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        data-ripple-light="true"
                    >
                        <IoMdDownload />
                    </button>
                </div>

                <div className="relative flex w-32 flex-col rounded-xl bg-gray-200 bg-clip-border text-gray-700 shadow-md mt-2 ml-16">
                    <div className="p-6">
                        <img className="h-10 w-16 ml-2" src="https://static.vecteezy.com/system/resources/thumbnails/031/737/228/small_2x/tiktok-logo-tiktok-app-social-media-icons-free-png.png"/>
    
                    </div>
                    <button
                        className="select-none rounded-lg bg-blue-500 py-2 px-12 text-center align-middle font-sans text-xl font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        data-ripple-light="true"
                    >
                        <IoMdDownload />
                    </button>
                </div>

                <div className="relative flex w-32 flex-col rounded-xl bg-gray-200 bg-clip-border text-gray-700 shadow-md mt-2 ml-16">
                    <div className="p-6">
                        <img className="h-10 w-16 ml-2" src="https://cdn-icons-png.flaticon.com/512/2585/2585165.png"/>
    
                    </div>
                    <button
                        className="select-none rounded-lg bg-blue-500 py-2 px-12 text-center align-middle font-sans text-xl font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        data-ripple-light="true"
                    >
                        <IoMdDownload />
                    </button>
                </div>


                </div>
                <div className='bg-gray-800' style={{ flex: '0 0 auto', width: '900px' }}>
                    <div >
                        <p className='mt-5 text-center text-blue-500 text-3xl '>The apps you love. From a place you can trust</p>
                    </div>
                    <div>
                        <img className="mt-5" style={{height:500,width:900}} src="https://www.apple.com/v/app-store/b/images/meta/og__c59t0pflacq6_developers.png"/>
                    </div>
                </div>

        </div>
      </div>
    </div>
    </div>
  )
}

export default ServerOne
