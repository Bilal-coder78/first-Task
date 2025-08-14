import React, { useRef, useState } from 'react'
import { FaAngleDown } from "react-icons/fa6";
import prev from "../../assets/prev.png"
import next from "../../assets/next.png"
import "./nav.css"
import { Link } from 'react-scroll';

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
          <div className="leftnav" >
            <Link to='home'  smooth={true} duration={500}><img src={image} className='logo' alt='' /></Link>
          </div>
          <div className="rightnav">
            <ul className='list-items'>
              <Link to="home" activeClass='active' spy={true} smooth={true} duration={500}><li>Home</li></Link>
              <Link to="service" activeClass='active' spy={true} smooth={true} duration={500}><li>Services</li></Link>
              <Link to="about" activeClass='active' spy={true} smooth={true} duration={500}><li>About</li></Link>
              <Link to="pages" activeClass='active' spy={true} smooth={true} duration={500}><li className='item' onClick={() => {
                setvisible(prev => !prev)
              }}>Pages<FaAngleDown /></li></Link>
              <Link to="testi" activeClass='active' spy={true} smooth={true} duration={500}><li>Testimonial</li></Link>
            </ul>
            <Link to='contact' activeClass='active' spy={true} smooth={true} duration={500}><button className='btn-nav'>Contact Support</button></Link>
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
              <Link to="home" activeClass='active' spy={true} smooth={true} duration={500}><li>Home</li></Link>
              <Link to="service" activeClass='active' spy={true} smooth={true} duration={500}><li>Services</li></Link>
              <Link to="about" activeClass='active' spy={true} smooth={true} duration={500}><li>About</li></Link>
              <Link to="pages" activeClass='active' spy={true} smooth={true} duration={500}><li className='item' onClick={() => {
                setvisible(prev => !prev)
              }}>Pages<FaAngleDown /></li></Link>
              <Link to="testi" activeClass='active' spy={true} smooth={true} duration={500}><li>Testimonial</li></Link>
            <Link to='contact' activeClass='active' spy={true} smooth={true} duration={500}><button className='mobile-btn-nav'>Contact Support</button></Link>
            </ul>
          </div>
        </nav>
          <img src={prev} alt='' className='prev' />
          <img src={next} alt='' className='next' />
        
        <div id='home' className="header-text">
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