import React from 'react'

const Container = ({children}) => {

  //It contains other components.We wrote child as props {children}
  return (
    <div className="max-w-7xl min-h-screen mx-auto flex">

        { children }
      
    </div>
  )
}

export default Container;
