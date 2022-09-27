import React from 'react'
import { ReplyIcon, ReTweetIcon, LikeIcon, ShareIcon} from "../icons/Icon"

const FeedItem = () => {
  return (
    <div>
        <div className='flex-1  mb-4'>
            
            <div className="flex items-center">

            <h4 className="font-bold">Eren Taşçı</h4>
            <span className="ml-2 text-gray-dark">@erent4sci</span>

            <div className="mx-2 bg-gray-dark h-1 w-1 border rounded-full" />

            <span className="text-gray-dark">
                1 Ocak
            </span>

            </div> 

            <img src='https://reactnative.dev/img/logo-og.png' alt='tweet-img' className='w-11/12 h-50 rounded-xl my-4 mx-1' />

            <div className='w-full px-4 py-2 mb-4' >
                <ul className='flex flex-row items-center justify-around -ml-10' >
                    <li>
                        <div className='cursor-pointer w-10 h-10 hover:bg-gray-extraLight flex items-center justify-center rounded-full'>
                            <ReplyIcon/>
                        </div>
                    </li>                
                    <li >
                        <div className='cursor-pointer w-10 h-10  hover:bg-gray-extraLight flex items-center justify-center rounded-full'>
                            <ReTweetIcon/>
                        </div>
                    </li>
                    <li>
                        <div className='cursor-pointer w-10 h-10  hover:bg-gray-extraLight flex items-center justify-center rounded-full'>
                            <LikeIcon/>
                        </div>
                    </li>
                    <li>
                        <div className='cursor-pointer w-10 h-10  hover:bg-gray-extraLight flex items-center justify-center rounded-full'>
                            <ShareIcon/>
                        </div>
                    </li>                                
                </ul>
            </div>

        </div>    
    </div>
  )
}

export default FeedItem;
