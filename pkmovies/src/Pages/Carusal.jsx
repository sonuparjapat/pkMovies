

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { getmovies } from '../Redux/GetMoveis/Action';
import { useSearchParams } from 'react-router-dom';

const AmazingCarousel = () => {
  const [moviedata,setData]=useState([])
  const dispatch=useDispatch()
  const [searhParams]=useSearchParams()
  const alldata=useSelector((state)=>state.getmoviesreducer)
  const {isLoading,isError,data}=alldata
 


    return (
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showStatus={false}
        autoPlay={true}
        interval={3000} // Change slides every 3 seconds
      >
      <div>
          <img src="https://images2.alphacoders.com/724/thumbbig-724132.webp" alt="image1"/>
        </div>
        <div>
          <img src="https://images2.alphacoders.com/589/thumbbig-589553.webp" alt="Image 2" />
        </div>
        <div>
          <img src="https://images8.alphacoders.com/133/thumbbig-1337270.webp" alt="Image 3" />
        </div>
   
      </Carousel>
    );
  
  
};

export default AmazingCarousel;
