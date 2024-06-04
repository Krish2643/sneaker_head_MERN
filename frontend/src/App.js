import './App.css';
import React, { createContext, useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/HomeM/Home';
import NavBar from './Components/NavBar/NavBar';
// import Men from './Components/Men/Men';
import Cart from './Components/Cart/Cart';
import { CartProvider} from "react-use-cart";
import Contact from './Components/Contact/Contact';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import Footer from './Components/Footer/Footer';
import Signin from './Components/SignIn/Signin';
import Signup from './Components/SignUp/Signup';
import Shoes from './Components/Shoes/Shoes';
import { SkeletonTheme } from 'react-loading-skeleton';
import { Toaster } from 'react-hot-toast';

const LoginContext = createContext();

function App() {

   const [isLogin, setIsLogin] = useState();

   useEffect(()=>{
    const is_Login = localStorage.getItem('isLogin');
    setIsLogin(is_Login);
   }, [])

   const signOut = ()=>{
      localStorage.removeItem('isLogin');
      setIsLogin(false);
   }
   const logIn = ()=>{
      setIsLogin(true); 
   }

  return (
    <>
     <div>
          <Toaster
              position="top-right"
              toastOptions={{
                  success: {
                      theme: {
                          primary: '#4aed88',
                      },
                  },
              }}
          ></Toaster>
       </div>
    <SkeletonTheme baseColor="#e6ebe1" highlightColor="#f0f8ff" >
    <BrowserRouter>
    <LoginContext.Provider value={{isLogin, signOut, setIsLogin, logIn}}>
        <CartProvider>
      <NavBar />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/men' element={<Shoes />} />
      <Route path='/men/:id' element={<ProductDetails />} />
      <Route path='/shoes' element={<Shoes />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/footer' element={<Footer/>} />
      <Route path='/signin' element={<Signin/>} />
      <Route path='/signup' element={<Signup/>} />
    </Routes>
        </CartProvider>
      </LoginContext.Provider>
    </BrowserRouter>
    </SkeletonTheme>
    </>
  );
}

export {LoginContext}
export default App;
