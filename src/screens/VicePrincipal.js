import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import api from "../constants/api";
import "swiper/css";
import "../assets/css/modal.css"
import "swiper/css/navigation";
import "../assets/css/event.css";


const VicePrincipal = () => {

const [vicePrincipal, setVicePrincipal] = useState([]);
const [vicePrincipalDetails, setVicePrincipalDetails] = useState([]);

useEffect(() => {
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
                            src={`https://ecas.unitdtechnologies.com/storages/${vicePrincipal[0]?.file_name}`}
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
        
        </main>
    </>
 );
}

 export default VicePrincipal;