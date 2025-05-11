import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Marquee from "react-fast-marquee";
import "../assets/css/event.css";
import "../assets/css/videomodel.css";
import "odometer/themes/odometer-theme-default.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation,Autoplay } from "swiper/modules";
import { useNavigate } from 'react-router-dom';
import "swiper/css";
import "swiper/css/navigation";
import api from "../constants/api";
import { getUser } from "../../src/auth/user";

import ourleaderBanner from "../assets/img/ourleader-banner.webp";
import bannerImge from "../assets/img/banner-img.png";
import bannerImge1 from "../assets/img/bannerImage1.png";
import Founder from "../assets/img/ImageforFounder@025.jpg";
import Student from "../assets/img/Student.png";
import image2 from "../assets/img/1.png";
import image3 from "../assets/img/sports6.png";
import image1 from "../assets/img/pageAbout3.jpg";
import admin from "../assets/img/admin.jpg";
import shape1 from "../assets/img/shape-1.png";
import shape2 from "../assets/img/shape-2.png";
import shape3 from "../assets/img/shape-3.png";
import line from "../assets/img/line.png";
import imagea3 from "../assets/img/a1.webp";
import teacher1 from "../assets/img/Management/Prof.A.AmudhavananChairman.png";
import teacher2 from "../assets/img/Management/Prof.A.EzhilvananSeceretary.png";
import teacher3 from "../assets/img/Management/Mr.A.MathivananManagingTrustee.png";
import teacher4 from "../assets/img/Management/Mr.A.AnbuvananTrustee.jpg";
import teacher5 from "../assets/img/Management/Mr.A.TamilvananTrustee.png";
import Academic1 from "../assets/img/aboutpage.webp";
import Academic2 from "../assets/img/facilities-3.webp";
import Academic3 from "../assets/img/aboutPage1.webp";
import bg from "../assets/img/bg.jpg";
import bg3 from "../assets/img/infrastructure-1.png";
// import scholarshipimage from "../assets/img/ecas PLACEMENT.jpeg";
import aboutFor from "../assets/img/DSC.jpg";
import StudentForr from "../assets/img/StudentForrr.jpg";
import StudentForTraing from "../assets/img/training-placement.webp";
import shapeStu from "../assets/img/shape-2Stu.png";
import shapeStu1 from "../assets/img/shapeStu1.png";
import bgStu from "../assets/img/h2.webp";
import '../assets/css/VerticalMarquees.css';
import HappyNewYear from "../assets/img/HappyNewYear.jpg"
import VerticalMarquees from "./VerticalMarquees";

const Home = () => {

  function extractYouTubeId(url) {
    const regex = /(?:https?:\/\/(?:www\.)?youtube\.com\/(?:[^\/\n\s]+\/\S+\/|\S*?[?&]v=|v%3D|.+?\/)\/?(\S+)|youtu\.be\/(\S+))/;
    const match = url.match(regex);
    return match ? match[1] || match[2] : null;
  }

  const user = getUser();

  const navigate = useNavigate();

  const [student, setStudent] = useState([]);

  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState([]);
  const [aboutHome, setAboutHome] = useState([]);
  const [aboutHomeTop, setAboutHomeTop] = useState([]);
  const [compusHomeTop, setCompusHomeTop] = useState([]);
  const [compusHome, setCompusHome] = useState([]);
  const [compusHome1, setCompusHome1] = useState([]);
  const [academicsProgramHome, setAcademicsProgramHome] = useState([]);
  const [ourFounder, setourFounderHome] = useState([]);
  const [OurPhilosophy, setOurPhilosophyHome] = useState([]); 
  const [StudentLife, setStudentLifeHome] = useState([]); 
  const [CampusExperience, setCampusExperienceHome] = useState([]); 
  const [QualityEducation, setQualityEducationHome] = useState([]); 
  const [UGDepartments, setUGDepartmentsHome] = useState([]);
  const [OnlineEducation, setOnlineEducationHome] = useState([]);
  const [ugCourse, setUgCourseHome] = useState([]);
  const [Scholarship, setScholarshipHome] = useState([]);
  const [OurManagement, setOurManagement] = useState([]); 
  const [AcademicsProgramList, setAcademicsProgramList] = useState([]);
  const [AcademicsProgramListone, setAcademicsProgramListone] = useState([]);
  const [AcademicsProgramListtwo, setAcademicsProgramListtwo] = useState([]); 
  const [StudentLifeList, setStudentLifeList] = useState([]); 
  const [StudentLifeSlider, setStudentLifeSlider] = useState([]);


  // Image and URL
  const imageUrl = HappyNewYear
  const websiteUrl = "https://example.com";

  // Function to open the website
  const handleImageClick = () => {
    window.open(websiteUrl, "_blank");
  };

  // Automatically open modal on component mount
  useEffect(() => {
    setIsOpen(true);
  }, []);

 
  

  const [modalVideo, setModalVideo] = useState(null);


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
    slidesToShow: 4, // Number of thumbnails to show
    slidesToScroll: 1,
    asNavFor: null, // Placeholder for thumbnail slider
    focusOnSelect: true, // Enables clicking on thumbnails
    centerMode: true,
    centerPadding: "10px",
  };

  const banners = [
    { id: 1, image: { ourleaderBanner } },
    { id: 2, image: { ourleaderBanner } },
  ];

    const [slides, setslides] = useState([]);
  

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
      .get("/content/getBannerHome")
      .then((res) => {
        setContent(res.data.data);
      })
      .catch((err) => {
        console.error("Error fetching magazine data", err);
      });

        api
            .get("/content/getHomeBanner")
            .then((res) => {
              setslides(res.data.data);
              console.log('setslides',slides)
            })
            .catch((err) => {
              console.error("Error fetching magazine data", err);
            });
     
      api
      .get("/content/getAboutHomePanelTop")
      .then((res) => {
        setAboutHomeTop(res.data.data);
      })
      .catch((err) => {
        console.error("Error fetching magazine data", err);
      });
      
      api
      .get("/content/getAboutHomePanel")
      .then((res) => {
        setAboutHome(res.data.data);
      })
      .catch((err) => {
        console.error("Error fetching magazine data", err);
      });

      api
      .get("/content/getCampusHomePanelTop")
      .then((res) => {
        setCompusHomeTop(res.data.data);
      })
      .catch((err) => {
        console.error("Error fetching magazine data", err);
      });
      
      api
      .get("/content/getCampusHomePanel")
      .then((res) => {
        setCompusHome(res.data.data);
      })
      .catch((err) => {
        console.error("Error fetching magazine data", err);
      });
      api
      .get("/content/getCampusHomePanel1")
      .then((res) => {
        setCompusHome1(res.data.data);
      })
      .catch((err) => {
        console.error("Error fetching magazine data", err);
      });
      api
      .get("/content/getAcademicsProgramHomePanel")
      .then((res) => {
        setAcademicsProgramHome(res.data.data);
      })
      .catch((err) => {
        console.error("Error fetching magazine data", err);
      });
      api
      .get("/content/getTributeFounderHomePanel")
      .then((res) => {
        setourFounderHome(res.data.data);
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
      .get("/content/getStudentLifeHomePanel")
      .then((res) => {
        setStudentLifeHome(res.data.data);
      })
      .catch((err) => {
        console.error("Error fetching magazine data", err);
      });
      api
      .get("/content/geCampusexperienceHomePanel")
      .then((res) => {
        setCampusExperienceHome(res.data.data);
      })
      .catch((err) => {
        console.error("Error fetching magazine data", err);
      });
      api
      .get("/content/getQualityEducationHomePanel")
      .then((res) => {
        setQualityEducationHome(res.data.data);
      })
      .catch((err) => {
        console.error("Error fetching magazine data", err);
      });
      api
      .get("/content/getUGDepartmentsHomePanel")
      .then((res) => {
        setUGDepartmentsHome(res.data.data);
      })
      .catch((err) => {
        console.error("Error fetching magazine data", err);
      }); 
      api
      .get("/content/getOnlineEducationHomePanel")
      .then((res) => {
        setOnlineEducationHome(res.data.data);
      })
      .catch((err) => {
        console.error("Error fetching magazine data", err);
      }); 
      api
      .get("/content/getUGDepartmentscourseHomePanels")
      .then((res) => {
        setUgCourseHome(res.data.data);
      })
      .catch((err) => {
        console.error("Error fetching magazine data", err);
      }); 
      api
      .get("/content/getScholarshipProgramsHomePanel")
      .then((res) => {
        setScholarshipHome(res.data.data);
      })
      .catch((err) => {
        console.error("Error fetching magazine data", err);
      });
      api
      .get("/content/getAboutOurManagement")
      .then((res) => {
        setOurManagement(res.data.data);
      })
      .catch((err) => {
        console.error("Error fetching magazine data", err);
      });
      api
      .get("/content/getAcademicsProgramList")
      .then((res) => {
        setAcademicsProgramList(res.data.data);
      })
      .catch((err) => {
        console.error("Error fetching magazine data", err);
      });
      api
      .get("/content/getAcademicsProgramListone")
      .then((res) => {
        setAcademicsProgramListone(res.data.data);
      })
      .catch((err) => {
        console.error("Error fetching magazine data", err);
      });
      api
      .get("/content/getAcademicsProgramListtwo")
      .then((res) => {
        setAcademicsProgramListtwo(res.data.data);
      })
      .catch((err) => {
        console.error("Error fetching magazine data", err);
      }); 
      api
      .get("/content/getStudentLifeList")
      .then((res) => {
        setStudentLifeList(res.data.data);
      })
      .catch((err) => {
        console.error("Error fetching magazine data", err);
      });
      api
      .get("/content/getStudentLifeSlider")
      .then((res) => {
        setStudentLifeSlider(res.data.data);
      })
      .catch((err) => {
        console.error("Error fetching magazine data", err);
      });

 
}, []);
console.log('student',student[0]?.payment_status)

useEffect(() =>{
  api
      .post("/student/getStudentById",{student_id:user?.student_id})
      .then((res) => {
        setStudent(res.data.data);
      })
      .catch((err) => {
        console.error("Error fetching magazine data", err);
      });
}, []);

