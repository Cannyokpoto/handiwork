import React from 'react'
import PHOTOS from '../images'
import './ProviderDetails.css'
import { IoLocationOutline } from "react-icons/io5";


function ProviderDetails() {

  return (
    

    <div class="provider">
        <div class='provider-hero'>
            <img src={PHOTOS.technicians} alt="cover" className='cover' />
            <img src={PHOTOS.whoWoman} alt="dp" className='dp' />
            <h4>Canny LTD</h4>
        </div>

        <div class="provider-details">
            <h5>About</h5>

            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, 
                vero eius quasi porro voluptate libero, officiis, fugiat quaerat laboriosam natus 
                culpa sint earum praesentium rem id ea. Necessitatibus, doloremque soluta?
            </p>
            
            <h5>Contact Information</h5>

            <p><IoLocationOutline className='locate' /> Lorem ipsum dolor sit amet consectetur</p>
        </div>
    </div>
  )
}

export default ProviderDetails;
