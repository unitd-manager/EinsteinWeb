import React, { useEffect, useState, useRef } from "react";
import api from "../constants/api";
import Web from "../assets/img/Faculty/EinsteinWebsite.jpg";
import { Link } from "react-router-dom";
import "swiper/css";
import "../assets/css/modal.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../assets/css/event.css";
import "odometer/themes/odometer-theme-default.css";
import HappyNewYear from "../assets/img/Academics/a-2.jpg";
import HappyNewYear1 from "../assets/img/Academics/a-1.jpg";
import HappyNewYear2 from "../assets/img/Academics/bg-1.jpg";
import HappyNewYear3 from "../assets/img/Academics/bg-2.jpg";
import HappyNewYear4 from "../assets/img/Academics/bg-3.jpg";

const teachers = [
  { name: "Annette Blacks", role: "UI/UX Developer", img: { HappyNewYear } },
  { name: "Michaels Leonel", role: "Web Designer", img: { HappyNewYear1 } },
  { name: "Jenny Wilson", role: "Photographer", img: { HappyNewYear2 } },
  { name: "Dianne Russell", role: "Graphic Designer", img: { HappyNewYear3 } },
];


const Training = () => {
    const [companies, setCompanies] = useState([]);
    const [selectedCompany, setSelectedCompany] = useState(null);
    const [images, setImages] = useState([]);
  
    // Fetch companies on mount
    useEffect(() => {
      api.get("/student/getcompany")
      .then((res) => {
        const data = res.data.data;
        setCompanies(data);
        if (data.length > 0) {
          setSelectedCompany(data[0]);
        }
      })
    
        .catch((err) => console.error("Error fetching companies:", err));
    }, []);
    
    
  
    // Fetch images when selectedCompany changes
    useEffect(() => {
      if (selectedCompany) {
        api.post("/student/getstudentcompanybyid", {
          company_id: selectedCompany.company_id,
        })
        .then((res) => {
          const data = res.data.data;
          setImages(data); // Assuming it returns an array of image data
        })
        
          .catch((err) => console.error("Error fetching images:", err));
      }
    }, [selectedCompany]);
  
  return (
    <>
      <main>
        <section
          className="breadcrumb-area bg-default"
          style={{ backgroundImage: `url(${Web})` }}
        >
          <img
            src="assets/img/breadcrumb/shape-1.png"
            alt=""
            className="breadcrumb-shape"
          />
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="breadcrumb-content">
                  <h2 className="breadcrumb-title">Training & Placement</h2>
                  <div className="breadcrumb-list">
                    <Link to="/Home">Home</Link>
                    <span>Training & Placement</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="h8_about-area pb-150" style={{ marginTop: 125 }}>
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6">
                <div className="h8_about-img mr-35 mb-20">
                  <div className="h8_about-img-left mb-30 w_img">
                    <div className="h8_about-img-year">
                      <h3>
                        8 Years Of <span>Experiences</span>
                      </h3>
                    </div>
                    <img
                      src={HappyNewYear1}
                      alt=""
                      className="wow fadeInLeft"
                      data-wow-delay="0.3s"
                    />
                  </div>
                  <div className="h8_about-img-right mb-30">
                    <img
                      src={HappyNewYear}
                      alt=""
                      className="w-100 wow fadeInRight"
                      data-wow-delay="0.5s"
                    />
                    <div className="h8_about-img-count">
                      <img src="assets/img/about/8/2.png" alt="" />
                      <div className="h8_about-img-count-info">
                        <h3>95%</h3>
                        <p>Placement</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="h8_about-wrap ml-30 mb-50">
                  <div className="section-area-8 mb-35">
                    <span className="section-subtitle">
                      Training & Placement
                    </span>
                    <h2 className="section-title mb-20">
                      Shape The Students To Shape The Society
                    </h2>
                    <p className="section-text">
                      The Department of Placement and Training of Einstein
                      College of Engineering has been successful, right from the
                      day it was incepted in 2006. It is headed by
                      Mr.A.Ezhilvanan, the Managing Trustee and Principal takes
                      the creative ideas to make a promising career for every
                      student of Einstein College of Engineering.
                    </p>
                    <p className="section-text">
                      Einstein College of Arts and Science is committed to
                      providing its students with excellent placement
                      opportunities. The Placement Cell actively collaborates
                      with over 50 companies to ensure a high placement rate.
                      Notably, the college boasts a placement record exceeding
                      90%, with the highest package offered reaching ₹6 lakhs
                      per annum. To prepare students for successful careers, the
                      college offers specialized training programs through its
                      dedicated Training Cell.
                    </p>
                  </div>
                  <div class="about-content-list">
                    <ul>
                      <li>Contact Person: Placement Cell</li>
                      <li>Email: principalecas@gmail.com</li>
                      <div class="h4_about-button">
                        <a
                          href="tel:+919865393574"
                          class="h4_about-button-call"
                        >
                          <i class="fa-solid fa-phone"></i>(+91) 9865393574
                        </a>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="h6_campus-area fix">
          <div className="h6_campus-wrap">
            <div className="h6_campus-item-1">
              <img src={HappyNewYear2} alt="" />
            </div>
            <div className="h6_campus-item-2">
              <img src={HappyNewYear3} alt="" />
              <h4>Our Center Ensures</h4>
              <div class="h4_about-content mb-25">
                <ul>
                  <li style={{ color: "white" }}>
                    <i class="fa-regular fa-check"></i>A good liaison with
                    industry.
                  </li>
                  <li style={{ color: "white" }}>
                    <i class="fa-regular fa-check"></i>Watch on the job
                    requirements in the industries.
                  </li>
                  <li style={{ color: "white" }}>
                    <i class="fa-regular fa-check"></i>Contact with information
                    experts in respective fields from industries.
                  </li>
                  <li style={{ color: "white" }}>
                    <i class="fa-regular fa-check"></i>Special lectures for the
                    benefit of the students and as well the staffs.
                  </li>
                  <li style={{ color: "white" }}>
                    <i class="fa-regular fa-check"></i>Training for teachers and
                    staff.
                  </li>
                  <li style={{ color: "white" }}>
                    <i class="fa-regular fa-check"></i>A good data bank of the
                    alumni
                  </li>
                </ul>
              </div>
            </div>
            <div className="h6_campus-item-3">
              <img src={HappyNewYear4} alt="" />
            </div>
          </div>
        </section>
        {/* <section className="h8_teacher-area pt-110 pb-115">
          <div className="container">
            <div className="row align-items-center mb-30">
              <div className="col-md-8">
                <div className="section-area-8 mb-20">
                  <span className="section-subtitle">Success stories</span>
                  <h2 className="section-title mb-0">Meet Our Students</h2>
                </div>
              </div>
              <div className="col-md-4">
                <div className="h8_teacher-navigation mb-30">
                  <div className="h8_teacher-prev">&#9665;</div>
                  <div className="h8_teacher-next">&#9655;</div>
                </div>
              </div>
            </div>
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={3}
              navigation={{
                nextEl: ".h8_teacher-next",
                prevEl: ".h8_teacher-prev",
              }}
              breakpoints={{
                320: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {teachers.map((teacher, index) => (
                <SwiperSlide key={index}>
                  <div className="h8_teacher-item">
                    <div className="h8_teacher-img w_img">
                      <img src={HappyNewYear1} alt={teacher.name} />
                    </div>
                    <div className="h8_teacher-content">
                      <h5 className="h8_teacher-content-title">
                        <a href="#">{teacher.name}</a>
                      </h5>
                      <span>{teacher.role}</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section> */}
         {/* Section 1: Company List */}
              <section className="pt-110 pb-30">
          <div className="container">
            <h2 className="section-title">Placement Company</h2>
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={2}
              navigation={{
                nextEl: ".company-next",
                prevEl: ".company-prev",
              }}
              breakpoints={{
                320: { slidesPerView: 1 },
                768: { slidesPerView: 1 },
                1024: { slidesPerView: 1 },
                1200: { slidesPerView: 2 },
              }}
            >
              {companies.map((company, i) => (
                <SwiperSlide key={i} onClick={() => setSelectedCompany(company)}>
                  <div className="h8_teacher-item" style={{ position: "relative", cursor: "pointer" }}>
                    <div className="h8_teacher-img w_img">
                      <img
                        src={`https://ecas.unitdtechnologies.com/storages/${company.images}`} // adjust key if needed
                        alt={company.company_name}
                        style={{ width: "100%", borderRadius: "10px" }}
                      />
                    </div>
                    <div
          className="company-name-overlay"
          style={{
            position: "relative",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "rgba(242, 60, 60, 0.5)",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "8px",
            fontWeight: "bold",
            fontSize: "16px",
            textAlign: "center",
            whiteSpace: "nowrap",
          }}
        >
          {company.company_name}
        </div>
        
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="h8_teacher-navigation mt-20">
              <div className="company-prev">&#9665;</div>
              <div className="company-next">&#9655;</div>
            </div>
          </div>
        </section>
              {/* Section 2: Image Slider */}
              {images.length > 0 && (
                <section className="pb-115">
                  <div className="container">
                    <h2 className="section-title mb-30">{selectedCompany?.company_name}-</h2>
                    <Swiper
                      modules={[Navigation]}
                      spaceBetween={20}
                      slidesPerView={4}
                      navigation={{
                        nextEl: ".h8_teacher-next",
                        prevEl: ".h8_teacher-prev",
                      }}
                      breakpoints={{
                        320: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 4 },
                      }}
                    >
                    {images.map((img, i) => (
          <SwiperSlide key={i}>
            <div className="h8_teacher-item">
              <div className="h8_teacher-img w_img">
                <img src={`https://ecas.unitdtechnologies.com/storages/${img.images}`} alt="" />
              </div>
            </div>
            <div
          className="company-name-overlay"
          style={{
            position: "relative",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "rgba(242, 60, 60, 0.5)",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "8px",
            fontWeight: "bold",
            fontSize: "16px",
            textAlign: "center",
            whiteSpace: "nowrap",
          }}
        >
          {img.student_name}
        </div>
          </SwiperSlide>
        ))}
        
        
                    </Swiper>
                  
                    <div className="h8_teacher-navigation mt-20">
                      <div className="h8_teacher-prev">&#9665;</div>
                      <div className="h8_teacher-next">&#9655;</div>
                    </div>
                  </div>
                </section>
              )}
      </main>
    </>
  );
};
export default Training;
