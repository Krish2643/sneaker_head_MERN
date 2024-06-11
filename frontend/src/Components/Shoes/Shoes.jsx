import React, { useEffect, useState} from "react";
import "./Shoes.css";
import SideBar from "../SideBar/SideBar";
import Card from "../Card/Card";
import products from '../../assets/data'

// import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import CardSkeleton from "../CardSkeleton";

const Shoes = () => {

     const  [shoes, setShoes] = useState([]);
     const [loading, setLoading] = useState(true);

  //    const loadData = async()=>{
  //  const response = await fetch("https://sneaker-head-mern-backend.onrender.com/api/product/shoesData",
  //      {
  //       method: 'POST',
  //       headers: {
  //        'Content-Type': 'application/json'
  //            }
  //      } );
  //        const data = await response.json();
  //        setShoes(data);
  //        if(response.status === 200){
  //         setLoading(false);
  //        }
  //    }

   const loadData = ()=>{
      setShoes(products);
   }


     useEffect(()=>{
         loadData();
         setTimeout(()=>{
          setLoading(false);
         }, 2000);
     },[])

    console.log("loding", loading);

  const [selectedCategory, setSelectCategory] = useState(null);
  const [query, setQuery] = useState("");

  // value of search bar will be set here
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  
    
  // data enter in query will be filtered here
  const filteredItem = shoes?.filter(
    (item) => item.title.toLowerCase().indexOf(query.toLowerCase()) !== -1);


  // radio filter
  const handleChange = (event) => {
    setSelectCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    if (query) {
      filteredProducts = filteredItem;
    }

    if (selected) {
      filteredProducts = filteredProducts.filter(
        (item) =>
          item.category === selected ||
          item.price === selected ||
          item.title === selected
      );
    }

    return filteredProducts.map((item) => (
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
    ));
  }

  const result = filteredData(shoes, selectedCategory, query);

  return (
    <div className="men-container">
      <div className="sidebar">
        <SideBar
          handleInputChange={handleInputChange}
          handleChange={handleChange}
        />
      </div>
     <div className="men-product">{loading ? <CardSkeleton total={8} /> : result}</div>

    </div>
  );
};

export default Shoes;
