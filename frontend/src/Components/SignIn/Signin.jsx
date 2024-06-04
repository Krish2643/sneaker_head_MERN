import React, { useEffect, useState } from 'react'
import './Signin.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { LoginContext } from '../../App';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import toast from 'react-hot-toast';

const Signin = () => {

     const navigate = useNavigate();
     const [showLoader, setShowLoader] = useState(false);
     const [formData, setFormData] = useState({
       email: "",
       password: "",
       })
      
    const handleChange = (event)=>{
      const {name, value} = event.target;
       setFormData((prevData)=>({
        ...prevData,
        [name] : value
       }))      
       }


     const handleLogin = async(e)=>{
        e.preventDefault();

        if( !formData.email || !formData.password){
            toast.error('email & password is required');
            return ;
        }

        const response =  await fetch('http://localhost:8000/api/auth/login',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(formData)
         });
         if(!response.ok){console.log(response)};
         const data=await response.json();
         if(data.success){
             localStorage.setItem('token',data.jwtToken);
             navigate('/');
         }else{
            // console.log(data);
            toast.error("Invalid password or email");
         }
         console.log(data);
     }

   return (
    <section class="signup-container signup-forms">
            <div class="signup-form login">
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={showLoader}
               >        
                <CircularProgress color="inherit" />
            </Backdrop>
                <div class="signup-form-content">
                    <header className='signup-header'>Login</header>
                    <form action="#">
                        <div class="field input-field">
                            <input type="email" placeholder="Email" name="email" class="input" onChange={handleChange} value={formData.email} />
                        </div>
                        <div class="field input-field">
                            <input type="password" placeholder="Password" name="password" class="password" onChange={handleChange} value={formData.password} />
                            <i class='bx bx-hide eye-icon'></i>
                        </div>
                        <div class="field button-field">
                            <button type='submit'
                            onClick={handleLogin} 
                            >Login</button>
                        </div>
                    </form>
                    <div class="form-link">
                        <span>Don't have an account? <NavLink to="/signup" class="link signup-link">Signup</NavLink></span>
                    </div>
                </div>
            </div>

        </section>
  )
}

export default Signin