import React, { useState } from "react";
import './CategoryBox.css'
import { GiClothes } from "react-icons/gi";
import { FaArrowRightLong } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
import { TbHeartStar } from "react-icons/tb";
import { MdEngineering } from "react-icons/md";
import { FaCar } from "react-icons/fa";
import { FaMotorcycle } from "react-icons/fa6";
import { GiPencilBrush } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { GoLaw } from "react-icons/go";
import { MdOutlineHealthAndSafety } from "react-icons/md";

function CategoryBox() {
    const [showMore, setShowMore] = useState(false);
  return (
    <div className='category-box'>
      <h3>Browse by category</h3>

      <div className='category-layout'>
        <div className='category-row'>
            <span>
                <GiClothes className='categoery-icon' />
                <p>Fashion</p>
                <button>Explore <FaArrowRightLong className='arrow' /></button>
            </span>
            <span>
                <TbHeartStar className='categoery-icon' />
                <p>Hospitality</p>
                <button>Explore <FaArrowRightLong className='arrow' /></button>
            </span>
            <span>
                <MdEngineering className='categoery-icon' />
                <p>Technicians</p>
                <button>Explore <FaArrowRightLong className='arrow' /></button>
            </span>
            <span>
                <FaCar className='categoery-icon' />
                <p>Automobile</p>
                <button>Explore <FaArrowRightLong className='arrow' /></button>
            </span>
        </div>

        {showMore ?
        <div className='category-row'>
            <span>
                <FaMotorcycle className='categoery-icon' />
                <p>Logistics</p>
                <button>Explore <FaArrowRightLong className='arrow' /></button>
            </span>
            <span>
                <GiPencilBrush className='categoery-icon' />
                <p>Beauticians</p>
                <button>Explore <FaArrowRightLong className='arrow' /></button>
            </span>
            <span>
                <FaHome className='categoery-icon' />
                <p>Domestic</p>
                <button>Explore <FaArrowRightLong className='arrow' /></button>
            </span>
            <span>
                <GiTeacher className='categoery-icon' />
                <p>Tutors</p>
                <button>Explore <FaArrowRightLong className='arrow' /></button>
            </span>
        </div> : "" }

        {showMore ?
        <div className='category-row'>
            <span>
                <GoLaw className='categoery-icon' />
                <p>Legal Services</p>
                <button>Explore <FaArrowRightLong className='arrow' /></button>
            </span>

            <span>
                <MdOutlineHealthAndSafety className='categoery-icon' />
                <p>Health</p>
                <button>Explore <FaArrowRightLong className='arrow' /></button>
            </span>
        </div> : "" }

        <div className="more-less" onClick={() => setShowMore(!showMore)}>
            { showMore ? <RiArrowDropUpLine className='less'/> : <RiArrowDropDownLine className='more' /> }
        </div>
      </div>
    </div>
  )
}

export default CategoryBox;
