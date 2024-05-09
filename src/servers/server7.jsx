import React from 'react'

const ServerSeven = () => {
  return (
    <div className='m-1 flex justify-start min-w-screen'>
        <div className='ml-2 absolute bg-blue-500 h-20 min-w-full'></div>
      <div className='relative bg-blue-200 h-screen w-20 '></div>

      <div >
        <div className='relative'>
            <div className='ml-2 mt-20 bg-red-500 h-60 w-96'></div>
            <div className='ml-2 mt-2 bg-red-500 h-60 w-96 '></div>
            <div className='absolute bottom-96 ml-64 bg-red-500 h-24 w-105'></div>
            <div className='absolute top-0 left-72 right-0 ml-28 mt-2 bg-red-500 h-24 w-96'>
            <div className='absolute top-0 right-0 ml-28 mt-24 bg-gray-400 h-96 w-96'></div>

            </div>
            <div >
                <div style={{marginLeft:"410px"}} className='mt-2 bg-purple-500 h-36 w-96 absolute left-96 ml-96 -right-60 bottom-0 top-0'>
                    <div className='ml-28 bg-purple-100 h-36 w-36'></div>
                    <div className='mt-2  bg-red-500 h-40 w-96'></div>
                    <div className='mt-2  bg-red-500 h-40 w-96'></div>

                </div>
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default ServerSeven;
