import logo from "../svgImage/logo1.svg"
import logo11 from "../svgImage/logo2.svg"
import logo22 from "../svgImage/logo3.svg"
import { useEffect, useState } from "react"
import axios from "axios"
import React from "react"

import Slider from "react-slick";

const Main = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
    const [testimonialsData, setTestimonialsData] = useState([]);

    useEffect(() => {
        let isComponentMounted = true;
        const fetchTestimonials = async () => {
        const response = await axios.get('http://localhost:5000/api/testimonials')
        const newData = await response.data;
        // console.log(newData);
        if(isComponentMounted) {
            setTestimonialsData(newData);
        }
      };
      fetchTestimonials();
          return () => {
              isComponentMounted = false;
          }
      }, [])

    const deleteTestimonials = async (id) => {
        await axios.delete(`http://localhost:5000/api/testimonials//${id}`)
        .then(() => {
            getData();
        })
    }

    const editTestimonials = async (data) => {
        let { _id, name, post, companyName, description, photo, } = data;
            localStorage.setItem('ID', _id);
            localStorage.setItem('Name', name);
            localStorage.setItem('Designation', post);
            localStorage.setItem('Company Name', companyName)
            localStorage.setItem('Description', description);
            localStorage.setItem('Profile Image', photo)
    }

    const getData = () => {
        axios.get('http://localhost:5000/api/testimonials')
        .then((response) => {
            setTestimonialsData(response.data);
        })
      }

    //   let profile = '/%20+%20uploads/data.photo';
    //   var image = "profile".replace('/%20+%20','');
