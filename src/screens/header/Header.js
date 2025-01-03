import React from 'react';
import logoImage from "../../assets/img/logoImage.webp"
import Navbar from './NavMenu';

const Home = () => {
  return (
    <>
  {/* sidebar-information-area-start */}
  <div className="sidebar-info side-info">
    <div className="sidebar-logo-wrapper mb-25">
      <div className="row align-items-center">
        <div className="col-xl-6 col-8">
          <div className="sidebar-logo">
            <a href="index.html">
              <img src={logoImage} alt="logo-img" />
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
    <div className="h2_header-area header-sticky">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-3 col-sm-7 col-6">
            <div className="h2_header-left">
              <div className="h2_header-logo">
                <a href="/Home">
                  <img src={logoImage} alt="" />
                </a>
              </div>
              {/* <div className="h2_header-category d-none d-sm-block">
                <a href="#">
                  <i className="fa-solid fa-grid" />
                  <span>Category</span>
                </a>
                <ul className="h2_header-category-submenu">
                  <li>
                    <a href="#">Design</a>
                  </li>
                  <li>
                    <a href="#">Development</a>
                  </li>
                  <li>
                    <a href="#">Architecture</a>
                  </li>
                  <li>
                    <a href="#">Data Science</a>
                  </li>
                  <li>
                    <a href="#">Marketing</a>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
          <Navbar/>
          {/* <div className="col-xl-6 d-none d-xl-block">
            <div className="h2_header-middle">
              <nav className="h2_main-menu mobile-menu" id="mobile-menu">
                <ul>
                  <li>
                    <a href="/Home">Home</a>
                                     </li>
                  <li className="menu-has-child">
                    <a href="/About">About</a>
                    <ul className="submenu">
                      <li>
                        <a href="/">About Us</a>
                      </li>
                      <li>
                        <a href="/">Campus</a>
                      </li>
                      <li>
                        <a href="/">Our Leadership</a>
                      </li>
                      <li>
                        <a href="/">Facilities</a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-has-child">
                    <a href="#">Academics</a>
                    <ul className="submenu">
                      <li>
                        <a href="/">UG Programmes</a>
                      </li>
                      <li>
                        <a href="/">Faculty</a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-has-child">
                    <a href="/">Student Life</a>
                    <ul className="submenu">
                      <li>
                        <a href="/">Event</a>
                      </li>
                      <li>
                        <a href="/">Training & Placement</a>
                      </li>
                      <li>
                        <a href="/">Alumni</a>
                      </li>
                      <li>
                        <a href="/">Gallery</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="/Contact">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div> */}
          <div className="col-xl-3 col-sm-5 col-6">
            <div className="h2_header-right">
              <div className="h2_header-btn d-none d-sm-block">
                <a className="header-btn theme-btn theme-btn-medium">
                  Sign Up
                </a>
              </div>
              <div className="header-menu-bar d-xl-none ml-10">
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
</>

  );
};

export default Home;