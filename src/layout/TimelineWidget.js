import React from 'react'
import { SearchIcon } from '../icons/Icon';
import { Timeline } from 'react-twitter-widgets';

const TimelineWidget = () => {
  return (
    <aside className=" w-80">

        <div className='flex items-center space-x-3 px-3 py-2 m-3 bg-gray-200 rounded-full text-gray-dark focus-within:bg-white focus-within:ring-1 focus-within:ring-primary-base focus-within:text-primary-base'>
          
          <SearchIcon/>
          <input type="text" placeholder="Search Twitter"  className='w-full bg-transparent placeholder-gray-dark text-sm px-2 py-1 outline-none '/>

        </div>

        <div className='mt-4 p-4'>
        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: 'reactjs'
          }}
          options={{
            height: '600'
          }}
        />
          
        </div>

    </aside>
  )
}

export default TimelineWidget;

