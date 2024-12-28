import React from 'react';
import logoImage from "../../assets/img/logoImage.webp"

const Home = () => {
  return (
    <>
  <footer className="h6_footer-area">
    <div className="footer-top pt-200 pb-30">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-xl-3 col-lg-3 col-md-5">
            <div className="h6_footer-widget mb-40 mr-80">
              <div className="footer-logo">
                <a href="index.html">
                  <img src={logoImage} alt="" />
                </a>
              </div>
              <p className="h6_footer-widget-text">
              Sir C.V.Raman Nagar, Seethaparpanallur,
near MS University, Tirunelveli,
Tamil Nadu 627012 
              </p>
            
              
              <div className="h6_footer-social">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-linkedin-in" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5 col-md-7 d-flex flex-wrap flex-sm-nowrap justify-content-between">
            <div className="h6_footer-inner">
              <div className="h6_footer-widget mb-40">
                <h5 className="h6_footer-widget-title">Our Links</h5>
                <div className="h6_footer-widget-list">
                  <ul>
                    <li>
                      <a >About Us</a>
                    </li>
                    <li>
                      <a >Home</a>
                    </li>
                    <li>
                      <a> UG Programmes</a>
                    </li>
                    <li>
                      <a>Training & Placement</a>
                    </li>
                    <li>
                      <a>Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <div className="h6_footer-inner">
              <div className="h6_footer-widget mb-40">
                <h5 className="h6_footer-widget-title">Class</h5>
                <div className="h6_footer-widget-list">
                  <ul>
                    <li>
                      <a href="#">Programming</a>
                    </li>
                    <li>
                      <a href="#">Art &amp; Design</a>
                    </li>
                    <li>
                      <a href="#">Business</a>
                    </li>
                    <li>
                      <a href="#">Engineering</a>
                    </li>
                    <li>
                      <a href="#">Photography</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}
            <div className="h6_footer-inner">
              <div className="h6_footer-widget mb-40">
                <h5 className="h6_footer-widget-title">Our Campus</h5>
                <div className="h6_footer-widget-list">
                  <ul>
                    <li>
                      <a>Campus</a>
                    </li>
                    <li>
                      <a>Events</a>
                    </li>
                    <li>
                      <a>Our Leadership</a>
                    </li>
                    <li>
                      <a>Alumni</a>
                    </li>
                    <li>
                      <a>Gallery</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-5">
            <div className="h6_footer-widget ml-80 mb-40">
              <h5 className="h6_footer-widget-title">Newsletter</h5>
              <p className="h6_footer-widget-text newsletter-text">
                Sign up foe our newsletter and get 34% <br /> off your next
                course.
              </p>
              <form action="#">
                <div className="h6_footer-subscribe-form">
                  <input type="email" placeholder="Enter Your Email*" />
                  <button type="submit">Subscribe</button>
                </div>
                <div className="h6_footer-subscribe-condition">
                  <label className="condition_label">
                    I agree to the terms of use and privacy policy.
                    <input type="checkbox" />
                    <span className="check_mark" />
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="h6_copyright-area">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="h6_copyright-text">
              <p>Copyright © 2025 All Rights Reserved by ECAS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</>

  );
};

export default Home;