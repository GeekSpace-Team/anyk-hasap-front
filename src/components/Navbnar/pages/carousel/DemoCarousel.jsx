import React , { Component }from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './carousel.css'

const DemoCarousel = () => {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 7,
        autoplay: true,
        speed: 19000,
        autoplaySpeed: 100,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
  return (
    <div>
        <Slider {...settings} style={{width:'98%'}}>
           
          
          <div className='carouselItem'>
            <img style={{width:'auto', height:'auto'}} src="/img/carousel1.png" alt="" />
          </div>
          <div className='carouselItem'>
            <img style={{width:'auto', height:'auto'}} src="/img/carousel2.png" alt="" />
          </div>
          <div className='carouselItem'>
            <img style={{width:'auto', height:'auto'}} src="/img/carousel3.png" alt="" />
          </div>
          <div className='carouselItem'>
            <img style={{width:'auto', height:'auto'}} src="/img/carousel4.png" alt="" />
          </div>
          <div className='carouselItem'>
            <img style={{width:'auto', height:'auto'}} src="/img/carousel5.png" alt="" />
          </div>

          <div className='carouselItem'>
            <img style={{width:'auto', height:'auto'}} src="/img/carousel1.png" alt="" />
          </div>
          <div className='carouselItem'>
            <img style={{width:'auto', height:'auto'}} src="/img/carousel2.png" alt="" />
          </div>
          <div className='carouselItem'>
            <img style={{width:'auto', height:'auto'}} src="/img/carousel3.png" alt="" />
          </div>
          <div className='carouselItem'>
            <img style={{width:'auto', height:'auto'}} src="/img/carousel4.png" alt="" />
          </div>
          <div className='carouselItem'>
            <img style={{width:'auto', height:'auto'}} src="/img/carousel5.png" alt="" />
          </div>
        </Slider>
      </div>
  )
}
export default DemoCarousel
