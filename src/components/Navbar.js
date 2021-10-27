import { useState } from 'react';
import { Link } from 'react-scroll';
import React from "react";
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';
import styles from "../Navbar.css"

const Navbar = () => {

     const [navbarColor, setNavbarColor] = useState(false);

     const changeBackground = () => {
       if(window.scrollY >= 80){
          setNavbarColor(true);
       }
       else {
          setNavbarColor(false);
       }
    }

    window.addEventListener("scroll", changeBackground)
    return (
        <>
        <header className="header-area">
        <StickyHeader
        header={
        <div className={navbarColor ? 'navgition change' : 'navgition navgition-transparent'}>
        <div className="container">
        <div className="row">
        <div className="col-lg-12">
      
        <nav className='navbar navbar-expand-lg'>
        <a className="navbar-brand" href="#">
        <img src="assets/images/logo.svg" alt="Logo" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarOne" aria-controls="navbarOne" aria-expanded="false" aria-label="Toggle navigation">
        <span className="toggler-icon"></span>
        <span className="toggler-icon"></span>
        <span className="toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse sub-menu-bar" id="navbarOne">
        
        <ul className="navbar-nav m-auto">
        <li className='nav-item active'>
        <Link to="home" smooth={true} duration={1000}>HOME
             </Link>
        </li>
        
        <li className="nav-item">
        <Link to="service" smooth={true} duration={1000}>SERVICES
             </Link>
        </li>

        <li className="nav-item">
             <Link to="pricing" smooth={true} duration={1000}>PRICING
             </Link>
        </li>

        <li className="nav-item">
        <Link to="testimonial" smooth={true} duration={1000}>Testimonial
             </Link>
        </li>

        <li className="nav-item">
        <Link to="contact" smooth={true} duration={1000}>CONTACT
             </Link> 
        </li>

        <li className="nav-item">
        <a href="/createtestimonials">Add Testimonial</a>
        </li>

        </ul>
        </div>
 
        <div className="navbar-social d-none d-sm-flex align-items-center">
        <span>FOLLOW US</span>
        <ul>
        <li><a href="#"><i className="lni-facebook-filled"></i></a></li>
        <li><a href="#"><i className="lni-twitter-original"></i></a></li>
        <li><a href="#"><i className="lni-instagram-original"></i></a></li>
        <li><a href="#"><i className="lni-linkedin-original"></i></a></li>
        </ul>
        </div>
        </nav> 
           
        </div>
        </div> 
        </div> 
        </div> 
     }></StickyHeader>
        <div id="home" className="header-hero bg_cover" style={{ backgroundImage: "url(assets/images/header-bg.jpg)" }} >
        <div className="container">
        <div className="row justify-content-center">
        <div className="col-xl-8 col-lg-10">
        <div className="header-content text-center">
        <h3 className="header-title">Handcrafted Landing Page for Startups and SaaS Businesses</h3>
        <p className="text">A simple, customizable, and, beautiful SaaS business focused landing page to make your project closer to launch!</p>
        <ul className="header-btn rounded-buttons">
        <li><a className="main-btn rounded-three" href="#">GET IN TOUCH</a></li>
        <li><a className="main-btn rounded-four video-popup" href="../../watch.html?v=r44RKWyfcFw">WATCH THE VIDEO <i className="lni-play"></i></a></li>
        </ul>
        </div> 
        </div>
        </div>
        </div> 
        <div className="header-shape">
        <img src="assets/images/header-shape.svg" alt="shape" />
        </div>
        </div> 
        </header>
       
        </>
    );
   };
   
   export default Navbar;