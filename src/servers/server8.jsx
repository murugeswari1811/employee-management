import React from 'react';

const ServerEight = () => {
  return (
    <>
      <div className='flex flex-row max-h-screen sm:max-w-full gap-1 overflow-hidden'>
        <div className='bg-blue-200 min-h-screen w-24'></div>
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

export default ServerEight;
