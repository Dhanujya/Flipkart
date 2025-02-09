import React from 'react'
import Products from '../products/Products';
import AutoSlider from './AutoSlider';
import Category from './Category';

const Home = () => {
  return (
    
    <div>
        <div>
            <Category></Category>
        </div>
        <div>
            <AutoSlider></AutoSlider>
        </div>
        <div>
            <Products></Products>
        </div>
       
    </div>
  )
}

export default Home
