import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import './index.css'
import { initializeApp } from 'firebase/app';
import axios from 'axios'
import GoogleSignIn from '../GoogleSignIn'
//import FbSignIn from '../FbSIgnIn'
 
function Index() {
  const [userData, setUserData] = useState({
    firstName : '',
    lastName: '',
    email: '',
    password: '',
    mobile: '',
    confirmpassword : ''
  })

  const HandleInputData = (e) =>{
    const {name, value} = e.target;
    setUserData((prevData) =>({
      ...prevData, [name]:value,
    }))
  } 

   const handelRegisterClick = (e) =>{
    e.preventDefault()
    console.log(userData)
    axios.post('https://shopify-e0de5-default-rtdb.asia-southeast1.firebasedatabase.app/register.json',
     userData)
     .then(()=> alert("Submitted Successfully"))
     .catch((error) => console.error('Error submitting data:', error));
   }
  
  return (
    <div className='bg-container'>
      <div className='button-container'>
           {/* <button className='google-icon'> 
              <FontAwesomeIcon icon={faGoogle}/> 
              Signup with Gmail
            </button> */}
            <GoogleSignIn />
            {/* <FbSignIn /> */}
            <button className='btn-fb'>
            <FontAwesomeIcon icon={faFacebook}  />
              Signup with Facebook
            </button>
      </div>
      <div className='Register-container'>
        <div>
           <h1>Register to Shopify</h1>
        </div>
         
        
         <form className='form-container' onSubmit={handelRegisterClick}>
           <div className='grid-container'>

             <div className='label'>
              <label htmlFor='firstName'>Firstname</label>
              <input type='text' name='firstName' placeholder='Enter first name' onChange={HandleInputData}/>
             </div>

             <div className='label'>
                <label htmlFor='lastName'>Lastname</label>
                <input type='text' name='lastName' placeholder='Enter last name' onChange={HandleInputData}/>
              </div>

             <div className='label'>
              <label htmlFor='email'>Email</label>
              <input type='text' name='email'placeholder='Enter E-mail' onChange={HandleInputData}/>
             </div>

            
              <div className='label'>
                <label htmlFor='mobile'>Mobile</label>
                <input type='text' name='mobile' placeholder='Enter Mobile Number' onChange={HandleInputData}/>
              </div>

              <div className='label'>
              <label htmlFor='password'>Password</label>
              <input type='password' name='password' placeholder='Enter Password' onChange={HandleInputData}/>
             </div>

              <div className='label'>
                <label htmlFor='confirmpassword'>Confirm Password:</label>
                <input type='password' name='confirmpassword' placeholder='Enter ConfirmPassword' onChange={HandleInputData}/>
              </div>
           
           </div>

           <div className='register-button-container'>
           <button className='register-btn'  type='submit'>Register</button>
           </div>
         </form>
           
           
           
      </div>
    </div>
  )
}

export default Index