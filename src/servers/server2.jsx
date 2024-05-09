import React from 'react'
import { useLocation } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
import { FaRegComments } from "react-icons/fa6";
import { PiTelegramLogoFill } from "react-icons/pi";



const ServerTwo = () => {
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
      <div className='text-black flex justify-center '>
        <div className='bg-gray-600 overflow-y-scroll' style={{ flex: '0 0 auto', width: '300px' }}>
          <div className='text-[#E267FB] px-5 py-2 shadow-md text-xl text-center'>Friends</div>
          <div >
              <div className='ml-7 relative mt-2 bg-gray-500 h-16 w-60 rounded-2xl'>
                <img className='pt-2 ml-2 h-12 w-12 rounded-full' src="https://ashisheditz.com/wp-content/uploads/2023/11/boys-dp-for-instagram.jpg" />
                <span className='absolute top-4 left-8 text-lg ml-12 text-white'>Arun</span>
                <button className='absolute top-4 left-36 ml-8  text-white bg-blue-500 p-1 rounded-2xl'>Follow</button>
                
              </div>
              <div className=' ml-7 relative mt-2 bg-gray-500 h-16 w-60 rounded-2xl'>
                <img className='pt-2 mt-2 ml-2 h-12 w-12 rounded-full' src="https://i.pinimg.com/originals/b6/56/63/b6566303e3ab2cbbecf879fc92aa8307.jpg" />
                <span className='absolute top-4 left-8 text-lg ml-12 text-white'>Kamala</span>
                <button className='absolute top-4 left-36 ml-8  text-white bg-blue-500 p-1 rounded-2xl'>Follow</button>
                
              </div>
              <div className=' ml-7 relative mt-2 bg-gray-500 h-16 w-60 rounded-2xl'>
                <img className='pt-2 mt-2 ml-2 h-12 w-12 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeiHfafcIG8Ij_MuHNoM1BOUGM2kiYxFQ5g_VWr26Qgg&s" />
                <span className='absolute top-4 left-8 text-lg ml-12 text-white'>Suma</span>
                <button className='absolute top-4 left-36 ml-8  text-white bg-blue-500 p-1 rounded-2xl'>Follow</button>
                
              </div>
              <div className=' ml-7 relative mt-2 bg-gray-500 h-16 w-60 rounded-2xl'>
                <img className='pt-2 mt-2 ml-2 h-12 w-12 rounded-full' src="https://i.pinimg.com/736x/25/4b/04/254b0457df2facf12b95d749117aaabc.jpg" />
                <span className='absolute top-4 left-8 text-lg ml-12 text-white'>Karthika</span>
                <button className='absolute top-4 left-36 ml-8  text-white bg-blue-500 p-1 rounded-2xl'>Follow</button>
                
              </div>
              <div className=' ml-7 relative mt-2 bg-gray-500 h-16 w-60 rounded-2xl'>
                <img className='pt-2 mt-2 ml-2 h-12 w-12 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnuVjnVz_tLBSoXLYVfN1E5yG3I_JqIEi0MUXi1ditUA&s" />
                <span className='absolute top-4 left-8 text-lg ml-12 text-white'>Anand</span>
                <button className='absolute top-4 left-36 ml-8  text-white bg-blue-500 p-1 rounded-2xl'>Follow</button>
                
              </div>
              <div className=' ml-7 relative mt-2 bg-gray-500 h-16 w-60 rounded-2xl'>
                <img className='pt-2 mt-2 ml-2 h-12 w-12 rounded-full' src="https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp" />
                <span className='absolute top-4 left-8 text-lg ml-12 text-white'>Karthik</span>
                <button className='absolute top-4 left-36 ml-8  text-white bg-blue-500 p-1 rounded-2xl'>Follow</button>
                
              </div>
              <div className=' ml-7 relative mt-2 bg-gray-500 h-16 w-60 rounded-2xl'>
                <img className='pt-2 mt-2 ml-2 h-12 w-12 rounded-full' src="https://static.zoomnews.com/photo/96566022/96566022.jpg" />
                <span className='absolute top-4 left-8 text-lg ml-12 text-white'>Anu</span>
                <button className='absolute top-4 left-36 ml-8  text-white bg-blue-500 p-1 rounded-2xl'>Follow</button>
                
              </div>
              <div className=' ml-7 relative mt-2 bg-gray-500 h-16 w-60 rounded-2xl'>
                <img className='pt-2 mt-2 ml-2 h-12 w-12 rounded-full' src="https://i.pinimg.com/736x/33/a1/1e/33a11ec7801981f093f10698e251f954.jpg" />
                <span className='absolute top-4 left-8 text-lg ml-12 text-white'>Suresh</span>
                <button className='absolute top-4 left-36 ml-8  text-white bg-blue-500 p-1 rounded-2xl'>Follow</button>
                
              </div>
          </div>
        </div>
       
        <div className='bg-gray-900 overflow-y-scroll' style={{ flex: '0 0 auto', width: '900px' }}>
          <div className='bg-gray-700 text-[#E267FB] px-5 py-2 shadow-2xl text-xl text-center'>Posts</div>
          <div className=' mt-2 ml-24 flex flex-row flex-wrap gap-8'>
              <div className=" relative ml-4 mt-4 relative flex w-80 flex-col rounded-xl bg-gray-300 bg-clip-border text-gray-700 shadow-md">
                <div className=" relative mx-4 mt-4 h-60 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                <img
                src="https://assets.teenvogue.com/photos/64a5ba095699418416716eba/16:9/w_2560%2Cc_limit/1474272248"
                className="h-full w-full object-cover"/>
              </div>
            <div className="p-6">
              <div className="mb-2 flex items-center justify-between">
                <p className="inline-block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                <FaRegHeart className='inline-block font-bold text-xl text-black'/>
                <FaRegComments className='ml-4 inline-block font-bold text-xl text-black'/>
                <PiTelegramLogoFill className='ml-4 inline-block font-bold text-xl text-black'/>

                </p>
                <p>10351 views</p>
               
              </div>
    <p className="block font-sans text-xs font-normal leading-normal text-gray-700 antialiased opacity-75">
      <span className='text-[#9D04BD]'>Kamala :</span> With plenty of talk and listen time, voice-activated Siri access, and an
      available wireless charging case.
    </p>
  </div>
 
</div>

<div className="absolute ml-4 mt-4 relative flex w-80 flex-col rounded-xl bg-gray-300 bg-clip-border text-gray-700 shadow-md">
                <div className=" relative mx-4 mt-4 h-60 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                <img
                src="https://parade.com/.image/t_share/MTkwNTgwODk4NDMyNDI3OTAw/mother-teresa-quotes-live-simply-others-simply-live.jpg"
                className="h-full w-full object-cover"/>
              </div>
            <div className="p-6">
              <div className="mb-2 flex items-center justify-between">
                <p className="inline-block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                <FaRegHeart className='inline-block font-bold text-xl text-black'/>
                <FaRegComments className='ml-4 inline-block font-bold text-xl text-black'/>
                <PiTelegramLogoFill className='ml-4 inline-block font-bold text-xl text-black'/>

                </p>
                <p>900031 views</p>
               
              </div>
    <p className="block font-sans text-xs font-normal leading-normal text-gray-700 antialiased opacity-75">
      <span className='text-[#9D04BD]'>Karthik :</span> Mother Teresa Quotes for life. Live Simply so others may simply live.</p>
  </div>
 
</div>
<div className="absolute ml-4 mt-4 relative flex w-80 flex-col rounded-xl bg-gray-300 bg-clip-border text-gray-700 shadow-md">
                <div className=" relative mx-4 mt-4 h-60 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTibxMohe7jQUx8nvyWGgoJQLKs3UeLNReSBoMdGtvWpQ&s"
                className="h-full w-full object-cover"/>
              </div>
            <div className="p-6">
              <div className="mb-2 flex items-center justify-between">
                <p className="inline-block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                <FaRegHeart className='inline-block font-bold text-xl text-black'/>
                <FaRegComments className='ml-4 inline-block font-bold text-xl text-black'/>
                <PiTelegramLogoFill className='ml-4 inline-block font-bold text-xl text-black'/>

                </p>
                <p>9351 views</p>
               
              </div>
    <p className="block font-sans text-xs font-normal leading-normal text-gray-700 antialiased opacity-75">
      <span className='text-[#9D04BD]'>Anu :</span> In nature, nothing is perfect and everything is perfect. Trees can be contorted, bent in weird ways, and they're still beautiful
    </p>
  </div>
 
</div>

        <div className="absolute ml-4 mt-4 relative flex w-80 flex-col rounded-xl bg-gray-300 bg-clip-border text-gray-700 shadow-md">
                <div className=" relative mx-4 mt-4 h-60 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                <img
                src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80"
                className="h-full w-full object-cover"/>
              </div>
            <div className="p-6">
              <div className="mb-2 flex items-center justify-between">
                <p className="inline-block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                <FaRegHeart className='inline-block font-bold text-xl text-black'/>
                <FaRegComments className='ml-4 inline-block font-bold text-xl text-black'/>
                <PiTelegramLogoFill className='ml-4 inline-block font-bold text-xl text-black'/>

                </p>
                <p>89654 views</p>
               
              </div>
    <p className="block font-sans text-xs font-normal leading-normal text-gray-700 antialiased opacity-75">
      <span className='text-[#9D04BD]'>Anand :</span> With plenty of talk and listen time, voice-activated Siri access, and an
      available wireless charging case.
    </p>
  </div>
 
</div>
          </div>
        </div>
        <div>

        </div>
      </div>
    </div>
    </div>
  )
}

export default ServerTwo
