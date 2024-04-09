import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className='navbar'>
        <div className='logo'>
          <img src="/images/brand_logo.png"/>
        </div>
        <ul className='navlist'>
          <li>HOME</li>
          <li>LOCATION</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </ul>
      <button className='login'>Login</button>
      </nav>
    </div>
  )
}

export default Navbar