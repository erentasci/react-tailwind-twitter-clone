import React from 'react'
import FeedItem from './FeedItem';


const FeedList = () => {
  return (
    <div>
      <div className=" px-6 py-4 border-b border-gray-extraLight flex w-full space-x-3">
        
        <img src='https://pbs.twimg.com/profile_images/1486632892189093888/NszTNR6K_400x400.jpg' alt='tweet-logo' className='w-10 h-10 rounded-full'/>
    
        <FeedItem/>

      </div>
      <div className=" px-6 py-4 border-b border-gray-extraLight flex w-full space-x-3">
          
          <img src='https://pbs.twimg.com/profile_images/1486632892189093888/NszTNR6K_400x400.jpg' alt='tweet-logo' className='w-10 h-10 rounded-full'/>
      
          <FeedItem/>

      </div>
    </div>
  )
}

export default FeedList;
