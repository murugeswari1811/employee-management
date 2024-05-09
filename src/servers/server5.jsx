import React from 'react'
import { useLocation } from 'react-router-dom';
import { TiThMenu } from "react-icons/ti";
import { PiTelevisionSimpleFill } from "react-icons/pi";
import { FaSellcast } from "react-icons/fa6";
import { HiMiniUserGroup } from "react-icons/hi2";
import { FaIdeal } from "react-icons/fa";
import { FaMobileScreen } from "react-icons/fa6";
import { SiPrime } from "react-icons/si";
import { MdOutlineElectricalServices } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdNewReleases } from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";



const ServerFive = () => {
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
          <div className='shadow-md px-2 py-2 text-[#FC2278] font-bold text-xl text-center'>Categories</div>
          <div className='flex items-center justify-center flex-col'>
              <div className='mt-4 bg-[#FC2278] h-10 w-56 rounded-2xl text-black flex items-center text-xl px-8 text-white'><TiThMenu className='mr-12 text-black'/>All</div>
              <div className='mt-3 bg-[#FC2278] h-10 w-56 rounded-2xl text-black flex items-center text-m px-8 text-white'><PiTelevisionSimpleFill className='mr-4 text-black '/>Amazon Mini TV</div>
              <div className='mt-3 bg-[#FC2278] h-10 w-56 rounded-2xl text-black flex items-center text-m px-8 text-white'><FaSellcast className='mr-4 text-black'/>Sell</div>
              <div className='mt-3 bg-[#FC2278] h-10 w-56 rounded-2xl text-black flex items-center text-m px-8 text-white'><HiMiniUserGroup className='mr-4 text-black'/>Best Sellers</div>
              <div className='mt-3 bg-[#FC2278] h-10 w-56 rounded-2xl text-black flex items-center text-m px-8 text-white'><FaIdeal className='mr-4 text-black'/>Today's Deals</div>
              <div className='mt-3 bg-[#FC2278] h-10 w-56 rounded-2xl text-black flex items-center text-m px-8 text-white'><FaMobileScreen className='mr-4 text-black'/>Mobiles</div>
              <div className='mt-3 bg-[#FC2278] h-10 w-56 rounded-2xl text-black flex items-center text-m px-8 text-white'><SiPrime className='mr-4 text-black'/>Prime</div>
              <div className='mt-3 bg-[#FC2278] h-10 w-56 rounded-2xl text-black flex items-center text-m px-8 text-white'><MdOutlineElectricalServices className='mr-4 text-black'/>Electronics</div>
              <div className='mt-3 bg-[#FC2278] h-10 w-56 rounded-2xl text-black flex items-center text-m px-8 text-white'><RiCustomerService2Fill className='mr-4 text-black'/>Customer Service</div>
              <div className='mt-3 bg-[#FC2278] h-10 w-56 rounded-2xl text-black flex items-center text-m px-8 text-white'><MdNewReleases className='mr-4 text-black'/>New Releases</div>
              <div className='mt-3 bg-[#FC2278] h-10 w-56 rounded-2xl text-black flex items-center text-m px-8 text-white'><FaHandsHelping className='mr-4 text-black'/>Help</div>

          </div>
      </div>
      <div className='bg-gray-300 overflow-y-scroll' style={{ flex: '0 0 auto', width: '900px' }}>
          <div className='shadow-md px-2 py-2 text-[#FC2278] font-bold text-xl text-center'>Products</div>


          <div className="pt-8 pl-16 gap-4 min-h-screen bg-[#FC2278] flex flex-wrap">
  <div className="ml-4 mt-4 w-56 h-96 p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all transform duration-500">
    <img className="w-48 h-40 object-cover rounded-2xl" src="https://m.media-amazon.com/images/I/71oLoFUSWjL._SX679_.jpg" alt="" />
    <div className="mt-4">
      <div className='text-white bg-[#FC2278] font-bold px-2 py-1 h-8 w-20 rounded-2xl'>16% off</div>
      <h1 className="text-xl font-bold text-gray-700">Purple Curtain</h1>
      <p className="text-m mt-2 text-gray-700"><span className='text-[#FC2278]'>-16%</span>  ₹1,710</p>
      <p className='text-xs '>M.R.P.:<span className='line-through'>₹1,999</span></p>
      
      <div className="mt-2 mb-4 flex justify-end">
        <p className='mr-24'>4.5 <FaStar className='text-[#FCD422]'/></p>
        <button className="text-lg block font-semibold py-2 px-4 text-[#FC2278] hover:text-white bg-black rounded-lg shadow hover:shadow-md transition duration-300"><FaShoppingCart /></button>
      </div>
    </div>
  </div>

  <div className="ml-4 mt-4 w-56 h-96 p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all transform duration-500">
    <img className="w-48 h-40 object-cover rounded-2xl" src="https://m.media-amazon.com/images/I/81lVR+Bpf8L._SX679_.jpg" alt="" />
    <div className="mt-4">
      <div className='text-white bg-[#FC2278] font-bold px-2 py-1 h-8 w-20 rounded-2xl'>76% off</div>
      <h1 className="text-xl font-bold text-gray-700">Triple Seater Sofa</h1>
      <p className="text-m mt-2 text-gray-700"><span className='text-[#FC2278]'>-76%</span>  ₹1,139</p>
      <p className='text-xs '>M.R.P.:<span className='line-through'>₹3,999</span></p>
      
      <div className="mt-2 mb-4 flex justify-end">
        <p className='mr-24'>4.1 <FaStar className='text-[#FCD422] '/></p>
        <button className="text-lg block font-semibold py-2 px-4 text-[#FC2278] hover:text-white bg-black rounded-lg shadow hover:shadow-md transition duration-300"><FaShoppingCart /></button>
      </div>
    </div>
  </div>

  <div className="ml-4 mt-4 w-56 h-96 p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all transform duration-500">
    <img className="w-48 h-40 object-cover rounded-2xl" src="https://m.media-amazon.com/images/I/71NPAmyGzgL._SX569_.jpg" alt="" />
    <div className="mt-4">
      <div className='text-white bg-[#FC2278] font-bold px-2 py-1 h-8 w-20 rounded-2xl'>77% off</div>
      <h1 className="text-xl font-bold text-gray-700"> Black Trolley</h1>
      <p className="text-m mt-2 text-gray-700"><span className='text-[#FC2278]'>-77%</span>  ₹2,123</p>
      <p className='text-xs '>M.R.P.:<span className='line-through'>₹7,999</span></p>
      
      <div className="mt-2 mb-4 flex justify-end">
        <p className='mr-24'>4.4 <FaStar className='text-[#FCD422]'/></p>
        <button className="text-lg block font-semibold py-2 px-4 text-[#FC2278] hover:text-white bg-black rounded-lg shadow hover:shadow-md transition duration-300"><FaShoppingCart /></button>
      </div>
    </div>
  </div>

  <div className="ml-4 mt-4 w-56 h-96 p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all transform duration-500">
    <img className="w-48 h-40 object-cover rounded-2xl" src="https://m.media-amazon.com/images/I/41Dv8-ykD+L._SY300_SX300_.jpg" alt="" />
    <div className="mt-4">
      <div className='text-white bg-[#FC2278] font-bold px-2 py-1 h-8 w-20 rounded-2xl'>14% off</div>
      <h1 className="text-xl font-bold text-gray-700">Black Dial Watch</h1>
      <p className="text-m mt-2 text-gray-700"><span className='text-[#FC2278]'>-14%</span>  ₹22,710</p>
      <p className='text-xs '>M.R.P.:<span className='line-through'>₹39,999</span></p>
      
      <div className="mt-2 mb-4 flex justify-end">
        <p className='mr-24'>3.8 <FaStar className='text-[#FCD422]'/></p>
        <button className="text-lg block font-semibold py-2 px-4 text-[#FC2278] hover:text-white bg-black rounded-lg shadow hover:shadow-md transition duration-300"><FaShoppingCart /></button>
      </div>
    </div>
  </div>

  <div className="ml-4 mt-4 w-56 h-96 p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all transform duration-500">
    <img className="w-48 h-40 object-cover rounded-2xl" src="https://m.media-amazon.com/images/I/61fN9Ad6epL._SY879_.jpg" alt="" />
    <div className="mt-4">
      <div className='text-white bg-[#FC2278] font-bold px-2 py-1 h-8 w-20 rounded-2xl'>16% off</div>
      <h1 className="text-xl font-bold text-gray-700">Green Kurti</h1>
      <p className="text-m mt-2 text-gray-700"><span className='text-[#FC2278]'>-16%</span>  ₹1,310</p>
      <p className='text-xs '>M.R.P.:<span className='line-through'>₹2,999</span></p>
      
      <div className="mt-2 mb-4 flex justify-end">
        <p className='mr-24'>3.5 <FaStar className='text-[#FCD422]'/></p>
        <button className="text-lg block font-semibold py-2 px-4 text-[#FC2278] hover:text-white bg-black rounded-lg shadow hover:shadow-md transition duration-300"><FaShoppingCart /></button>
      </div>
    </div>
  </div>

  <div className="ml-4 mt-4 w-56 h-96 p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all transform duration-500">
    <img className="w-48 h-40 object-cover rounded-2xl" src="https://m.media-amazon.com/images/I/71OLIpPoEZL._SY695_.jpg" alt="" />
    <div className="mt-4">
      <div className='text-white bg-[#FC2278] font-bold px-2 py-1 h-8 w-20 rounded-2xl'>44% off</div>
      <h1 className="text-xl font-bold text-gray-700">Necklace</h1>
      <p className="text-m mt-2 text-gray-700"><span className='text-[#FC2278]'>-44%</span>  ₹1,910</p>
      <p className='text-xs '>M.R.P.:<span className='line-through'>₹5,999</span></p>
      
      <div className="mt-2 mb-4 flex justify-end">
        <p className='mr-24'>5.0 <FaStar className='text-[#FCD422]'/></p>
        <button className="text-lg block font-semibold py-2 px-4 text-[#FC2278] hover:text-white bg-black rounded-lg shadow hover:shadow-md transition duration-300"><FaShoppingCart /></button>
      </div>
    </div>
  </div>

  <div className="ml-4 mt-4 w-56 h-96 p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all transform duration-500">
    <img className="w-48 h-40 object-cover rounded-2xl" src="https://m.media-amazon.com/images/I/61KuXgb153L._SY695_.jpg" alt="" />
    <div className="mt-4">
      <div className='text-white bg-[#FC2278] font-bold px-2 py-1 h-8 w-20 rounded-2xl'>24% off</div>
      <h1 className="text-xl font-bold text-gray-700">Colorful Bangle</h1>
      <p className="text-m mt-2 text-gray-700"><span className='text-[#FC2278]'>-24%</span>  ₹310</p>
      <p className='text-xs '>M.R.P.:<span className='line-through'>₹999</span></p>
      
      <div className="mt-2 mb-4 flex justify-end">
        <p className='mr-24'>4.0 <FaStar className='text-[#FCD422]'/></p>
        <button className="text-lg block font-semibold py-2 px-4 text-[#FC2278] hover:text-white bg-black rounded-lg shadow hover:shadow-md transition duration-300"><FaShoppingCart /></button>
      </div>
    </div>
  </div>

  <div className="ml-4 mt-4 w-56 h-96 p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all transform duration-500">
    <img className="w-48 h-40 object-cover rounded-2xl" src="https://m.media-amazon.com/images/I/51IryStPy5L._SX695_.jpg" alt="" />
    <div className="mt-4">
      <div className='text-white bg-[#FC2278] font-bold px-2 py-1 h-8 w-20 rounded-2xl'>14% off</div>
      <h1 className="text-xl font-bold text-gray-700">Women Footwear</h1>
      <p className="text-m mt-2 text-gray-700"><span className='text-[#FC2278]'>-14%</span>  ₹1,100</p>
      <p className='text-xs '>M.R.P.:<span className='line-through'>₹1,399</span></p>
      
      <div className="mt-2 mb-4 flex justify-end">
        <p className='mr-24'>4.1 <FaStar className='text-[#FCD422]'/></p>
        <button className="text-lg block font-semibold py-2 px-4 text-[#FC2278] hover:text-white bg-black rounded-lg shadow hover:shadow-md transition duration-300"><FaShoppingCart /></button>
      </div>
    </div>
  </div>

  <div className="ml-4 mt-4 w-56 h-96 p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all transform duration-500">
    <img className="w-48 h-40 object-cover rounded-2xl" src="https://m.media-amazon.com/images/I/51UGQAw5qvL._SY300_SX300_QL70_FMwebp_.jpg" alt="" />
    <div className="mt-4">
      <div className='text-white bg-[#FC2278] font-bold px-2 py-1 h-8 w-20 rounded-2xl'>51% off</div>
      <h1 className="text-xl font-bold text-gray-700">Channapatna Toys</h1>
      <p className="text-m mt-2 text-gray-700"><span className='text-[#FC2278]'>-51%</span>  ₹983</p>
      <p className='text-xs '>M.R.P.:<span className='line-through'>₹1,999</span></p>
      
      <div className="mt-2 mb-4 flex justify-end">
        <p className='mr-24'>4.0 <FaStar className='text-[#FCD422]'/></p>
        <button className="text-lg block font-semibold py-2 px-4 text-[#FC2278] hover:text-white bg-black rounded-lg shadow hover:shadow-md transition duration-300"><FaShoppingCart /></button>
      </div>
    </div>
  </div>
</div>




      </div>

      </div>
    </div>
    </div>
  )
}

export default ServerFive
