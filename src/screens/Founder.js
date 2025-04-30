import React, { useEffect, useState, useRef } from "react";
import api from "../constants/api";
import "swiper/css";
import "../assets/css/modal.css"
import "swiper/css/navigation";
import "../assets/css/event.css";


const Founder = () => {

const [ourFounder, setourFounderHome] = useState([]);

 
useEffect(() => {
          api
                .get("/content/getTributeFounderHomePanel")
                .then((res) => {
                  setourFounderHome(res.data.data);
                })
                .catch((err) => {
                  console.error("Error fetching magazine data", err);
                });
  }, []);

return (
    <>  
      <main>
        {/* banner area start */}
        <section className="h6_about-area pt-50 pb-80 fix">
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
                  />
                  {/* <div className="h6_about-img-content">
                    <h2>2010</h2>
                    <span>Since Einstein</span>
                  </div> */}
                </div>
              </div>
              <div className="col-xl-6 col-lg-6" style={{ marginTop: 50 }}>
                <div className="h6_about-content ml-30 mb-30 mb-md-0 pb-30">
                  {/* <h3 className="h6_about-content-title">
                    Tribute to Our Founder
                  </h3> */}
                  <p dangerouslySetInnerHTML={{ __html: ourFounder[0]?.description }}>
                  </p>
                  {/* <a
                    href="#"
                    className="h6_about-btn theme-btn theme-btn-medium theme-btn-6"
                  >
                    Learn More
                    <i className="fa-light fa-arrow-up-right" />
                  </a> */}
                </div>
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
        </section>
        
        </main>
    </>
 );
};  


 export default Founder;