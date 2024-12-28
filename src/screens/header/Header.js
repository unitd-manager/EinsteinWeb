import React from 'react';
import logoImage from "../../assets/img/logoImage.webp"

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
          <div className="col-xl-6 d-none d-xl-block">
            <div className="h2_header-middle">
              <nav className="h2_main-menu mobile-menu" id="mobile-menu">
                <ul>
                  <li>
                    <a href="/Home">Home</a>
                    {/* <ul className="submenu">
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
                    </ul> */}
                  </li>
                  {/* <li className="menu-has-child">
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
                  </li> */}
                  {/* <li className="menu-has-child">
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
                  </li> */}
                  {/* <li className="menu-has-child">
                    <a href="blog.html">Blog</a>
                    <ul className="submenu">
                      <li>
                        <a href="blog.html">Blog</a>
                      </li>
                      <li>
                        <a href="blog-details.html">Blog Details</a>
                      </li>
                    </ul>
                  </li> */}
                  {/* <li>
                    <a href="contact.html">Contact</a>
                  </li> */}
                </ul>
              </nav>
            </div>
          </div>
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