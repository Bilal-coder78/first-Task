import React, { useState } from 'react'
import { FaAngleDown } from "react-icons/fa6";
import logo from "../../assets/logo.png"
import "./nav.css"

function Nav() {
  const [visible,setvisible] = useState(false)
  return (
    <header className='head'>
    <div id='nav'>
      {visible?<div className="ham">
        <div class="ham1">About us</div>
        <div class="ham1">Our Services</div>
        <div class="ham1">Contact us</div>
      </div>:null}
        <div className="leftnav">
            <img src={logo} className='logo'/>
        </div>
        <div className="rightnav">
          <ul className='list-items'>
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
            <li className='item' onClick={()=>{
              setvisible(prev=>!prev)
            }}>Pages<FaAngleDown /></li>
            <li>Testimonial</li>
          </ul>
          <button className='btn-nav'>Contact Support</button>
        </div>
    </div>
    </header>
  )
}

export default Nav