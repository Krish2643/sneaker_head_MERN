import React, { useEffect, useState} from 'react'
import './Men.css'
import SideBar from '../SideBar/SideBar'
import Card from '../Card/Card'
import products from '../../assets/data'
import CardSkeleton from '../CardSkeleton'


const Men = () => {

    const [selectedCategory, setSelectCategory] = useState(null);
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
          setTimeout(()=>{
            setLoading(false);
          }, 10000);
    },[])

        // value of search bar will be set here
     const handleInputChange = (event) => {
      setQuery(event.target.value);
    };

    const filteredItem = products.filter((item)=>
      item.title.toLowerCase().indexOf(query.toLowerCase()) !== -1 
    );

       // radio filter
    const handleChange = (event) =>{
      setSelectCategory(event.target.value);
    }

   function filteredData(products, selected, query){
        let filteredProducts = products;

        if(query){
          filteredProducts = filteredItem;
        }

        if(selected){
          filteredProducts = filteredProducts.filter((item)=>
            item.category === selected ||
            item.price === selected ||
            item.title === selected
          )}

        return filteredProducts.map((item)=>(
          <Card 
           key={item.id}
           img={item.img}
           title={item.title}
           price={item.price}
           prevPrice={item.prevPrice}
           company={item.company}
           category={item.category}
           item={item}
          />

        ))
   }

    const result = filteredData(products, selectedCategory, query);

  return ( 
      <div className='men-container' >
        <div className="sidebar">
         <SideBar 
         handleInputChange={handleInputChange}
         handleChange={handleChange}  />
         </div>
          <div className="men-product">
         {result}
          </div>
      </div>
  )
}

export default Men