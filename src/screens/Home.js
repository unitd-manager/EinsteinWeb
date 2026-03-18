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
    const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth <= 768 : false);
  

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }
    window.addEventListener("resize", handleResize);
    // cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Trigger counter animation on mount
  useEffect(() => {
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
  if (str === null || str === undefined) return "";
  return String(str).replace(/<\/?[^>]+(>|$)/g, ""); // Removes all HTML tags
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
        <section className="slider-area fix" style={{paddingTop: 0, paddingBottom: 0,margin:0}}>
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
              {isMobile ? (
  <div
    className="bg-default"
  
  >
    {/* Image */}
    <img
      src={`https://ecasadmin.unitdtechnologies.com/storages/${encodeURIComponent(slide.file_name)}`}
      alt={slide.title || `slide-${index}`}
      style={{
        width: '100%',
        height: 'auto',
        display: 'block'
      }}
    />

    {/* Overlay */}


    {/* Text Content */}
    <div
      style={{
        position: 'absolute',
        top: '80%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        width: '100%',
        padding: '0 20px',
        zIndex: 2
      }}
    >
      <h1
        className="h7_banner-content-title"
        style={{
          color: '#fff',
          margin: 0,
          fontSize: 'clamp(22px, 6vw, 32px)',
          fontWeight: 700,
          textShadow: '0 3px 6px rgba(0,0,0,0.5)'
        }}
      >
        {slide.title}
      </h1>

      <p
        className="h7_banner-content-text"
        style={{
          color: '#fff',
          marginTop: 10,
          fontSize: 'clamp(12px, 3.5vw, 16px)'
        }}
      >
        {removeHtmlTags(slide.description)}
      </p>
    </div>
  </div>
) : (
                  <div
                    className="h7_single-banner bg-default"
                    style={{
                      backgroundImage: `url(https://ecasadmin.unitdtechnologies.com/storages/${encodeURIComponent(slide.file_name)})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      minHeight: "60vh",
                      height: "auto",
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
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

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
                    </p>
                 
                  </div>
               
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="h7_about-area pt-50 pb-50">

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
                        <i className="fa-solid fa-play"  style={{color:'#b0040c'}}/>
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
                  {/* <div className="h2_about-img-shape d-none d-sm-block">
                    <img className="h2_about-shape-1" src={shape1} alt="" />
                    <img className="h2_about-shape-2" src={shape2} alt="" />
                    <img className="h2_about-shape-3" src={shape3} alt="" />
                  </div> */}
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-10 mb-50">
                <div className="section-area-2 mb-35">
                  <h2 className="section-title mb-20">
                  {compusHome[0]?.title}
                    <span style={{color:"#58213f"}}>
                      Ecas <img src={line} alt="" />
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

      
        {/* cta 2 area start */}
        <div className="h2_cta-area">
          <div className="container">
            <div
              className="h2_cta-wrap bg-default pt-70 pb-80"
              data-background="assets/img/cta/2/1.jpg"
            >
            
            </div>
          </div>
        </div>
      
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
                <Link to="/Scholarship1">
                  Beedi Scholarship <i className="fa-light fa-arrow-right" />
                </Link>
                <Link to="Scholarship2">
                  Center sector Scholarship <i className="fa-light fa-arrow-right" />
                </Link>
                <Link to="Scholarship3">
                  SC/ST Scholarship <i className="fa-light fa-arrow-right" />
                </Link>
                <Link to="Scholarship4">
                  Tamil Pudhalvan Scholarship <i className="fa-light fa-arrow-right" />
                </Link>
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
