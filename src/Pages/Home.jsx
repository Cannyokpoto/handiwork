import React from 'react'
import "./CSS/Home.css"
import Hero from '../Components/Hero/Hero'
import Category from '../Components/Category/Category'
import WhoWeAre from '../Components/WhoWeAre/WhoWeAre'
import DropDown from '../Components/DropDown/DropDown'


function Home() {
  return (
    <div className='home'>
      <Hero />
      <Category />
      <WhoWeAre />
      {/* <DropDown /> */}
    </div>
  )
}

export default Home
