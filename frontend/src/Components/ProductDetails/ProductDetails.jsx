import React, { useEffect, useState, useContext } from 'react'
import './ProductDetails.css'
import { useParams } from 'react-router-dom'
import data from '../../assets/data'
import './ProductDetails.css'
import { useCart } from 'react-use-cart'
import { LoginContext } from '../../App'
import { useNavigate } from 'react-router-dom';

const ProductDetails = () => {  
    const [proid, setProid] = React.useState({});
    const params = useParams();
    const {addItem} = useCart();
    const navigate = useNavigate();
    const {isLogin} = useContext(LoginContext);

    React.useEffect(()=>{
        
        setProid(data.filter((value) =>value.id == params.id ))
        console.log(proid);
        // const val = data.filter((value) =>{  return value.id === params.id; });
        //  console.log(val);
        //    console.log(proid[0].id);
          
   }, [params.id]) 

  return (
       <div>
    { proid[0] ? (
    <div className='product-details-container'> 
           <div className="product-details-img">
                <img className='product-details-img-src' src={proid[0].img} alt="shoes_image" />
           </div>
           <div className="product-details-description">
            <h1 className="product-details-heading">{proid[0].title}</h1>
            <div className="product-details-price"> Price :  
            <del className='product-details-delet-price'> {proid[0].prevPrice}</del>
            <span>${proid[0].price}</span>
            </div>
            <div className='product-details-type' >
                <p> Company : {proid[0].company} - {proid[0].category}</p>
            </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non possimus nisi necessitatibus quasi debitis ipsum repudiandae dignissimos atque et esse?</p>
            <button 
            onClick={ isLogin === "true" ? ()=> addItem(proid[0]) : 
            ()=> navigate('/signin', {replace: true}) }
            className='product-details-btn '>Add to Cart</button>
           </div>
    </div>
    ) : <h1 className='product-details-loadingpage' >Loading...</h1>}
       </div>
  )
}

export default ProductDetails