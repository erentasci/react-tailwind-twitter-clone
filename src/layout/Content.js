import React from 'react'
import { PopulerIcon } from "../icons/Icon";
import TweetBox from '../components/TweetBox'; 
import Divider from '../components/Divider';
import FeedList from '../components/FeedList';

const Content = () => {
  return (
    <main className="flex flex-1 flex-col border-r border-l border-gray-extraLight">
       
       <header className='flex justify-between items-center p-4 border-b bg-white z-10 border-gray-extraLight sticky sticky top-0'>

          <span className="text-xl  text-gray-900 font-bold" >Home</span>
          <PopulerIcon />

       </header>

       <div className='flex p-4 space-x-4'>

          <img src='https://pbs.twimg.com/profile_images/1486632892189093888/NszTNR6K_400x400.jpg' alt='send-tweet' className='w-10 h-10 rounded-full'/>

          <TweetBox/>

       </div>


       <Divider/>

       <FeedList/>
       
    </main>
  )
}

export default Content