const handlePaymentSuccess = (data) => {
  console.log("Payment Successful:", data);
  setTimeout(() => {
    window.location.reload()
  },300);

  navigate('/Application');
     
};
const UgProgram = () => {

  setTimeout(() => {
    navigate('/UgProgram');
  },300);
     
};

const handlePaymentFailure = (error) => {
  console.error("Payment Failed:", error);

};

const onPaymentPress = () => {
  
  if (!user) {
    setTimeout(() => {
      navigate('/Login');
    }, 0);
    console.log("mmsmsmsm")
    return;
  }

  if (student[0]?.payment_status === "payment_status") {
    setTimeout(() => {
      navigate('/Application');
    }, 0);
    console.log("mmsmsmsm")
    return;
  }

  const totalAmount = 200;
  const amountInPaise = totalAmount * 100;

  const options = {
    key: "rzp_test_yE3jJN90A3ObCp", // Replace with your Razorpay test/live key
    key_secret: "tt8BnBOG7yRvYZ6TSB28RXJy",
    amount: amountInPaise,
    currency: "INR",
    name: "United",
    description: "Application Fee",
    image: "",
    handler: handlePaymentSuccess,
    prefill: {
      name:"Mohammed Navab",
      email:"rafi@unitdtechnologies.com",
      contact:"9750792020",
    },
    notes: {
      address: "Corporate Office",
    },
    theme: {
      color: "#532C6D",
    },
  };

  const rzp = new window.Razorpay(options);
  rzp.open();
  rzp.on("payment.failed", handlePaymentFailure);
};

