import React from 'react'
import { useLocation } from 'react-router-dom';
import { FaHashtag } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import SimpleSlider from './slider';


const ServerSix = () => {
    const location = useLocation();

  return (
    <div>
       <div className='flex text-white h-screen'>
      <div className='bg-gray-800 p-3 space-y-3 overflow-y-scroll scrollbar scrollbar-thumb-gray-300 scrollbar-track-gray-100 '>
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
        <div className='bg-green-200 overflow-y-scroll' style={{ flex: '0 0 auto', width: '300px' }}>
          <div className='px-3 py-3 bg-gradient-to-r from-red-500 to-green-500 shadow-md text-xl font-bold text-[#33F8EF] text-center'>Wync Music</div>
          <div className='ml-6 mt-4'>
            <div className='mt-2 bg-gradient-to-r from-blue-500 to-red-500 text-white h-12 w-60 rounded-2xl text-m py-3'><FaHashtag className='ml-12 mr-2 inline-block text-sm text-gray-300'/>All</div>
            <div className='mt-2 bg-gradient-to-r from-blue-500 to-red-500 text-white h-12 w-60 rounded-2xl text-m py-3 '><FaHeart className='ml-12 mr-2 inline-block text-sm text-red-400'/>Favourites</div>
            <div className='mt-2 bg-gradient-to-r from-blue-500 to-red-500 text-white h-12 w-60 rounded-2xl text-m py-3 '><FaHashtag className='ml-12 mr-2 inline-block text-sm text-gray-300'/>Trending Now</div>
            <div className='mt-2 bg-gradient-to-r from-blue-500 to-red-500 text-white h-12 w-60 rounded-2xl text-m py-3 '><FaHashtag className='ml-12 mr-2 inline-block text-sm text-gray-300'/>Old Songs</div>
            <div className='mt-2 bg-gradient-to-r from-blue-500 to-red-500 text-white h-12 w-60 rounded-2xl text-m py-3 '><FaHashtag className='ml-12 mr-2 inline-block text-sm text-gray-300'/>New Games</div>
            <div className='mt-2 bg-gradient-to-r from-blue-500 to-red-500 text-white h-12 w-60 rounded-2xl text-m py-3 '><FaHashtag className='ml-12 mr-2 inline-block text-sm text-gray-300'/>Moods & Genre</div>
            <div className='mt-2 bg-gradient-to-r from-blue-500 to-red-500 text-white h-12 w-60 rounded-2xl text-m py-3 '><FaHashtag className='ml-12 mr-2 inline-block text-sm text-gray-300'/>Top Albums</div>
            <div className='mt-2 bg-gradient-to-r from-blue-500 to-red-500 text-white h-12 w-60 rounded-2xl text-m py-3 '><FaHashtag className='ml-12 mr-2 inline-block text-sm text-gray-300'/>Top Artists</div>
            <div className='mt-2 bg-gradient-to-r from-blue-500 to-red-500 text-white h-12 w-60 rounded-2xl text-m py-3 '><FaHashtag className='ml-12 mr-2 inline-block text-sm text-gray-300'/>Top Playlists</div>


          </div>
        </div>

        <div className='bg-black overflow-y-scroll' style={{ flex: '0 0 auto', width: '900px' }}>
          <div className='px-3 py-3 bg-gradient-to-r from-red-500 to-green-500 shadow-md text-xl font-bold text-[#33F8EF] text-center'>Latest Songs</div>
          <div className='mt-8 mx-auto'>
          <SimpleSlider />
          </div>
          <div>
            <div className='text-white mt-4 text-2xl text-center font-bold'>New Releases</div>
            <div className='ml-8 mt-8 flex flex-row flex-wrap gap-4'>
              <div >
                <img className="rounded-2xl h-48 w-48" src="https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://img-dynamic.wynk.in/unsafe/top/filters:watermark(https://discovery-prod-arsenal.s3.ap-south-1.amazonaws.com/arsenal/library/new_songs_mix_1/var4/v4/new_songs_mix_1.png,0,-0,0,100,100)/https://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_universalmusic/00602465591675_20240410001058440/1712712932314/24UMGIM32402_T1_cvrart.jpg?dynamic=true"/>
                <p className='text-center mt-2 mb-8 text-white text-m text-[#33CBF8] font-bold'>New Songs Mix</p>
              </div>
              <div >
                <img className="rounded-2xl h-48 w-48" src="https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/6634c37e55dfdd14390a2e09/COLLECTION_114813541691182.png"/>
                <p className='text-center mt-2 mb-8 text-white text-m text-[#33CBF8] font-bold'>New Hindi Songs</p>
              </div>
              <div >
                <img className="rounded-2xl h-48 w-48" src="https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_pplmumbai/20240430131100045/8902357670542/1714464022292/resources/8902357670542.jpg"/>
                <p className='text-center mt-2 mb-8 text-white text-m text-[#33CBF8] font-bold'>Heeramandi (Original)</p>
              </div>
              <div >
                <img className="rounded-2xl h-48 w-48" src="https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/663473aaadeee4608b4a2cb0/COLLECTION_6625569250147.png"/>
                <p className='text-center mt-2 mb-8 text-white text-m text-[#33CBF8] font-bold'>Wynk Top 100</p>
              </div>
              <div >
                <img className="rounded-2xl h-48 w-48" src="https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_hungama/music/8903243824278/1614951912/srch_hungama_2252005.jpg"/>
                <p className='text-center mt-2 mb-8 text-white text-m text-[#33CBF8] font-bold'>Gilli (Tamil)</p>
              </div>
              <div >
                <img className="rounded-2xl h-48 w-48" src="https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/65a68fbc5596d027ec4e2720/COLLECTION_9021441495733.png"/>
                <p className='text-center mt-2 mb-8 text-white text-m text-[#33CBF8] font-bold'>Sad Songs</p>
              </div>
              <div >
                <img className="rounded-2xl h-48 w-48" src="https://img.wynk.in/unsafe/250x250/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_universalmusic/00602465671377_20240501170247349/1714587623784/24UMGIM43488_T1_cvrart.jpg"/>
                <p className='text-center mt-2 mb-8 text-white text-m text-[#33CBF8] font-bold'>Risk</p>
              </div>
              <div >
                <img className="rounded-2xl h-48 w-48" src="https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/65f96cbe51f6332745258507/COLLECTION_32566810960925.png"/>
                <p className='text-center mt-2 mb-8 text-white text-m text-[#33CBF8] font-bold'>Social Media Top 20</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ServerSix
