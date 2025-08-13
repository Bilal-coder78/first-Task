import React, { useRef, useState } from 'react'
import { FaAngleDown } from "react-icons/fa6";
import prev from "../../assets/prev.png"
import next from "../../assets/next.png"
import "./nav.css"

function Nav({image}) {
  let menu = useRef()
  let mobile = useRef()
  const [visible, setvisible] = useState(false)
  return (
    <>
      <header className='head'>
        <nav id='nav'>
          {visible ? <div className="ham">
            <div className="ham1">About us</div>
            <div className="ham1">Our Services</div>
            <div className="ham1">Contact us</div>
          </div> : null}
          <div className="leftnav">
            <img src={image} className='logo' alt='' />
          </div>
          <div className="rightnav">
            <ul className='list-items'>
              <li>Home</li>
              <li>Services</li>
              <li>About</li>
              <li className='item' onClick={() => {
                setvisible(prev => !prev)
              }}>Pages<FaAngleDown /></li>
              <li>Testimonial</li>
            </ul>
            <button className='btn-nav'>Contact Support</button>
          </div>
          <div className="hamburger" ref={menu} onClick={()=>{
            mobile.current.classList.toggle("active-mobile")
            menu.current.classList.toggle("active-ham")
          }}>
            <div className="ham2"></div>
            <div className="ham2"></div>
            <div className="ham2"></div>
          </div>
           <div className="mobile" ref={mobile}>
            <ul className='mobile-list-items'>
              <li>Home</li>
              <li>Services</li>
              <li>About</li>
              <li className='item' onClick={() => {
                setvisible(prev => !prev)
              }}>Pages<FaAngleDown /></li>
              <li>Testimonial</li>
            <button className='mobile-btn-nav'>Contact Support</button>
            </ul>
          </div>
        </nav>
          <img src={prev} alt='' className='prev' />
          <img src={next} alt='' className='next' />
        
        <div className="header-text">
          <h2 className='header-h2'>Get
            <em> ready</em><br />
            for your business
            <br />
            & upgrade
            <em> all aspects</em>
          </h2>
          <div className="line"></div>
          <p className='header-p'>Mexant HTML5 Template is provided for free of charge. This layout is based on Boostrap 5 CSS framework. Anyone can download and edit for any professional website. Thank you for visiting TemplateMo website.</p>
          <div className="header-btns">
            <div className="header-btn1">Discover More</div>
            <div className="header-btn2">Contact Us</div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Nav