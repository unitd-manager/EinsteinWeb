import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import api from "../constants/api";
import "swiper/css";
import "../assets/css/modal.css"
import "swiper/css/navigation";
import "../assets/css/event.css";
import line from "../assets/img/line.png";


const ManagingTrustee = () => {

const [OurManagement, setOurManagement] = useState([]);
const [selectedItem, setSelectedItem] = useState(null);
const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };
useEffect(() => {
    api
          .get("/content/getAboutOurManagement")
          .then((res) => {
            setOurManagement(res.data.data);
          })
          .catch((err) => {
            console.error("Error fetching magazine data", err);
          });
  }, []);

return (
    <>  
      <main>
        {/* banner area start */}
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
                                src={`https://ecas.unitdtechnologies.com/storages/${item?.file_name}`}
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
                        src={`https://ecas.unitdtechnologies.com/storages/${selectedItem?.file_name}`}
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
  


 export default ManagingTrustee;