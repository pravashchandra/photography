import React, {useState, useEffect} from 'react';
import { FaArrowUp } from "react-icons/fa6";

const ScrollToTop = () => {
    const [isvisible, setIsvisible] = useState(false);

    const togglescroll= () =>{
        if (window.scrollY > 100){
            setIsvisible(true);
        }else{
            setIsvisible(false);
        }
    }


    useEffect(() => {
        window.addEventListener('scroll', togglescroll);
        return () =>{
        window.addEventListener('scroll', togglescroll);
        }
    }, []);
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };
  return (
    <>
    {isvisible &&
        <div className='fixed bottom-[90px] right-[30px] text-[#D3A641] text-[18px] border-2 border-[#D3A641] p-2 rounded-full cursor-pointer'>
            <FaArrowUp onClick={scrollToTop} />
        </div>
        }
    </>
  )
}

export default ScrollToTop
