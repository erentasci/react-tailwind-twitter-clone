import React from 'react'

const UserBox = () => {
  return (
    <div className='hover:bg-gray-200 mb-4 px-2 py-2 flex justify-around items-center rounded-full cursor-pointer'>

      <img src='https://pbs.twimg.com/profile_images/1486632892189093888/NszTNR6K_400x400.jpg' alt='' className='w-10 h-10 rounded-full'/>

      <div className='flex flex-col mr-6'>

        <span className='font-bold text-lg' >Eren Taşçı</span>
        <span className='text-sm text-gray-700  '>@erent4sci</span>

      </div>

      <div className='flex justify-center items-center w-8 h-8 rounded-full hover:bg-gray-400'>
        <div className='w-1 h-1 bg-black ml-1 rounded-full'></div>
        <div className='w-1 h-1 bg-black ml-1 rounded-full'></div>
        <div className='w-1 h-1 bg-black ml-1 mr-1 rounded-full'></div>
      </div>

    </div>
  )
}

export default UserBox;
