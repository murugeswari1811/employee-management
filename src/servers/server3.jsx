import React from 'react'
import { useLocation } from 'react-router-dom';
import { IoCall } from "react-icons/io5";
import { MdDialpad } from "react-icons/md";


const ServerThree = () => {
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
          <div className='bg-[#55DA0E] py-1 shadow-md text-2xl text-center'>Calls</div>
          <div>
          <div className='mt-4 h-8 w-72 bg-gray-800 text-[#55DA0E] rounded-2xl '>
            <span className='mt-8 text-xl ml-16'>Dial</span><span className='ml-32 mt-1 text-xl inline-block'><MdDialpad /></span>
          </div>
          <div className='h-12 w-72 bg-gray-800 text-white rounded-2xl '>
            <div className='mt-4'>
            <img className="ml-2 mb-2 inline-block h-10 w-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7BIQ1ZDGSM0DfgnuqFBEqdArztI4l8X-O9lafw8jCJg&s"/>
            <span className='mb-4 ml-12'>098754332</span>
            <span><button className='inline-block mt-2 text-[#55DA0E] ml-20 text-2xl'><IoCall /></button></span>
            </div>
          </div>

          <div className='h-12 w-72 bg-gray-800 text-white rounded-2xl '>
            <div className='mt-4'>
            <img className="ml-2 mb-2 inline-block h-10 w-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7BIQ1ZDGSM0DfgnuqFBEqdArztI4l8X-O9lafw8jCJg&s"/>
            <span className='mb-4 ml-12'>878767652</span>
            <span><button className='inline-block mt-2 text-[#55DA0E] ml-20 text-2xl'><IoCall /></button></span>
            </div>
          </div>


          <div className='h-12 w-72 bg-gray-800 text-white rounded-2xl '>
            <div className='mt-4'>
            <img className="ml-2 mb-2 inline-block h-10 w-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7BIQ1ZDGSM0DfgnuqFBEqdArztI4l8X-O9lafw8jCJg&s"/>
            <span className='mb-4 ml-12'>998754332</span>
            <span><button className='inline-block mt-2 text-[#55DA0E] ml-20 text-2xl'><IoCall /></button></span>
            </div>
          </div>


          <div className='h-12 w-72 bg-gray-800 text-white rounded-2xl '>
            <div className='mt-4'>
            <img className="ml-2 mb-2 inline-block h-10 w-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7BIQ1ZDGSM0DfgnuqFBEqdArztI4l8X-O9lafw8jCJg&s"/>
            <span className='mb-4 ml-12'>6578854332</span>
            <span><button className='inline-block mt-2 text-[#55DA0E] ml-20 text-2xl'><IoCall /></button></span>
            </div>
          </div>


          <div className='h-12 w-72 bg-gray-800 text-white rounded-2xl '>
            <div className='mt-4'>
            <img className="ml-2 mb-2 inline-block h-10 w-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7BIQ1ZDGSM0DfgnuqFBEqdArztI4l8X-O9lafw8jCJg&s"/>
            <span className='mb-4 ml-12'>878754332</span>
            <span><button className='inline-block mt-2 text-[#55DA0E] ml-20 text-2xl'><IoCall /></button></span>
            </div>
          </div>


          <div className='h-12 w-72 bg-gray-800 text-white rounded-2xl '>
            <div className='mt-4'>
            <img className="ml-2 mb-2 inline-block h-10 w-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7BIQ1ZDGSM0DfgnuqFBEqdArztI4l8X-O9lafw8jCJg&s"/>
            <span className='mb-4 ml-12'>998765332</span>
            <span><button className='inline-block mt-2 text-[#55DA0E] ml-20 text-2xl'><IoCall /></button></span>
            </div>
          </div>


          <div className='h-12 w-72 bg-gray-800 text-white rounded-2xl '>
            <div className='mt-4'>
            <img className="ml-2 mb-2 inline-block h-10 w-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7BIQ1ZDGSM0DfgnuqFBEqdArztI4l8X-O9lafw8jCJg&s"/>
            <span className='mb-4 ml-12'>97754332</span>
            <span><button className='inline-block mt-2 text-[#55DA0E] ml-20 text-2xl'><IoCall /></button></span>
            </div>
          </div>


          <div className='h-12 w-72 bg-gray-800 text-white rounded-2xl '>
            <div className='mt-4'>
            <img className="ml-2 mb-2 inline-block h-10 w-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7BIQ1ZDGSM0DfgnuqFBEqdArztI4l8X-O9lafw8jCJg&s"/>
            <span className='mb-4 ml-12'>878754332</span>
            <span><button className='inline-block mt-2 text-[#55DA0E] ml-20 text-2xl'><IoCall /></button></span>
            </div>
          </div>


          <div className='h-12 w-72 bg-gray-800 text-white rounded-2xl '>
            <div className='mt-4'>
            <img className="ml-2 mb-2 inline-block h-10 w-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7BIQ1ZDGSM0DfgnuqFBEqdArztI4l8X-O9lafw8jCJg&s"/>
            <span className='mb-4 ml-12'>098754332</span>
            <span><button className='inline-block mt-2 text-[#55DA0E] ml-20 text-2xl'><IoCall /></button></span>
            </div>
          </div>

          <div className='h-12 w-72 bg-gray-800 text-white rounded-2xl '>
            <div className='mt-4'>
            <img className="ml-2 mb-2 inline-block h-10 w-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7BIQ1ZDGSM0DfgnuqFBEqdArztI4l8X-O9lafw8jCJg&s"/>
            <span className='mb-4 ml-12'>888754332</span>
            <span><button className='inline-block mt-2 text-[#55DA0E] ml-20 text-2xl'><IoCall /></button></span>
            </div>
          </div>

          </div>
       </div>
       <div className='bg-gray-600 overflow-y-scroll' style={{ flex: '0 0 auto', width: '900px' }}>
       <div className='bg-[#55DA0E] py-1 shadow-md text-2xl text-center'>Services</div>
       
       <div>

       <div className="mt-4 flex items-center">
          <hr className="ml-4 flex-grow border-t-0 border-b border-gray-500"/>
            <p className="mx-4 text-white">ADVERTISING</p>
          <hr className="mr-4 flex-grow border-t-0 border-b border-gray-500"/>
      </div>
      <p className='mt-6 ml-6 mr-6 flex items-center justify-center text-gray-300'>Release highly-optimized ads that target the 95 million people* who use LINE each month. Use LINE's unmatched reach to share your information with just the users you wish to communicate with.</p>
      <img style={{height:"300px",width:"400px"}} className="inline-block mt-5 ml-7" src="https://www.digital-web-services.com/wp-content/uploads/LINE-App.jpg"/>
      <img style={{height:"300px",width:"400px"}} className="inline-block mt-5 ml-7" src="https://www.digitalmarketingforasia.com/wp-content/uploads/2020/09/LINE-Ads-for-businesses-feature-image.jpeg"/>
      <p className='mt-4 text-center text-2xl text-[#55DA0E]'>Line Ads</p>
      <p className='text-white ml-6 mr-6 mt-4'>This service allows you to deliver ads to LINE's 95 million monthly users. The widespread reach enables you to pursue a variety of branding and customer acquisition opportunities with your marketing efforts.</p>
      

      <div className="mt-4 flex items-center">
          <hr className="ml-4 flex-grow border-t-0 border-b border-gray-500"/>
            <p className="mx-4 text-white">COMMUNICATION</p>
          <hr className="mr-4 flex-grow border-t-0 border-b border-gray-500"/>
      </div>
      <p className='mt-6 ml-6 mr-6 flex items-center justify-center text-gray-300'>Our services help close the distance between businesses and users, much like using LINE to communicate with friends and family.</p>
      <img style={{height:"300px",width:"400px"}} className="inline-block mt-5 ml-7" src="https://cdn.ndtv.com/tech/images/line_group_call_feature_update_google_play.jpg"/>
      <img style={{height:"300px",width:"400px"}} className="inline-block mt-5 ml-7" src="https://line.me/static/a8a76dfcb3634c0cc8ab318411a5ed6d/03979/2dfcd6684c8f541e18d888149e53bfae.png"/>
      <p className='mt-4 text-center text-2xl text-[#55DA0E]'>LINE Official Account</p>
      <p className='text-white ml-6 mr-6 mt-4'>A service which allows businesses to contact users while blending in to their daily lives just like using LINE to communicate with friends and family.</p>
      
      
       </div>

       </div>
      </div>
    </div>
    </div>
  )
}

export default ServerThree
