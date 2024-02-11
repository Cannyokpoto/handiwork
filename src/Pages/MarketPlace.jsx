import React from 'react';
import CategoryBox from '../Components/CategoryBox/CategoryBox';
import FeaturedProviders from '../Components/FeaturedProviders/FeaturedProviders';
import './CSS/MarketPlace.css';

function MarketPlace() {
  return (
    <div className='market-place'>
      <CategoryBox />
      // <FeaturedProviders />
    </div>
  )
}

export default MarketPlace;
