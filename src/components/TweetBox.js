import React, {useState} from 'react'
import { ImageIcon, GIFIcon, PollIcon, EmojiIcon,  ScheduleIcon} from '../icons/Icon';

const TweetBox = () => {


   const [text, setText] = useState(""); 

  return (
    <div className='flex flex-col flex-1 mt-1 px-2'>
        
        <textarea onChange={ (e) => setText(e.target.value) } value={text}  className="bg-white outline-none  w-full text-xl placeholder-gray-dark overflow-hidden resize-none pb-4" placeholder="What's happening?"/>
      
        <div className='flex items-center justify-between'>
        
            <div className='flex -ml-2'>
                <div className='flex cursor-pointer items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100'>
                    <ImageIcon/>
                </div>
                <div className='flex cursor-pointer items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100'>
                    <GIFIcon/>
                </div>
                <div className='flex cursor-pointer items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100'>
                    <PollIcon/>
                </div>
                <div className='flex cursor-pointer items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100'>
                    <EmojiIcon/>
                </div>     
                <div className='flex cursor-pointer items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100'>
                    <ScheduleIcon/>
                </div>  
            </div>
 
            <button className='text-white font-bold bg-primary-base hover:bg-primary-dark rounded-full px-6 py-2'>Tweet</button>

        </div>


    </div>

    
  )
}

export default TweetBox
