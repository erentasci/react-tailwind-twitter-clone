import React from 'react'

const SideLinks = ({name, Icon, active, itemClick }) => {

    const isActive = (name === active);

  return (
    <li className='group  cursor-pointer' onClick={() => itemClick(name)}>
        <a href={name.toLowerCase()} className='pointer-events-none  cursor-pointer'>

            <div className='inline-block'>
                
                <div className={`flex items-center p-1.5 py-2 rounded-full mt-2 group-hover:bg-primary-light group-hover:text-primary-base ${isActive ? "text-primary-base" : ""} `} >
                    
                    <Icon/>

                <span className='font-bold mx-3'>
                    {name}
                </span>

                </div>
            </div>

        </a>
    </li>
  )
}

export default SideLinks;
