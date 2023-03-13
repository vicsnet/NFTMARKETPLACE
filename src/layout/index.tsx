import React from 'react'
import Navbar from '../components/Navbar'

interface IPage {
    children : JSX.Element
}

const index = ({children} : IPage) => {
  return (
    <div>
      
    <Navbar />
        {children}

    </div>
  )
}

export default index