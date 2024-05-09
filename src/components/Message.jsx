import React from 'react'

const Message = () => {
  return (
    <>
        <div className="min-h-screen bg-gray-700 text-white flex justify-center items-center">
      <div className='max-w-lg'>
      <div className="flex hover:bg-gray-900 hover:opasity-80 px-4 py-1">
        <img className="h-10 w-10 rounded-full" src="https://www.befunky.com/images/wp/wp-2021-01-linkedin-profile-picture-after.jpg?auto=avif,webp&format=jpg&width=944"/>
      <div>
      <p className='flex items-baseline'>
        <span className="text-green-500 ml-4 font-medium">Alisa John</span>
        <span className='ml-4 text-sm text-gray-400'>03/05/2024</span>

      </p>
      <p className='pl-4 text-gray-300 '>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos dignissimos vel illum quas animi adipi asperiores ducr tenetur dolorum quasi officia quod aspernatur, numquam enim.
      </p>
      </div>
      </div>
      <div className='mt-4 hover:bg-gray-900 hover:opasity-80 px-4 py-1'>
       <p className='text-gray-300 pl-14 '>
         Sit amet consectetur, adipisicing elit. Exercitationem placeat dignrunt ut incidunt ab laborum. Deleniti a quasi doloremque quae cupiditate consequuntur hic nesciunt labore voluptatum unde rem vel, consequatur fugit aperiam recusandae magni, doloribus aliquam. Exercitationem, incidunt. Numquam nulla et iure reiciendis.
        </p>
      </div>
      <div className='mt-4 hover:bg-gray-900 hover:opasity-80 px-4 py-1'>
       <p className='text-gray-300 pl-14'>
       A room without books is like a body without a soul
        </p>
      </div>

      </div>
     </div>
    </>
  )
}

export default Message
