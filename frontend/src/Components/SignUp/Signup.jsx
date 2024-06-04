import React, { useState } from 'react'
import './Signup.css'
import { NavLink, useNavigate } from 'react-router-dom'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { faL } from '@fortawesome/free-solid-svg-icons';
import toast from 'react-hot-toast';


const Signup = () => {
    
    const navigate = useNavigate();
    const [showLoader, setShowLoader] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        name: ""
    })

    const handleChange = (event)=>{
          const {name, value} = event.target;
           setFormData((prevData)=>({
            ...prevData,
            [name] : value
           }))
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();

        if( !formData.email || !formData.password || !formData.name){
            toast.error('Email and Password is required');  
            return;    
        }

        setShowLoader(false);
        const response =  await fetch('https://sneaker-head-mern-backend.onrender.com/api/auth/signup',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(formData)
         });
         const data=await response.json();
         console.log("signup",data);
         if(data.success){
            toast.success("Sign Up successful")
            localStorage.setItem('token',data.jwtToken);
             setShowLoader(true);
             navigate("/");
         }else{
            if(data === "credintial should be unique"){
                  toast.error('User already exist');
            }
            else if(data.errors[0].path === 'email'){
                toast.error("Invalid Email");
                return;
            }else if(data.errors[0].path === 'password'){
                toast.error("Password must be least 5 charecters long");
                return;
            }else{
                toast.error("Name must be least 3 charecters long")
            }
         }
    }
        
  return (
    <section className="signup-container signup-forms">
            <div className="signup-form login">
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={showLoader}
               >        
                <CircularProgress color="inherit" />
            </Backdrop>
                <div className="signup-form-content">
                    <header className='signup-header'>Signup</header>
                    <form action="#">
                        <div className="field input-field">
                            <input type="text" placeholder="Enter your name" name="name"  className="input" onChange={handleChange} value={formData.name} />
                            {/* <i className='bx bx-hide eye-icon'></i> */}
                        </div>
                        <div className="field input-field">
                            <input type="email" placeholder="Email" name="email" className="input" onChange={handleChange} value={formData.email} />
                        </div>
                        <div class="field input-field">
                            <input type="password" placeholder="Password" name="password" className="password" onChange={handleChange} value={formData.password} />
                            <i className='bx bx-hide eye-icon'></i>
                        </div>
                        <div className="field button-field">
                            <button type='submit'
                            onClick={handleSubmit} 
                            >Signup</button>
                        </div>
                    
                    </form>
                    <div class="form-link">
                        <span>Already have an account? <NavLink to="/signin" className="link signup-link">Login</NavLink></span>
                    </div>
                </div>
                {/* <div className="line"></div> */}
                {/* <Login /> */}
            </div>

        </section>
  )
}

export default Signup