function removeHtmlTags(str) {
  return str.replace(/<\/?[^>]+(>|$)/g, ""); // Removes all HTML tags

  
}
  return (
    <>
     
     {/* <div>
     
       
        {isOpen && (
          <div style={modalStyles}>
            <div style={overlayStyles} onClick={() => setIsOpen(false)}></div>
            <div style={contentStyles}>
              <img
                src={imageUrl}
                alt="Preview"
                style={imageStyles}
                onClick={handleImageClick}
              />
              <button onClick={() => setIsOpen(false)}>Close</button>
            </div>
          </div>
        )}
      </div> */}
    


      {/* <div className="bannerImage"> */}
      {/* Main Banner Slider */}
      {/* <Slider
        {...bannersettings}
        asNavFor={thumbSlider.current}
        ref={mainSlider}
      >
        {Array.isArray(banners) &&
          banners.map((item, index) => (
            <div key={item.content_id} className="single-blog">
              <div className="part-img">
                <img
                  src={ourleaderBanner}
                  alt={`News ${item.content_id}`}
                  style={{
                    width: '100%',
                    height: '400Px', // Thumbnail height
                    objectFit: 'cover',
                  }}
                />
              </div>
            </div>
          ))}
      </Slider> */}

      {/* Thumbnail Slider for Navigation */}
      {/* <Slider
        {...thumbnailSettings}
        asNavFor={mainSlider.current}
        ref={thumbSlider}
        className="thumbnail-slider"
      >
        {Array.isArray(banners) &&
          banners.map((item, index) => (
            <div key={`thumb_${item.content_id}`} className="thumbnail-img">
              <img
                src={ourleaderBanner}
                alt={`Thumbnail ${item.content_id}`}
                style={{
                  width: '100%',
                  height: '80px', // Thumbnail height
                  objectFit: 'cover',
                }}
              />
            </div>
          ))}
      </Slider> */}
      {/* </div> */}

      <div className="offcanvas-overlay" />
      <main>
        {/* banner area start */}
        <section className="slider-area fix">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              nextEl: ".h7_slider-next",
              prevEl: ".h7_slider-prev",
            }}
            autoplay={{ delay: 10000 }}
            loop={true}
            className="h7_slider-active"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div
                  className="h7_single-banner bg-default"
                  style={{
                    backgroundImage: `url(https://ecasadmin.unitdtechnologies.com/storages/${encodeURIComponent(slide.file_name)})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "600px",
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

                          {/* <div
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
                          </div> */}
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
<section>
  <VerticalMarquees></VerticalMarquees>
</section>
        {/* <section className="h2_banner-area">
          <div className="h2_single-banner">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-6 col-lg-6 col-md-12">
                  <div className="h2_banner-content">
                    <div className="section-area-2 mb-45 ">
                      <h1 className="section-title">
                        Welcome To Einstein College Of
                        <span>
                          Arts & Science <img src={line} alt="" />
                        </span>
                        Platform.
                      </h1>
                      <p className="section-text"  dangerouslySetInnerHTML={{ __html: content[0]?.description }}> </p>
                      </div>
                   
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 d-none d-lg-block">
                  <div className="h2_banner-right pl-80">
                    <div className="h2_banner-img">
                      <img src={bannerImge} alt="test" />
                    </div>
                    <div className="h2_banner-right-shape">
                      <img
                        className="h2_banner-shape-1"
                        src="assets/img/banner/2/shape_1.png"
                        alt=""
                      />
                      <div className="inner-shpae-1">
                        <img
                          className="h2_banner-shape-2"
                          src="assets/img/banner/2/shape_2.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="h2_banner-meta">
                      <div className="h2_banner-meta-info">
                        <span>Popular Course</span>
                        <h5>Start Learning Today!!</h5>
                      </div>
                      <div className="h2_banner-meta-rating">
                        <span>
                          <i className="fa-solid fa-star" />
                          4.5 (50 Reviews)
                        </span>
                        <h5>Congratulations</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <section className="h6_research-area pt-110 pb-70 fix">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-area-6 mb-55 text-center">
                  <span
                    className="section-subtitle"
                    style={{
                      fontSize: 43,
                      fontWeight: "bold",
                      marginBottom: 23,
                    }}
                  >
                    Welcome - About Us
                  </span>
                  <h2 className="section-title mb-15">
                    {aboutHomeTop[0]?.title}
                  </h2>
                  <p className="section-text" dangerouslySetInnerHTML={{ __html: aboutHomeTop[0]?.description }}>
                   
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xxl-7 col-xl-6 col-lg-6">
                <div className="h6_research-img w_img mb-50">
                  <img src={`https://ecasadmin.unitdtechnologies.com/storages/${aboutHome[0]?.file_name}`} alt="" />
                </div>
              </div>
              <div className="col-xxl-5 col-xl-6 col-lg-6">
                <div className="h6_research-wrap mb-50">
                  <div className="h6_research-content">
                    <h4>{aboutHome[0]?.title}</h4>
                    <p  dangerouslySetInnerHTML={{ __html: aboutHome[0]?.description }}>
                    {/* {aboutHome[0]?.title} */}
                    </p>
                    {/* <p>
                      We foster our students to become better personalities to
                      confront the world. Along with academic and technical
                      skills, we kindle our students’ interest in research,
                      sports, cultural, co-curricular, and naturally to be a
                      social being incorporated with values.
                    </p> */}
                    {/* <div className="h6_research-content-bottom">
                      <div className="h6_research-content-left">
                        <h2>$1b</h2>
                        <p>Sponsored research budget</p>
                      </div>
                      <div className="h6_research-content-right">
                        <div className="h6_research-single-item">
                          <div className="single-item-icon">
                            <svg
                              width={50}
                              height={50}
                              viewBox="0 0 50 50"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M49.1379 23.3965H38.1121V21.2672C38.1115 20.9562 37.9435 20.6696 37.6724 20.5172L25.8621 13.8793V10.5H28.1983V11.7845C28.1983 12.2605 28.5843 12.6465 29.0603 12.6465H36.1034C36.5795 12.6463 36.9653 12.2602 36.9652 11.7841C36.9652 11.6844 36.9477 11.5853 36.9138 11.4914L36.2069 9.48273L36.9224 7.51722C37.0843 7.06948 36.8526 6.5753 36.4049 6.41344C36.311 6.3795 36.212 6.36215 36.1121 6.36204H32.9052V5.11204C32.9052 4.63597 32.5192 4.24997 32.0431 4.24997H25.8621V3.19825C25.8621 2.72217 25.4761 2.33618 25 2.33618C24.5239 2.33618 24.1379 2.72217 24.1379 3.19825V13.8793L12.3276 20.5086C12.0565 20.661 11.8885 20.9476 11.8879 21.2586V23.3879H0.862069C0.385991 23.3879 0 23.7739 0 24.25V46.8017C0 47.2778 0.385991 47.6638 0.862069 47.6638H49.1379C49.614 47.6638 50 47.2778 50 46.8017V24.2586C50 23.7825 49.614 23.3965 49.1379 23.3965ZM32.9052 9.63791L32.8707 9.60342V8.12066H34.8362L34.4828 9.22411C34.4122 9.41614 34.4122 9.62691 34.4828 9.81894L34.8879 10.9224H29.9224V10.5H32.0431C32.5192 10.5 32.9052 10.114 32.9052 9.63791ZM25.8621 5.97411H31.181V7.2586V8.77584H25.8621V5.97411ZM11.8879 45.9396H1.72414V25.1207H11.8879V45.9396ZM24.1379 45.9396H19.6121V36.0948H24.1379V45.9396ZM30.3879 45.9396H25.8621V36.0948H30.3879V45.9396ZM36.4224 45.9396H32.1121V35.2327C32.1121 34.7567 31.7261 34.3707 31.25 34.3707H18.75C18.2739 34.3707 17.8879 34.7567 17.8879 35.2327V45.9396H13.5776V21.8017L25 15.3707L36.3879 21.7672L36.4224 24.25V45.9396ZM48.2759 45.9396H38.1121V25.1207H48.2759V45.9396Z"
                                fill="currentColor"
                              />
                              <path
                                d="M24.9998 18.0085C23.0034 18.0133 21.3877 19.6329 21.3877 21.6292C21.3924 23.6242 23.0135 25.2374 25.0084 25.2327C27.0033 25.2279 28.6166 23.6069 28.6118 21.612C28.6071 19.6205 26.9913 18.0085 24.9998 18.0085ZM24.9998 23.5085C23.9571 23.5038 23.1157 22.6547 23.1205 21.612C23.1252 20.5761 23.9638 19.7374 24.9998 19.7327C26.0438 19.7374 26.8877 20.5852 26.8877 21.6292H26.8963C26.8916 22.6719 26.0424 23.5133 24.9998 23.5085Z"
                                fill="currentColor"
                              />
                              <path
                                d="M5.5259 27.0173H3.80176V30.4656H5.5259V27.0173Z"
                                fill="currentColor"
                              />
                              <path
                                d="M9.7759 27.0173H8.05176V30.4656H9.7759V27.0173Z"
                                fill="currentColor"
                              />
                              <path
                                d="M19.6465 27.0173H16.1982V28.7415H19.6465V27.0173Z"
                                fill="currentColor"
                              />
                              <path
                                d="M26.7242 27.0173H23.2759V28.7415H26.7242V27.0173Z"
                                fill="currentColor"
                              />
                              <path
                                d="M33.8018 27.0173H30.3535V28.7415H33.8018V27.0173Z"
                                fill="currentColor"
                              />
                              <path
                                d="M19.6465 31.0344H16.1982V32.7586H19.6465V31.0344Z"
                                fill="currentColor"
                              />
                              <path
                                d="M26.7242 31.0344H23.2759V32.7586H26.7242V31.0344Z"
                                fill="currentColor"
                              />
                              <path
                                d="M33.8018 31.0344H30.3535V32.7586H33.8018V31.0344Z"
                                fill="currentColor"
                              />
                              <path
                                d="M5.5259 33.8018H3.80176V37.25H5.5259V33.8018Z"
                                fill="currentColor"
                              />
                              <path
                                d="M9.7759 33.8018H8.05176V37.25H9.7759V33.8018Z"
                                fill="currentColor"
                              />
                              <path
                                d="M5.5259 40.5947H3.80176V44.043H5.5259V40.5947Z"
                                fill="currentColor"
                              />
                              <path
                                d="M9.7759 40.5947H8.05176V44.043H9.7759V40.5947Z"
                                fill="currentColor"
                              />
                              <path
                                d="M41.9483 27.0173H40.2241V30.4656H41.9483V27.0173Z"
                                fill="currentColor"
                              />
                              <path
                                d="M46.1983 27.0173H44.4741V30.4656H46.1983V27.0173Z"
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
                          <div className="single-item-info">
                            <h5>5 Institutes</h5>
                            <p>Cross interdisciplinary boundaries</p>
                          </div>
                        </div>
                        <div className="h6_research-single-item">
                          <div className="single-item-icon">
                            <svg
                              width={50}
                              height={50}
                              viewBox="0 0 50 50"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipPath="url(#clip0_365_731)">
                                <path
                                  d="M49.0228 30.4883C48.4846 30.4883 48.0459 30.9258 48.0459 31.4641C48.0459 31.725 48.1478 31.9337 48.3312 32.1183C48.5159 32.3029 48.7612 32.367 49.0221 32.367H49.0228C49.5611 32.367 49.9986 31.9669 49.9998 31.4282C49.9998 30.8892 49.5622 30.4883 49.0228 30.4883Z"
                                  fill="currentColor"
                                />
                                <path
                                  d="M45.1168 30.4851L40.6784 30.4825L36.7321 23.6359L40.9405 16.3574C41.1152 16.0549 41.1156 15.6826 40.9412 15.3805L36.7466 8.1047L39.6343 3.55109C39.9231 3.09524 39.7881 2.49175 39.3322 2.20298C38.8767 1.91383 38.2732 2.04887 37.9841 2.50472L35.0712 7.08198L26.5961 7.06596H26.5957C26.2466 7.06596 25.9243 7.26203 25.75 7.56377L21.5385 14.8331L13.7253 14.814L11.6913 11.0882C11.5204 10.7738 11.1912 10.5804 10.8326 10.5804C10.6705 10.5804 10.5091 10.622 10.3657 10.7002C10.1368 10.8253 9.97009 11.0317 9.89647 11.2827C9.82246 11.533 9.85069 11.7966 9.97582 12.0262L12.0171 15.7604L8.00781 22.6959H0.976944C0.437164 22.6959 0 23.1335 0 23.6729C0 24.2123 0.437164 24.6498 0.976944 24.6498H8.08487L11.9751 31.4064L9.58405 34.8534C9.43565 35.067 9.37882 35.3287 9.42497 35.5846C9.47189 35.8417 9.61533 36.066 9.82933 36.2144C9.99336 36.3289 10.1856 36.3899 10.3851 36.3899C10.7056 36.3899 11.0065 36.2339 11.1889 35.9711L13.6677 32.402L21.5351 32.4074L25.47 39.233L23.0549 43.1278C22.7718 43.586 22.9134 44.1894 23.3707 44.4729C23.526 44.5686 23.7038 44.6194 23.8846 44.6194C24.2252 44.6194 24.5369 44.4466 24.7158 44.1574L27.1683 40.2L34.9556 40.2138L39.1796 47.5407C39.3608 47.8546 39.6889 48.0297 40.0269 48.0297C40.1924 48.0297 40.3603 47.9877 40.514 47.8992C40.9813 47.6295 41.1419 47.0322 40.8722 46.5649L36.6795 39.2925L40.6414 32.4364L45.1157 32.439C45.6539 32.439 46.0915 32.0015 46.0926 31.4632C46.0926 31.2023 45.9911 30.957 45.8065 30.7724C45.6226 30.5878 45.3774 30.4863 45.1168 30.4851ZM27.1587 9.04044L35.0338 9.0454L38.9671 15.8676L35.0468 22.6478L27.1717 22.6429L23.2388 15.8203L27.1587 9.04044ZM21.5153 30.4546L13.6734 30.4497L9.74007 23.6271L13.6822 16.8098L21.5126 16.8148L25.4517 23.6465L21.5153 30.4546ZM35.025 38.2412L27.1503 38.2362L23.2338 31.4426L27.1706 24.6338L35.0555 24.6387L38.9671 31.4236L35.025 38.2412Z"
                                  fill="currentColor"
                                />
                                <path
                                  d="M8.96287 9.11746H8.96402C9.12614 9.11746 9.2875 9.0694 9.42979 8.9912C9.65944 8.86607 9.82576 8.65703 9.89976 8.40678C9.973 8.15578 9.94477 7.89066 9.81965 7.66216C9.64875 7.34744 9.31955 7.15137 8.96211 7.15137C8.79998 7.15137 8.63786 7.19218 8.49519 7.27115C8.26555 7.39551 8.09846 7.60226 8.02522 7.85213C7.95198 8.10313 7.98021 8.37283 8.10533 8.60133C8.27623 8.91605 8.60543 9.11746 8.96287 9.11746Z"
                                  fill="currentColor"
                                />
                                <path
                                  d="M8.71453 37.8205C8.5505 37.706 8.35785 37.6458 8.15758 37.6458C7.83715 37.6458 7.53731 37.8029 7.35459 38.0658C7.04789 38.5083 7.15737 39.1178 7.59987 39.4257C7.7639 39.5397 7.95655 39.6004 8.15682 39.6004C8.47725 39.6004 8.77709 39.4432 8.95981 39.1804C9.26651 38.7379 9.15703 38.1283 8.71453 37.8205Z"
                                  fill="currentColor"
                                />
                                <path
                                  d="M22.3421 46.1333C22.1868 46.0376 22.009 45.9868 21.8282 45.9868C21.4872 45.9868 21.1767 46.16 20.997 46.4488C20.8593 46.6708 20.8162 46.9332 20.8757 47.1877C20.9356 47.4414 21.0908 47.6573 21.3125 47.7942C21.4677 47.8896 21.6447 47.9407 21.8263 47.9407C22.1673 47.9407 22.4779 47.7675 22.6575 47.4787C22.7952 47.2567 22.8384 46.995 22.7788 46.741C22.7182 46.4869 22.5637 46.2714 22.3421 46.1333Z"
                                  fill="currentColor"
                                />
                                <path
                                  d="M15.7954 9.10069C15.919 9.17241 16.0624 9.20827 16.2383 9.20827C16.4076 9.20827 16.5656 9.17241 16.6922 9.10069C16.8192 9.02898 16.8921 8.93132 16.8921 8.80772V5.99133H19.0413V8.80772C19.0413 8.93132 19.1157 9.02898 19.2397 9.10069C19.3633 9.17241 19.5193 9.20827 19.6951 9.20827C19.8645 9.20827 20.0034 9.17241 20.1304 9.10069C20.2574 9.02898 20.3112 8.93132 20.3112 8.80772V2.45473C20.3112 2.32465 20.262 2.22661 20.1384 2.16138C20.0144 2.09653 19.871 2.06372 19.6951 2.06372C19.5193 2.06372 19.3598 2.09653 19.2366 2.16138C19.1126 2.22661 19.0413 2.32465 19.0413 2.45473V5.01439H16.8925V2.45473C16.8925 2.32465 16.8177 2.22661 16.6941 2.16138C16.5705 2.09653 16.4141 2.06372 16.2383 2.06372C16.0624 2.06372 15.922 2.09653 15.7984 2.16138C15.6744 2.22661 15.6226 2.32465 15.6226 2.45473V8.80734C15.6222 8.93132 15.6714 9.02898 15.7954 9.10069Z"
                                  fill="currentColor"
                                />
                                <path
                                  d="M46.7156 19.4606C46.5916 19.3954 46.4512 19.3625 46.2754 19.3625C46.0995 19.3625 45.9355 19.3954 45.8119 19.4606C45.6879 19.5254 45.612 19.6235 45.612 19.7536V22.3048H43.4628V19.7536C43.4628 19.6235 43.3949 19.5254 43.2713 19.4606C43.1473 19.3954 42.9943 19.3625 42.8185 19.3625C42.6426 19.3625 42.4977 19.3954 42.3737 19.4606C42.2501 19.5254 42.1929 19.6235 42.1929 19.7536V26.1062C42.1929 26.2301 42.2486 26.3278 42.3722 26.3995C42.4961 26.4712 42.6426 26.5071 42.8189 26.5071C42.9879 26.5071 43.1408 26.4712 43.2679 26.3995C43.3949 26.3278 43.4628 26.2301 43.4628 26.1062V23.2818H45.612V26.1066C45.612 26.2301 45.6929 26.3278 45.8165 26.3995C45.9404 26.4712 46.0995 26.5071 46.2757 26.5071C46.4447 26.5071 46.579 26.4712 46.7057 26.3995C46.8327 26.3278 46.8819 26.2301 46.8819 26.1066V19.7536C46.8819 19.6235 46.8392 19.5254 46.7156 19.4606Z"
                                  fill="currentColor"
                                />
                                <path
                                  d="M4.52187 28.5889C4.69772 28.5889 4.84383 28.6133 4.97429 28.6621C5.10475 28.711 5.19897 28.7697 5.26421 28.838C5.32944 28.9066 5.38132 28.9913 5.42404 29.0924C5.466 29.1935 5.49156 29.2748 5.5011 29.3366C5.51102 29.3987 5.51865 29.472 5.52513 29.5567C5.53162 29.8237 5.74333 29.9572 6.16028 29.9572C6.3884 29.9572 6.55128 29.9133 6.64894 29.8252C6.7466 29.7371 6.79543 29.5727 6.79543 29.3316C6.79543 28.7716 6.57875 28.3219 6.1454 27.9831C5.71205 27.6444 5.15358 27.4746 4.46922 27.4746C3.79822 27.4746 3.26759 27.6558 2.85065 28.0171C2.4337 28.3787 2.23877 28.944 2.23877 29.7127V32.4398C2.23877 33.2085 2.43217 33.7738 2.84607 34.1355C3.25958 34.4967 3.79517 34.6779 4.46655 34.6779C5.15701 34.6779 5.71548 34.5017 6.14883 34.1499C6.58218 33.7982 6.79733 33.329 6.79733 32.7427C6.79733 32.5016 6.74583 32.3372 6.64474 32.2491C6.54366 32.1613 6.37886 32.1171 6.15074 32.1171C5.75325 32.1171 5.54459 32.2506 5.52513 32.5176C5.51865 32.6546 5.50377 32.7706 5.48126 32.8648C5.45837 32.9594 5.41565 33.067 5.35385 33.1875C5.29205 33.308 5.19096 33.4007 5.05096 33.466C4.91096 33.5312 4.74998 33.5636 4.54132 33.5636C3.84399 33.5636 3.50906 33.189 3.50906 32.4398V29.7131C3.50868 28.9639 3.83751 28.5889 4.52187 28.5889Z"
                                  fill="currentColor"
                                />
                              </g>
                            </svg>
                          </div>
                          <div className="single-item-info">
                            <h5>Feldman Lab</h5>
                            <p>The EMF 6 study investigates</p>
                          </div>
                        </div>
                      </div>
                    </div> */}
                  </div>
                  {/* <div className="research-text-wrap mt-25">
                <div className="research-text-ticker" id="research-text-ticker">
                  <marquee>
                  <h1 className="h6_research-bottom-text">About Us</h1>
                  </marquee>
                </div>
              </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="h7_about-area pt-50 pb-50" style={{ backgroundColor: '#f5f5f5' }}>

          <div className="container" style={{backgroundcolor:'#f5f5f5'}}>
            <div className="row">
              <div className="col-xl-6 col-lg-6">
                <div className="h7_about-wrap mb-50 mr-70">
                  <div className="section-area-6 mb-55">
                    <span
                      className="section-subtitle"
                      style={{
                        fontSize: 43,
                        fontWeight: "bold",
                        marginBottom: 23,
                      }}
                    >
                      CAMPUS
                    </span>
                    <h2 className="section-title mb-15">
                      {compusHomeTop[0]?.title}
                    </h2>
                    <p className="section-text" dangerouslySetInnerHTML={{ __html: compusHomeTop[0]?.description }}>
                    </p>
                  </div>
                  <div className="h7_about-content">
                    <div className="h7_about-admin">
                      <div className="h7_about-admin-img">
                        <img src={`https://ecasadmin.unitdtechnologies.com/storages/${compusHomeTop[0]?.file_name}`} alt="" />
                      </div>
                      <div className="h7_about-admin-info">
                        <h5>
                          The Einstein College Of Arts & Science is located in
                          the heart of Tirunelveli, Tamil Nadu 627012.
                        </h5>
                        <span>Come visit our campus.</span>
                      </div>
                    </div>
                    <div className="h7_about-signature">
                      {/* <img src={image2} alt="" /> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="h7_about-img w_img mb-50">
                  <img src={image1} alt="" />
                  <a
                    onClick={(e) => {    
                      e.preventDefault(); // Prevent the default link behavior
                      setModalVideo({
                 title: "Campus Video Title",
                description: "https://www.youtube.com/watch?v=ifuMTQ-gI-E", // The URL or any other description
                    });
                   }}
                    // href="https://www.youtube.com/watch?v=ifuMTQ-gI-E"
                    // className="popup-video"
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

        <section className="h2_about-area pt-50 pb-70">
          <img
            src="assets/img/about/2/shape-5.png"
            alt=""
            className="h2_about-top-shape"
          />
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6">
                <div className="h2_about-img mb-50">
                  <div className="h2_about-inner-img">
                    <img src={image2} alt="" className="h2_inner-img" />
                    <img src={`https://ecasadmin.unitdtechnologies.com/storages/${compusHome[0]?.file_name}`} alt="" style={{width:'60%',borderRadius:8}} className="h2_inner-img-shape" />
                  </div>
                  <div className="h2_about-inner-img2">
                    <img src={`https://ecasadmin.unitdtechnologies.com/storages/${compusHome1[0]?.file_name}`} alt=""  style={{width:'60%',marginLeft:200,borderRadius:8}} />
                    <div className="h2_about-img-button" >
                      <a

                          onClick={(e) => {
                           e.preventDefault(); // Prevent the default link behavior
                           setModalVideo({
                      title: "Campus Video Title",
                     description: "https://www.youtube.com/watch?v=ifuMTQ-gI-E", // The URL or any other description
                         });
                        }}
                        // href="https://www.youtube.com/watch?v=6PCuMwrhSf8"
                        // className="popup-video"
                      >
                        <i className="fa-solid fa-play" />
                      </a>
                    </div>
      
                  </div>
                  {/* <div className="h2_about-rating d-none d-sm-block">
                    <span>
                      <i className="fa-solid fa-star" />
                      4.3 (50 Reviews)
                    </span>
                    <h5>Congratulations</h5>
                  </div> */}
                  <div className="h2_about-img-shape d-none d-sm-block">
                    <img className="h2_about-shape-1" src={shape1} alt="" />
                    <img className="h2_about-shape-2" src={shape2} alt="" />
                    <img className="h2_about-shape-3" src={shape3} alt="" />
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-10 mb-50">
                <div className="section-area-2 mb-35">
                  <h2 className="section-title mb-20">
                  {compusHome[0]?.title}
                    <span>
                      perspectives <img src={line} alt="" />
                    </span>
                  </h2>
                  <p className="section-text" dangerouslySetInnerHTML={{ __html: compusHome1[0]?.description }}>
                  </p>
                </div>
                {/* <div className="h2_about-button">
                  <a  className="theme-btn theme-btn-medium">
                    More Details
                  </a>
                </div> */}
              </div>
            </div>
          </div>
          {modalVideo && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close" onClick={() => setModalVideo(null)}>
              ×
            </button>
            {/* <h3>{modalVideo.title || "Untitled Video"}</h3> */}
            <div className="video-container">
              {/* Checking if YouTube ID can be extracted and rendered */}
              {modalVideo.description && extractYouTubeId(modalVideo.description) ? (
                <iframe
                  width="100%"
                  height="400"
                  src={`https://www.youtube.com/embed/${extractYouTubeId(modalVideo.description)}`}
                  title={modalVideo.title || "YouTube Video"}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <p>Invalid YouTube URL</p>
              )}
            </div>
          </div>
        </div>
      )}
        </section>

        {/* <div className="counter-area pt-120 pb-110" style={{ marginTop: -100 }}>
          <div className="container">
            <div className="counter-wrap">
              <div className="row g-0">
                {[
                  { count: 34, text: "Foreign Followers", icon: "fa-globe" },
                  { count: 12, text: "Classes Complete", icon: "fa-book-open" },
                  {
                    count: 214,
                    text: "Students Enrolled",
                    icon: "fa-user-group",
                  },
                  { count: 56, text: "Certified Teachers", icon: "fa-medal" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="col-xl-3 col-lg-3 col-md-6 col-sm-6"
                  >
                    <div className="counter-item">
                      <div className="counter-icon">
                        <i className={`fa-thin ${item.icon}`} />
                      </div>
                      <div className="counter-info">
                        <h3 className="counter-info-title">
                          <span
                            className="odometer count_one"
                            data-count={item.count}
                          >
                            00
                          </span>
                          <span>k</span>
                        </h3>
                        <span className="counter-info-text">{item.text}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div> */}
        {/* cta 2 area start */}
        <div className="h2_cta-area">
          <div className="container">
            <div
              className="h2_cta-wrap bg-default pt-70 pb-80"
              data-background="assets/img/cta/2/1.jpg"
            >
              {/* <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8 col-md-10">
              <div className="h2_cta-content">
                <div className="section-area-2 small-section-area-2 text-center">
                  <h2 className="section-title mb-30">
                    Are You Ready To Start <br />
                    Your{" "}
                    <span>
                      Course? <img src={line} alt="" />
                    </span>
                  </h2>
                </div>
                <form action="#" className="h2_cta-content-form">
                  <input type="email" placeholder="Search course" />
                  <button type="submit">Start Learning Today</button>
                </form>
              </div>
            </div>
          </div> */}
            </div>
          </div>
        </div>
        {/* cta 2 area end */}
        {/* price area start */}
        {/* <section className="h2_price-area pt-110 pb-90">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-7 col-md-10">
            <div className="section-area-2 mb-50 text-center">
              <h2 className="section-title mb-30">
                Examining the Costs and Benefits of
                <span>
                  Education <img src={line} alt="" />
                </span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="h2_price-item mb-30">
              <div className="h2_price-item-title">
                <h5>Standard</h5>
              </div>
              <div className="h2_price-amount">
                <del>$24.00</del>
                <div className="h2_price-amount-info">
                  <h2>$22</h2>
                  <p>
                    <span>Per</span>
                    <span>Month</span>
                  </p>
                </div>
              </div>
              <div className="h2_price-middle-info">
                <p className="h2_price-middle-info-1">
                  Discounted Price For USA
                </p>
                <p className="h2_price-middle-info-2">
                  Per User, billed annually
                </p>
              </div>
              <div className="h2_price-button">
                <a href="#">Enroll Now</a>
              </div>
              <div className="h3_price-content">
                <div className="h2_price-content-top">
                  <a href="#">Choose 2 - year plan</a>
                  <span>Save 6%</span>
                </div>
                <div className="h2_price-content-list">
                  <ul>
                    <li>Facilizes sed odic morbid quiz.</li>
                    <li>Design nexus et malasadas fames brand.</li>
                    <li>Artistic mind will be great for creation.</li>
                    <li>Roadmap for business agency arborator.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="h2_price-item mb-30">
              <div className="h2_price-popular-tag">
                <span>Most Popular</span>
              </div>
              <div className="h2_price-item-title">
                <h5>Professional</h5>
              </div>
              <div className="h2_price-amount">
                <del>$36.00</del>
                <div className="h2_price-amount-info">
                  <h2>$28</h2>
                  <p>
                    <span>Per</span>
                    <span>Month</span>
                  </p>
                </div>
              </div>
              <div className="h2_price-middle-info">
                <p className="h2_price-middle-info-1">
                  Discounted Price For USA
                </p>
                <p className="h2_price-middle-info-2">
                  Per User, billed annually
                </p>
              </div>
              <div className="h2_price-button">
                <a href="#">Enroll Now</a>
              </div>
              <div className="h3_price-content">
                <div className="h2_price-content-top">
                  <a href="#">Choose 2 - year plan</a>
                  <span>Save 24%</span>
                </div>
                <div className="h2_price-content-list">
                  <ul>
                    <li>Facilizes sed odic morbid quiz.</li>
                    <li>Design nexus et malasadas fames brand.</li>
                    <li>Artistic mind will be great for creation.</li>
                    <li>Roadmap for business agency arborator.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="h2_price-item mb-30">
              <div className="h2_price-item-title">
                <h5>Business</h5>
              </div>
              <div className="h2_price-amount">
                <del>$74.00</del>
                <div className="h2_price-amount-info">
                  <h2>$56</h2>
                  <p>
                    <span>Per</span>
                    <span>Month</span>
                  </p>
                </div>
              </div>
              <div className="h2_price-middle-info">
                <p className="h2_price-middle-info-1">
                  Discounted Price For USA
                </p>
                <p className="h2_price-middle-info-2">
                  Per User, billed annually
                </p>
              </div>
              <div className="h2_price-button">
                <a href="#">Enroll Now</a>
              </div>
              <div className="h2_price-content">
                <div className="h2_price-content-top">
                  <a href="#">Choose 2 - year plan</a>
                  <span>Save 12%</span>
                </div>
                <div className="h2_price-content-list">
                  <ul>
                    <li>Facilizes sed odic morbid quiz.</li>
                    <li>Design nexus et malasadas fames brand.</li>
                    <li>Artistic mind will be great for creation.</li>
                    <li>Roadmap for business agency arborator.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}
        {/* price area end */}

        <section
          className="h7_program-area pb-90 fix"
          style={{ marginTop: -150 }}
        >
          <div className="program-text-wrap mb-55">
            <div className="section-area-6 mb-55 text-center">
              <span
                className="section-subtitle"
                style={{ fontSize: 43, fontWeight: "bold", marginBottom: 23 ,color:"#f7951e" }}
              >
                Program and Academics
              </span>
            </div>
            {/* <div className="program-text-ticker" id="program-text-ticker">
              <marquee>
                <h1 className="h7_program-title">Campus Academics Programs</h1>
              </marquee>
            </div> */}
          </div>
          <div className="container">
            <div className="h7_program-wrap">
              <div className="row g-0">
                <div className="col-xl-4 col-lg-4">
                  <div className="h7_program-item">
                    <h3 className="h7_program-item-title" style={{color:'#592140'}}>{QualityEducation[0]?.title}</h3>
                    <p dangerouslySetInnerHTML={{ __html: QualityEducation[0]?.description }}  style={{color:'red'}}>
                    </p>
                    <div className="h7_program-item-list">
                      {/* <a >
                        Major Program <i className="fa-light fa-arrow-right" />
                      </a> */}
                      {/* <a>
                        Minors Program <i className="fa-light fa-arrow-right" />
                      </a> */}
                    </div>
                    <span className="h7_program-item-time"style={{color:'#592140'}}>
                      <i className="fa-light fa-clock" /> Online + Onsite
                    </span>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4">
                  <div className="h7_program-item h7_program-item2" style={{background:"#592140"}}>
                    <h3 className="h7_program-item-title">{UGDepartments[0]?.title}</h3>
                    {/* <p dangerouslySetInnerHTML={{ __html: UGDepartments[0]?.description }} style={{color:'red'}}>
                    </p> */}
                    <ul className="h7_program-item-list2">
                    {ugCourse.map((item, index) => ( 
                      <li>{item.course_name}</li>
                    ))}
                    </ul>
                    {/* <span className="h7_program-item-time">
                      <i className="fa-light fa-clock" /> Online + Onsite
                    </span> */}
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4">
                  <div className="h7_program-item">
                    <h3 className="h7_program-item-title" style={{color:'#592140'}}>{OnlineEducation[0]?.title}</h3>
                    <p dangerouslySetInnerHTML={{ __html: OnlineEducation[0]?.description }}>
                    </p>
                    <div className="h7_program-item-list">
                      {/* <a>
                        Undergraduate Programs{" "}
                        <i className="fa-light fa-arrow-right" />
                      </a>
                      <a>
                        Graduate Programs{" "}
                        <i className="fa-light fa-arrow-right" />
                      </a> */}
                    </div>
                    <span className="h7_program-item-time" style={{color:'#592140'}}>
                      <i className="fa-light fa-clock" /> Online + Onsite
                    </span>
                    <a class="h7_program-more-icon">
                      More
                      <span>
                        <i class="fa-light fa-arrow-up"></i>
                        <i class="fa-light fa-arrow-up"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <a className="h7_program-more-icon"  onClick={UgProgram}>
                More
                <span>
                  <i className="fa-light fa-arrow-up" />
                  <i className="fa-light fa-arrow-up" />
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* <section className="h6_program-area pt-110 pb-90">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-area-6 text-center mb-55">
                  <h2 className="section-title mb-15">{academicsProgramHome[0]?.title}</h2>
                  <p className="section-text" dangerouslySetInnerHTML={{ __html: academicsProgramHome[0]?.description }}>
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="h6_program-item mb-30">
                  <div className="h6_program-item-img w_img">
                    <img src={`https://ecasadmin.unitdtechnologies.com/storages/${AcademicsProgramList[0]?.file_name}`} alt="" style={{hieght:"120%"}} />
                  </div>
                  <div className="h6_program-item-content">
                    <div className="h6_program-item-content-info">
                      <h4 className="h6_program-item-content-info-title">
                        <a>{AcademicsProgramList[0]?.title}</a> */}
                      {/* </h4> */}
                      {/* <a className="h6_program-item-content-info-link">
                        Read More
                        <i className="fa-light fa-arrow-up-right" />
                      </a> */}
                    {/* </div>
                    <div className="h6_program-item-content-icon">
                      <svg
                        width={50}
                        height={50}
                        viewBox="0 0 50 50"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M49.1379 23.3965H38.1121V21.2672C38.1115 20.9562 37.9435 20.6696 37.6724 20.5172L25.8621 13.8793V10.5H28.1983V11.7845C28.1983 12.2605 28.5843 12.6465 29.0603 12.6465H36.1034C36.5795 12.6463 36.9653 12.2602 36.9652 11.7841C36.9652 11.6844 36.9477 11.5853 36.9138 11.4914L36.2069 9.48273L36.9224 7.51722C37.0843 7.06948 36.8526 6.5753 36.4049 6.41344C36.311 6.3795 36.212 6.36215 36.1121 6.36204H32.9052V5.11204C32.9052 4.63597 32.5192 4.24997 32.0431 4.24997H25.8621V3.19825C25.8621 2.72217 25.4761 2.33618 25 2.33618C24.5239 2.33618 24.1379 2.72217 24.1379 3.19825V13.8793L12.3276 20.5086C12.0565 20.661 11.8885 20.9476 11.8879 21.2586V23.3879H0.862069C0.385991 23.3879 0 23.7739 0 24.25V46.8017C0 47.2778 0.385991 47.6638 0.862069 47.6638H49.1379C49.614 47.6638 50 47.2778 50 46.8017V24.2586C50 23.7825 49.614 23.3965 49.1379 23.3965ZM32.9052 9.63791L32.8707 9.60342V8.12066H34.8362L34.4828 9.22411C34.4122 9.41614 34.4122 9.62691 34.4828 9.81894L34.8879 10.9224H29.9224V10.5H32.0431C32.5192 10.5 32.9052 10.114 32.9052 9.63791ZM25.8621 5.97411H31.181V7.2586V8.77584H25.8621V5.97411ZM11.8879 45.9396H1.72414V25.1207H11.8879V45.9396ZM24.1379 45.9396H19.6121V36.0948H24.1379V45.9396ZM30.3879 45.9396H25.8621V36.0948H30.3879V45.9396ZM36.4224 45.9396H32.1121V35.2327C32.1121 34.7567 31.7261 34.3707 31.25 34.3707H18.75C18.2739 34.3707 17.8879 34.7567 17.8879 35.2327V45.9396H13.5776V21.8017L25 15.3707L36.3879 21.7672L36.4224 24.25V45.9396ZM48.2759 45.9396H38.1121V25.1207H48.2759V45.9396Z"
                          fill="currentColor"
                        />
                        <path
                          d="M24.9998 18.0085C23.0034 18.0133 21.3877 19.6329 21.3877 21.6292C21.3924 23.6242 23.0135 25.2374 25.0084 25.2327C27.0033 25.2279 28.6166 23.6069 28.6118 21.612C28.6071 19.6205 26.9913 18.0085 24.9998 18.0085ZM24.9998 23.5085C23.9571 23.5038 23.1157 22.6547 23.1205 21.612C23.1252 20.5761 23.9638 19.7374 24.9998 19.7327C26.0438 19.7374 26.8877 20.5852 26.8877 21.6292H26.8963C26.8916 22.6719 26.0424 23.5133 24.9998 23.5085Z"
                          fill="currentColor"
                        />
                        <path
                          d="M5.5259 27.0173H3.80176V30.4656H5.5259V27.0173Z"
                          fill="currentColor"
                        />
                        <path
                          d="M9.7759 27.0173H8.05176V30.4656H9.7759V27.0173Z"
                          fill="currentColor"
                        />
                        <path
                          d="M19.6465 27.0173H16.1982V28.7415H19.6465V27.0173Z"
                          fill="currentColor"
                        />
                        <path
                          d="M26.7242 27.0173H23.2759V28.7415H26.7242V27.0173Z"
                          fill="currentColor"
                        />
                        <path
                          d="M33.8018 27.0173H30.3535V28.7415H33.8018V27.0173Z"
                          fill="currentColor"
                        />
                        <path
                          d="M19.6465 31.0344H16.1982V32.7586H19.6465V31.0344Z"
                          fill="currentColor"
                        />
                        <path
                          d="M26.7242 31.0344H23.2759V32.7586H26.7242V31.0344Z"
                          fill="currentColor"
                        />
                        <path
                          d="M33.8018 31.0344H30.3535V32.7586H33.8018V31.0344Z"
                          fill="currentColor"
                        />
                        <path
                          d="M5.5259 33.8018H3.80176V37.25H5.5259V33.8018Z"
                          fill="currentColor"
                        />
                        <path
                          d="M9.7759 33.8018H8.05176V37.25H9.7759V33.8018Z"
                          fill="currentColor"
                        />
                        <path
                          d="M5.5259 40.5947H3.80176V44.043H5.5259V40.5947Z"
                          fill="currentColor"
                        />
                        <path
                          d="M9.7759 40.5947H8.05176V44.043H9.7759V40.5947Z"
                          fill="currentColor"
                        />
                        <path
                          d="M41.9483 27.0173H40.2241V30.4656H41.9483V27.0173Z"
                          fill="currentColor"
                        />
                        <path
                          d="M46.1983 27.0173H44.4741V30.4656H46.1983V27.0173Z"
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
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="h6_program-item mb-30">
                  <div className="h6_program-item-img w_img">
                    <img src={`https://ecasadmin.unitdtechnologies.com/storages/${AcademicsProgramListone[0]?.file_name}`} alt="" />
                  </div>
                  <div className="h6_program-item-content">
                    <div className="h6_program-item-content-info">
                      <h4 className="h6_program-item-content-info-title">
                        <a>{AcademicsProgramListone[0]?.title}</a>
                      </h4> */}
                      {/* <a  className="h6_program-item-content-info-link">
                        Read More
                        <i className="fa-light fa-arrow-up-right" />
                      </a> */}
                    {/* </div>
                    <div className="h6_program-item-content-icon">
                      <svg
                        width={46}
                        height={46}
                        viewBox="0 0 46 46"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M42.2023 21.4691H38.8682V20.3514C38.8682 19.338 38.1755 18.4827 37.1845 18.2715C36.3193 18.0865 35.4451 17.9355 34.5763 17.8196V13.2978L42.939 10.1811C43.656 9.91697 44.0836 9.37162 44.0836 8.72295C44.0836 8.07877 43.6569 7.53432 42.9417 7.26568L23.8571 0.154551C23.3046 -0.0511914 22.6954 -0.0511914 22.1429 0.154551L3.06006 7.26568L3.05826 7.26658C2.34221 7.53521 1.91455 8.07967 1.91455 8.72385C1.91455 9.37162 2.34311 9.91697 3.05916 10.1811L4.21635 10.6124V13.1163C3.45627 13.4065 2.91541 14.1423 2.91541 15.003C2.91541 15.596 3.17236 16.1288 3.58115 16.4989L2.6351 18.8178C2.48686 19.1772 2.48686 19.5904 2.6333 19.9462C2.81928 20.4053 3.21189 20.6901 3.65842 20.6901H6.20998C6.59182 20.6901 6.93412 20.4808 7.14076 20.134C7.13357 20.2059 7.12908 20.2778 7.12908 20.3514V21.4691H3.80037C2.90553 21.4691 2.17779 22.1959 2.17779 23.089V44.3774C2.17779 45.2723 2.90553 46 3.80037 46H42.2032C43.0962 46 43.8231 45.2723 43.8231 44.3774V23.089C43.8222 22.1959 43.0953 21.4691 42.2023 21.4691ZM36.8853 19.6758C37.2124 19.7459 37.4325 20.0172 37.4325 20.3514V38.9653C37.4325 39.1854 37.3498 39.3606 37.1818 39.4998C37.012 39.6391 36.8242 39.6858 36.6077 39.6436C32.2278 38.7874 27.8947 38.8431 23.7187 39.808V24.955C26.4104 24.902 29.1022 24.5462 31.8244 23.8859C33.4461 23.4915 34.5781 22.0513 34.5781 20.3838V19.2679C35.3463 19.3757 36.1199 19.5123 36.8853 19.6758ZM8.56748 20.3514C8.56748 20.0172 8.7876 19.7459 9.11463 19.6758C9.881 19.5123 10.6546 19.3757 11.4245 19.2688V20.382C11.4245 22.0531 12.5583 23.4933 14.1818 23.8841C16.9095 24.5435 19.5985 24.8993 22.2812 24.955V39.808C18.1044 38.844 13.7721 38.7883 9.39494 39.6445C9.17393 39.6876 8.99064 39.6418 8.82084 39.5025C8.65014 39.3615 8.56748 39.1863 8.56748 38.9661V20.3514ZM33.1415 20.3838C33.1415 21.4026 32.4758 22.2489 31.4848 22.4897C28.6574 23.1761 25.8651 23.5211 23.0692 23.5247C23.0467 23.5229 23.0233 23.5211 23 23.5211C22.9784 23.5211 22.9569 23.5229 22.9353 23.5247C20.1474 23.5175 17.3551 23.1725 14.5196 22.487C13.5278 22.248 12.862 21.4017 12.862 20.3811V18.4467C12.862 18.4458 12.862 18.4458 12.862 18.4449V13.8324L22.1438 17.2922C22.4205 17.3956 22.7107 17.4468 23.0009 17.4468C23.2911 17.4468 23.5813 17.3956 23.858 17.2922L33.1424 13.8324V20.3838H33.1415ZM3.36463 8.72385C3.39248 8.69689 3.45357 8.65197 3.56229 8.61064L22.6442 1.50041C22.8733 1.41506 23.1258 1.41506 23.3549 1.50041L42.4386 8.61064C42.5482 8.65197 42.6093 8.69689 42.6353 8.72385C42.6093 8.7499 42.5491 8.79393 42.4395 8.83435L23.3558 15.9473C23.1267 16.0326 22.8742 16.0326 22.6451 15.9473L5.36096 9.50459C5.25584 9.42732 5.13006 9.37791 4.9917 9.36713L3.55959 8.83346C3.45268 8.79392 3.39248 8.7499 3.36463 8.72385ZM4.936 14.4199C5.25584 14.4199 5.51639 14.6814 5.51639 15.003C5.51639 15.3229 5.25584 15.5834 4.936 15.5834C4.61436 15.5834 4.35291 15.3229 4.35291 15.003C4.35291 14.6814 4.61436 14.4199 4.936 14.4199ZM4.00971 19.2535L4.92072 17.02H4.936C4.936 17.02 4.94588 17.02 4.95127 17.02L5.86229 19.2535H4.00971ZM7.236 18.8196L6.28904 16.4971C6.69693 16.1279 6.95299 15.5942 6.95299 15.003C6.95299 14.1423 6.41303 13.4065 5.65385 13.1163V11.1469L11.4245 13.2978V17.8187C10.5548 17.9346 9.67975 18.0856 8.81455 18.2706C8.14971 18.4126 7.62143 18.8438 7.34381 19.4179C7.3492 19.214 7.31416 19.0092 7.236 18.8196ZM42.3856 44.3774C42.3856 44.4781 42.302 44.5634 42.2023 44.5634H3.80037C3.69975 44.5634 3.61439 44.4781 3.61439 44.3774V23.089C3.61439 22.991 3.70154 22.9057 3.80037 22.9057H7.13178V38.9653C7.13178 39.6121 7.4067 40.1961 7.90982 40.6112C8.41025 41.02 9.03557 41.1772 9.67166 41.0532C14.0345 40.1997 18.3452 40.294 22.4852 41.3326C22.6586 41.3758 22.8293 41.3973 23.0009 41.3973C23.1725 41.3973 23.3441 41.3758 23.5193 41.3326C27.6593 40.294 31.97 40.1997 36.3319 41.0532C36.9662 41.1781 37.5915 41.0209 38.0937 40.6094C38.5933 40.1961 38.8691 39.613 38.8691 38.9653V22.9057H42.2032C42.3029 22.9057 42.3865 22.9892 42.3865 23.089V44.3774H42.3856ZM10.4928 27.3161C10.4362 26.9235 10.7094 26.5596 11.102 26.503C12.7237 26.2703 14.357 26.1643 15.9562 26.1877C16.3524 26.1931 16.6696 26.5201 16.6642 26.9163C16.6588 27.3134 16.33 27.6261 15.9356 27.6243C14.4109 27.6018 12.853 27.7033 11.3059 27.9253C11.2718 27.9297 11.2367 27.9324 11.2035 27.9324C10.8513 27.9333 10.544 27.6746 10.4928 27.3161ZM10.4928 31.2405C10.4362 30.8479 10.7094 30.484 11.102 30.4283C14.0147 30.0114 16.9229 30.0042 19.7467 30.4049C20.1394 30.4606 20.4125 30.8245 20.3568 31.2171C20.3011 31.6097 19.9372 31.8829 19.5446 31.8272C16.8556 31.4453 14.083 31.4525 11.305 31.8496C11.2709 31.8541 11.2367 31.8568 11.2026 31.8568C10.8513 31.8577 10.544 31.599 10.4928 31.2405ZM10.4928 35.1622C10.4371 34.7695 10.7103 34.4057 11.1029 34.35C14.0183 33.9358 16.9265 33.9286 19.7476 34.3293C20.1403 34.385 20.4134 34.7489 20.3577 35.1415C20.302 35.5341 19.9381 35.8081 19.5455 35.7515C16.8592 35.3697 14.0866 35.3769 11.305 35.7722C11.2709 35.7767 11.2367 35.7794 11.2035 35.7794C10.8504 35.7794 10.5431 35.5206 10.4928 35.1622ZM34.898 26.5039C35.2906 26.5596 35.5637 26.9235 35.5071 27.3161C35.4559 27.6746 35.1487 27.9333 34.7974 27.9333C34.7632 27.9333 34.7291 27.9306 34.6949 27.9261C33.146 27.7051 31.5971 27.6036 30.0913 27.6225C29.6951 27.6252 29.369 27.3107 29.3636 26.9136C29.3582 26.5174 29.6754 26.1913 30.0725 26.1859C31.6528 26.1652 33.2754 26.2721 34.898 26.5039ZM25.6432 31.2171C25.5875 30.8245 25.8606 30.4606 26.2532 30.4049C29.077 30.0033 31.9862 30.0114 34.898 30.4283C35.2906 30.4849 35.5637 30.8479 35.5071 31.2405C35.4559 31.599 35.1487 31.8568 34.7974 31.8568C34.7632 31.8568 34.7291 31.8541 34.6949 31.8496C31.917 31.4525 29.1444 31.4444 26.4554 31.8272C26.0628 31.8838 25.6989 31.6097 25.6432 31.2171ZM35.5071 35.1622C35.4559 35.5206 35.1487 35.7794 34.7974 35.7794C34.7641 35.7794 34.73 35.7767 34.6958 35.7722C31.9143 35.3769 29.1417 35.3706 26.4554 35.7515C26.0628 35.8081 25.6989 35.5341 25.6432 35.1415C25.5875 34.7489 25.8606 34.385 26.2532 34.3293C29.0734 33.9286 31.9826 33.9358 34.898 34.35C35.2906 34.4057 35.5637 34.7695 35.5071 35.1622Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="h6_program-item mb-30">
                  <div className="h6_program-item-img w_img">
                    <img src={`https://ecasadmin.unitdtechnologies.com/storages/${AcademicsProgramListtwo[0]?.file_name}`} alt="" />
                  </div>
                  <div className="h6_program-item-content">
                    <div className="h6_program-item-content-info">
                      <h4 className="h6_program-item-content-info-title">
                        <a>{AcademicsProgramListtwo[0]?.title}</a>
                      </h4> */}
                      {/* <a className="h6_program-item-content-info-link">
                        Read More
                        <i className="fa-light fa-arrow-up-right" />
                      </a> */}
                    {/* </div>
                    <div className="h6_program-item-content-icon">
                      <svg
                        width={36}
                        height={48}
                        viewBox="0 0 36 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.19938 9.13782L8.86643 12.1917V16.0201C8.86643 16.075 8.88602 16.1237 8.89777 16.1751C8.88566 16.2552 8.86643 16.3331 8.86643 16.4164C8.86643 18.7171 13.6012 19.7647 18.0002 19.7647C22.3992 19.7647 27.134 18.7171 27.134 16.4164C27.134 16.3333 27.1147 16.2553 27.1026 16.1754C27.1146 16.1239 27.134 16.0752 27.134 16.0203V12.1919L29.6561 10.8327V15.7676C29.6561 16.1612 29.9762 16.4808 30.3693 16.4808C30.7624 16.4808 31.0825 16.1612 31.0825 15.7676V10.0775C31.0825 10.0733 31.0802 10.0695 31.08 10.0654L32.801 9.13799C33.0324 9.0144 33.1767 8.7722 33.1767 8.51003C33.1767 8.24786 33.0322 8.00673 32.801 7.88206L18.3376 0.086276C18.1288 -0.0287587 17.8714 -0.0287587 17.6627 0.086276L3.19938 7.88206C2.96801 8.00655 2.82373 8.24786 2.82373 8.50985C2.82373 8.77184 2.96801 9.01422 3.19938 9.13782ZM25.7078 14.5132C23.974 13.532 20.9174 13.0679 18.0004 13.0679C15.0833 13.0679 12.0266 13.532 10.293 14.5132V11.5953C10.293 11.0205 12.9144 9.67429 18.0004 9.67429C23.0864 9.67429 25.7078 11.0206 25.7078 11.5953V14.5132ZM18.0004 18.3383C12.9142 18.3383 10.293 16.991 10.293 16.4164C10.293 15.8418 12.9142 14.4943 18.0004 14.4943C23.0866 14.4943 25.7078 15.8416 25.7078 16.4162C25.7078 16.9909 23.0866 18.3383 18.0004 18.3383ZM18.0004 1.52412L30.961 8.51003L26.8688 10.7155C25.8243 9.02831 21.7915 8.24786 18.0004 8.24786C14.2093 8.24786 10.1768 9.02831 9.13218 10.7153L5.03971 8.50985L18.0004 1.52412Z"
                          fill="currentColor"
                        />
                        <path
                          d="M35.0125 38.1713C34.9419 38.2065 34.854 38.26 34.7833 38.3125C34.6592 38.4538 34.5884 38.6304 34.5884 38.8241C34.5884 39.0006 34.659 39.1772 34.7833 39.3185C34.9246 39.4589 35.1004 39.5294 35.2951 39.5294C35.471 39.5294 35.6485 39.4589 35.7899 39.3185C35.9295 39.1772 36.0001 39.0006 36.0001 38.8241C36.0001 38.6302 35.9295 38.4537 35.7899 38.3125C35.5952 38.1187 35.278 38.0652 35.0125 38.1713Z"
                          fill="currentColor"
                        />
                        <path
                          d="M35.2895 40.7599C34.898 40.7599 34.5793 41.0803 34.5793 41.4749V45.3109C30.1357 42.8511 24.6104 42.6067 21.1608 42.7542C23.3731 41.8438 26.8724 41.0937 31.4199 42.3471C31.6364 42.4082 31.8615 42.3601 32.0366 42.2257C32.2132 42.0903 32.3172 41.8799 32.3172 41.6573V25.0535C33.4452 25.1316 34.2116 25.4529 34.5793 25.663V36.0962C34.5793 36.4908 34.898 36.8112 35.2895 36.8112C35.6809 36.8112 35.9996 36.4908 35.9996 36.0962V25.2779C35.9996 25.0622 35.9026 24.8588 35.7364 24.7227C35.6818 24.6778 34.494 23.7546 32.3173 23.6167V22.2111C32.3173 21.9291 32.1528 21.6741 31.8982 21.559C31.8174 21.5198 23.9847 18.0987 17.9998 23.592C12.0166 18.1021 4.18424 21.5223 4.10159 21.559C3.84689 21.6743 3.68248 21.9291 3.68248 22.2111V23.6158C1.5085 23.7515 0.319436 24.6778 0.263211 24.7227C0.0968416 24.859 0 25.0622 0 25.2779V46.5792C0 46.843 0.14544 47.0856 0.375838 47.2095C0.479775 47.2662 0.595772 47.2942 0.710173 47.2942C0.846923 47.2942 0.985623 47.254 1.10339 47.1746C7.51394 42.8663 17.7886 44.4455 17.8891 44.4613C17.9115 44.4654 17.9324 44.4573 17.9546 44.4591C17.97 44.46 17.9847 44.4691 18 44.4691C18.0158 44.4691 18.0305 44.46 18.0461 44.459C18.0681 44.4573 18.0889 44.465 18.1109 44.4613C18.213 44.4455 28.4878 42.8681 34.8966 47.1746C35.0144 47.254 35.1529 47.2942 35.2898 47.2942C35.4042 47.2942 35.5202 47.2663 35.6242 47.2095C35.8546 47.0856 36 46.8428 36 46.5792V41.4747C35.9996 41.0803 35.6811 40.7599 35.2895 40.7599ZM5.10265 36.9667C13.9919 36.0077 16.4559 40.389 17.0887 42.2781C15.5946 41.4093 12.9311 40.2543 9.2805 40.2543C8.004 40.2543 6.60795 40.3957 5.10265 40.7406V36.9667ZM18.9104 42.2809C19.5427 40.3934 22.0069 36.008 30.897 36.9667V40.7406C25.0806 39.4069 20.9248 41.108 18.9104 42.2809ZM30.897 22.6949V35.5348C23.7619 34.8064 20.3265 37.3668 18.71 39.6786V24.8504C23.3503 20.3307 29.2739 22.0871 30.897 22.6949ZM17.2896 24.8502V39.6847C15.6721 37.3724 12.2351 34.8078 5.10265 35.5346V22.6947C6.72732 22.0871 12.6512 20.3325 17.2896 24.8502ZM1.42017 45.3109V25.6639C1.79033 25.4516 2.56205 25.1318 3.6823 25.0535V41.6573C3.6823 41.8799 3.78623 42.0903 3.96289 42.2257C4.13777 42.3601 4.36817 42.4082 4.57959 42.3471C9.12833 41.092 12.6295 41.8436 14.8422 42.7553C11.3924 42.6077 5.86443 42.8513 1.42017 45.3109Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <section className="h7_scholarship-area fix" style={{ marginTop: 150 }}>
          <div className="container">
            <div className="section-area-6 mb-55 text-center">
              <span
                className="section-subtitle"
                style={{ fontSize: 43, fontWeight: "bold", marginTop: 20 }}
              >
                Leadership - Scholarship Programs
              </span>
            </div>
            <div className="h7_scholarship-img">
              <img src={`https://ecasadmin.unitdtechnologies.com/storages/${Scholarship[0]?.file_name}`} alt="" />
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
                <p dangerouslySetInnerHTML={{ __html: Scholarship[0]?.description }}>
                </p>
                <a>
                  Financial Aid <i className="fa-light fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* teacher area start */}
        {/* <section className="h2_teacher-area pb-80" style={{ marginTop: 150 }}>
          <div className="container">
            <div className="row">
              <div className="col-xl-9 col-lg-8 col-md-12 mb-30">
                <div
                  className="h2_teacher-section bg-default"
                  data-background="assets/img/teacher/2/bg.jpg"
                >
                  <div className="section-area-2">
                    <h2 className="section-title mb-50">
                      Our Most <br /> Experience <span>
                      Management Desk <img src={line} alt="" />
                      </span>
                    </h2>
                  </div>
                  <div className="h2_teacher-button">
                    <a
                     
                      className="theme-btn theme-btn-medium teacher-btn"
                    >
                      About Our Management
                    </a>
                  </div>
                </div>
              </div>
              {OurManagement.map((item, index) => ( 
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="h2_teacher-item mb-30">
                  <div className="h2_teacher-img">
                    <img src={`https://ecasadmin.unitdtechnologies.com/storages/${item?.file_name}`} alt=""  style={{marginBottom:50}}/>
                  </div>
                  <div className="h2_teacher-content">
                    <h5 dangerouslySetInnerHTML={{ __html: item?.description_short }}>
                    </h5>
                    <span>{item.title}</span>
                  </div>
                </div>
              </div>
              ))}
            </div>
          </div>
        </section> */}
        {/* teacher area end */}
        {/* about area end */}
        {/* <section className="h6_about-area pt-50 pb-80 fix">
          <div className="container">
            <div className="section-area-6 mb-55 text-center">
              <span
                className="section-subtitle"
                style={{ fontSize: 43, fontWeight: "bold", marginBottom: 23 }}
              >
               {ourFounder[0]?.title}
              </span>
            </div>
            <div className="row">
              <div className="col-xl-6 col-lg-6">
                <div className="h6_about-img w_img">
                  <img
                    src={`https://ecasadmin.unitdtechnologies.com/storages/${ourFounder[0]?.file_name}`}
                    alt="Founder-Image"
                    style={{
                      width: "100%",
                      // objectFit: "cover",
                    }}
                  /> */}
                  {/* <div className="h6_about-img-content">
                    <h2>2010</h2>
                    <span>Since Einstein</span>
                  </div> */}
                {/* </div>
              </div>
              <div className="col-xl-6 col-lg-6" style={{ marginTop: 50, }}>
                <div className="h6_about-content ml-30 mb-30 mb-md-0 pb-30"> */}
                  {/* <h3 className="h6_about-content-title">
                    Tribute to Our Founder
                  </h3> */}
                  {/* <p dangerouslySetInnerHTML={{ __html: ourFounder[0]?.description }}>
                  </p> */}
                  {/* <a
                    href="#"
                    className="h6_about-btn theme-btn theme-btn-medium theme-btn-6"
                  >
                    Learn More
                    <i className="fa-light fa-arrow-up-right" />
                  </a> */}
                {/* </div>
              </div>
            </div>
          </div>
          <div className="about-text-wrap mb-15">
            <div className="about-text-ticker" id="about-text-ticker">
              <marquee>
                <h1 className="h6_about-bottom-title">
                  Endless friendships, unforgettable memories
                </h1>
              </marquee>
            </div>
          </div>
        </section> */}
        {/* <section className="h6_about-area pt-50 pb-80 fix">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6" style={{ marginTop: 100 }}>
                <div className="h6_about-content ml-30 mb-30 mb-md-0 pb-30">
                  <h3 className="h6_about-content-title">{OurPhilosophy[0]?.title}</h3>
                  <p dangerouslySetInnerHTML={{ __html: OurPhilosophy[0]?.description }}>
                  </p> */}
                  {/* <a
                    href="#"
                    className="h6_about-btn theme-btn theme-btn-medium theme-btn-6"
                  >
                    Explore our History
                    <i className="fa-light fa-arrow-up-right" />
                  </a> */}
                {/* </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="h6_about-img w_img">
                  <img
                    src={`https://ecasadmin.unitdtechnologies.com/storages/${OurPhilosophy[0]?.file_name}`}
                    alt="Founder-Image"
                    style={{
                      width: "100%",
                      height: "550px", // Thumbnail height
                      objectFit: "cover",
                    }}
                  />
                  <div className="h6_about-img-content">
                    <h2>2017</h2>
                    <span>Since Einstein</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="about-text-wrap mb-15">
            <div className="about-text-ticker" id="about-text-ticker">
              <h1 className="h6_about-bottom-title">
                Endless friendships, unforgettable memories
              </h1>
            </div>
          </div>
        </section> */}
        {/* counter area start */}
        {/* <section className="h4_about-area pt-70 pb-90">
          <div className="container">
            <div className="section-area-6 mb-55 text-center">
              <span
                className="section-subtitle"
                style={{ fontSize: 43, fontWeight: "bold", marginBottom: 23 }}
              >
                Student Life
              </span>
            </div>
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6">
                <div className="h4_about-img mb-50 w_img">
                  <img src={`https://ecasadmin.unitdtechnologies.com/storages/${StudentLife[0]?.file_name}`} alt="" style={{ marginTop: 25 }} />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-10">
                <div className="h4_about-wrap mr-65 mb-50">
                  <div className="section-area-4 mb-25">
                    <h2 className="section-title mb-10">
                    {StudentLife[0]?.title}
                    </h2>
                    <p className="section-text" dangerouslySetInnerHTML={{ __html: StudentLife[0]?.description }}>
                    </p>
                  </div>
                  <div className="h4_about-content mb-25">
                    <ul>
                    {StudentLifeList.map((item, index) => ( 
                      <li>
                        <i className="fa-regular fa-check" />
                        {item.title}
                      </li>
                    ))}
                    </ul>
                  </div>
                  <div className="h4_about-button"> */}
                    {/* <a  className="theme-btn h4_about-btn theme-btn-4">
                      More Details
                    </a> */}
                    {/* <a
                      href="tel:+002455456978"
                      className="h4_about-button-call"
                    >
                      <i className="fa-solid fa-phone" />
                      (+91) 9489903808
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* <section
          className="h6_testimonial-area pt-120 pb-120 bg-default pt-215 pb-100 fix"
          style={{
            backgroundImage: `url(${StudentForTraing})`,
            marginTop: 100,
          }}
        >
          <div className="testimonial-text-wrap mb-80">
            <div
              className="testimonial-text-ticker"
              id="testimonial-text-ticker"
            >
              <marquee>
                <h1 className="h6_testimonial-title">Our Center Assure</h1>
              </marquee>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xl-9">
                <div className="h6_testimonial-wrap mr-60"> */}
                  {/* <div className="h6_testimonial-navigation mb-50">
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
                </div> */}
                  {/* <div className="h6_testimonial-active swiper">
                    <Swiper
                      modules={[Navigation]}
                      navigation
                      spaceBetween={30}
                      slidesPerView={1}
                      className="h6_testimonial-active"
                    >
                      <div className="swiper-wrapper">
                      {StudentLifeSlider.map((item, index) => ( 
                        <SwiperSlide>
                          <div className="swiper-slide">
                            <div className="h6_testimonial-item">
                              <blockquote>
                                <p dangerouslySetInnerHTML={{ __html: item?.description }}>
                                </p> */}
                                {/* <div className="quote-admin">
                            <div className="quote-admin-inner">
                              <h5>William Board</h5>
                              <span>Student Eduan Univesity</span>
                            </div>
                          </div> */}
                              {/* </blockquote>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                      </div>
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* <div className="section-area-6 mb-55 text-center">
          <span
            className="section-subtitle"
            style={{
              fontSize: 43,
              fontWeight: "bold",
              marginBottom: 23,
              marginTop: 150,
            }}
          >
            Campus experience
          </span>
        </div> */}
        {/* <section
          className="h4_education-area pt-130 pb-110"
          style={{ marginTop: 50 }}
        >
          <img src={shapeStu1} alt="" className="h4_education-shape-1" />
          <img src={shapeStu} alt="" className="h4_education-shape-2" />
          <img src={`https://ecasadmin.unitdtechnologies.com/storages/${CampusExperience[0]?.file_name}`} alt="" className="h4_education-img" />
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-7 col-md-12">
                <div className="h4_education-wrap mr-50">
                  <div className="section-area-4 mb-60 section-white-4"> 
                    <h2 className="section-title mb-15">
                    {CampusExperience[0]?.title}
                    </h2>
                    <p className="section-text" dangerouslySetInnerHTML={{ __html: CampusExperience[0]?.description }}>
                    </p>
                  </div> */}
                  {/* <div className="h4_education-content">
                <div className="row">
                  <div className="col-lg-6 col-sm-6">
                    <div className="h4_education-item">
                      <div className="h4_education-item-icon">
                        <i className="fa-light fa-thumbs-up" />
                      </div>
                      <div className="h4_education-item-info">
                        <h3>
                          <span className="odometer count_two" data-count={52}>
                            00
                          </span>
                          <span>k</span>
                        </h3>
                        <p>Project Completed</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div className="h4_education-item">
                      <div className="h4_education-item-icon">
                        <i className="fa-light fa-clipboard-user" />
                      </div>
                      <div className="h4_education-item-info">
                        <h3>
                          <span className="odometer count_two" data-count={197}>
                            00
                          </span>
                          <span>+</span>
                        </h3>
                        <p>Team Members</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div className="h4_education-item">
                      <div className="h4_education-item-icon">
                        <i className="fa-light fa-users" />
                      </div>
                      <div className="h4_education-item-info">
                        <h3>
                          <span className="odometer count_two" data-count={38}>
                            00
                          </span>
                          <span>k</span>
                        </h3>
                        <p>Trusted Clients</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div className="h4_education-item">
                      <div className="h4_education-item-icon">
                        <i className="fa-light fa-star-shooting fa-rotate-180" />
                      </div>
                      <div className="h4_education-item-info">
                        <h3>
                          <span className="odometer count_two" data-count={24}>
                            00
                          </span>
                          <span>+</span>
                        </h3>
                        <p>Years of Experience</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
                {/* </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* <div className="h6_cta-area pt-120" style={{ marginTop: 100 }}>
          <div className="container">
            <div
              className="h6_cta-wrapper"
              style={{ backgroundImage: `url(${bg3})`, height: 270 }}
            >
              <img
                className="h6_cta-wrapper-img"
                src={bannerImge1}
                alt=""
                style={{
                  height: 310,
                }}
              />
              <div className="h6_cta-content mb-30 mb-md-0">
                <h2 className="h6_cta-title">
                  Are you ready to take the next step?
                </h2>
              </div>
              <div className="h6_cta-button">
                <Link onClick={onPaymentPress} className="h6_cta-btn">
                  Application Form
                  <i className="fa-light fa-arrow-up-right" />
                </Link>
              </div>
            </div>
          </div>
        </div> */}
        {/* cta area end */}
      </main>
    </>
  );
};

// Styles
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
};

const imageStyles = {
  maxWidth: "100%",
  height: "auto",
  cursor: "pointer",
};


export default Home;