// console.log(ret); 

    return (
        <>
        <section id="service" className="services-area">
        <div className="container">
        <div className="row">
        <div className="col-lg-6">
        <div className="section-title pb-10">
        <h4 className="title">Crafted For</h4>
        <p className="text">Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!</p>
        </div> 
        </div>
        </div> 
        <div className="row">
        <div className="col-lg-8">
        <div className="row">
        <div className="col-md-6">
        <div className="services-content mt-40 d-sm-flex">
        <div className="services-icon">
        <i className="lni-bolt"></i>
        </div>
        <div className="services-content media-body">
        <h4 className="services-title">Startup</h4>
        <p className="text">Short description for the ones<br/> who look for something new.</p>
        </div>
        </div> 
        </div>
        <div className="col-md-6">
        <div className="services-content mt-40 d-sm-flex">
        <div className="services-icon">
        <i className="lni-bar-chart"></i>
        </div>
        <div className="services-content media-body">
        <h4 className="services-title">SaaS Business</h4>
        <p className="text">Short description for the ones<br/> who look for something new.</p>
        </div>
        </div> 
        </div>
        <div className="col-md-6">
        <div className="services-content mt-40 d-sm-flex">
        <div className="services-icon">
        <i className="lni-brush"></i>
        </div>
        <div className="services-content media-body">
        <h4 className="services-title">Agency</h4>
        <p className="text">Short description for the ones<br/> who look for something new.</p>
        </div>
        </div> 
        </div>
        <div className="col-md-6">
        <div className="services-content mt-40 d-sm-flex">
        <div className="services-icon">
        <i className="lni-bulb"></i>
        </div>
        <div className="services-content media-body">
        <h4 className="services-title">App Landing</h4>
        <p className="text">Short description for the ones<br/> who look for something new.</p>
        </div>
        </div> 
        </div>
        </div> 
        </div> 
        </div> 
        </div> 
        <div className="services-image d-lg-flex align-items-center">
        <div className="image">
        <img src="assets/images/services.png" alt="Services" />
        </div>
        </div> 
        </section>


        <section id="pricing" className="pricing-area">
        <div className="container">
        <div className="row justify-content-center">
        <div className="col-lg-6">
        <div className="section-title text-center pb-10">
        <h4 className="title">Our Pricing</h4>
        <p className="text">Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!</p>
        </div> 
        </div>
        </div> 
        <div className="row justify-content-center">
        <div className="col-lg-4 col-md-7 col-sm-9">
        <div className="single-pricing mt-40">
        <div className="pricing-header text-center">
        <h5 className="sub-title">Basic</h5>
        <span className="price">$ 199</span>
        <p className="year">per year</p>
        </div>
        <div className="pricing-list">
        <ul>
        <li><i className="lni-check-mark-circle"></i> Carefully crafted components</li>
        <li><i className="lni-check-mark-circle"></i> Amazing page examples</li>
        <li><i className="lni-check-mark-circle"></i> Super friendly support team</li>
        <li><i className="lni-check-mark-circle"></i> Awesome Support</li>
        </ul>
        </div>
        <div className="pricing-btn text-center">
        <a className="main-btn" href="#">GET STARTED</a>
        </div>
        <div className="buttom-shape">
        <img src={logo} alt="logo1"/>
        </div>
        </div> 
        </div>
        <div className="col-lg-4 col-md-7 col-sm-9">
        <div className="single-pricing pro mt-40">
        <div className="pricing-baloon">
        <img src="assets/images/baloon.svg" alt="baloon" />
        </div>
        <div className="pricing-header">
        <h5 className="sub-title">Pro</h5>
        <span className="price">$ 399</span>
        <p className="year">per year</p>
        </div>
        <div className="pricing-list">
        <ul>
        <li><i className="lni-check-mark-circle"></i> Carefully crafted components</li>
        <li><i className="lni-check-mark-circle"></i> Amazing page examples</li>
        <li><i className="lni-check-mark-circle"></i> Super friendly support team</li>
        <li><i className="lni-check-mark-circle"></i> Awesome Support</li>
        </ul>
        </div>
        <div className="pricing-btn text-center">
        <a className="main-btn" href="#">GET STARTED</a>
        </div>
        <div className="buttom-shape">
        <img src={logo11} alt="logo11" width="389" height="122" />
        </div>
        </div> 
        </div>
       
        <div className="col-lg-4 col-md-7 col-sm-9">
        <div className="single-pricing enterprise mt-40">
        <div className="pricing-flower">
        <img src="assets/images/flower.svg" alt="flower" />
        </div>
        <div className="pricing-header text-right">
        <h5 className="sub-title">Enterprise</h5>
        <span className="price">$ 799</span>
        <p className="year">per year</p>
        </div>
        <div className="pricing-list">
        <ul>
        <li><i className="lni-check-mark-circle"></i> Carefully crafted components</li>
        <li><i className="lni-check-mark-circle"></i> Amazing page examples</li>
        <li><i className="lni-check-mark-circle"></i> Super friendly support team</li>
        <li><i className="lni-check-mark-circle"></i> Awesome Support</li>
        </ul>
        </div>
        <div className="pricing-btn text-center">
        <a className="main-btn" href="#">GET STARTED</a>
        </div>
        <div className="buttom-shape">
        <img src={logo22} alt="logo22" width="389" height="122" />
        </div>
        </div> 
        </div>
        </div> 
        </div> 
        </section>

        <section id="call-to-action" className="call-to-action">
        <div className="call-action-image">
        <img src="assets/images/call-to-action.png" alt="call-to-action" />
        </div>
        <div className="container-fluid">
        <div className="row justify-content-end">
        <div className="col-lg-6">
        <div className="call-action-content text-center">
        <h2 className="call-title">Curious to Learn More? Stay Tuned</h2>
        <p className="text">You let us know whenever you want us to update anything or think something can be optimised.</p>
        <div className="call-newsletter">
        <i className="lni-envelope"></i>
        <input type="text" placeholder="john@email.com" />
        <button type="submit">SUBSCRIBE</button>
        </div>
        </div> 
        </div>
        </div> 
        </div> 
        </section>


        <section id="testimonial" className="testimonial-area">
        <div className="container">
        <div className="row justify-content-center">
        <div className="col-lg-6">
        <div className="section-title text-center pb-10">
        <h4 className="title">Testimonial</h4>
        <p className="text">Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!</p>
        </div> 
        </div>
        </div> 
        <div className="row">
        
        <div className="col-lg-12">
        <div className="row testimonial-active">
        
        <div className="col-lg-12 d-md-flex flex-md-column">
        <Slider {...settings}>
        {testimonialsData.map((data) => {
        return (
        <React.Fragment key={data._id}>
        <div className="single-testimonial mt-30 mb-30 text-center mr-30 col-lg-12">
        <div className="testimonial-image">
        <img src={"http://localhost:5000/"} alt="Author" />
        
        </div>
        <div className="testimonial-content">
        <p className="text">{data.description}</p>
        <h6 className="author-name">{data.name}</h6>
        <span className="sub-title">{data.post}, {data.companyName}</span>
        </div>
        <div className="same-line">
        <div>
        <a href="/edittestimonials">
            <button type='submit' className="edit-btn" 
            onClick={() => editTestimonials(data)}> Update</button>
        </a>
        </div>
        <div>
            <button type='submit'  className="del-btn" 
            onClick={() => deleteTestimonials(data._id)}> Delete</button>
        </div>
        </div>
        </div>
        </React.Fragment>
        );
    })}
        </Slider>
    
        </div>
        
        
        
       
        </div> 
        </div>
        </div>
        </div> 
        </section>


        <section className="client-logo-area">
        <div className="container">
        <div className="row">
        <div className="col-md-3 col-6">
        <div className="single-client mt-30 text-center">
        <img src="assets/images/client_logo_01.png" alt="Logo" />
        </div> 
        </div>
        <div className="col-md-3 col-6">
        <div className="single-client mt-30 text-center">
        <img src="assets/images/client_logo_02.png" alt="Logo" />
        </div> 
        </div>
        <div className="col-md-3 col-6">
        <div className="single-client mt-30 text-center">
        <img src="assets/images/client_logo_03.png" alt="Logo" />
        </div> 
        </div>
        <div className="col-md-3 col-6">
        <div className="single-client mt-30 text-center">
        <img src="assets/images/client_logo_04.png" alt="Logo" />
        </div> 
        </div>
        </div> 
        </div> 
        </section>


        <section id="contact" className="contact-area">
        <div className="container">
        <div className="row justify-content-center">
        <div className="col-lg-6">
        <div className="section-title text-center pb-10">
        <h4 className="title">Get In touch</h4>
        <p className="text">Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!</p>
        </div> 
        </div>
        </div> 
        <div className="row justify-content-center">
        <div className="col-lg-8">
        <div className="contact-form">
        <form id="contact-form" action="assets/contact.php" method="post" data-toggle="validator">
        <div className="row">
        <div className="col-md-6">
        <div className="single-form form-group">
        <input type="text" name="name" placeholder="Your Name" data-error="Name is required." required="required" />
        <div className="help-block with-errors"></div>
        </div> 
        </div>
        <div className="col-md-6">
        <div className="single-form form-group">
        <input type="email" name="email" placeholder="Your Email" data-error="Valid email is required." required="required" />
        <div className="help-block with-errors"></div>
        </div> 
        </div>
        <div className="col-md-6">
        <div className="single-form form-group">
        <input type="text" name="subject" placeholder="Subject" data-error="Subject is required." required="required" />
        <div className="help-block with-errors"></div>
        </div> 
        </div>
        <div className="col-md-6">
        <div className="single-form form-group">
        <input type="text" name="phone" placeholder="Phone" data-error="Phone is required." required="required" />
        <div className="help-block with-errors"></div>
        </div> 
        </div>
        <div className="col-md-12">
        <div className="single-form form-group">
        <textarea placeholder="Your Mesaage" name="message" data-error="Please, leave us a message." required="required"></textarea>
        <div className="help-block with-errors"></div>
        </div> 
        </div>
        <p className="form-message"></p>
        <div className="col-md-12">
        <div className="single-form form-group text-center">
        <button type="submit" className="main-btn">send message</button>
        </div> 
        </div>
        </div> 
        </form>
        </div> 
        </div>
        </div> 
        </div> 
        </section>
    
        </>
    )
}

export default Main;