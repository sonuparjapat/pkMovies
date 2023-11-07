

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { getmovies } from '../Redux/GetMoveis/Action';
import { useSearchParams } from 'react-router-dom';

export default function CommonCarousl(){
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
          <img src="https://wallpapercave.com/wp/wp5556202.jpg" alt="image1"/>
        </div>
        <div>
          <img src="https://cdn.wallpapersafari.com/66/53/IiFMyZ.jpg" alt="Image 2" />
        </div>
        <div>
          <img src="https://i.pinimg.com/736x/ab/34/7e/ab347e0b98a800e0ceef236610801122.jpg" alt="Image3"/>
        </div>
        <div>
          <img src="https://www.wallpapers13.com/wp-content/uploads/2017/03/Marvel-Captain-America-Chris-Evans-The-Avengers-Age-of-Ultron-Movie-Wallpaper-HD-For-Desktop-1920x1080-840x525.jpg" alt="Image3"/>
        </div>
        <div>
          <img src="https://images.hdqwalls.com/download/captain-marvel-2019-10k-ym-2560x1440.jpg" alt="Image 4" />
        </div>
   
      </Carousel>
    );
  
  
};

