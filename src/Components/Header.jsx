import React, { useState } from 'react'
import { LOGO_URL } from '../utils/Constants';
import { Link } from 'react-router-dom';

const Header = () => {
 const [btnName , setBtnName]= useState("Login");
  // let btnName = "login";
  return (
    <div className='header'>
      <div className="logo">
        <img src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
        <li><Link className="my-link" to="/">Home</Link></li>
        <li><Link className="my-link" to="/about">About</Link></li>
        <li><Link className="my-link" to="/contact">Contact</Link></li>
        <li>Cart</li>
        <button className='login'  onClick={()=>{
          setBtnName("logout")
          btnName === "Login" ? setBtnName("Logout"):setBtnName("Login")
        }}>
          {btnName}</button>
        </ul>
      </div>
    </div>
  )
}

export default Header;
