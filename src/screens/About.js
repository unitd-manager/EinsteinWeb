import React,{ useEffect, useState,useRef } from 'react';
import Slider from "react-slick";
import '../assets/css/event.css'
import "odometer/themes/odometer-theme-default.css";
import ourleaderBanner from "../assets/img/ourleader-banner.webp"
import bannerImge from "../assets/img/banner-img.png"
import Founder from "../assets/img/Founder.png"
import Student from "../assets/img/Student.png"

const Home = () => {

    const mainSlider = useRef(null);
    const thumbSlider = useRef(null);

    const bannersettings = {
        // dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        asNavFor: null, // Placeholder for main slider
      };
      
      const thumbnailSettings = {
        slidesToShow: 4,   // Number of thumbnails to show
        slidesToScroll: 1,
        asNavFor: null,    // Placeholder for thumbnail slider
        focusOnSelect: true, // Enables clicking on thumbnails
        centerMode: true,
        centerPadding: '10px',
      };
    
      const banners = [
        { id: 1, image: {ourleaderBanner} },
        { id: 2, image: {ourleaderBanner} },
      ];

      useEffect(() => {
        // Trigger counter animation on mount
        const counters = document.querySelectorAll(".count_one");
        counters.forEach((counter) => {
          const target = parseInt(counter.getAttribute("data-count"), 10);
          setTimeout(() => {
            counter.innerText = target;
          }, 500); // Delay for smooth rendering
        });
      }, []);
      

  return (
    <>
    <meta charSet="utf-8" />
    <meta httpEquiv="x-ua-compatible" content="ie=edge" />
    <title>
      School University &amp; Online Education Template | Eduan - eLearning
      Education
    </title>
    <meta name="description" content="" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="shortcut icon" type="image/x-icon" href="assets/img/favicon.png" />
    {/* Place favicon.ico in the root directory */}
    {/* CSS here */}
    <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
    <link rel="stylesheet" href="assets/css/animate.min.css" />
    <link rel="stylesheet" href="assets/css/magnific-popup.css" />
    <link rel="stylesheet" href="assets/css/fontawesome-all.min.css" />
    <link rel="stylesheet" href="assets/css/odometer.min.css" />
    <link rel="stylesheet" href="assets/css/nice-select.css" />
    <link rel="stylesheet" href="assets/css/meanmenu.css" />
    <link rel="stylesheet" href="assets/css/swiper-bundle.min.css" />
    <link rel="stylesheet" href="assets/css/main.css" />
    {/* sidebar-information-area-start */}
    <div className="sidebar-info side-info">
      <div className="sidebar-logo-wrapper mb-25">
        <div className="row align-items-center">
          <div className="col-xl-6 col-8">
            <div className="sidebar-logo">
              <a href="index.html">
                <img src="assets/img/logo/logo-red-light.png" alt="logo-img" />
              </a>
            </div>
          </div>
          <div className="col-xl-6 col-4">
            <div className="sidebar-close-wrapper text-end">
              <button className="sidebar-close side-info-close">
                <i className="fal fa-times" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="sidebar-menu-wrapper fix">
        <div className="mobile-menu" />
      </div>
    </div>
    <div className="offcanvas-overlay" />
    {/* sidebar-information-area-end */}
    {/* header area start */}
    <header>
      <div className="h7_header-top d-none d-md-block">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-9">
              <ul className="h7_header-top-list">
                <li>
                  <a href="tel:8812356877787 ">
                    <i className="fa-light fa-phone" />
                    (88) 123 568 777 87{" "}
                  </a>
                </li>
                <li>
                  <a href="mailto:info@xyz-text.com ">
                    <i className="fa-light fa-envelope" />
                    info@xyz-text.com
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-light fa-location-dot" />
                    New Jersey 07052, USA
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-3">
              <div className="h7_header-top-social">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-quora" />
                    </a>
                  </li>
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
        </div>
      </div>
      <div className="h7_header-area header-sticky">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xxl-7 col-xl-8 col-lg-6 col-6">
              <div className="h7_header-left">
                <div className="h7_header-logo">
                  <a href="index.html">
                    <img src="assets/img/logo/logo-red.png" alt="" />
                  </a>
                </div>
                <div className="h7_header-menu d-none d-xl-block">
                  <nav className="h7_main-menu mobile-menu" id="mobile-menu">
                    <ul>
                      <li className="menu-has-child">
                        <a href="index.html">Home</a>
                        <ul className="submenu">
                          <li>
                            <a href="index.html">Education Main</a>
                          </li>
                          <li>
                            <a href="index-2.html">Online Education</a>
                          </li>
                          <li>
                            <a href="index-3.html">Classic LMS</a>
                          </li>
                          <li>
                            <a href="index-4.html">Elearning Education</a>
                          </li>
                          <li>
                            <a href="index-5.html">College Status</a>
                          </li>
                          <li>
                            <a href="index-6.html">University Campus</a>
                          </li>
                          <li>
                            <a href="index-7.html">Academic Education</a>
                          </li>
                          <li>
                            <a href="index-8.html">Online Courses</a>
                          </li>
                          <li>
                            <a href="index-9.html">Kids Education</a>
                          </li>
                          <li>
                            <a href="index-10.html">Preschool Program</a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-has-child">
                        <a href="course.html">Courses</a>
                        <ul className="submenu">
                          <li>
                            <a href="course.html">Courses 1</a>
                          </li>
                          <li>
                            <a href="course-2.html">Courses 2</a>
                          </li>
                          <li>
                            <a href="course-details.html">Course Details</a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-has-child">
                        <a href="#">Pages</a>
                        <ul className="submenu">
                          <li>
                            <a href="about.html">About</a>
                          </li>
                          <li>
                            <a href="team.html">Teacher</a>
                          </li>
                          <li>
                            <a href="team-details.html">Teacher Details</a>
                          </li>
                          <li>
                            <a href="event.html">Events</a>
                          </li>
                          <li>
                            <a href="event-details.html">Event Details</a>
                          </li>
                          <li>
                            <a href="price.html">Price</a>
                          </li>
                          <li>
                            <a href="gallery.html">Gallery</a>
                          </li>
                          <li>
                            <a href="sign-up.html">Sign Up</a>
                          </li>
                          <li>
                            <a href="sign-in.html">Sign In</a>
                          </li>
                          <li>
                            <a href="404.html">404</a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-has-child">
                        <a href="blog.html">Blog</a>
                        <ul className="submenu">
                          <li>
                            <a href="blog.html">Blog</a>
                          </li>
                          <li>
                            <a href="blog-details.html">Blog Details</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <div className="col-xxl-5 col-xl-4 col-lg-6 col-6">
              <div className="h7_header-right">
                <div className="h7_header-search d-none d-xxl-block">
                  <form action="#">
                    <input type="text" placeholder="Search Item" />
                    <button type="submit" className="header-search-btn">
                      <i className="fa-thin fa-magnifying-glass" />
                    </button>
                  </form>
                </div>
                <div className="h7_header-btn2 d-none d-sm-block">
                  <a
                    href="#"
                    className="h7_header-btn theme-btn theme-btn-medium theme-btn-6"
                  >
                    <svg
                      width={14}
                      height={16}
                      viewBox="0 0 14 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.01367 8C8.94667 8 10.5137 6.433 10.5137 4.5C10.5137 2.567 8.94667 1 7.01367 1C5.08068 1 3.51367 2.567 3.51367 4.5C3.51367 6.433 5.08068 8 7.01367 8Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13.026 14.9996C13.026 12.2906 10.331 10.0996 7.013 10.0996C3.695 10.0996 1 12.2906 1 14.9996"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Login
                  </a>
                </div>
                <div className="header-menu-bar h7_menu-bar d-xl-none ml-10">
                  <span className="header-menu-bar-icon side-toggle">
                    <i className="fa-light fa-bars" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    {/* header area end */}
    <main>
      {/* banner area start */}
      <section className="slider-area fix">
        <div className="swiper h7_slider-active">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div
                className="h7_single-banner bg-default"
                data-background="assets/img/banner/7/1.jpg"
              >
                <div className="container">
                  <div className="row">
                    <div className="col-xl-7 col-lg-8 col-md-11">
                      <div className="h7_banner-content">
                        <h1
                          className="h7_banner-content-title"
                          data-animation="fadeInUp"
                          data-delay="0.3s"
                        >
                          Welcome to <br />
                          Eduan University
                        </h1>
                        <p
                          className="h7_banner-content-text"
                          data-animation="fadeInUp"
                          data-delay="0.5s"
                        >
                          Cosmic is committed to providing learning opportunities
                          tailored to support emerging career opportunities.
                        </p>
                        <div
                          className="h7_banner-content-btn"
                          data-animation="fadeInUp"
                          data-delay="0.7s"
                        >
                          <a href="#" className="theme-btn theme-btn-7">
                            Apply Now
                            <i className="fa-light fa-arrow-right" />
                          </a>
                          <a
                            href="#"
                            className="theme-btn theme-btn-7 theme-btn-7-yellow"
                          >
                            Learn More
                            <i className="fa-light fa-arrow-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div
                className="h7_single-banner bg-default"
                data-background="assets/img/banner/7/2.jpg"
              >
                <div className="container">
                  <div className="row">
                    <div className="col-xl-7 col-lg-8 col-md-11">
                      <div className="h7_banner-content">
                        <h1
                          className="h7_banner-content-title"
                          data-animation="fadeInUp"
                          data-delay="0.3s"
                        >
                          Welcome to <br />
                          Eduan University
                        </h1>
                        <p
                          className="h7_banner-content-text"
                          data-animation="fadeInUp"
                          data-delay="0.5s"
                        >
                          Cosmic is committed to providing learning opportunities
                          tailored to support emerging career opportunities.
                        </p>
                        <div
                          className="h7_banner-content-btn"
                          data-animation="fadeInUp"
                          data-delay="0.7s"
                        >
                          <a href="#" className="theme-btn theme-btn-7">
                            Apply Now
                            <i className="fa-light fa-arrow-right" />
                          </a>
                          <a
                            href="#"
                            className="theme-btn theme-btn-7 theme-btn-7-yellow"
                          >
                            Learn More
                            <i className="fa-light fa-arrow-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div
                className="h7_single-banner bg-default"
                data-background="assets/img/banner/7/3.jpg"
              >
                <div className="container">
                  <div className="row">
                    <div className="col-xl-7 col-lg-8 col-md-11">
                      <div className="h7_banner-content">
                        <h1
                          className="h7_banner-content-title"
                          data-animation="fadeInUp"
                          data-delay="0.3s"
                        >
                          Welcome to <br />
                          Eduan University
                        </h1>
                        <p
                          className="h7_banner-content-text"
                          data-animation="fadeInUp"
                          data-delay="0.5s"
                        >
                          Cosmic is committed to providing learning opportunities
                          tailored to support emerging career opportunities.
                        </p>
                        <div
                          className="h7_banner-content-btn"
                          data-animation="fadeInUp"
                          data-delay="0.7s"
                        >
                          <a href="#" className="theme-btn theme-btn-7">
                            Apply Now
                            <i className="fa-light fa-arrow-right" />
                          </a>
                          <a
                            href="#"
                            className="theme-btn theme-btn-7 theme-btn-7-yellow"
                          >
                            Learn More
                            <i className="fa-light fa-arrow-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div
                className="h7_single-banner bg-default"
                data-background="assets/img/banner/7/4.jpg"
              >
                <div className="container">
                  <div className="row">
                    <div className="col-xl-7 col-lg-8 col-md-11">
                      <div className="h7_banner-content">
                        <h1
                          className="h7_banner-content-title"
                          data-animation="fadeInUp"
                          data-delay="0.3s"
                        >
                          Welcome to <br />
                          Eduan University
                        </h1>
                        <p
                          className="h7_banner-content-text"
                          data-animation="fadeInUp"
                          data-delay="0.5s"
                        >
                          Cosmic is committed to providing learning opportunities
                          tailored to support emerging career opportunities.
                        </p>
                        <div
                          className="h7_banner-content-btn"
                          data-animation="fadeInUp"
                          data-delay="0.7s"
                        >
                          <a href="#" className="theme-btn theme-btn-7">
                            Apply Now
                            <i className="fa-light fa-arrow-right" />
                          </a>
                          <a
                            href="#"
                            className="theme-btn theme-btn-7 theme-btn-7-yellow"
                          >
                            Learn More
                            <i className="fa-light fa-arrow-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h7_slider-navigation d-none d-md-grid">
            <div className="h7_slider-prev">
              <i className="fa-regular fa-arrow-down-left" />
            </div>
            <div className="h7_slider-next">
              <i className="fa-regular fa-arrow-up-right" />
            </div>
          </div>
        </div>
      </section>
      {/* banner area end */}
      {/* slider Dot start */}
      <section className="h7_slider-thumb">
        <div className="swiper h7_slider-active-nav">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div
                className="h7_slider-thumb-item"
                data-background="assets/img/banner/7/thumb-1.jpg"
              >
                <div className="h7_slider-thumbs-icon">
                  <svg
                    width={50}
                    height={50}
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M49.1379 23.3963H38.1121V21.267C38.1115 20.956 37.9435 20.6693 37.6724 20.517L25.8621 13.879V10.4997H28.1983V11.7842C28.1983 12.2603 28.5843 12.6463 29.0603 12.6463H36.1034C36.5795 12.6461 36.9653 12.26 36.9652 11.7839C36.9652 11.6841 36.9477 11.5851 36.9138 11.4911L36.2069 9.48249L36.9224 7.51697C37.0843 7.06924 36.8526 6.57505 36.4049 6.4132C36.311 6.37926 36.212 6.36191 36.1121 6.3618H32.9052V5.1118C32.9052 4.63572 32.5192 4.24973 32.0431 4.24973H25.8621V3.19801C25.8621 2.72193 25.4761 2.33594 25 2.33594C24.5239 2.33594 24.1379 2.72193 24.1379 3.19801V13.879L12.3276 20.5084C12.0565 20.6607 11.8885 20.9474 11.8879 21.2584V23.3877H0.862069C0.385991 23.3877 0 23.7737 0 24.2497V46.8015C0 47.2775 0.385991 47.6635 0.862069 47.6635H49.1379C49.614 47.6635 50 47.2775 50 46.8015V24.2584C50 23.7823 49.614 23.3963 49.1379 23.3963ZM32.9052 9.63766L32.8707 9.60318V8.12042H34.8362L34.4828 9.22387C34.4122 9.41589 34.4122 9.62667 34.4828 9.8187L34.8879 10.9221H29.9224V10.4997H32.0431C32.5192 10.4997 32.9052 10.1137 32.9052 9.63766ZM25.8621 5.97387H31.181V7.25835V8.77559H25.8621V5.97387ZM11.8879 45.9394H1.72414V25.1204H11.8879V45.9394ZM24.1379 45.9394H19.6121V36.0946H24.1379V45.9394ZM30.3879 45.9394H25.8621V36.0946H30.3879V45.9394ZM36.4224 45.9394H32.1121V35.2325C32.1121 34.7564 31.7261 34.3704 31.25 34.3704H18.75C18.2739 34.3704 17.8879 34.7564 17.8879 35.2325V45.9394H13.5776V21.8015L25 15.3704L36.3879 21.767L36.4224 24.2497V45.9394ZM48.2759 45.9394H38.1121V25.1204H48.2759V45.9394Z"
                      fill="currentColor"
                    />
                    <path
                      d="M25 18.0088C23.0037 18.0135 21.3879 19.6331 21.3879 21.6295C21.3927 23.6244 23.0137 25.2377 25.0086 25.2329C27.0036 25.2282 28.6168 23.6072 28.6121 21.6122C28.6073 19.6208 26.9915 18.0088 25 18.0088ZM25 23.5088C23.9573 23.504 23.1159 22.6549 23.1207 21.6122C23.1254 20.5764 23.964 19.7377 25 19.7329C26.0441 19.7377 26.8879 20.5854 26.8879 21.6295H26.8966C26.8918 22.6722 26.0427 23.5135 25 23.5088Z"
                      fill="currentColor"
                    />
                    <path
                      d="M5.52587 27.0176H3.80173V30.4659H5.52587V27.0176Z"
                      fill="currentColor"
                    />
                    <path
                      d="M9.77587 27.0176H8.05173V30.4659H9.77587V27.0176Z"
                      fill="currentColor"
                    />
                    <path
                      d="M19.6465 27.0176H16.1983V28.7417H19.6465V27.0176Z"
                      fill="currentColor"
                    />
                    <path
                      d="M26.7241 27.0176H23.2759V28.7417H26.7241V27.0176Z"
                      fill="currentColor"
                    />
                    <path
                      d="M33.8017 27.0176H30.3534V28.7417H33.8017V27.0176Z"
                      fill="currentColor"
                    />
                    <path
                      d="M19.6465 31.0342H16.1983V32.7583H19.6465V31.0342Z"
                      fill="currentColor"
                    />
                    <path
                      d="M26.7241 31.0342H23.2759V32.7583H26.7241V31.0342Z"
                      fill="currentColor"
                    />
                    <path
                      d="M33.8017 31.0342H30.3534V32.7583H33.8017V31.0342Z"
                      fill="currentColor"
                    />
                    <path
                      d="M5.52587 33.8018H3.80173V37.25H5.52587V33.8018Z"
                      fill="currentColor"
                    />
                    <path
                      d="M9.77587 33.8018H8.05173V37.25H9.77587V33.8018Z"
                      fill="currentColor"
                    />
                    <path
                      d="M5.52587 40.5947H3.80173V44.043H5.52587V40.5947Z"
                      fill="currentColor"
                    />
                    <path
                      d="M9.77587 40.5947H8.05173V44.043H9.77587V40.5947Z"
                      fill="currentColor"
                    />
                    <path
                      d="M41.9483 27.0176H40.2241V30.4659H41.9483V27.0176Z"
                      fill="currentColor"
                    />
                    <path
                      d="M46.1983 27.0176H44.4741V30.4659H46.1983V27.0176Z"
                      fill="currentColor"
                    />
                    <path
                      d="M41.9483 33.8018H40.2241V37.25H41.9483V33.8018Z"
                      fill="currentColor"
                    />
                    <path
                      d="M46.1983 33.8018H44.4741V37.25H46.1983V33.8018Z"
                      fill="currentColor"
                    />
                    <path
                      d="M41.9483 40.5947H40.2241V44.043H41.9483V40.5947Z"
                      fill="currentColor"
                    />
                    <path
                      d="M46.1983 40.5947H44.4741V44.043H46.1983V40.5947Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="h7_slider-thumbs-info">
                  <h4>Undergraduate Studies</h4>
                  <a href="#">
                    Read More
                    <i className="fa-regular fa-arrow-up-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div
                className="h7_slider-thumb-item"
                data-background="assets/img/banner/7/thumb-2.jpg"
              >
                <div className="h7_slider-thumbs-icon">
                  <svg
                    width={50}
                    height={46}
                    viewBox="0 0 50 46"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M49.023 28.4375C48.4848 28.4375 48.0461 28.875 48.0461 29.4133C48.0461 29.6742 48.1479 29.8829 48.3314 30.0675C48.5161 30.2522 48.7613 30.3162 49.0223 30.3162H49.023C49.5613 30.3162 49.9988 29.9161 50 29.3774C50 28.8384 49.5624 28.4375 49.023 28.4375Z"
                      fill="currentColor"
                    />
                    <path
                      d="M45.1168 28.4344L40.6784 28.4317L36.7321 21.5851L40.9405 14.3066C41.1152 14.0041 41.1156 13.6318 40.9412 13.3297L36.7466 6.05392L39.6343 1.50031C39.9231 1.04446 39.7881 0.440971 39.3322 0.152199C38.8767 -0.136955 38.2732 -0.00191499 37.9841 0.453941L35.0712 5.0312L26.5961 5.01517H26.5957C26.2466 5.01517 25.9243 5.21125 25.75 5.51299L21.5385 12.7823L13.7253 12.7632L11.6913 9.03739C11.5204 8.72306 11.1912 8.52966 10.8326 8.52966C10.6705 8.52966 10.5091 8.57124 10.3657 8.64944C10.1368 8.77456 9.97009 8.98093 9.89647 9.23194C9.82246 9.48218 9.85069 9.74578 9.97582 9.97542L12.0171 13.7096L8.00781 20.6451H0.976944C0.437164 20.6451 0 21.0827 0 21.6221C0 22.1615 0.437164 22.599 0.976944 22.599H8.08487L11.9751 29.3556L9.58405 32.8026C9.43565 33.0162 9.37882 33.2779 9.42497 33.5338C9.47189 33.791 9.61533 34.0153 9.82933 34.1637C9.99336 34.2781 10.1856 34.3391 10.3851 34.3391C10.7056 34.3391 11.0065 34.1831 11.1889 33.9203L13.6677 30.3512L21.5351 30.3566L25.47 37.1822L23.0549 41.077C22.7718 41.5352 22.9134 42.1387 23.3707 42.4221C23.526 42.5178 23.7038 42.5686 23.8846 42.5686C24.2252 42.5686 24.5369 42.3958 24.7158 42.1066L27.1683 38.1493L34.9556 38.163L39.1796 45.4899C39.3608 45.8038 39.6889 45.9789 40.0269 45.9789C40.1924 45.9789 40.3603 45.937 40.514 45.8485C40.9813 45.5788 41.1419 44.9814 40.8722 44.5141L36.6795 37.2417L40.6414 30.3856L45.1157 30.3882C45.6539 30.3882 46.0915 29.9507 46.0926 29.4124C46.0926 29.1515 45.9911 28.9062 45.8065 28.7216C45.6226 28.537 45.3774 28.4355 45.1168 28.4344ZM27.1587 6.98966L35.0338 6.99462L38.9671 13.8168L35.0468 20.5971L27.1717 20.5921L23.2388 13.7695L27.1587 6.98966ZM21.5153 28.4038L13.6734 28.3989L9.74007 21.5763L13.6822 14.7591L21.5126 14.764L25.4517 21.5958L21.5153 28.4038ZM35.025 36.1904L27.1503 36.1854L23.2338 29.3918L27.1706 22.583L35.0555 22.588L38.9671 29.3728L35.025 36.1904Z"
                      fill="currentColor"
                    />
                    <path
                      d="M8.96263 7.06668H8.96377C9.1259 7.06668 9.28726 7.01862 9.42955 6.94041C9.65919 6.81529 9.82551 6.60625 9.89952 6.356C9.97276 6.105 9.94453 5.83987 9.81941 5.61137C9.64851 5.29666 9.3193 5.10059 8.96186 5.10059C8.79974 5.10059 8.63762 5.1414 8.49495 5.22037C8.2653 5.34473 8.09822 5.55148 8.02498 5.80135C7.95173 6.05235 7.97996 6.32205 8.10508 6.55055C8.27598 6.86526 8.60519 7.06668 8.96263 7.06668Z"
                      fill="currentColor"
                    />
                    <path
                      d="M8.71468 35.7694C8.55065 35.655 8.35801 35.5947 8.15773 35.5947C7.8373 35.5947 7.53746 35.7519 7.35474 36.0147C7.04804 36.4572 7.15752 37.0668 7.60003 37.3747C7.76406 37.4887 7.9567 37.5494 8.15697 37.5494C8.47741 37.5494 8.77724 37.3922 8.95997 37.1294C9.26667 36.6869 9.15718 36.0773 8.71468 35.7694Z"
                      fill="currentColor"
                    />
                    <path
                      d="M22.3419 44.083C22.1867 43.9873 22.0089 43.9365 21.8281 43.9365C21.4871 43.9365 21.1765 44.1097 20.9969 44.3985C20.8592 44.6205 20.8161 44.8829 20.8756 45.1374C20.9355 45.3911 21.0907 45.607 21.3124 45.7439C21.4676 45.8393 21.6446 45.8904 21.8262 45.8904C22.1672 45.8904 22.4777 45.7172 22.6574 45.4285C22.7951 45.2064 22.8382 44.9447 22.7787 44.6907C22.7181 44.4366 22.5636 44.2211 22.3419 44.083Z"
                      fill="currentColor"
                    />
                    <path
                      d="M15.7951 7.04967C15.9187 7.12138 16.0622 7.15724 16.238 7.15724C16.4074 7.15724 16.5653 7.12138 16.692 7.04967C16.819 6.97795 16.8918 6.88029 16.8918 6.7567V3.94031H19.041V6.7567C19.041 6.88029 19.1154 6.97795 19.2394 7.04967C19.363 7.12138 19.519 7.15724 19.6949 7.15724C19.8643 7.15724 20.0031 7.12138 20.1301 7.04967C20.2572 6.97795 20.311 6.88029 20.311 6.7567V0.403702C20.311 0.273621 20.2618 0.175583 20.1382 0.110352C20.0142 0.0455018 19.8707 0.0126953 19.6949 0.0126953C19.519 0.0126953 19.3596 0.0455018 19.2364 0.110352C19.1124 0.175583 19.041 0.273621 19.041 0.403702V2.96336H16.8922V0.403702C16.8922 0.273621 16.8175 0.175583 16.6939 0.110352C16.5703 0.0455018 16.4139 0.0126953 16.238 0.0126953C16.0622 0.0126953 15.9218 0.0455018 15.7982 0.110352C15.6742 0.175583 15.6223 0.273621 15.6223 0.403702V6.75632C15.6219 6.88029 15.6711 6.97795 15.7951 7.04967Z"
                      fill="currentColor"
                    />
                    <path
                      d="M46.7156 17.4096C46.5916 17.3443 46.4512 17.3115 46.2754 17.3115C46.0995 17.3115 45.9355 17.3443 45.8119 17.4096C45.6879 17.4744 45.612 17.5724 45.612 17.7025V20.2538H43.4628V17.7025C43.4628 17.5724 43.3949 17.4744 43.2713 17.4096C43.1473 17.3443 42.9943 17.3115 42.8185 17.3115C42.6426 17.3115 42.4977 17.3443 42.3737 17.4096C42.2501 17.4744 42.1929 17.5724 42.1929 17.7025V24.0551C42.1929 24.1791 42.2486 24.2768 42.3722 24.3485C42.4961 24.4202 42.6426 24.4561 42.8189 24.4561C42.9879 24.4561 43.1408 24.4202 43.2679 24.3485C43.3949 24.2768 43.4628 24.1791 43.4628 24.0551V21.2307H45.612V24.0555C45.612 24.1791 45.6929 24.2768 45.8165 24.3485C45.9404 24.4202 46.0995 24.4561 46.2757 24.4561C46.4447 24.4561 46.579 24.4202 46.7057 24.3485C46.8327 24.2768 46.8819 24.1791 46.8819 24.0555V17.7025C46.8819 17.5724 46.8392 17.4744 46.7156 17.4096Z"
                      fill="currentColor"
                    />
                    <path
                      d="M4.52193 26.5381C4.69778 26.5381 4.84389 26.5625 4.97435 26.6113C5.10481 26.6602 5.19904 26.7189 5.26427 26.7872C5.3295 26.8559 5.38138 26.9406 5.4241 27.0416C5.46606 27.1427 5.49162 27.224 5.50116 27.2858C5.51108 27.348 5.51871 27.4212 5.52519 27.5059C5.53168 27.7729 5.74339 27.9064 6.16034 27.9064C6.38846 27.9064 6.55135 27.8626 6.649 27.7744C6.74666 27.6863 6.79549 27.5219 6.79549 27.2808C6.79549 26.7208 6.57881 26.2711 6.14546 25.9323C5.71211 25.5936 5.15364 25.4238 4.46928 25.4238C3.79828 25.4238 3.26765 25.605 2.85071 25.9663C2.43376 26.3279 2.23883 26.8932 2.23883 27.6619V30.389C2.23883 31.1577 2.43224 31.723 2.84613 32.0847C3.25964 32.4459 3.79523 32.6271 4.46661 32.6271C5.15707 32.6271 5.71555 32.4509 6.1489 32.0992C6.58224 31.7475 6.79739 31.2782 6.79739 30.6919C6.79739 30.4508 6.7459 30.2864 6.64481 30.1983C6.54372 30.1106 6.37892 30.0663 6.1508 30.0663C5.75331 30.0663 5.54465 30.1998 5.52519 30.4669C5.51871 30.6038 5.50383 30.7198 5.48132 30.814C5.45844 30.9086 5.41571 31.0162 5.35391 31.1367C5.29211 31.2573 5.19102 31.35 5.05103 31.4152C4.91103 31.4804 4.75005 31.5128 4.54138 31.5128C3.84406 31.5128 3.50912 31.1382 3.50912 30.389V27.6623C3.50874 26.9131 3.83757 26.5381 4.52193 26.5381Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="h7_slider-thumbs-info">
                  <h4>Lifelong Learning</h4>
                  <a href="#">
                    Read More
                    <i className="fa-regular fa-arrow-up-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div
                className="h7_slider-thumb-item"
                data-background="assets/img/banner/7/thumb-3.jpg"
              >
                <div className="h7_slider-thumbs-icon">
                  <svg
                    width={36}
                    height={48}
                    viewBox="0 0 36 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.19926 9.13782L8.8663 12.1917V16.0201C8.8663 16.075 8.8859 16.1237 8.89765 16.1751C8.88554 16.2552 8.8663 16.3331 8.8663 16.4164C8.8663 18.7171 13.6011 19.7647 18.0001 19.7647C22.3991 19.7647 27.1339 18.7171 27.1339 16.4164C27.1339 16.3333 27.1146 16.2553 27.1025 16.1754C27.1144 16.1239 27.1339 16.0752 27.1339 16.0203V12.1919L29.656 10.8327V15.7676C29.656 16.1612 29.9761 16.4808 30.3692 16.4808C30.7623 16.4808 31.0824 16.1612 31.0824 15.7676V10.0775C31.0824 10.0733 31.0801 10.0695 31.0799 10.0654L32.8009 9.13799C33.0323 9.0144 33.1765 8.7722 33.1765 8.51003C33.1765 8.24786 33.0321 8.00673 32.8009 7.88206L18.3374 0.086276C18.1287 -0.0287587 17.8713 -0.0287587 17.6625 0.086276L3.19926 7.88206C2.96789 8.00655 2.82361 8.24786 2.82361 8.50985C2.82361 8.77184 2.96789 9.01422 3.19926 9.13782ZM25.7077 14.5132C23.9738 13.532 20.9173 13.0679 18.0003 13.0679C15.0832 13.0679 12.0265 13.532 10.2929 14.5132V11.5953C10.2929 11.0205 12.9142 9.67429 18.0003 9.67429C23.0863 9.67429 25.7077 11.0206 25.7077 11.5953V14.5132ZM18.0003 18.3383C12.9141 18.3383 10.2929 16.991 10.2929 16.4164C10.2929 15.8418 12.9141 14.4943 18.0003 14.4943C23.0865 14.4943 25.7077 15.8416 25.7077 16.4162C25.7077 16.9909 23.0865 18.3383 18.0003 18.3383ZM18.0003 1.52412L30.9609 8.51003L26.8686 10.7155C25.8241 9.02831 21.7913 8.24786 18.0003 8.24786C14.2092 8.24786 10.1767 9.02831 9.13206 10.7153L5.03959 8.50985L18.0003 1.52412Z"
                      fill="currentColor"
                    />
                    <path
                      d="M35.0125 38.1708C34.9419 38.206 34.854 38.2595 34.7833 38.3121C34.6592 38.4533 34.5884 38.6299 34.5884 38.8236C34.5884 39.0001 34.659 39.1767 34.7833 39.318C34.9246 39.4584 35.1004 39.529 35.2951 39.529C35.471 39.529 35.6485 39.4584 35.7899 39.318C35.9295 39.1767 36.0001 39.0001 36.0001 38.8236C36.0001 38.6297 35.9295 38.4532 35.7899 38.3121C35.5952 38.1182 35.278 38.0648 35.0125 38.1708Z"
                      fill="currentColor"
                    />
                    <path
                      d="M35.2895 40.7599C34.898 40.7599 34.5793 41.0803 34.5793 41.4749V45.3109C30.1357 42.8511 24.6104 42.6067 21.1608 42.7542C23.3731 41.8438 26.8724 41.0937 31.4199 42.3471C31.6364 42.4082 31.8615 42.3601 32.0366 42.2257C32.2132 42.0903 32.3172 41.8799 32.3172 41.6573V25.0535C33.4452 25.1316 34.2116 25.4529 34.5793 25.663V36.0962C34.5793 36.4908 34.898 36.8112 35.2895 36.8112C35.6809 36.8112 35.9996 36.4908 35.9996 36.0962V25.2779C35.9996 25.0622 35.9026 24.8588 35.7364 24.7227C35.6818 24.6778 34.494 23.7546 32.3173 23.6167V22.2111C32.3173 21.9291 32.1528 21.6741 31.8982 21.559C31.8174 21.5198 23.9847 18.0987 17.9998 23.592C12.0166 18.1021 4.18424 21.5223 4.10159 21.559C3.84689 21.6743 3.68248 21.9291 3.68248 22.2111V23.6158C1.5085 23.7515 0.319436 24.6778 0.263211 24.7227C0.0968416 24.859 0 25.0622 0 25.2779V46.5792C0 46.843 0.14544 47.0856 0.375838 47.2095C0.479775 47.2662 0.595772 47.2942 0.710173 47.2942C0.846923 47.2942 0.985623 47.254 1.10339 47.1746C7.51394 42.8663 17.7886 44.4455 17.8891 44.4613C17.9115 44.4654 17.9324 44.4573 17.9546 44.4591C17.97 44.46 17.9847 44.4691 18 44.4691C18.0158 44.4691 18.0305 44.46 18.0461 44.459C18.0681 44.4573 18.0889 44.465 18.1109 44.4613C18.213 44.4455 28.4878 42.8681 34.8966 47.1746C35.0144 47.254 35.1529 47.2942 35.2898 47.2942C35.4042 47.2942 35.5202 47.2663 35.6242 47.2095C35.8546 47.0856 36 46.8428 36 46.5792V41.4747C35.9996 41.0803 35.6811 40.7599 35.2895 40.7599ZM5.10265 36.9667C13.9919 36.0077 16.4559 40.389 17.0887 42.2781C15.5946 41.4093 12.9311 40.2543 9.2805 40.2543C8.004 40.2543 6.60795 40.3957 5.10265 40.7406V36.9667ZM18.9104 42.2809C19.5427 40.3934 22.0069 36.008 30.897 36.9667V40.7406C25.0806 39.4069 20.9248 41.108 18.9104 42.2809ZM30.897 22.6949V35.5348C23.7619 34.8064 20.3265 37.3668 18.71 39.6786V24.8504C23.3503 20.3307 29.2739 22.0871 30.897 22.6949ZM17.2896 24.8502V39.6847C15.6721 37.3724 12.2351 34.8078 5.10265 35.5346V22.6947C6.72732 22.0871 12.6512 20.3325 17.2896 24.8502ZM1.42017 45.3109V25.6639C1.79033 25.4516 2.56205 25.1318 3.6823 25.0535V41.6573C3.6823 41.8799 3.78623 42.0903 3.96289 42.2257C4.13777 42.3601 4.36817 42.4082 4.57959 42.3471C9.12833 41.092 12.6295 41.8436 14.8422 42.7553C11.3924 42.6077 5.86443 42.8513 1.42017 45.3109Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="h7_slider-thumbs-info">
                  <h4>Feldman Lab</h4>
                  <a href="#">
                    Read More
                    <i className="fa-regular fa-arrow-up-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div
                className="h7_slider-thumb-item"
                data-background="assets/img/banner/7/thumb-4.jpg"
              >
                <div className="h7_slider-thumbs-icon">
                  <svg
                    width={46}
                    height={46}
                    viewBox="0 0 46 46"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M42.2023 21.4688H38.8682V20.3512C38.8682 19.3377 38.1755 18.4824 37.1845 18.2713C36.3193 18.0862 35.4451 17.9353 34.5763 17.8194V13.2975L42.939 10.1809C43.656 9.91673 44.0836 9.37138 44.0836 8.7227C44.0836 8.07852 43.6569 7.53407 42.9417 7.26544L23.8571 0.154307C23.3046 -0.0514355 22.6954 -0.0514355 22.1429 0.154307L3.06006 7.26544L3.05826 7.26634C2.34221 7.53497 1.91455 8.07942 1.91455 8.7236C1.91455 9.37138 2.34311 9.91673 3.05916 10.1809L4.21635 10.6121V13.1161C3.45627 13.4063 2.91541 14.1421 2.91541 15.0028C2.91541 15.5958 3.17236 16.1285 3.58115 16.4987L2.6351 18.8175C2.48686 19.1769 2.48686 19.5902 2.6333 19.946C2.81928 20.4051 3.21189 20.6899 3.65842 20.6899H6.20998C6.59182 20.6899 6.93412 20.4806 7.14076 20.1338C7.13357 20.2056 7.12908 20.2775 7.12908 20.3512V21.4688H3.80037C2.90553 21.4688 2.17779 22.1957 2.17779 23.0887V44.3772C2.17779 45.272 2.90553 45.9998 3.80037 45.9998H42.2032C43.0962 45.9998 43.8231 45.272 43.8231 44.3772V23.0887C43.8222 22.1957 43.0953 21.4688 42.2023 21.4688ZM36.8853 19.6756C37.2124 19.7456 37.4325 20.017 37.4325 20.3512V38.965C37.4325 39.1851 37.3498 39.3603 37.1818 39.4996C37.012 39.6388 36.8242 39.6856 36.6077 39.6433C32.2278 38.7871 27.8947 38.8428 23.7187 39.8077V24.9548C26.4104 24.9018 29.1022 24.546 31.8244 23.8856C33.4461 23.4912 34.5781 22.051 34.5781 20.3835V19.2677C35.3463 19.3755 36.1199 19.512 36.8853 19.6756ZM8.56748 20.3512C8.56748 20.017 8.7876 19.7456 9.11463 19.6756C9.881 19.512 10.6546 19.3755 11.4245 19.2686V20.3817C11.4245 22.0528 12.5583 23.493 14.1818 23.8838C16.9095 24.5433 19.5985 24.8991 22.2812 24.9548V39.8077C18.1044 38.8437 13.7721 38.788 9.39494 39.6442C9.17393 39.6874 8.99064 39.6415 8.82084 39.5023C8.65014 39.3612 8.56748 39.186 8.56748 38.9659V20.3512ZM33.1415 20.3835C33.1415 21.4024 32.4758 22.2487 31.4848 22.4895C28.6574 23.1759 25.8651 23.5209 23.0692 23.5245C23.0467 23.5227 23.0233 23.5209 23 23.5209C22.9784 23.5209 22.9569 23.5227 22.9353 23.5245C20.1474 23.5173 17.3551 23.1723 14.5196 22.4868C13.5278 22.2478 12.862 21.4015 12.862 20.3808V18.4465C12.862 18.4456 12.862 18.4456 12.862 18.4447V13.8321L22.1438 17.292C22.4205 17.3953 22.7107 17.4465 23.0009 17.4465C23.2911 17.4465 23.5813 17.3953 23.858 17.292L33.1424 13.8321V20.3835H33.1415ZM3.36463 8.7236C3.39248 8.69665 3.45357 8.65173 3.56229 8.6104L22.6442 1.50017C22.8733 1.41481 23.1258 1.41481 23.3549 1.50017L42.4386 8.6104C42.5482 8.65173 42.6093 8.69665 42.6353 8.7236C42.6093 8.74966 42.5491 8.79368 42.4395 8.83411L23.3558 15.947C23.1267 16.0324 22.8742 16.0324 22.6451 15.947L5.36096 9.50434C5.25584 9.42708 5.13006 9.37767 4.9917 9.36688L3.55959 8.83321C3.45268 8.79368 3.39248 8.74966 3.36463 8.7236ZM4.936 14.4197C5.25584 14.4197 5.51639 14.6811 5.51639 15.0028C5.51639 15.3226 5.25584 15.5832 4.936 15.5832C4.61436 15.5832 4.35291 15.3226 4.35291 15.0028C4.35291 14.6811 4.61436 14.4197 4.936 14.4197ZM4.00971 19.2533L4.92072 17.0198H4.936C4.936 17.0198 4.94588 17.0198 4.95127 17.0198L5.86229 19.2533H4.00971ZM7.236 18.8193L6.28904 16.4969C6.69693 16.1276 6.95299 15.594 6.95299 15.0028C6.95299 14.1421 6.41303 13.4063 5.65385 13.1161V11.1467L11.4245 13.2975V17.8185C10.5548 17.9344 9.67975 18.0853 8.81455 18.2704C8.14971 18.4124 7.62143 18.8436 7.34381 19.4177C7.3492 19.2138 7.31416 19.0089 7.236 18.8193ZM42.3856 44.3772C42.3856 44.4778 42.302 44.5632 42.2023 44.5632H3.80037C3.69975 44.5632 3.61439 44.4778 3.61439 44.3772V23.0887C3.61439 22.9908 3.70154 22.9054 3.80037 22.9054H7.13178V38.965C7.13178 39.6119 7.4067 40.1959 7.90982 40.6109C8.41025 41.0197 9.03557 41.177 9.67166 41.053C14.0345 40.1995 18.3452 40.2938 22.4852 41.3324C22.6586 41.3755 22.8293 41.3971 23.0009 41.3971C23.1725 41.3971 23.3441 41.3755 23.5193 41.3324C27.6593 40.2938 31.97 40.1995 36.3319 41.053C36.9662 41.1779 37.5915 41.0206 38.0937 40.6091C38.5933 40.1959 38.8691 39.6128 38.8691 38.965V22.9054H42.2032C42.3029 22.9054 42.3865 22.989 42.3865 23.0887V44.3772H42.3856ZM10.4928 27.3159C10.4362 26.9233 10.7094 26.5594 11.102 26.5028C12.7237 26.2701 14.357 26.1641 15.9562 26.1874C16.3524 26.1928 16.6696 26.5199 16.6642 26.9161C16.6588 27.3132 16.33 27.6258 15.9356 27.624C14.4109 27.6016 12.853 27.7031 11.3059 27.925C11.2718 27.9295 11.2367 27.9322 11.2035 27.9322C10.8513 27.9331 10.544 27.6743 10.4928 27.3159ZM10.4928 31.2402C10.4362 30.8476 10.7094 30.4838 11.102 30.4281C14.0147 30.0112 16.9229 30.004 19.7467 30.4047C20.1394 30.4604 20.4125 30.8243 20.3568 31.2169C20.3011 31.6095 19.9372 31.8826 19.5446 31.8269C16.8556 31.4451 14.083 31.4523 11.305 31.8494C11.2709 31.8539 11.2367 31.8566 11.2026 31.8566C10.8513 31.8575 10.544 31.5987 10.4928 31.2402ZM10.4928 35.1619C10.4371 34.7693 10.7103 34.4054 11.1029 34.3497C14.0183 33.9356 16.9265 33.9284 19.7476 34.3291C20.1403 34.3848 20.4134 34.7486 20.3577 35.1413C20.302 35.5339 19.9381 35.8079 19.5455 35.7513C16.8592 35.3695 14.0866 35.3766 11.305 35.772C11.2709 35.7765 11.2367 35.7791 11.2035 35.7791C10.8504 35.7791 10.5431 35.5204 10.4928 35.1619ZM34.898 26.5037C35.2906 26.5594 35.5637 26.9233 35.5071 27.3159C35.4559 27.6743 35.1487 27.9331 34.7974 27.9331C34.7632 27.9331 34.7291 27.9304 34.6949 27.9259C33.146 27.7049 31.5971 27.6034 30.0913 27.6222C29.6951 27.6249 29.369 27.3105 29.3636 26.9134C29.3582 26.5172 29.6754 26.191 30.0725 26.1856C31.6528 26.165 33.2754 26.2719 34.898 26.5037ZM25.6432 31.2169C25.5875 30.8243 25.8606 30.4604 26.2532 30.4047C29.077 30.0031 31.9862 30.0112 34.898 30.4281C35.2906 30.4847 35.5637 30.8476 35.5071 31.2402C35.4559 31.5987 35.1487 31.8566 34.7974 31.8566C34.7632 31.8566 34.7291 31.8539 34.6949 31.8494C31.917 31.4523 29.1444 31.4442 26.4554 31.8269C26.0628 31.8835 25.6989 31.6095 25.6432 31.2169ZM35.5071 35.1619C35.4559 35.5204 35.1487 35.7791 34.7974 35.7791C34.7641 35.7791 34.73 35.7765 34.6958 35.772C31.9143 35.3766 29.1417 35.3704 26.4554 35.7513C26.0628 35.8079 25.6989 35.5339 25.6432 35.1413C25.5875 34.7486 25.8606 34.3848 26.2532 34.3291C29.0734 33.9284 31.9826 33.9356 34.898 34.3497C35.2906 34.4054 35.5637 34.7693 35.5071 35.1619Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="h7_slider-thumbs-info">
                  <h4>Graduate Studies</h4>
                  <a href="#">
                    Read More
                    <i className="fa-light fa-arrow-up-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* slider Dot end */}
      {/* about area start */}
      <section className="h7_about-area pt-120 pb-50">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="h7_about-wrap mb-50 mr-70">
                <div className="section-area-6 mb-55">
                  <span className="section-subtitle">About Us</span>
                  <h2 className="section-title mb-15">
                    Experience in School Leadership &amp; Teaching
                  </h2>
                  <p className="section-text">
                    Mauris sit amet lacinia est, vitae tristique metus. Nulla
                    facilisi. Mauris tempor nibh vitae pulvinar ultricies. Sed
                    malesuada placerat metus. Vivamus sagittis arcu eu elit
                    semper, eget varius turpis posuere. Suspendisse ac nibh
                    cursus, dignissim urna a, porttitor nisi.
                  </p>
                </div>
                <div className="h7_about-content">
                  <div className="h7_about-admin">
                    <div className="h7_about-admin-img">
                      <img src="assets/img/about/7/admin.jpg" alt="" />
                    </div>
                    <div className="h7_about-admin-info">
                      <h5>Hugh Millie-Yate</h5>
                      <span>Vice Principal</span>
                    </div>
                  </div>
                  <div className="h7_about-signature">
                    <img src="assets/img/about/7/signature.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="h7_about-img w_img mb-50">
                <img src="assets/img/about/7/1.png" alt="" />
                <a
                  href="https://www.youtube.com/watch?v=dMlASgogxo4"
                  className="popup-video"
                >
                  <svg
                    width={131}
                    height={132}
                    viewBox="0 0 131 132"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx={65}
                      cy={66}
                      r={64}
                      stroke="white"
                      strokeOpacity="0.14"
                      strokeWidth={2}
                    />
                    <path
                      d="M65 131C100.899 131 130 101.899 130 66C130 30.1015 100.899 1 65 1"
                      stroke="#B1040E"
                      strokeWidth={2}
                    />
                  </svg>
                  <i className="fa-solid fa-play" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* about area end */}
      {/* Program area start */}
      <section className="h7_program-area pb-90 fix">
        <div className="program-text-wrap mb-55">
          <div className="program-text-ticker" id="program-text-ticker">
            <h1 className="h7_program-title">Campus Academics Programs</h1>
          </div>
        </div>
        <div className="container">
          <div className="h7_program-wrap">
            <div className="row g-0">
              <div className="col-xl-4 col-lg-4">
                <div className="h7_program-item">
                  <h3 className="h7_program-item-title">undergraduate</h3>
                  <p>
                    Our undergraduate programs tailored meet the unique needs of
                    adult learners. Whether seeking to advance in your current
                    career,
                  </p>
                  <div className="h7_program-item-list">
                    <a href="#">
                      Major Program <i className="fa-light fa-arrow-right" />
                    </a>
                    <a href="#">
                      Minors Program <i className="fa-light fa-arrow-right" />
                    </a>
                  </div>
                  <span className="h7_program-item-time">
                    <i className="fa-light fa-clock" /> Online + Onsite
                  </span>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4">
                <div className="h7_program-item h7_program-item2">
                  <h3 className="h7_program-item-title">Graduate</h3>
                  <p>
                    Our undergraduate programs tailored meet the unique needs of
                    adult learners. Whether seeking to advance in your current
                    career,
                  </p>
                  <ul className="h7_program-item-list2">
                    <li>Business &amp; Administration</li>
                    <li>Biotechnology</li>
                    <li>Corporate Finance</li>
                    <li>Major in Economics</li>
                    <li>Public Administration</li>
                  </ul>
                  <span className="h7_program-item-time">
                    <i className="fa-light fa-clock" /> Online + Onsite
                  </span>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4">
                <div className="h7_program-item">
                  <h3 className="h7_program-item-title">Online Education</h3>
                  <p>
                    Our undergraduate programs tailored meet the unique needs of
                    adult learners. Whether seeking to advance in your current
                    career,
                  </p>
                  <div className="h7_program-item-list">
                    <a href="#">
                      Undergraduate Programs{" "}
                      <i className="fa-light fa-arrow-right" />
                    </a>
                    <a href="#">
                      Graduate Programs <i className="fa-light fa-arrow-right" />
                    </a>
                  </div>
                  <span className="h7_program-item-time">
                    <i className="fa-light fa-clock" /> Online + Onsite
                  </span>
                  {/* <a href="#" class="h7_program-more-icon">
                                    More
                                    <span>
                                        <i class="fa-light fa-arrow-up"></i>
                                        <i class="fa-light fa-arrow-up"></i>
                                    </span>                      
                                </a> */}
                </div>
              </div>
            </div>
            <a href="#" className="h7_program-more-icon">
              More
              <span>
                <i className="fa-light fa-arrow-up" />
                <i className="fa-light fa-arrow-up" />
              </span>
            </a>
          </div>
        </div>
      </section>
      {/* Program area end */}
      {/* apply area start */}
      <section className="h7_apply-area pt-10 pb-95 fix">
        <div className="apply-text-wrap mb-80">
          <div className="apply-text-ticker">
            <h1 className="h7_apply-title animate-charcter">Apply Now</h1>
          </div>
        </div>
        <div className="container">
          <div className="h7_apply-wrap">
            <div className="h7_apply-item">
              <div className="h7_apply-item-number">
                <span>01</span>
              </div>
              <div className="h7_apply-item-title">
                <h4>You Apply</h4>
              </div>
              <div className="h7_apply-item-text">
                <p>
                  Our undergraduate programs tailored meet the unique needs of
                  adult learners. Whether seeking to advance in your current
                  career,
                </p>
              </div>
              <div className="h7_apply-item-img">
                <img src="assets/img/apply/7/1.png" alt="" />
              </div>
            </div>
            <div className="h7_apply-item">
              <div className="h7_apply-item-number">
                <span>02</span>
              </div>
              <div className="h7_apply-item-title">
                <h4>We Connect</h4>
              </div>
              <div className="h7_apply-item-text">
                <p>
                  Our undergraduate programs tailored meet the unique needs of
                  adult learners. Whether seeking to advance in your current
                  career,
                </p>
              </div>
              <div className="h7_apply-item-img">
                <img src="assets/img/apply/7/2.png" alt="" />
              </div>
            </div>
            <div className="h7_apply-item">
              <div className="h7_apply-item-number">
                <span>03</span>
              </div>
              <div className="h7_apply-item-title">
                <h4>You Get Ready</h4>
              </div>
              <div className="h7_apply-item-text">
                <p>
                  Our undergraduate programs tailored meet the unique needs of
                  adult learners. Whether seeking to advance in your current
                  career,
                </p>
              </div>
              <div className="h7_apply-item-img">
                <img src="assets/img/apply/7/3.png" alt="" />
              </div>
            </div>
            <a href="#" className="h7_apply-wrap-btn">
              View All Requirements
            </a>
          </div>
        </div>
      </section>
      {/* apply area end */}
      {/* counter area start */}
      <div className="h7_counter-area pb-105">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="h7_counter-item justify-content-xl-start justify-content-center mb-10">
                <div className="h7_counter-info">
                  <h3 className="h7_counter-info-title">
                    <span className="odometer count_one" data-count={83}>
                      00
                    </span>
                    <span>%</span>
                  </h3>
                  <span className="h7_counter-info-text">
                    OF RECENT GRADUATES <br /> STARTED NEW JOB
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="h7_counter-item justify-content-center mb-10">
                <div className="h7_counter-info">
                  <h3 className="h7_counter-info-title">
                    <span className="odometer count_one" data-count={125}>
                      00
                    </span>
                    <span>+</span>
                  </h3>
                  <span className="h7_counter-info-text">
                    University DEGREE PROGRAMS
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="h7_counter-item justify-content-center mb-10">
                <div className="h7_counter-info">
                  <h3 className="h7_counter-info-title">
                    <span className="odometer count_one" data-count={30}>
                      00
                    </span>
                    <span>+</span>
                  </h3>
                  <span className="h7_counter-info-text">YEARS OF HISTORY</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="h7_counter-item justify-content-xl-end justify-content-center mb-10">
                <div className="h7_counter-info">
                  <h3 className="h7_counter-info-title">
                    <span className="odometer count_one" data-count={345}>
                      00
                    </span>
                    <span>+</span>
                  </h3>
                  <span className="h7_counter-info-text">
                    Our University Lecture
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* counter area end */}
      {/* campus area start */}
      <section className="h6_campus-area fix">
        <div className="h6_campus-wrap">
          <div className="h6_campus-item-1">
            <img src="assets/img/campus/6/bg-1.jpg" alt="" />
            <div className="campus-text-wrap">
              <div className="campus-text-ticker" id="campus-text-ticker">
                <h1 className="h6_campus-title">Embrace the campus spirit</h1>
              </div>
            </div>
          </div>
          <div className="h6_campus-item-2">
            <img src="assets/img/campus/6/bg-2.jpg" alt="" />
            <h4>Our students create a vibrant and inclusive community</h4>
            <ul>
              <li>
                <a href="#">
                  Athletics Fitness <i className="fa-light fa-arrow-right" />
                </a>
              </li>
              <li>
                <a href="#">
                  Support &amp; Guidance <i className="fa-light fa-arrow-right" />
                </a>
              </li>
              <li>
                <a href="#">
                  Student activities <i className="fa-light fa-arrow-right" />
                </a>
              </li>
            </ul>
          </div>
          <div className="h6_campus-item-3">
            <img src="assets/img/campus/6/bg-3.jpg" alt="" />
            <div className="campus-text-wrap-2">
              <div className="campus-text-ticker-2" id="campus-text-ticker-2">
                <h1 className="h6_campus-title">Embrace the campus rhythm</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* campus area end */}
      {/* tuition area start */}
      <section className="h6_tuition-area pt-120 pb-70">
        <div className="container">
          <div className="row g-0">
            <div className="col-xl-5">
              <div className="h6_tuition-content mb-45">
                <img src="assets/img/bg/tuition-logo.png" alt="" />
                <h2>Tuition &amp; Fees</h2>
                <p>
                  This new plan is designed to reduce the average cost of a Make{" "}
                  <br /> School Education while preserving the core protections of
                  ISAs <br /> – if you don’t have a job after Make School, you
                  should not <br /> have to pay until you are employed.
                </p>
                <a href="#">
                  University Overview
                  <i className="fa-light fa-arrow-right" />
                </a>
              </div>
            </div>
            <div className="col-xl-7">
              <div className="h6_tuition-wrap mb-50">
                <div className="h6_tuition-item">
                  <span className="h6_tuition-item-date">2020-2022</span>
                  <h4 className="h6_tuition-item-title">Tuition Costs</h4>
                  <ul className="h6_tuition-item-list">
                    <li>
                      Fall 2020<span>$12,000</span>
                    </li>
                    <li>
                      Spring 2021<span>$14,000</span>
                    </li>
                    <li>
                      Summer 2020<span>$10,000</span>
                    </li>
                    <li>
                      Fall 2022<span>$15,000</span>
                    </li>
                    <li>
                      Spring 2021<span>$12,000</span>
                    </li>
                  </ul>
                  <p className="h6_tuition-item-total">
                    <span>Total :</span> <span>$63,000</span>
                  </p>
                </div>
                <div className="h6_tuition-item h6_tuition-light">
                  <span className="h6_tuition-item-date">2020-2022</span>
                  <h4 className="h6_tuition-item-title">Tuition Costs</h4>
                  <ul className="h6_tuition-item-list">
                    <li>
                      Fall 2020<span>$12,000</span>
                    </li>
                    <li>
                      Spring 2021<span>$14,000</span>
                    </li>
                    <li>
                      Summer 2020<span>$10,000</span>
                    </li>
                    <li>
                      Fall 2022<span>$15,000</span>
                    </li>
                    <li>
                      Spring 2021<span>$12,000</span>
                    </li>
                  </ul>
                  <p className="h6_tuition-item-total">
                    <span>Total :</span> <span>$63,000</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* tuition area end */}
      {/* scholarship area start */}
      <section className="h7_scholarship-area fix">
        <div className="container">
          <div className="h7_scholarship-img">
            <img src="assets/img/scholarship/7/1.jpg" alt="" />
          </div>
        </div>
        <div className="h7_scholarship-wrap">
          <div className="container p-relative">
            <div className="h7_scholarship-title">
              <h1>
                <span className="wow slideInLeft" data-wow-duration="2s">
                  Scholarship
                </span>
                <span
                  className="wow slideInRight scholar-bottom"
                  data-wow-duration="2s"
                  data-wow-delay=".1s"
                >
                  Programs
                </span>
              </h1>
            </div>
            <div className="h7_scholarship-content">
              <p>
                At Kempbelle University, we prepare you to launch your career by
                providing a supportive, creative, and professional environment
              </p>
              <a href="#">
                Financial Aid <i className="fa-light fa-arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* scholarship area end */}
      {/* blog area start */}
      <section className="h5_blog-area h6_blog-area pt-110 pb-90">
        <div className="container">
          <div className="row align-items-end mb-30">
            <div className="col-md-9">
              <div className="section-area-6 mb-30">
                <span className="section-subtitle">Latest News</span>
                <h2 className="section-title mb-0">Our Latest Articles</h2>
              </div>
            </div>
            <div className="col-md-3">
              <div className="h5_category-section-button mb-40 text-md-end">
                <a href="#" className="theme-btn theme-btn-medium theme-btn-5">
                  View All Blog
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="h5_blog-item mb-30 active">
                <div className="h5_blog-content">
                  <div className="h5_blog-content-meta">
                    <a href="#" className="h5_blog-content-meta-tag">
                      Blog
                    </a>
                    <span>March 24, 2023</span>
                  </div>
                  <h5 className="h5_blog-content-title">
                    <a href="blog-details.html">
                      Four Ways to Keep Your Workout Routine Fresh
                    </a>
                  </h5>
                  <p>
                    Maecenas Felis Tellus, dictum sed pharetra fermentum......
                  </p>
                  <a href="#" className="h5_blog-btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="auto"
                      height="auto"
                      x={0}
                      y={0}
                      viewBox="0 0 512 512"
                    >
                      <g>
                        <path
                          d="m506.134 241.843-.018-.019-104.504-104c-7.829-7.791-20.492-7.762-28.285.068-7.792 7.829-7.762 20.492.067 28.284L443.558 236H20c-11.046 0-20 8.954-20 20s8.954 20 20 20h423.557l-70.162 69.824c-7.829 7.792-7.859 20.455-.067 28.284 7.793 7.831 20.457 7.858 28.285.068l104.504-104 .018-.019c7.833-7.818 7.808-20.522-.001-28.314z"
                          fill="currentColor"
                          className=""
                        />
                      </g>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="h5_blog-item mb-30">
                <div className="h5_blog-content">
                  <div className="h5_blog-content-meta">
                    <a href="#" className="h5_blog-content-meta-tag">
                      Blog
                    </a>
                    <span>March 24, 2023</span>
                  </div>
                  <h5 className="h5_blog-content-title">
                    <a href="blog-details.html">
                      The Complete Guide to Build RESTful API Application
                    </a>
                  </h5>
                  <p>
                    Maecenas Felis Tellus, dictum sed pharetra fermentum......
                  </p>
                  <a href="#" className="h5_blog-btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="auto"
                      height="auto"
                      x={0}
                      y={0}
                      viewBox="0 0 512 512"
                    >
                      <g>
                        <path
                          d="m506.134 241.843-.018-.019-104.504-104c-7.829-7.791-20.492-7.762-28.285.068-7.792 7.829-7.762 20.492.067 28.284L443.558 236H20c-11.046 0-20 8.954-20 20s8.954 20 20 20h423.557l-70.162 69.824c-7.829 7.792-7.859 20.455-.067 28.284 7.793 7.831 20.457 7.858 28.285.068l104.504-104 .018-.019c7.833-7.818 7.808-20.522-.001-28.314z"
                          fill="currentColor"
                          className=""
                        />
                      </g>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="h5_blog-item mb-30">
                <div className="h5_blog-content">
                  <div className="h5_blog-content-meta">
                    <a href="#" className="h5_blog-content-meta-tag">
                      Blog
                    </a>
                    <span>March 24, 2023</span>
                  </div>
                  <h5 className="h5_blog-content-title">
                    <a href="blog-details.html">
                      Only One Thing Impossible For God Find Sense in Any.
                    </a>
                  </h5>
                  <p>
                    Maecenas Felis Tellus, dictum sed pharetra fermentum......
                  </p>
                  <a href="#" className="h5_blog-btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="auto"
                      height="auto"
                      x={0}
                      y={0}
                      viewBox="0 0 512 512"
                    >
                      <g>
                        <path
                          d="m506.134 241.843-.018-.019-104.504-104c-7.829-7.791-20.492-7.762-28.285.068-7.792 7.829-7.762 20.492.067 28.284L443.558 236H20c-11.046 0-20 8.954-20 20s8.954 20 20 20h423.557l-70.162 69.824c-7.829 7.792-7.859 20.455-.067 28.284 7.793 7.831 20.457 7.858 28.285.068l104.504-104 .018-.019c7.833-7.818 7.808-20.522-.001-28.314z"
                          fill="currentColor"
                          className=""
                        />
                      </g>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* blog area end */}
      {/* event area start */}
      <section className="event-area h7_event-area">
        <img src="assets/img/event/7/bg.jpg" alt="" className="event-bg-img" />
        <div className="event-wrap pt-120 pb-40">
          <div className="container">
            <div className="row align-items-center mb-30">
              <div className="col-xl-8 col-lg-8 col-md-8">
                <div className="event-section-area mb-20">
                  <div className="section-area">
                    <span className="section-subtitle">
                      Conference on Education
                    </span>
                    <h2 className="section-title mb-0">Upcoming Events</h2>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="event-navigation mb-30">
                  <div className="event-prev">
                    <svg
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15 8H1"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8 1L1 8L8 15"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="event-next">
                    <svg
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 8H15"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8 1L15 8L8 15"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="event-active swiper pb-80">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="event-item">
                    <div className="event-img">
                      <a href="event.html">
                        <img src="assets/img/event/1/1.jpg" alt="" />
                      </a>
                    </div>
                    <div className="event-content">
                      <div className="event-content-meta">
                        <span>
                          <i className="fa-thin fa-location-dot" />
                          London, US
                        </span>
                        <span>
                          <i className="fa-thin fa-clock" />
                          8.00 am - 6.00 pm
                        </span>
                      </div>
                      <h5 className="event-content-title">
                        <a href="event.html">
                          These are Designed to Provide Hands Training and
                          Skill-Building.
                        </a>
                      </h5>
                      <a href="#" className="t-theme-btn theme-btn event-btn">
                        Get Ticket
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="event-item">
                    <div className="event-img">
                      <a href="event.html">
                        <img src="assets/img/event/1/2.jpg" alt="" />
                      </a>
                    </div>
                    <div className="event-content">
                      <div className="event-content-meta">
                        <span>
                          <i className="fa-thin fa-location-dot" />
                          London, US
                        </span>
                        <span>
                          <i className="fa-thin fa-clock" />
                          8.00 am - 6.00 pm
                        </span>
                      </div>
                      <h5 className="event-content-title">
                        <a href="event.html">
                          Personalized Learning &amp; Meeting The Needs of Every
                          Student.
                        </a>
                      </h5>
                      <a href="#" className="t-theme-btn theme-btn event-btn">
                        Get Ticket
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="event-item">
                    <div className="event-img">
                      <a href="event.html">
                        <img src="assets/img/event/1/3.jpg" alt="" />
                      </a>
                    </div>
                    <div className="event-content">
                      <div className="event-content-meta">
                        <span>
                          <i className="fa-thin fa-location-dot" />
                          London, US
                        </span>
                        <span>
                          <i className="fa-thin fa-clock" />
                          8.00 am - 6.00 pm
                        </span>
                      </div>
                      <h5 className="event-content-title">
                        <a href="event.html">
                          The Whole Child Fostering Social and Emotional
                          Development.
                        </a>
                      </h5>
                      <a href="#" className="t-theme-btn theme-btn event-btn">
                        Get Ticket
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* event area end */}
      {/* teacher area start */}
      <section className="h3_teacher-area h6_teacher-area pt-115 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section-area-6 text-center mb-60">
                <span className="section-subtitle">Meet Our Mentors</span>
                <h2 className="section-title mb-0">Our Expert Teacher</h2>
              </div>
            </div>
          </div>
          <div className="teacher-active-7 swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="h3_teacher-item mb-25">
                  <div className="h3_teacher-img w_img">
                    <img src="assets/img/teacher/6/1.jpg" alt="" />
                    <div className="h3_teacher-social">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fa-brands fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa-brands fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa-brands fa-linkedin-in" />
                          </a>
                        </li>
                      </ul>
                      <span className="share">
                        <i className="fa-light fa-share-nodes" />
                      </span>
                    </div>
                  </div>
                  <div className="h3_teacher-content">
                    <h5 className="h3_teacher-content-title">
                      <a href="#">Eleanor Fant</a>
                    </h5>
                    <span>Headmaster</span>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="h3_teacher-item mb-25">
                  <div className="h3_teacher-img w_img">
                    <img src="assets/img/teacher/6/2.jpg" alt="" />
                    <div className="h3_teacher-social">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fa-brands fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa-brands fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa-brands fa-linkedin-in" />
                          </a>
                        </li>
                      </ul>
                      <span className="share">
                        <i className="fa-light fa-share-nodes" />
                      </span>
                    </div>
                  </div>
                  <div className="h3_teacher-content">
                    <h5 className="h3_teacher-content-title">
                      <a href="#">Fig Nelson</a>
                    </h5>
                    <span>Language Teacher</span>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="h3_teacher-item mb-25">
                  <div className="h3_teacher-img w_img">
                    <img src="assets/img/teacher/6/3.jpg" alt="" />
                    <div className="h3_teacher-social">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fa-brands fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa-brands fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa-brands fa-linkedin-in" />
                          </a>
                        </li>
                      </ul>
                      <span className="share">
                        <i className="fa-light fa-share-nodes" />
                      </span>
                    </div>
                  </div>
                  <div className="h3_teacher-content">
                    <h5 className="h3_teacher-content-title">
                      <a href="#">Hanson Deck</a>
                    </h5>
                    <span>Special Education Teacher</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="teacher-pagination mt-45" />
          </div>
        </div>
      </section>
      {/* teacher area end */}
      {/* testimonial area start */}
      <section
        className="h6_testimonial-area pt-120 pb-120 bg-default pt-215 pb-100 fix"
        data-background={Student}
      >
        <div className="testimonial-text-wrap mb-80">
          <div className="testimonial-text-ticker" id="testimonial-text-ticker">
            <h1 className="h6_testimonial-title">Outstanding Clients care</h1>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-9">
              <div className="h6_testimonial-wrap mr-60">
                <div className="h6_testimonial-navigation mb-50">
                  <div className="h6_testimonial-prev">
                    <svg
                      width={10}
                      height={16}
                      viewBox="0 0 10 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.5 8L8 0.5L9.05 1.55L2.6 8L9.05 14.45L8 15.5L0.5 8Z"
                        fill="currentColor"
                      />
                      <path
                        d="M0.5 8L8 0.5L9.05 1.55L2.6 8L9.05 14.45L8 15.5L0.5 8Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div className="h6_testimonial-next">
                    <svg
                      width={10}
                      height={16}
                      viewBox="0 0 10 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.5 8L2 0.5L0.950001 1.55L7.4 8L0.950001 14.45L2 15.5L9.5 8Z"
                        fill="currentColor"
                      />
                      <path
                        d="M9.5 8L2 0.5L0.950001 1.55L7.4 8L0.950001 14.45L2 15.5L9.5 8Z"
                        fill="currentColor"
                        fillOpacity="0.8"
                      />
                    </svg>
                  </div>
                </div>
                <div className="h6_testimonial-active swiper">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="h6_testimonial-item">
                        <blockquote>
                          <p>
                            One aspect that truly stood out for me was the
                            research opportunities. Eduan University has
                            state-of-the-art labs and facilities, and I had the
                            chance to work on cutting-edge research projects
                            alongside professors.
                          </p>
                          <div className="quote-admin">
                            <div className="quote-admin-inner">
                              <h5>William Board</h5>
                              <span>Student Eduan Univesity</span>
                            </div>
                          </div>
                        </blockquote>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="h6_testimonial-item">
                        <blockquote>
                          <p>
                            One aspect that truly stood out for me was the
                            research opportunities. Eduan University has
                            state-of-the-art labs and facilities, and I had the
                            chance to work on cutting-edge research projects
                            alongside professors.
                          </p>
                          <div className="quote-admin">
                            <div className="quote-admin-inner">
                              <h5>William Board</h5>
                              <span>Student Eduan Univesity</span>
                            </div>
                          </div>
                        </blockquote>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="h6_testimonial-item">
                        <blockquote>
                          <p>
                            One aspect that truly stood out for me was the
                            research opportunities. Eduan University has
                            state-of-the-art labs and facilities, and I had the
                            chance to work on cutting-edge research projects
                            alongside professors.
                          </p>
                          <div className="quote-admin">
                            <div className="quote-admin-inner">
                              <h5>William Board</h5>
                              <span>Student Eduan Univesity</span>
                            </div>
                          </div>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* testimonial area end */}
      {/* cta area start */}
      <div className="h6_cta-area pt-120">
        <div className="container">
          <div
            className="h6_cta-wrapper"
            data-background="assets/img/cta/7/bg.jpg"
          >
            <img
              className="h6_cta-wrapper-img"
              src="assets/img/cta/7/1.png"
              alt=""
            />
            <div className="h6_cta-content mb-30 mb-md-0">
              <h2 className="h6_cta-title">
                Are you ready to take the next step?
              </h2>
            </div>
            <div className="h6_cta-button">
              <a href="#" className="h6_cta-btn">
                Application Form
                <i className="fa-light fa-arrow-up-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* cta area end */}
    </main>
    {/* footer area start */}
    <footer className="h6_footer-area">
      <div className="footer-top pt-200 pb-30">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-3 col-lg-3 col-md-5">
              <div className="h6_footer-widget mb-40 mr-80">
                <div className="footer-logo">
                  <a href="index.html">
                    <img src="assets/img/logo/logo-red.png" alt="" />
                  </a>
                </div>
                <p className="h6_footer-widget-text">
                  Maurus herderite egret orca ac incident. Viramas at deque eu
                  ipsum consenter commode egret t dam celestas beget mi.
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
                        <a href="#">About Us</a>
                      </li>
                      <li>
                        <a href="#">Courses</a>
                      </li>
                      <li>
                        <a href="#">Help Centre</a>
                      </li>
                      <li>
                        <a href="#">News</a>
                      </li>
                      <li>
                        <a href="#">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="h6_footer-inner">
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
              </div>
              <div className="h6_footer-inner">
                <div className="h6_footer-widget mb-40">
                  <h5 className="h6_footer-widget-title">Support</h5>
                  <div className="h6_footer-widget-list">
                    <ul>
                      <li>
                        <a href="#">Help Centre</a>
                      </li>
                      <li>
                        <a href="#">FAQ</a>
                      </li>
                      <li>
                        <a href="#">Contacts</a>
                      </li>
                      <li>
                        <a href="#">Security</a>
                      </li>
                      <li>
                        <a href="#">Privacy Policy</a>
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
                <p>Copyright © 2023 All Rights Reserved by Eduan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    {/* footer area end */}
    {/* JS here */}
  </>
  

  );
};

export default Home;