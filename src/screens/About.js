import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import api from "../constants/api";
import "swiper/css";
import "../assets/css/modal.css"
import "swiper/css/navigation"; 
import Slider from "react-slick";
import "../assets/css/event.css";
import "odometer/themes/odometer-theme-default.css";
import ourleaderBanner from "../assets/img/ourleader-banner.webp";
import bannerImge from "../assets/img/banner-img.png";
import Founder from "../assets/img/Founder.png";
import Student from "../assets/img/Student.png";
import line from "../assets/img/line.png";
import imageForAbout from "../assets/img/about/Image for About.png";
import principal from "../assets/img/about/principal.jpg";
import viceprincipal from "../assets/img/DSC_1491.JPG";
import admin from "../assets/img/about/admin.jpg";
import Founder1 from "../assets/img/about/1.png";
import founder from "../assets/img/about/founder.png";
import imgShape from "../assets/img/about/img-shape.png";
import shape2 from "../assets/img/about/shape-2.png";
import shape1 from "../assets/img/about/shape-1.png";
import founderBanner from "../assets/img/about/Banner-1920X450-Founder.jpg";
import imagesbanner from "../assets/img/about/BannerOfCollege.jpg";
import Hostal from "../assets/img/about/Hostal.jpg";
import sports from "../assets/img/about/Sports.png";
import transport from "../assets/img/about/transport.jpg";
import Imagesactive from "../assets/img/about/Imagesactive.jpg";
import IMG1 from "../assets/img/about/image 11.png";
import IMG2 from "../assets/img/about/image 2.png";
import IMG3 from "../assets/img/about/image 3.png";
import HappyNewYear from "../assets/img/HappyNewYear.jpg"

import Modal from "react-modal"; // You can use any modal library or create your own

// Ensure the modal is attached to the root element
Modal.setAppElement("#root");

function removeHtmlTags(str) {
  return str.replace(/<\/?[^>]+(>|$)/g, ""); // Removes all HTML tags

  
}

