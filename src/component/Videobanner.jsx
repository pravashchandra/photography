import React from 'react'
import Wrapper from './Wrapper'

const Videobanner = () => {
  return (
    <div className='py-[70px] md:py-[100px] overflow-hidden'>

        <video  autoPlay loop muted className='w-[1920px] h-[100%] md:h-[550PX]'>
          <source src="/videos/videobanner.mp4" type="video/mp4" />
        </video>
      
    </div>

  )
}

export default Videobanner
