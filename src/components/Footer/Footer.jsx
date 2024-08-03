import React from "react";
import "./Footer.css";
import { Link,NavLink } from "react-router-dom";
import { FaLinkedin, FaInstagram, FaEnvelope,FaYoutube,FaTwitter,FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./logiGiga.jpeg" alt="" width={120} />
          <span className="secondaryText">
            Our vision is Safe and Quality Construction<br />
            For a Growing and Developing India
          </span>
        </div>

        {/* Right-Side */}
        <div className="Rc flexColStart f-right f-Rhead">
          <span className="primaryText">Giga Lego Construction</span>
          <span className="secondaryText">Jammu and Kashmir, India</span>
          <div className="flexCenter f-menu ">
                {/* Social Media Links */}
                <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="socialLink">
                    <FaLinkedin size={34} />
                </a>
                <a href="https://www.instagram.com/your-instagram" target="_blank" rel="noopener noreferrer" className="socialLink">
                    <FaInstagram size={34} />
                </a>
                <a href="mailto:your-email@gmail.com" className="socialLink">
                    <FaEnvelope size={34} />
                </a>
                <a href="mailto:your-email@gmail.com" className="socialLink">
                    <FaFacebook size={34} />
                </a>
                <a href="mailto:your-email@gmail.com" className="socialLink">
                    <FaYoutube size={34} />
                </a>
                <a href="mailto:your-email@gmail.com" className="socialLink">
                    <FaTwitter size={34} />
                </a>
            </div>
          <div className="flexCenter f-menu">
            <NavLink to={'/AboutUs'}>About Us</NavLink>
            <NavLink to={'/Services'}>Services</NavLink>
            <NavLink to={'/ContactUs'}>Contact Us</NavLink>
            {/* <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