const Home = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [OurManagement, setOurManagement] = useState([]);
  const [OurPhilosophy, setOurPhilosophyHome] = useState([]);
  const [slides, setslides] = useState([]);
  const [about1, setAbout1] = useState([]);
  const [about2, setAbout2] = useState([]);
  const [mission, setMission] = useState([]);
  const [founder, setFounder] = useState([]);
  const [Campus1, setcampus1] = useState([]);
  const [Campus2, setcampus2] = useState([]);
  const [Campus3, setcampus3] = useState([]);
  const [Campusbanner, setcampusBanner] = useState([]);
  const [Facilities1, setFacilities1] = useState([]);
  const [Facilities2, setFacilities2] = useState([]);
  const [Facilities3, setFacilities3] = useState([]);
  const [Facilities4, setFacilities4] = useState([]);
  const [Facilities5, setFacilities5] = useState([]);
  const [Facilities6, setFacilities6] = useState([]);
  const [principal, setPrincipal] = useState([]);
  const [principalDetails, setPrincipalDetails] = useState([]);
  const [vicePrincipal, setVicePrincipal] = useState([]);
  const [vicePrincipalDetails, setVicePrincipalDetails] = useState([]);


  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleOpenModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };


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

  useEffect(() => {
    api
      .get("/content/getAboutOurManagement")
      .then((res) => {
        setOurManagement(res.data.data);
      })
      .catch((err) => {
        console.error("Error fetching magazine data", err);
      });
    api
      .get("/content/getOurPhilosophyHomePanel")
      .then((res) => {
        setOurPhilosophyHome(res.data.data);
      })
      .catch((err) => {
        console.error("Error fetching magazine data", err);
      });
    api
      .get("/content/getBannerAbout")
      .then((res) => {
        setslides(res.data.data);
      })
      .catch((err) => {
        console.error("Error fetching magazine data", err);
      });
      api
      .get("/content/getAboutPanel")
      .then((res) => {
        setAbout1(res.data.data);
      })
      .catch((err) => {
        console.error("Error fetching magazine data", err);
      });
      api
      .get("/content/getAboutPanel2")
      .then((res) => {
        setAbout2(res.data.data);
      })
      .catch((err) => {
        console.error("Error fetching magazine data", err);
      });
      api
      .get("/content/getAboutMission")
      .then((res) => {
        setMission(res.data.data);
      })
      .catch((err) => {
        console.error("Error fetching magazine data", err);
      });
      api
      .get("/content/getTributeFounderAboutPanel")
      .then((res) => {
        setFounder(res.data.data);
      })
      .catch((err) => {
        console.error("Error fetching magazine data", err);
      });
      api
      .get("/content/getAboutCampus1")
      .then((res) => {
        setcampus1(res.data.data);
      })
      .catch((err) => {
        console.error("Error fetching magazine data", err);
      });
      api
      .get("/content/getBannerCampusAboutPanel")
      .then((res) => {
        setcampusBanner(res.data.data);
      })
      .catch((err) => {
        console.error("Error fetching magazine data", err);
      });
      api
      .get("/content/getAboutCampus2")
      .then((res) => {
        setcampus2(res.data.data);
      })
      .catch((err) => {
        console.error("Error fetching magazine data", err);
      });
      api
      .get("/content/getAboutCampus3")
      .then((res) => {
        setcampus3(res.data.data);
      })
      .catch((err) => {
        console.error("Error fetching magazine data", err);
      });
      api
      .get("/content/getAboutFacilities1")
      .then((res) => {
        setFacilities1(res.data.data);
      })
      .catch((err) => {
        console.error("Error fetching magazine data", err);
      });
      api
      .get("/content/getAboutFacilities2")
      .then((res) => {
        setFacilities2(res.data.data);
      })
      .catch((err) => {
        console.error("Error fetching magazine data", err);
      });
      api
      .get("/content/getAboutFacilities3")
      .then((res) => {
        setFacilities3(res.data.data);
      })
      .catch((err) => {
        console.error("Error fetching magazine data", err);
      });
      api
      .get("/content/getAboutFacilities4")
      .then((res) => {
        setFacilities4(res.data.data);
      })
      .catch((err) => {
        console.error("Error fetching magazine data", err);
      });
      api
      .get("/content/getAboutFacilities5")
      .then((res) => {
        setFacilities5(res.data.data);
      })
      .catch((err) => {
        console.error("Error fetching magazine data", err);
      });
      api
      .get("/content/getAboutFacilities6")
      .then((res) => {
        setFacilities6(res.data.data);
      })
      .catch((err) => {
        console.error("Error fetching magazine data", err);
      });
      api
      .get("/content/getPrincipal")
      .then((res) => {
        setPrincipal(res.data.data);
      })
      .catch((err) => {
        console.error("Error fetching magazine data", err);
      });
      api
      .get("/content/getPrincipalDetails")
      .then((res) => {
        setPrincipalDetails(res.data.data);
      })
      .catch((err) => {
        console.error("Error fetching magazine data", err);
      });
      api
      .get("/content/getVicePrincipal")
      .then((res) => {
        setVicePrincipal(res.data.data);
      })
      .catch((err) => {
        console.error("Error fetching magazine data", err);
      });
      api
      .get("/content/getVicePrincipalDetails")
      .then((res) => {
        setVicePrincipalDetails(res.data.data);
      })
      .catch((err) => {
        console.error("Error fetching magazine data", err);
      });

  }, []);

  return (
    <>
        
      <main>
        {/* banner area start */}
        <section className="slider-area fix">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              nextEl: ".h7_slider-next",
              prevEl: ".h7_slider-prev",
            }}
            autoplay={{ delay: 5000 }}
            loop={true}
            className="h7_slider-active"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div
                  className="h7_single-banner bg-default"
                  style={{
                    backgroundImage: `url(https://ecasadmin.unitdtechnologies.com/storages/${slide?.file_name})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
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
                            {slide.title}
                          </h1>
                          <p
                            className="h7_banner-content-text"
                            data-animation="fadeInUp"
                            data-delay="0.5s"
                          >
                            {removeHtmlTags(slide.description)}
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
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="h7_slider-navigation d-none d-md-grid">
            <div className="h7_slider-prev">
              <i className="fa-regular fa-arrow-down-left" />
            </div>
            <div className="h7_slider-next">
              <i className="fa-regular fa-arrow-up-right" />
            </div>
          </div>
        </section>
        <section className="about-area pt-140 pb-90">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6">
                <div className="about-img mb-50">
                  <img src={`https://ecasadmin.unitdtechnologies.com/storages/${about1[0]?.file_name}`} alt="" />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-10">
                <div className="about-content mb-50">
                  <div className="section-area mb-20">
                    <span className="section-subtitle">About</span>
                    <h2 className="section-title mb-15">
                    {about1[0]?.title}
                    </h2>
                    <p className="section-text" dangerouslySetInnerHTML={{ __html: about1[0]?.description }}>
                    
                    </p>
                   
                  </div>
                  <div className="about-content-list">
                    <ul>
                    {about2.map((about, index) => (
                      <li dangerouslySetInnerHTML={{ __html: about?.description }}>
                      </li>
                    ))}
                    </ul>
                  </div>
                  {/* <div className="about-content-button">
                    <a
                      href="about.html"
                      className="theme-btn about-btn theme-btn-medium"
                    >
                      More Details
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="h10_about-area pt-50 pb-50">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6" style={{ marginTop: 100 }}>
                <div className="h10_about-content ml-35">
                  <img src={shape2} alt="" className="h10_about-shape-2" />
                  <h2 className="h10_about-content-title">
                    {OurPhilosophy[0]?.title}
                  </h2>
                  <div className="h10_about-content-inner">
                    {/* <h5>Thiru. AladiAruna M.A., B.L</h5> */}
                    <p
                      dangerouslySetInnerHTML={{
                        __html: OurPhilosophy[0]?.description,
                      }}
                    ></p>
                  </div>
                  <div className="h10_about-bottom">
                    {/* <div className="h10_about-admin">
              <img src={admin} alt="" />
              <div className="h10_about-admin-info">
                <h5>Hugh Millie-Yate</h5>
                <span>Vice Principal</span>
              </div>
            </div> */}
                    {/* <div className="h10_about-bottom-btn">
                      <a href="#">
                        <span className="inner-btn">
                          <i className="fa-light fa-arrow-up" />
                        </span>
                        <span className="inner-text">Explore our history</span>
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="h10_about-img mr-25">
                  {/* <img
            src={imgShape}
            alt=""
            className="h10_about-img-shape d-none d-md-block"
          /> */}
                  <img
                    src={shape1}
                    alt=""
                    className="h10_about-img-shape-1 d-none d-md-block"
                  />
                  <img
                    src={`https://ecasadmin.unitdtechnologies.com/storages/${OurPhilosophy[0]?.file_name}`}
                    alt=""
                    className="wow fadeInLeftBig"
                    style={{
                      width: "90%",
                      height: "450px", // Thumbnail height
                      objectFit: "cover",
                    }}
                    data-wow-delay="0.3s"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="h10_about-area pt-50 pb-50" style={{ marginTop: 100 }}>
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6">
                <div className="h10_about-img mr-25">
                  {/* <img
            src={imgShape}
            alt=""
            className="h10_about-img-shape d-none d-md-block"
          /> */}
                  <img
                    src={shape1}
                    alt=""
                    className="h10_about-img-shape-1 d-none d-md-block"
                  />
                  <img
                    src={`https://ecasadmin.unitdtechnologies.com/storages/${mission[0]?.file_name}`}
                    alt=""
                    className="wow fadeInLeftBig"
                    style={{
                      width: "90%",
                      height: "450px", // Thumbnail height
                      objectFit: "cover",
                    }}
                    data-wow-delay="0.3s"
                  />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6" style={{ marginTop: 75 }}>
                <div className="h10_about-content ml-35">
                  <img src={shape2} alt="" className="h10_about-shape-2" />
                  <h2 className="h10_about-content-title">
                    {mission[0]?.title}
                  </h2>
                  <div className="h10_about-content-inner">
                    {/* <h5>Thiru. AladiAruna M.A., B.L</h5> */}
                    <p
                    dangerouslySetInnerHTML={{
                      __html: mission[0]?.description,
                    }}
                    >
                    </p>
                  </div>
                  {/* <div className="h10_about-count">
            <div className="h10_about-count-item">
              <h3>06+</h3>
              <span>Years experience</span>
            </div>
            <div className="h10_about-count-item">
              <h3>7k+</h3>
              <span>Students each year</span>
            </div>
            <div className="h10_about-count-item">
              <h3>24+</h3>
              <span>Award Wining</span>
            </div>
          </div> */}
                  <div className="h10_about-bottom">
                    {/* <div className="h10_about-admin">
              <img src={admin} alt="" />
              <div className="h10_about-admin-info">
                <h5>Hugh Millie-Yate</h5>
                <span>Vice Principal</span>
              </div>
            </div> */}
                    <div className="h10_about-bottom-btn">
                      {/* <a href="#">
                        <span className="inner-btn">
                          <i className="fa-light fa-arrow-up" />
                        </span>
                        <span className="inner-text">Explore our history</span>
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

  

        <section className="h2_teacher-area pb-80">
          <div className="container">
            <div className="row">
              <div className="col-xl-9 col-lg-8 col-md-12 mb-30">
                <div
                  className="h2_teacher-section bg-default"
                  data-background="assets/img/teacher/2/bg.jpg"
                >
                  <div className="section-area-2">
                    <h2 className="section-title mb-50">
                      Our Most <br /> Experience{" "}
                      <span>
                        Management Desk <img src={line} alt="" />
                      </span>
                    </h2>
                  </div>
                  <div className="h2_teacher-button">
                    <a className="theme-btn theme-btn-medium teacher-btn">
                      About Our Management
                    </a>
                  </div>
                </div>
              </div>
              {OurManagement.map((item, index) => (
                <div className="col-xl-3 col-lg-4 col-sm-6">
                  <div className="h2_teacher-item mb-30">
                    <div className="h2_teacher-img">
                      <img
                        src={`https://ecasadmin.unitdtechnologies.com/storages/${item?.file_name}`}
                        alt=""
                        style={{ marginBottom: 50,cursor: "pointer" }}
                        onClick={() => handleOpenModal(item)}
                      />
                    </div>
                    <div className="h2_teacher-content">
                      <h5
                      style={{ cursor: "pointer"}}
                        onClick={() => handleOpenModal(item)}
                      > {item.description_short}</h5>
                      <span>{item.title}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
        {/* Modal */}
        {selectedItem && (
          <div style={modalStyles}>
            <div style={overlayStyles} onClick={() => handleCloseModal()}></div>
           
            <div style={contentStyles}>
            <button onClick={handleCloseModal} className="close-button">
              &times;
            </button>
            {/* <img src={shape2} alt="" className="h10_about-shape-2" /> */}
            {/* <img
                    src={shape2}
                    alt=""
                    className="h10_about-img-shape-1 d-none d-md-block"
                  /> */}
              <img
                src={`https://ecasadmin.unitdtechnologies.com/storages/${selectedItem?.file_name}`}
                alt="Preview"
                style={imageStyles}
                // onClick={handleImageClick}
              />
              
              <h5  >{selectedItem.description_short}</h5>
              <p> {selectedItem.title}</p>
            <p dangerouslySetInnerHTML={{ __html: selectedItem.description }}></p>
           
            </div>
          </div>
        )}
      </div>
        </section>
        <section className="h10_testimonial-area pt-90 pb-120 fix">
          <div className="section-area-6 text-center mb-60">
            <span className="section-subtitle">{principal[0]?.description_short}</span>
            <h2 className="section-title mb-0"> {principal[0]?.title}</h2>
          </div>
          <div className="container">
            <div className="row">
            </div>
            <div className="row align-items-center justify-content-between">
              <div className="col-xl-6 col-lg-7 col-md-7">
                <div className="h10_testimonial-wrap mr-45 position-relative">
                  <Swiper
                    className="h10_testimonial-active"
                    modules={[Navigation, Pagination]}
                    navigation={{
                      prevEl: ".h10_testimonial-prev",
                      nextEl: ".h10_testimonial-next",
                    }}
                    pagination={{ clickable: true }}
                    spaceBetween={30}
                    slidesPerView={1}
                  >
                    <SwiperSlide>
                      <div className="h10_testimonial-item">
                        <blockquote>
                          <p   dangerouslySetInnerHTML={{
                      __html: principal[0]?.description,
                    }}>
                          
                          </p >
                          {/* <div className="quote-admin-inner">
                            <h5>William Board</h5>
                            <span>Student Eduan University</span>
                          </div> */}
                        </blockquote>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="h10_testimonial-item">
                        {/* <blockquote> */}
                          <p dangerouslySetInnerHTML={{
                      __html: principalDetails[0]?.description,
                    }}>
                          
                          </p>
                          {/* <div className="quote-admin-inner">
                            <h5>Jane Doe</h5>
                            <span>Student Eduan University</span>
                          </div> */}
                        {/* </blockquote> */}
                      </div>
                    </SwiperSlide>
                  </Swiper>
                  <div className="h10_testimonial-navigation">
                    <div className="h10_testimonial-prev">
                      <svg
                        width="10"
                        height="16"
                        viewBox="0 0 10 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.5 8L8 0.5L9.05 1.55L2.6 8L9.05 14.45L8 15.5L0.5 8Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div className="h10_testimonial-next">
                      <svg
                        width="10"
                        height="16"
                        viewBox="0 0 10 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.5 8L2 0.5L0.950001 1.55L7.4 8L0.950001 14.45L2 15.5L9.5 8Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-lg-5 col-md-5">
                <div className="h10_testimonial-img ml-10 w_img">
                  <img
                    src={`https://ecasadmin.unitdtechnologies.com/storages/${principal[0]?.file_name}`}
                    alt=""
                    className="wow fadeInRight"
                    data-wow-delay="0.3s"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="h10_testimonial-area pt-90 pb-120 fix">
          <div className="section-area-6 text-center mb-60">
            <span className="section-subtitle">{vicePrincipal[0]?.description_short}</span>
            <h2 className="section-title mb-0">{vicePrincipal[0]?.title}</h2>
          </div>
          <div className="container">
            <div className="row">
            
            </div>
            <div className="row align-items-center justify-content-between">
              <div className="col-xl-5 col-lg-5 col-md-5">
                <div className="h10_testimonial-img ml-10 w_img">
                  <img
                    src={`https://ecasadmin.unitdtechnologies.com/storages/${vicePrincipal[0]?.file_name}`}
                    alt=""
                    className="wow fadeInRight"
                    data-wow-delay="0.3s"
                  />
                </div>
              </div>
              <div className="col-xl-6 col-lg-7 col-md-7">
                <div className="h10_testimonial-wrap mr-45 position-relative">
                  <Swiper
                    className="h10_testimonial-active"
                    modules={[Navigation, Pagination]}
                    navigation={{
                      prevEl: ".h10_testimonial-prev",
                      nextEl: ".h10_testimonial-next",
                    }}
                    pagination={{ clickable: true }}
                    spaceBetween={30}
                    slidesPerView={1}
                  >
                    <SwiperSlide>
                      <div className="h10_testimonial-item">
                        <blockquote>
                          <p dangerouslySetInnerHTML={{
                      __html: vicePrincipal[0]?.description,
                    }}>
                          </p>
                        </blockquote>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="h10_testimonial-item">
                        <blockquote>
                          <p dangerouslySetInnerHTML={{
                      __html: vicePrincipalDetails[0]?.description,
                    }}>
                          </p>
                        
                        </blockquote>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                  <div className="h10_testimonial-navigation">
                    <div className="h10_testimonial-prev">
                      <svg
                        width="10"
                        height="16"
                        viewBox="0 0 10 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.5 8L8 0.5L9.05 1.55L2.6 8L9.05 14.45L8 15.5L0.5 8Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div className="h10_testimonial-next">
                      <svg
                        width="10"
                        height="16"
                        viewBox="0 0 10 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.5 8L2 0.5L0.950001 1.55L7.4 8L0.950001 14.45L2 15.5L9.5 8Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="h9_choose-area">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="h9_choose-item-big mb-30">
              <div className="h9_choose-item-big-img">
                <img src={principal} alt="" />
              </div>
              <div className="h9_choose-item-big-content">
                <span>Become an Instructor</span>
                <h3>
                  <a href="#">
                    Come and Join Us to Disseminate Your Expertise.
                  </a>
                </h3>
                <p>
                  Ut cursus sem metus, sagittis ullamcorper neque port Proin
                  commodo lacinia Donec ultrices ante ac malesuada.
                </p>
                <a href="#" className="theme-btn theme-btn-9">
                  Become an Instructor
                  <i className="fa-light fa-angle-right" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="h9_choose-item-big mb-30">
              <div className="h9_choose-item-big-img">
                <img src={principal} alt="" />
              </div>
              <div className="h9_choose-item-big-content">
                <span>Learners and Students</span>
                <h3>
                  <a href="#">There Are No Limits to What You Can Learn.</a>
                </h3>
                <p>
                  Ut cursus sem metus, sagittis ullamcorper neque port Proin
                  commodo lacinia Donec ultrices ante ac malesuada.
                </p>
                <a href="#" className="theme-btn theme-btn-9">
                  Terners, start here
                  <i className="fa-light fa-angle-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}
        <div className="section-area-6 text-center mb-60">
          <span className="section-subtitle">Our Campus</span>
          <h2 className="section-title mb-0">Inspiring & Welcoming</h2>
        </div>

        <div
          class="h5_video-area"
          data-background="assets/img/video/5/bg.jpg"
          style={{
            backgroundImage: `url(${imagesbanner})`,
            // backgroundSize: "cover",
            // backgroundPosition: "center",
          }}
        >
          <div class="h5_video-content">
            <a
              href="https://www.youtube.com/watch?v=ifuMTQ-gI-E"
              class="h5_video-content-btn h5_play-btn popup-video"
            >
              <i class="fa-solid fa-play"></i>
            </a>
          </div>
        </div>

        <section className="h7_apply-area pt-10 pb-95 fix">
          <div className="container">
            <div className="h7_apply-wrap">
            
              <div className="h7_apply-item">
                {/* <div className="h7_apply-item-number">
                  <span>01</span>
                </div> */}
                <div className="h7_apply-item-title">
                <img src={`https://ecasadmin.unitdtechnologies.com/storages/${Campus1[0]?.file_name}`} alt=""  
                  style={{
                  width:"100%",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                 }}
                 />
                </div>
                <div className="h7_apply-item-text">
                <div className="section-area-7 text-center mb-60">
          <span className="section-subtitle">{Campus1[0]?.title}</span>
           </div>
                  <p  dangerouslySetInnerHTML={{ __html: Campus1[0]?.description }}>
                  </p>
                </div>
                <div className="h7_apply-item-img">
                {/* <img src={IMG1} alt="" /> */}
                </div>
              </div>
            
              <div className="h7_apply-item">
                {/* <div className="h7_apply-item-number">
                  <span>02</span>
                </div> */}
                <div className="h7_apply-item-title">
                <img src={`https://ecasadmin.unitdtechnologies.com/storages/${Campus2[0]?.file_name}`} alt="" 
                 style={{
                  width:"100%",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                 }}/>
                </div>
                <div className="h7_apply-item-text">
                    <div className="section-area-7 text-center mb-60" >
          <span className="section-subtitle">{Campus2[0]?.title}</span>
           </div>
                  <p  dangerouslySetInnerHTML={{ __html: Campus2[0]?.description }}>
                  </p>
                </div>
                <div className="h7_apply-item-img">
                  <img src="assets/img/apply/7/2.png" alt="" />
                </div>
              </div>
             
              <div className="h7_apply-item">
                {/* <div className="h7_apply-item-number">
                  <span>03</span>
                </div> */}
                <div className="h7_apply-item-title">
                <img src={`https://ecasadmin.unitdtechnologies.com/storages/${Campus3[0]?.file_name}`}  alt="" 
                 style={{
                  width:"100%",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                 }}
                />
                </div>
                <div className="h7_apply-item-text">
                <div className="section-area-7 text-center mb-60" >
          <span className="section-subtitle">{Campus3[0]?.title}</span>
           </div>
                  <p  dangerouslySetInnerHTML={{ __html: Campus3[0]?.description }}>
                  </p>
                </div>
                <div className="h7_apply-item-img">
                  <img src="assets/img/apply/7/3.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="h3_teacher-area h6_teacher-area pt-115 pb-120">
          <div className="container">
            <Swiper
              modules={[Pagination, Navigation]}
              // pagination={{ clickable: true }}
              navigation
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 1 },
                1024: { slidesPerView: 1 },
              }}
            >
              {Campusbanner.map((teacher, index) => (
                <SwiperSlide key={index}>
                  <div className="h3_teacher-item mb-25">
                    <div className="h3_teacher-img w_img">
                      <img src={`https://ecasadmin.unitdtechnologies.com/storages/${teacher?.file_name}`}  alt={teacher?.title} />
                      {/* <div className="h3_teacher-social">
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
                      </div> */}
                    </div>
                    <div className="h3_teacher-content">
                      <h5 className="h3_teacher-content-title">
                        <a href="#">
                          Build lifelong friendships with students who share
                          your interests, passions, and perspectives
                        </a>
                      </h5>
                      <span>{teacher.title}</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>


        <section className="h10_event-area1 pt-110 pb-90">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12">
                <div className="section-area-10 mb-50 text-center">
                  <h2 className="section-title mb-0">
                    Facilities Greetings from Einstein Family!
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-3">
                <div className="h10_event-item mb-30">
                  <div className="h10_event-img w_img">
                    <a>
                      <img
                        src={`https://ecasadmin.unitdtechnologies.com/storages/${Facilities1[0]?.file_name}`}
                        alt=""
                        style={{ height: "300px", objectFit: "cover" }}
                      />
                    </a>
                  </div>
                  <div className="h10_event-content1">
                    <span className="h10_event-content-meta">
                      <i className="fa-light fa-location-dot" />
                      {Facilities1[0]?.title}
                    </span>
                    <h5 className="h10_event-content1-title">
                      <a dangerouslySetInnerHTML={{ __html: Facilities1[0]?.description }}>
                      </a>
                    </h5>
                    <a
                      href="#"
                      className="theme-btn theme-btn-10 theme-btn-medium h10_event-btn"
                    >
                      Read more
                      <i className="fa-light fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="h10_event-item mb-30">
                  <div className="h10_event-img w_img">
                    <a href="h10_event.html">
                      <img
                        src={`https://ecasadmin.unitdtechnologies.com/storages/${Facilities2[0]?.file_name}`}
                        alt=""
                        style={{ height: "300px", objectFit: "cover" }}
                      />
                    </a>
                    {/* <span className="h10_event-date">24 Th Dec 2023</span> */}
                  </div>
                  <div className="h10_event-content1">
                    <span className="h10_event-content-meta">
                      <i className="fa-light fa-location-dot" />
                      {Facilities2[0]?.title}
                    </span>
                    <h5 className="h10_event-content-title">
                      <a dangerouslySetInnerHTML={{ __html: Facilities2[0]?.description }}>
                      </a>
                    </h5>
                    <a
                      href="#"
                      className="theme-btn theme-btn-10 theme-btn-medium h10_event-btn"
                    >
                      Read more
                      <i className="fa-light fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="h10_event-item mb-30">
                  <div className="h10_event-img w_img">
                    <a href="h10_event.html">
                      <img
                        src={`https://ecasadmin.unitdtechnologies.com/storages/${Facilities3[0]?.file_name}`}
                        alt=""
                        style={{ height: "300px", objectFit: "cover" }}
                      />
                    </a>
                    {/* <span className="h10_event-date">08 Th Dec 2023</span> */}
                  </div>
                  <div className="h10_event-content1">
                    <span className="h10_event-content-meta">
                      <i className="fa-light fa-location-dot" />
                      {Facilities3[0]?.title}
                    </span>
                    <h5 className="h10_event-content-title">
                      <a dangerouslySetInnerHTML={{ __html: Facilities3[0]?.description }}>
                       
                      </a>
                    </h5>
                    <a
                      href="#"
                      className="theme-btn theme-btn-10 theme-btn-medium h10_event-btn"
                    >
                      Read more
                      <i className="fa-light fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-3">
                <div className="h10_event-item mb-30">
                  <div className="h10_event-img w_img">
                    <a>
                      <img
                        src={`https://ecasadmin.unitdtechnologies.com/storages/${Facilities4[0]?.file_name}`}
                        alt=""
                        style={{ height: "300px", objectFit: "cover" }}
                      />
                    </a>
                  </div>
                  <div className="h10_event-content1">
                    <span className="h10_event-content-meta">
                      <i className="fa-light fa-location-dot" />
                      {Facilities4[0]?.title}
                    </span>
                    <h5 className="h10_event-content1-title">
                      <a dangerouslySetInnerHTML={{ __html: Facilities4[0]?.description }}>
                      </a>
                    </h5>
                    <a
                      href="#"
                      className="theme-btn theme-btn-10 theme-btn-medium h10_event-btn"
                    >
                      Read more
                      <i className="fa-light fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="h10_event-item mb-30">
                  <div className="h10_event-img w_img">
                    <a href="h10_event.html">
                      <img
                        src={`https://ecasadmin.unitdtechnologies.com/storages/${Facilities5[0]?.file_name}`}
                        alt=""
                        style={{ height: "300px", objectFit: "cover" }}
                      />
                    </a>
                    {/* <span className="h10_event-date">24 Th Dec 2023</span> */}
                  </div>
                  <div className="h10_event-content1">
                    <span className="h10_event-content-meta">
                      <i className="fa-light fa-location-dot" />
                      {Facilities5[0]?.title}
                    </span>
                    <h5 className="h10_event-content-title">
                      <a dangerouslySetInnerHTML={{ __html: Facilities5[0]?.description }}>
                      </a>
                    </h5>
                    <a
                      href="#"
                      className="theme-btn theme-btn-10 theme-btn-medium h10_event-btn"
                    >
                      Read more
                      <i className="fa-light fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="h10_event-item mb-30">
                  <div className="h10_event-img w_img">
                    <a href="h10_event.html">
                      <img
                        src={`https://ecasadmin.unitdtechnologies.com/storages/${Facilities6[0]?.file_name}`}
                        alt=""
                        style={{ height: "300px", objectFit: "cover" }}
                      />
                    </a>
                    {/* <span className="h10_event-date">08 Th Dec 2023</span> */}
                  </div>
                  <div className="h10_event-content1">
                    <span className="h10_event-content-meta">
                      <i className="fa-light fa-location-dot" />
                      {Facilities6[0]?.title}
                    </span>
                    <h5 className="h10_event-content-title">
                      <a dangerouslySetInnerHTML={{ __html: Facilities6[0]?.description }}>
                       
                      </a>
                    </h5>
                    <a
                      href="#"
                      className="theme-btn theme-btn-10 theme-btn-medium h10_event-btn"
                    >
                      Read more
                      <i className="fa-light fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="h3_teacher-area h6_teacher-area pt-115 pb-120">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="section-area-6 text-center mb-60">
                  <span className="section-subtitle">Meet Our Mentors</span>
                  <h2 className="section-title mb-0">Our Expert Teacher</h2>
                </div>
              </div>
            </div>
            <Swiper
              modules={[Pagination, Navigation]}
              pagination={{ clickable: true }}
              navigation
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {OurManagement.map((teacher, index) => (
                <SwiperSlide key={index}>
                  <div className="h3_teacher-item mb-25">
                    <div className="h3_teacher-img w_img">
                      <img
                        src={`https://ecasadmin.unitdtechnologies.com/storages/${teacher?.file_name}`}
                        alt={teacher?.title}
                      />
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
                        <a href="#">{teacher.name}</a>
                      </h5>
                      <span>{teacher.title}</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section> */}
      </main>
    </>
  );
};

const modalStyles = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 1000,
};

const overlayStyles = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
};

const contentStyles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "8px",
  textAlign: "center",
  width: "100%", // Adjusts to 80% of the parent container width
  maxWidth: "1000px", // Ensures it doesn't exceed 500px
  height: "auto", // Adapts height based on content
  maxHeight: "600px", // Ensures it doesn't exceed 300px
  overflowY: "auto", // Adds scroll if content overflows vertically
};


const imageStyles = {
  maxWidth: "30%",
  height: "25%",
  objectFit: "cover",
  cursor: "pointer",
};


export default Home;
