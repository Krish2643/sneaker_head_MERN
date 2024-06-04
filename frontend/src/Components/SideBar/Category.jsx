import React from 'react'
import Input from './input'

const Category = ({handleChange}) => {
  return (
    <div className="sidebar-filter">
        <p className='sidebar-tagname' >Category</p>
        <label className="radio">
        <input className="radio"  onChange={handleChange} type="radio" value='' name='test1' />
        All
      </label>
      <div>
        <Input
          handleChange={handleChange}
          className='radio'
          value={'sneakers'}
          title="Sneakers"
          name="test1"
        />
        </div>
        <div>
        <Input
          handleChange={handleChange}
          className='radio'
          value={'flats'}
          title="flats"
          name="test1"
        />
        </div>
        <div>
        <Input
          handleChange={handleChange}
          className='radio'
          value={'sandals'}
          title="Sandals"
          name="test1"
        />
           </div>
           <div>
           <Input
          handleChange={handleChange}
          className='radio'
          value={'heels'}
          title="Heels"
          name="test1"
        />
           </div>
      </div>
  )
}

export default Category