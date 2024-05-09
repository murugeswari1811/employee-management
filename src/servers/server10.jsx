import React from 'react';

const ServerTen = () => {
  return (
    <>
      <div className='flex flex-row max-h-screen sm:max-w-full gap-1 overflow-hidden'>
        <div className='bg-blue-200 min-h-screen w-[40%]'>
        <div className='m-2 rounded-l-2xl min-h-screen w-[10%] bg-[#bcb9ff]'>
            {[...Array(20)].map((n,i)=>(
            <div className='flex flex-col items-center justify-center '>
                <p className='mt-2 text-xl text-blue-600'><HiOutlineUserGroup className=''/></p>
                <p className='text-xs font-medium text-[#0571FA]'>Mopper</p>

            </div>
                 ))}
            </div>
        </div>
        <div className='bg-green-500 h-20 max-w-full'>
          <div className='flex flex-row gap-1 max-h-vh max-w-screen'>
            <div className='mt-20 bg-red-500 h-[250px] w-[400px]'>
              <div className='mt-64 bg-red-500 h-[249px] w-[400px]'></div>
            </div>
            <div className='mt-20 bg-red-500 h-[75px] w-[400px]'>
              <div className='mt-20 bg-gray-500 h-[424px] w-[400px]'></div>
            </div>
            <div className='mt-20 bg-purple-500 h-[172px] w-[400px]'>
              <div className='ml-32 bg-purple-200 h-[172px] w-[150px]'></div>
              <div className='mt-1 bg-red-500 h-[162px] w-[400px]'></div>
              <div className='mt-1 bg-red-500 h-[162px] w-[400px]'></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ServerTen;
