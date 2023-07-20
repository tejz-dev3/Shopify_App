import React, { useState } from 'react'
import {BrowserRouter as Router, Routes,Route,  Link } from 'react-router-dom';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCheck } from '@fortawesome/free-solid-svg-icons';
import './index.css'



function Index() {
  const [isDropDownOpen, setIsSropDownOpen] = useState(false)


  const HandleIconClick = () =>{
    setIsSropDownOpen(!isDropDownOpen)
  }

  return (
    <div>
        <nav className='nav-bar-container'>
          <div className='components'>
          <div >
            <h1 className='shopify-heading'>Shopify</h1>
          </div>
          <div className='lists-container'>
                <ul className='ul-container'>
                    <li className='lists'>
                        <Link to='/' className='link'>Home</Link>
                        <Link to='products' className='link' >Products</Link>
                        <Link to='order' className='link' >Order</Link>
                    </li>
                </ul>
          </div>
            <div className='icon-container'>
               <ShoppingCartRoundedIcon className='icon'/>
            </div>
            <div className='icon-container' onClick={HandleIconClick} >
               <FontAwesomeIcon icon={faUserCheck}  className='icon-user'/>  
               {isDropDownOpen && (
                <div className='login-container'>
                  <div><Link to='/login' className='link-user'>Login</Link></div>
                  <div><Link to='/register' className='link-user'>Register</Link></div>
                </div>
               )}
            </div>
            </div>
            
        </nav>
        <>
       
     </> 
    </div>
       
   )
    
}

export default Index