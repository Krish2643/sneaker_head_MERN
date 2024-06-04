import React from 'react'
import './Contact.css'
import { NavLink } from 'react-router-dom'

const Contact = () => {
  return (
     <div className='content-container' >
    <div class="container">
    <div class="content">
      <div class="left-side">
        <div class="address details">
          <i class="fas fa-map-marker-alt"></i>
          <div class="topic">Address</div>
          <div class="text-one">Jodhour, NP12</div>
          <div class="text-two">Rajasthan 06</div>
        </div>
        <div class="phone details">
          <i class="fas fa-phone-alt"></i>
          <div class="topic">Phone</div>
          <div class="text-one">+0012 3456 7898</div>
          <div class="text-two">+0098 7654 1234</div>
        </div>
        <div class="email details">
          <i class="fas fa-envelope"></i>
          <div class="topic">Email</div>
          <div class="text-one">parmarkrish2643@gmail.com</div>
        </div>
      </div>
      <div class="right-side">
        <div class="topic-text">Send us a message</div>
        <p className='topic-text-para' >Got a question or just want to say hello. Go ahead...</p>
      <form action="https://formspree.io/f/xyyrjkje"  
         method='POST'
      >
        <div class="input-box">
          <input type="text" name='name' required placeholder="Enter your name" />
        </div>
        <div class="input-box">
          <input type="text" name='email' required placeholder="Enter your email" />
        </div>
        <div class="input-box message-box">
          <textarea name='message' required
          placeholder='Enter Your Message' />
        </div>
        <div class="button">
          <input type="submit" value="Send Now" />
        </div>
      </form>
    </div>
    </div>
   </div>
  </div>
  )
}

export default Contact