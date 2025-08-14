import React from 'react'
import "./Service.css"
import { IoTrashBinSharp } from "react-icons/io5";
import { FaChargingStation } from "react-icons/fa6";
import { FaCloud } from "react-icons/fa";
import { FaSuitcase } from "react-icons/fa6";
import { FaArchway } from "react-icons/fa";
import { FaPuzzlePiece } from "react-icons/fa6";

function Service() {
  return (
    <div id='service'>
      <div className="box1">
        <div className="first-box">
          <div className="box-content">
            <div className="logo1"><IoTrashBinSharp /></div>
            <div className="text-content">
              <h2>CSS Templates</h2>
              <p>TemplateMo website is the best for you to explore and download free website templates.</p>
            </div>
          </div>
        </div>
        <div className="second-box">
          <div className="box-content">
            <div className="logo1"><FaCloud /></div>
            <div className="text-content">
          <h2>HTML5 Web Pages</h2>
          <p>Templates are based on Bootstrap 5 CSS framework. You can easily adapt or modify based on your needs.</p>
          </div>
          </div>
        </div>
      </div>
      <div className="box2">
        <div className="first-box">
          <div className="box-content">
            <div className="logo1"><FaChargingStation /></div>
            <div className="text-content">
              <h2>Responsive Designs</h2>
              <p>All of our CSS templates are 100% free to use for commercial or business websites.</p>
            </div>
          </div>
        </div>
        <div className="second-box">
          <div className="box-content">
            <div className="logo1"><FaSuitcase /></div>
            <div className="text-content">
              <h2>Mobile and Tablet ready!</h2>
              <p>Our HTML CSS templates are well-tested on mobile, tablet, and desktop compatibility.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="box3">
        <div className="first-box">
          <div className="box-content">
            <div className="logo1"><FaArchway /></div>
            <div className="text-content">
              <h2>Fast Customer Support</h2>
              <p>Do not be hesitated to contact us if you have any question or concern about our templates.</p>
            </div>
          </div>
        </div>
        <div className="second-box">
          <div className="box-content">
            <div className="logo1"><FaPuzzlePiece /></div>
            <div className="text-content">
              <h2>Fully Customizable</h2>
              <p>If you have any idea or suggestion about new templates, feel free to let us know.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service