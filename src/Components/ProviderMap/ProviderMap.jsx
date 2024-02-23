import React from 'react';
import { FaPhone } from "react-icons/fa";
import './ProviderMap.css'

const ProviderMap = () => {

      const lat = 6.65494;
      const  lng = 3.32328;
  

  return (
    <div className='map-wrapper'>
          
        <iframe
          title="map"
          className="my-map"
          frameBorder="0"
          src={`https://maps.google.com/maps?q=${lat},${lng}&h1=es;&output=embed`}
          allowFullScreen
          ></iframe>

      
        <div className="cta">
            <div className="number-wrapper"><span>070324</span> ****</div>

            <a href="tel:+2348138957283" className="call-btn"><FaPhone className='phone' /></a>
        </div>
    </div>
  );
};

export default ProviderMap;