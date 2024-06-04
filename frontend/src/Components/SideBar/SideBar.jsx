import React from 'react'
import './SideBar.css'
import Category from './Category'
import Price from './Price'
 

const SideBar = ({handleChange, handleInputChange}) => {
  return (
    <div className='sidebar-container' >
       <input type="search"  onChange={handleInputChange} className='search' name='search' placeholder='Enter your search shoes' />
       
       <Category  handleChange={handleChange} />
       <Price handleChange={handleChange} />

    </div>
  )
}

export default SideBar