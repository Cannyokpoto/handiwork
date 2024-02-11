import React from 'react';
import './ServiceProvider.css';
import { MdVerified } from "react-icons/md";
import { IoIosStar } from "react-icons/io";

function ServiceProvider(props) {
  return (
      <div className="category" key={props.id}>
          <div className='photo'>
              <img src={props.image} alt="" />
              <MdVerified className='ver-badge' />
          </div>

          <div className="details">
              <h5>{props.name}</h5>
              <h6>{props.skill}</h6>
              <h3>{props.no_off_jobs}+</h3>
              <p>Jobs Executed</p>
          
              <div className="stars">
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
              </div>
          </div>
      </div>
  )
}

export default ServiceProvider;
