import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../assets/css/VerticalMarquees.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../assets/css/modal.css"
import api from "../constants/api";
import image1 from "../assets/img/pageAbout3.jpg";
import HappyNewYear from "../assets/img/HappyNewYear.jpg"

function extractYouTubeId(url) {
  const cleanUrl = url.replace(/<[^>]+>/g, '').trim(); // Remove HTML tags
  const regex = /(?:https?:\/\/(?:www\.)?youtube\.com\/(?:[^\/\n\s]+\/\S+\/|\S*?[?&]v=|v%3D|.+?\/)?(\w{11})|youtu\.be\/(\w{11}))/;
  const match = cleanUrl.match(regex);
  return match ? match[1] || match[2] : null;
}


const InfoSection = () => {
  const [quote, setQuote] = useState([]);
  const [videoUrls, setVideoUrls] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [poleStar, setPoleStar] = useState([]);
  const [placement, setPlacement] = useState([]);
  const [rank, SetRank] = useState([]);
  const [modalVideo, setModalVideo] = useState(null);
 

  
  useEffect(() => {
    api.get("/content/getPoleStar")
      .then((res) => {
        const data = res.data.data;
        setPoleStar(data);
      })
      .catch((err) => console.error("Error fetching Pole:", err));
  }, []);

  useEffect(() => {
    api.get("/student/getStudentPlacement")
      .then((res) => {
        const data = res.data.data;
        setPlacement(data);
      })
      .catch((err) => console.error("Error fetching Pole:", err));
  }, []);
  useEffect(() => {
    api.get("/content/getUnivercityRank")
      .then((res) => {
        const data = res.data.data;
        SetRank(data);
      })
      .catch((err) => console.error("Error fetching Pole:", err));
  }, []);

  useEffect(() => {
    api.get("/content/getQuote")
      .then((res) => {
        setQuote(res.data.data[0]);
      })
      .catch((err) => {
        console.error("Error fetching quote details:", err);
      });
  }, []);

  useEffect(() => {
    api.post("/content/getVideoUrls")
      .then((res) => {
        setVideoUrls(res.data.data);
      })
      .catch((err) => {
        console.error("Error fetching quote details:", err);
      });
  }, []);

  useEffect(() => {
    api.get("/content/getNotifications")
      .then((res) => {
        setNotifications(res.data.data);
      })
      .catch((err) => {
        console.error("Error fetching notifications:", err);
      });
  }, []);

  useEffect(() => {
    api.get("/content/getAnnouncements")
      .then((res) => {
        setAnnouncements(res.data.data);
      })
      .catch((err) => {
        console.error("Error fetching announcements:", err);
      });
  }, []);

  return (
    <div className="info-section">
   <div className="cards quote-cards university-ranks-card">
        <h5 style={{ color: 'white' }}>Quote of the day</h5>
        <blockquote>
          <p style={{ color: 'white' }}>{quote?.description_short}</p>
          <footer>- {quote?.title}</footer>
        </blockquote>
      </div>
    

      {/* Announcements */}
      <div className="cards marquee-cards">
        <div className="cards-headers university-ranks-cards">Announcements</div>
        <div className="marquee-body">
          <div className="marquee-track">
            {announcements.concat(announcements).map((item, index) => (
              <p key={index}><span>➔</span> {item.description_short}</p>
            ))}
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div className="cards marquee-cards">
        <div className="cards-headers university-ranks-cards">Notifications</div>
        <div className="marquee-body">
          <div className="marquee-track">
            {notifications.concat(notifications).map((item, index) => (
              <p key={index}><span>➔</span> {item.description_short}</p>
            ))}
          </div>
        </div>
      </div>
       
     
  
      <div className="cards quote-cards university-ranks-card">
  <div className="cards-headers1"> <Link
    to="/Calender"
    
      rel="noopener noreferrer"
      className="blink-gradient2"
    >
     <u> <i className="fa fa-calendar" aria-hidden="true"></i> Click here to Acadamic Calendar</u>
    </Link></div>
</div>
<div className="cards quote-cards university-ranks-card">
  <div className="cards-headers1">Placement</div>
  <div className="container">
    <Swiper
      modules={[Navigation, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      navigation={{
        nextEl: ".company-next",
        prevEl: ".company-prev",
      }}
    >
      {placement.map((company, i) => (
        <SwiperSlide key={i} className="university-ranks-slide">
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <img
              src={`https://ecasadmin.unitdtechnologies.com/storages/${company.images}`}
              alt={company.title}
              style={{
                width: "240px",
                height: "240px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
            <div style={{
              textAlign: "center",
              color: "#fff",
              fontWeight: "bold",
              fontSize: 13
            }}>
              {company.student_name}
            </div>
            <div style={{
              textAlign: "center",
              color: "#fff",
              fontSize: 12
            }}>
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
</div>


<div className="cards quote-cards university-ranks-card">
  <div className="cards-headers1">University Ranks</div>
  <div className="container">
    <Swiper
      modules={[Navigation, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      navigation={{
        nextEl: ".company-next",
        prevEl: ".company-prev",
      }}
    >
      {rank.map((company, i) => (
        <SwiperSlide key={i} className="university-ranks-slide">
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <img
              src={`https://ecasadmin.unitdtechnologies.com/storages/${company.file_name}`}
              alt={company.title}
              style={{
                width: "240px",
                height: "240px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
            <div style={{
              textAlign: "center",
              color: "#fff",
              fontWeight: "bold",
              fontSize: 13
            }}>
              {company.title}
            </div>
            <div style={{
              textAlign: "center",
              color: "#fff",
              fontSize: 12
            }}>
              {company.description_short}
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
</div>

<div className="cards quote-cards university-ranks-card">
  <div className="cards-headers1">Pole Star</div>
  <div className="container">
    <Swiper
      modules={[Navigation, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      navigation={{
        nextEl: ".company-next",
        prevEl: ".company-prev",
      }}
    >
      {poleStar.map((company, i) => (
        <SwiperSlide key={i} className="university-ranks-slide">
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <img
              src={`https://ecasadmin.unitdtechnologies.com/storages/${company.file_name}`}
              alt={company.title}
              style={{
                width: "240px",
                height: "240px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
            <div style={{
              textAlign: "center",
              color: "#fff",
              fontWeight: "bold",
              fontSize: 13
            }}>
              {company.title}
            </div>
            <div style={{
              textAlign: "center",
              color: "#fff",
              fontSize: 12
            }}>
              {company.description_short}
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
</div>
<div className="cards quote-cards university-ranks-card">
      <div className="cards-headers1">Latest Video</div>
      <div className="container">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          navigation={{
            nextEl: ".company-next",
            prevEl: ".company-prev",
          }}
        >
          {videoUrls.map((company, i) => (
            <SwiperSlide key={i} className="university-ranks-slide">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                {company ? (
               <div className="h7_about-img w_img mb-50">
               <img src={`https://ecasadmin.unitdtechnologies.com/storages/${company?.file_name}`} alt=""  style={{
    height: "200px", 
    borderRadius:8
  }} />
               
               <a
                 onClick={(e) => {    
                   e.preventDefault(); // Prevent the default link behavior
                   setModalVideo({
                    title: company.title,
                    url: company?.description, // Pass the actual video URL here
                    
                  });
                }}
               >
                 <i className="fa-solid fa-play" style={{color:'white'}} />
               </a>
             </div>
           
           
                ) : (
                  <img
                    src={`https://ecasadmin.unitdtechnologies.com/storages/${company.file_name}`}
                    alt={company.title}
                    style={{
                      width: "240px",
                      height: "240px",
                      objectFit: "cover",
                      borderRadius: "8px",
                      marginBottom: "10px",
                    }}
                  />
                )}
                <div
                  style={{
                    textAlign: "center",
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: 13,
                  }}
                >
                  {company.title}
                </div>
                <div
                  style={{
                    textAlign: "center",
                    color: "#fff",
                    fontSize: 12,
                  }}
                >
                  {company.description_short}
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
    </div>
    {modalVideo && (
        <div className="modal5-overlay">
          <div className="modal5-content">
            <button className="modal5-close" onClick={() => setModalVideo(null)}>
              ×
            </button>
            {/* <h3>{modalVideo.title || "Untitled Video"}</h3> */}
            <div className="video-container">
              {/* Checking if YouTube ID can be extracted and rendered */}
              {modalVideo.url && extractYouTubeId(modalVideo.url) ? (
                <iframe
                  width="100%"
                  height="400"
                  src={`https://www.youtube.com/embed/${extractYouTubeId(modalVideo.url)}`}
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
    </div>
    
  );
};

export default InfoSection;
