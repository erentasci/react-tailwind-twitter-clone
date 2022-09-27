import React, { useState } from 'react'
import SideLinks from '../components/SideLinks';
import UserBox from '../components/UserBox';
import {
  HomeIcon,
  DiscoverIcon,
  CommunitiesIcon,
  NotificationsIcon,
  MessagesIcon,
  BookMarksIcon,
  ProfileIcon,
  MoreIcon
} from "../icons/Icon";
import twitterLogo from "../images/twitter.svg" ;  

const links = [
  {
    name:"Home",
    icon: HomeIcon,
  },
  {
    name:"Discover",
    icon: DiscoverIcon,
  },
  {
    name:"Communities",
    icon: CommunitiesIcon
  },
  {
    name:"Notifications",
    icon: NotificationsIcon
  },
  {
    name:"Messages",
    icon: MessagesIcon
  },
  {
    name:"Bookmarks",
    icon: BookMarksIcon
  },
  {
    name:"Profile",
    icon: ProfileIcon
  },  
  {
    name:"More",
    icon: MoreIcon
  }, 
]

const Sidebar = () => {

  const [active, setActive] = useState("Home");

  const handleClick = (name) => {
    setActive(name)
  }


  return (
    <div className="h-screen flex flex-col justify-between w-72 py-2 px-4 sticky top-0">
      
      <div className='flex items-center justify-center hover:bg-gray-100 rounded-full w-10 h-10'>
        <img src={twitterLogo} className="w-9 h-9" alt="Twitter-logo"/>
      </div>

      <nav className='mb-10'>
        <ul>
            {
            links.map( ({name, icon}) => {
              return (
                // We passed component as prop so it is capitalized -> Icon
                <SideLinks key={name} name={name} Icon={icon} active={active} itemClick={handleClick} />
              )
            })
          }
        </ul>
      </nav>

      <button className='bg-primary-base mb-5 hover:bg-primary-dark text-white font-bold w-10/12 py-2  rounded-full' >
          Tweet 
      </button>

      <UserBox/>

    </div>
  )
}

export default Sidebar
