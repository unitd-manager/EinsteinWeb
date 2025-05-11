import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../assets/css/VerticalMarquees.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import api from "../constants/api";

const InfoSection = () => {
  const [quote, setQuote] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [poleStar, setPoleStar] = useState([]);
  const [rank, SetRank] = useState([]);

  useEffect(() => {
    api.get("/content/getPoleStar")
      .then((res) => {
        const data = res.data.data;
        setPoleStar(data);
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

      {/* Placement Companies Slider */}
      {/* <div className="cards quote-cards">
      <div className="cards-headers">University Ranks</div>
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
              breakpoints={{
                320: { slidesPerView: 1 },
                768: { slidesPerView: 1 },
                1024: { slidesPerView: 1 },
                1200: { slidesPerView: 1 },
              }}
            >
              {rank.map((company, i) => (
                <SwiperSlide key={i}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <img
                      src={`https://ecasadmin.unitdtechnologies.com/storages/${company.file_name}`}
                      alt={company.title}
                      style={{
                        width: "240px",
                        height: "200px",
                        objectFit: "cover",
                        borderRadius: "8px",
                      }}
                    />
                    <div style={{
                      textAlign: "center",
                
                      color: "#fff",
                      fontWeight: "bold",
                      fontSize:13
                    }}>
                      {company.title}
                    </div>
                    <div style={{
                      textAlign: "center",
                      color: "#fff",
                      fontSize:12
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
     
      </div> */}
   
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
       
      {/* <div className="cards quote-cards">
      <div className="cards-headers">Pole Star</div>
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
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 1 },
            1200: { slidesPerView: 1 },
          }}
        >
          {poleStar.map((company, i) => (
            <SwiperSlide key={i}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <img
                  src={`https://ecasadmin.unitdtechnologies.com/storages/${company.file_name}`}
                  alt={company.title}
                  style={{
                    width: "240px",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
               <div style={{
                      textAlign: "center",
                
                      color: "#fff",
                      fontWeight: "bold",
                      fontSize:13
                    }}>
                      {company.title}
                    </div>
                    <div style={{
                      textAlign: "center",
                      color: "#fff",
                      fontSize:12
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
 
  </div> */}


    {/* Quote Section */}
  
      <div className="cards quote-cards university-ranks-card">
  <div className="cards-headers1"> <Link
    to="/Calender"
    
      rel="noopener noreferrer"
      className="blink-gradient"
    >
     <u>Click here to Acadamic Calendar</u>
    </Link></div>
  {/* <div className="custom-calendar-wrapper">
    <div className="calendar-header">
      
      <span>May 2025</span>
    
    </div>
    <div className="calendar-grid">
      {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
        <div key={day} className="day-name">{day}</div>
      ))}
      {[...Array(31)].map((_, i) => (
        <div
          key={i}
          className={`date-cell ${i + 1 === new Date().getDate() ? 'today' : ''}`}
        >
          {i + 1}
        </div>
      ))}
    </div>
  </div> */}
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

    </div>
    
  );
};

export default InfoSection;
