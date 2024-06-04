import React from 'react'
import Input from './input'

const Price = ({handleChange}) => {
  return (
    <div className="sidebar-filter">
          <p className='sidebar-tagname' >Price</p>

        <label className="radio">
        <input className="radio"  onChange={handleChange} type="radio" value='' name="test2" />
        All
      </label>

          <div>
          <Input
          handleChange={handleChange}
          className='radio'
          value={50}
          title="$0 - $50"
          name="test2"
        />
         </div>
         <div>
          <Input
          handleChange={handleChange}
          className='radio'
          value={100}
          title="$50 - $100"
          name="test2"
        />
         </div>
         <div>
          <Input
          handleChange={handleChange}
          className='radio'
          value={150}
          title="$100 - $150"
          name="test2"
        />
         </div>
         <div>
          <Input
          handleChange={handleChange}
          className='radio'
          value={200}
          title="$150 - $200"
          name="test2"
        />
         </div>
         <div>
          <Input
          handleChange={handleChange}
          className='radio'
          value={300}
          title="Over $200"
          name="test2"
        />
         </div>

         
      </div>
  )
}

export default Price