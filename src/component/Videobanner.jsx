import React from 'react'
import Wrapper from './Wrapper'

const Videobanner = () => {
  return (
    <div className='py-[70px] md:py-[70px] overflow-hidden'>

        <video  autoPlay loop muted controls className='w-full h-[100%]'>
          <source src="/videos/videobanner.mp4" type="video/mp4" />
        </video>
      
    </div>

  )
}

export default Videobanner
