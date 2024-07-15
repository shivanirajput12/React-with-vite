import React from 'react'

const Header = () => {
  return (
    <div className='header'>
      <div className="logo">
        <img src="https://t3.ftcdn.net/jpg/02/41/30/72/360_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg" alt="logo image" />
      </div>
      <div className="nav-items">
        <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

export default Header;
