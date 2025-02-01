import React, { useState, useEffect } from "react";
import api from "../constants/api";
import Select from "react-select";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is loaded
import "../assets/css/event.css"
import shape1 from "../assets/img/breadcrumb/shape-1.png";
import breadcrumb from "../assets/img/breadcrumb/breadcrumb-bg.jpg";
import viceprincipal from "../assets/img/DSC_1491.JPG";

const Home = () => {

  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { value: "1", label: "Select Subject" },
    { value: "2", label: "Art & Design" },
    { value: "3", label: "Graphic Design" },
    { value: "4", label: "Web Design" },
    { value: "5", label: "UX/UI Design" },
  ];

  return (
    <main>
    {/* breadcrumb area start */}
    <section
      className="breadcrumb-area bg-default"
      style={{ backgroundImage: `url(${breadcrumb})` }}
    >
           <img src={shape1} alt="" className="breadcrumb-shape" />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="breadcrumb-content">
              <h2 className="breadcrumb-title">Contact Us</h2>
              <div className="breadcrumb-list">
                <a href="/">Home</a>
                <span>Contact Us</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* breadcrumb area end */}
    {/* contact area start */}
    <section className="contact-area pt-120 pb-120">
      <div className="container">
        <div className="contact-wrap">
          <div className="row">
            <div className="col-xl-8 col-md-8">
              <div className="contact-content pr-80 mb-20">
                <h3 className="contact-title mb-25">Send Me Message</h3>
                <form action="#" className="contact-form">
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-6">
                      <div className="contact-form-input mb-30">
                        <input type="text" placeholder="Your Name" />
                        <span className="inner-icon">
                          <i className="fa-thin fa-user" />
                        </span>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-6">
                      <div className="contact-form-input mb-30">
                        <input type="email" placeholder="Email Address" />
                        <span className="inner-icon">
                          <i className="fa-thin fa-envelope" />
                        </span>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-6">
                      <div className="contact-form-input mb-30">
                        <input type="text" placeholder="Your Number" />
                        <span className="inner-icon">
                          <i className="fa-thin fa-phone-volume" />
                        </span>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-6">
      <div className="contact-form-input">
        <span className="inner-icon inner-icon-select">
          {/* <i className="fa-thin fa-circle-exclamation" /> */}
        </span>
        <Select
          options={options}
          value={selectedOption}
          onChange={setSelectedOption}
          className="contact-form-list has-nice-select mb-30"
          classNamePrefix="react-select" // Helps with custom styling
        />
      </div>
    </div>
                    <div className="col-12">
                      <div className="contact-form-input mb-50 contact-form-textarea">
                        <textarea
                          name="message"
                          cols={30}
                          rows={10}
                          placeholder="Feel free to get in touch!"
                          defaultValue={""}
                        />
                        <span className="inner-icon">
                          <i className="fa-thin fa-pen" />
                        </span>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="contact-form-submit mb-30">
                        <div className="contact-form-btn">
                          <a href="#" className="theme-btn contact-btn">
                            Send Message
                          </a>
                        </div>
                        <div className="contact-form-condition">
                          <label className="condition_label">
                            I agree that my data is collected and stored.
                            <input type="checkbox" />
                            <span className="check_mark" />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-xl-4 col-md-4">
              <div className="contact-info ml-50 mb-20">
                <h3 className="contact-title mb-40">Get In Touch</h3>
                <div className="contact-info-item">
                  <span>
                    <i className="fa-thin fa-location-dot" />
                    Address
                  </span>
                  <p> Sir C.V.Raman Nagar, Seethaparpanallur,
near MS University, Tirunelveli,
Tamil Nadu 627012</p>
                </div>
                <div className="contact-info-item">
                  <span>
                    <i className="fa-thin fa-mobile-notch" />
                    Phone
                  </span>
                  <a href="tel:+91 9489903808">+91 9489903808</a>
                </div>
                <div className="contact-info-item">
                  <span>
                    <i className="fa-thin fa-envelope" />
                    Email
                  </span>
                  <a href="mailto:example@gmail.com">Example@gmail.com</a>
                </div>
                <div className="contact-social">
                  <span>Social Media</span>
                  <ul>
                    <li>
                      <a href="https://www.instagram.com/einstein.college.official/">
                        <i className="fa-brands fa-twitter" />
                      </a>
                    </li>
                    <li>
  <a href="https://www.instagram.com/einstein.college.official/" target="_blank" rel="noopener noreferrer">
    <i className="fa-brands fa-instagram" />
  </a>
</li>

                    <li>
                      <a href="https://www.facebook.com/groups/743772275964912/">
                        <i className="fa-brands fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="https://in.linkedin.com/company/einstein-group-of-institutions">
                        <i className="fa-brands fa-linkedin-in" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d147120.012062842!2d13.706000467398074!3d51.075159941942076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1senveto!5e0!3m2!1sen!2sbd!4v1680961754336!5m2!1sen!2sbd"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  </main>
  );
};

export default Home;
