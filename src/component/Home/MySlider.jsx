import React from 'react'
import Card from './Gallery/Gallery';
import Slider from 'react-slick';


const data = [
    {img:"./Images/Home/pravash2.png"},
    {img:"./Images/Home/pravash2.png"},
    {img:"./Images/Home/pravash2.png"},
    {img:"./Images/Home/pravash2.png"},
    {img:"./Images/Home/pravash2.png"},
    {img:"./Images/Home/pravash2.png"},
    {img:"./Images/Home/pravash2.png"},
    {img:"./Images/Home/pravash2.png"}
]

const MySlider = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
      breakpoint: 1280,
      settings:{
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 1000,
      settings:{
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 650,
      settings:{
        slidesToShow: 1,
      }
    },
    ],
  };

  return (
    <>
    <div className='px-20 mb-20'>
     <Slider {...settings}>
        {data.map((el, index) => <Card key={index} img={el.img} />)}
      </Slider> 
      
    </div>
     
    </>
  )
}

export default MySlider
