import React from 'react'
import './Home.css'
import img1 from '../../assets/images/Shoes.png'

const Home = () => {
  return (
    <div className='home-container' > 
    <div className="home-text">
         <h3 className="home-small-heading"> Sneaker Collection</h3>
         <h2 className='home-big-heading'
          >GOOD <span className='home-heading-green-color' >SHOES</span> <br />TAKE YOU <br /> GOOD <span className='home-heading-green-color'> PLACES </span></h2>
          <button className='home-shop-btn' >Shop Now</button>
     </div>
     <div className="home-image">
         <img src={img1}
         className='home-img' 
         alt="shoes-img" />
     </div>
    </div>
  )
}

export default Home