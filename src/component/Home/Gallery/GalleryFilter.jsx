import React, {useState, useEffect} from 'react'
import ServicesGallery from './GalleryPhotos' 
import Gallery from './Gallery'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const GalleryFilter = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2.5
    }
  };

  const weddingSection = ServicesGallery[0];

  const[ getImages, setGetImages ] = useState([weddingSection]);

      const filterResult = (catItem) => {
        const result = ServicesGallery.filter((curData) =>{
          return curData.title === catItem;
        });
        setGetImages(result);
      }
      return (
        <>
        <div>
        <h2 className='font-coromont text-[30px] md:text-[32px] lg:text-[38px] py-[18px] md:py-[5px] xl:text-[45px] leading-[1.3em] md:leading-[1.6em] text-center'>Our Gallery</h2>
        </div>
        {/* Mobile Title Slider */}


        <div className='md:hidden pl-[10px] text-center'>
          <Carousel responsive={responsive}
          swipeable={true}
          arrows={false}
          autoPlay={false}
          >
            <div className=' relative py-[18px] md:py-[5px] xl:py-[25px]' onClick={() =>filterResult('Prewedding') }>
              <input type="radio" name="category" defaultChecked id="baby_shower" className='peer absolute w-[100%] h-[100%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] opacity-0 cursor-pointer'/>
              <label htmlFor="baby_shower" className='rounded-sm peer-checked:text-white peer-checked:bg-gold peer-checked:px-[20px] peer-checked:pt-[7px] peer-checked:pb-[10px] text-[15px] lg:text-[17px] z-10'>Prewedding</label>
            </div>

            <div className=' relative py-[18px] md:py-[5px] xl:py-[25px]' onClick={() =>filterResult('Weddings') }>
              <input type="radio" name="category" id="baby_shower" className='peer absolute w-[100%] h-[100%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] opacity-0 cursor-pointer'/>
              <label htmlFor="baby_shower" className='rounded-sm peer-checked:text-white peer-checked:bg-gold peer-checked:px-[20px] peer-checked:pt-[7px] peer-checked:pb-[10px] text-[15px] lg:text-[17px] z-10'>Weddings</label>
            </div>

            <div className=' relative py-[18px] md:py-[5px] xl:py-[25px]' onClick={() =>filterResult('Engagement') }>
              <input type="radio" name="category" id="traveling" className='peer absolute w-[100%] h-[100%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] opacity-0 cursor-pointer'/>
              <label htmlFor="traveling" className='rounded-sm peer-checked:text-white peer-checked:bg-gold peer-checked:px-[20px] peer-checked:pt-[7px] peer-checked:pb-[10px] text-[15px] lg:text-[17px] z-10'>Engagement</label>
            </div>
            
            <div className=' relative py-[18px] md:py-[5px] xl:py-[25px]' onClick={() =>filterResult('Birthday') }>
              <input type="radio" name="category" id="journey" className='peer absolute w-[100%] h-[100%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] opacity-0 cursor-pointer'/>
              <label htmlFor="journey" className='rounded-sm peer-checked:text-white peer-checked:bg-gold peer-checked:px-[20px] peer-checked:pt-[7px] peer-checked:pb-[10px] text-[15px] lg:text-[17px] z-10'>Birthday</label>
            </div>    

            <div className=' relative py-[18px] md:py-[5px] xl:py-[25px]' onClick={() =>filterResult('Baby Shower') }>
              <input type="radio" name="category" id="weddings" className='peer absolute w-[100%] h-[100%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] opacity-0 cursor-pointer'/>
              <label htmlFor="weddings" className='rounded-sm peer-checked:text-white peer-checked:bg-gold peer-checked:px-[20px] peer-checked:pt-[7px] peer-checked:pb-[10px] text-[15px] lg:text-[17px] z-10'>Baby Shower</label>
            </div>    
          </Carousel>
        </div>

          <div className='hidden md:flex justify-center items-center px-20 m-auto gap-6 md:gap-10 text-[20px] overflow-hidden '>

          <div className=' relative py-[18px] md:py-[5px] xl:py-[25px]' onClick={() =>filterResult('Prewedding') }>
            <input type="radio" name="category" defaultChecked id="baby_shower" className='peer absolute w-[100%] h-[100%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] opacity-0 cursor-pointer'/>
            <label htmlFor="baby_shower" className='rounded-sm peer-checked:text-white peer-checked:bg-gold peer-checked:px-[20px] peer-checked:pt-[7px] peer-checked:pb-[10px] text-[15px] lg:text-[17px] z-10'>Prewedding</label>
          </div>

          <div className=' relative py-[18px] md:py-[5px] xl:py-[25px]' onClick={() =>filterResult('Weddings') }>
            <input type="radio" name="category" id="baby_shower" className='peer absolute w-[100%] h-[100%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] opacity-0 cursor-pointer'/>
            <label htmlFor="baby_shower" className='rounded-sm peer-checked:text-white peer-checked:bg-gold peer-checked:px-[20px] peer-checked:pt-[7px] peer-checked:pb-[10px] text-[15px] lg:text-[17px] z-10'>Weddings</label>
          </div>

          <div className=' relative py-[18px] md:py-[5px] xl:py-[25px]' onClick={() =>filterResult('Engagement') }>
            <input type="radio" name="category" id="traveling" className='peer absolute w-[100%] h-[100%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] opacity-0 cursor-pointer'/>
            <label htmlFor="traveling" className='rounded-sm peer-checked:text-white peer-checked:bg-gold peer-checked:px-[20px] peer-checked:pt-[7px] peer-checked:pb-[10px] text-[15px] lg:text-[17px] z-10'>Engagement</label>
          </div>
            
          <div className=' relative py-[18px] md:py-[5px] xl:py-[25px]' onClick={() =>filterResult('Birthday') }>
            <input type="radio" name="category" id="journey" className='peer absolute w-[100%] h-[100%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] opacity-0 cursor-pointer'/>
            <label htmlFor="journey" className='rounded-sm peer-checked:text-white peer-checked:bg-gold peer-checked:px-[20px] peer-checked:pt-[7px] peer-checked:pb-[10px] text-[15px] lg:text-[17px] z-10'>Birthday</label>
          </div>    

          <div className=' relative py-[18px] md:py-[5px] xl:py-[25px]' onClick={() =>filterResult('Baby Shower') }>
            <input type="radio" name="category" id="weddings" className='peer absolute w-[100%] h-[100%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] opacity-0 cursor-pointer'/>
            <label htmlFor="weddings" className='rounded-sm peer-checked:text-white peer-checked:bg-gold peer-checked:px-[20px] peer-checked:pt-[7px] peer-checked:pb-[10px] text-[15px] lg:text-[17px] z-10'>Baby Shower</label>
          </div>    
  
        </div>

          

      {getImages?.map((items)=>{ return <Gallery key={items.id}  items={items}/>})}

        </>
      )
    }
export default GalleryFilter
