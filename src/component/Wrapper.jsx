import React from 'react'

const Wrapper = ({className, children}) => {
  return (
    <div className={`w-full max-w-[1280px] mx-auto px-10 ${className || "" }`}>
      {children}
    </div>
  )
}

export default Wrapper
