import React from 'react'
import { useCart } from "react-use-cart";
import './Cart.css'
import Footer from '../Footer/Footer';


const Cart = () => {

    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        emptyCart,
        removeItem,
        updateItemQuantity,
      } = useCart();

      if (isEmpty) return (
        <div className='cart-empty-div'>
          <h1 className='cart-empty'>Your cart is empty</h1>
        </div>
      )

  return (
     <div> 
       <div className='cart-container' >
       <div className="cart-box">
           <h3>Cart ({totalUniqueItems}) total Items: ({totalItems}) </h3>
           <table className="cart-table">
           <tr>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
           </tr>
 
                {items.map((item)=>(
                  <tr key={item.id} >
                    <td>
                       <div className="cart-info">
                          <img src={item.img} alt="shoe-img" />
                       <div>
                           <p>{item.title}</p>
                           <small>Price: $ {item.price}</small><br/>
                           <br />
                          <button className='cart-item-remove'
                              onClick={() => removeItem(item.id)}
                          >Remove</button>
                       </div>
                       </div>
                    </td>
                  <td>
                    <button onClick={()=>updateItemQuantity(item.id, item.quantity - 1 )} >-</button>
                    <input type="number" value={item.quantity} />
                    <button onClick={()=>updateItemQuantity(item.id, item.quantity + 1 )}
                    >+</button>
                  </td>
                  <td>${item.price * item.quantity}</td>
                  </tr>
                ))}           
           </table>
               <div className="cart-total-price">
                   <table>
                     <tr>
                       <td>Subtotal</td>
                       <td>${cartTotal}</td>
                     </tr>
                     <tr>
                       <td>Tax</td>
                       <td>$35.00</td>
                     </tr>
                     <tr>
                       <td>Total</td>
                       <td>${cartTotal + 35}</td>
                     </tr>
                   </table>
               </div>
               <div className='cart-div-btn' >
                <button className='cart-btn' onClick={()=> emptyCart()} >Clear Cart</button>
               </div>
       </div> 
       </div>
        <Footer />
      </div>
  )
}

export default Cart

/*  
<tr>
                  <td>
                    <div className="cart-info">
                      <img src="logo192.png" alt="logo" />
                      <div>
                        <p> Red shoes</p>
                        <small>Price: $70.00</small>
                        <br />
                        <a href="">Remove</a>
                      </div>
                    </div>
                  </td>
                  <td><input type="number" value='1' /></td>
                  <td>$70.00</td>
                </tr>
*/

/*  

<h2 className='cart' >hello world</h2>
        <h3 className='cart' >Cart ({totalUniqueItems}) total Items: ({totalItems}) </h3>
             <ul>
                {items.map((item)=>(
                  <li className='cart' key={items.id} >
                       {item.title}
                       <button onClick={() => removeItem(item.id)}>&times;</button>
                  </li>
                ))}
             </ul>


<div className='cart'>
      <h3>Cart ({totalUniqueItems}) total Items: ({totalItems}) </h3>
       <div>
        {items.map((item, index)=>{
            <img className='cart-img' src={item.img} />
        })}
       </div>
    </div>

*/







/*
<div className='cart-container' >
        <div className="cart-box">
        <h3>Cart ({totalUniqueItems}) total Items: ({totalItems}) </h3>
              <table className='cart-table'>
                <tr>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                </tr>

                {/* {items.map((item)=>{
                  <tr key={item.id}>
                    <td>
                    <div className="cart-info">
                      <img src={item.img} alt="logo" />
                      <div>
                        <p>{item.title}</p>
                        <small>Price: {item.price}</small>
                        <br />
                        <button className='cart-item-remove'
                        onClick={() => removeItem(item.id)}
                        >Remove</button>
                      </div>
                    </div>
                  </td>
                  <td><input type="number" value='1' /></td>
                  <td>{item.price}</td>
                  </tr>
                })} */
              //}
                
  //            </table>
              

    //  {
        /* <div className="cart-total-price">
        <table>
          <tr>
            <td>Subtotal</td>
            <td>$200.00</td>
          </tr>
          <tr>
            <td>Tax</td>
            <td>$35.00</td>
          </tr>
          <tr>
            <td>Total</td>
            <td>$235.00</td>
          </tr>
        </table>
      </div> */
    //}

              // </div>
      // </div>