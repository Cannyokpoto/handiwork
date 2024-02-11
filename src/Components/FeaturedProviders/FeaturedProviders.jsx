import React from 'react'
import { FeaturedData, CategoryData } from '../Assets/Data'
import './FeaturedProviders.css'
import ServiceProvider from '../ServiceProvider/ServiceProvider'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function FeaturedProviders() {
  
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 0,
    initialSlide: 0,
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
    <div className="slider-container">
      <Slider {...settings} className="slider">
            {
                CategoryData.map((featured) =>{
                    const{id, image, name, skill, no_off_jobs} = featured;
                    return(
                        
                            <ServiceProvider 
                                key={id}
                                image={image}
                                name={name}
                                skill={skill}
                                no_off_jobs={no_off_jobs}
                            />

                    )
                })
            }
      </Slider>
    </div>
  )
};

export default FeaturedProviders;