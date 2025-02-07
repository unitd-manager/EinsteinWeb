import React, { useState, useEffect } from "react";
import api from "../constants/api";
import Web from "../assets/img/Academics/EinsteinWeb.jpg";
import Bachelor from "../assets/img/Academics/Bachelorofarts.jpg";
import { Link } from "react-router-dom";

const CourseSection = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [UgProgram, setUgProgram] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    api
      .get("/content/getUGDepartmentscourseHomePanels") // Replace with actual API
      .then((res) => {
        setUgProgram(res.data.data); // Assuming API returns a list of images with categories
      })
      .catch((err) => console.error("Error fetching gallery data", err));
  }, []);

  useEffect(() => {
    api
      .get("/content/getCategoryUg") // Replace with actual API
      .then((res) => {
        setCategory(res.data.data); // Assuming API returns a list of images with categories
      })
      .catch((err) => console.error("Error fetching gallery data", err));
  }, []);

  console.log("category", category);

  const filteredGallery = UgProgram.filter((item) =>
    activeTab === "all" ? true : item.department === activeTab
  );
console.log('filteredGallery',filteredGallery)
  return (
    <>
      <section
        className="breadcrumb-area bg-default"
        style={{
          backgroundImage: `url(${Web})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb-content">
                <div
                  style={{
                    background: "rgba(0, 0, 0, 0.6)",
                    padding: "20px",
                    borderRadius: "8px",
                    color: "#fff",
                    maxWidth: "600px",
                    margin: "0 auto",
                    textAlign: "center",
                  }}
                >
                  <h2
                    className="breadcrumb-title"
                    style={{
                      fontSize: "2.8rem",
                      marginBottom: "15px",
                      background: "linear-gradient(90deg, #fff, #fff)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "white",
                      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
                    }}
                  >
                    UG Programmes
                  </h2>
                  <p
                    style={{
                      fontSize: "1.2rem",
                      lineHeight: "1.6",
                      color: "#fff",
                    }}
                  >
                    Spend your next few years studying at a center of intensive
                    scholarship and taking advantage of our multidimensional
                    academic experience.
                  </p>
                  <div className="breadcrumb-list">
              <Link to="Home"style={{color:"white"}}>Home</Link>
              <span>UG Programmes</span>
            </div>
                </div>
                {/* <div className="breadcrumb-list" style={{ marginTop: "15px" }}>
                  <Link
                    href="?Home"
                    style={{
                      color: "#fff",
                      textDecoration: "none",
                      fontWeight: "bold",
                      fontSize:'25px'
                    }}
                  >
                    Home
                  </Link>
                  <span
                    style={{
                      color: "#fff",
                      marginLeft: "5px",
                      fontWeight: "500",
                      fontSize:'25px'
                    }}
                  >
                    &gt; UG Programmes
                  </span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="breadcrumb-area bg-default"
        style={{ backgroundColor: "#003366" }}
      >
        {/* <img
          src="assets/img/breadcrumb/shape-1.png"
          alt="Breadcrumb Shape"
          className="breadcrumb-shape"
        /> */}
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb-content">
                <h2
                  className="breadcrumb-title"
                  style={{
                    color: "#FFD700" /* Golden Yellow */,
                    fontWeight: "bold",
                    textAlign: "center",
                    textShadow:
                      "2px 2px 4px rgba(0, 0, 0, 0.5)" /* Subtle shadow for depth */,
                  }}
                >
                  8+ Undergraduate Courses
                </h2>
              </div>
              <p
                className="breadcrumb-description"
                style={{
                  color: "#FFFFFF" /* Crisp white for contrast */,
                  fontSize: "16px",
                  lineHeight: "1.8",
                  padding: "10px 15px",
                  backgroundColor:
                    "rgba(255, 255, 255, 0.1)" /* Transparent white overlay */,
                  borderRadius: "8px",
                }}
              >
                At Einstein College Of Arts & Science, We have expert trainers
                to assist with the education of our students. Every trainer of
                ours is an expert in the particular field and can guide students
                with any sort of queries. At present, the college offers 8
                undergraduate programmes – B.Sc. Computer Science, Mathematics,
                Physics, Chemistry, B.A. English, B.B.A, B.Com, and B.Com
                (Corporate Secretariat-ship).
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="innerPage_course-area pt-50 pb-90">
        <div className="container">
          <section className="h3_course-area pt-135 pb-110">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="section-area-3 text-center mb-40">
                    <span className="section-subtitle">
                      Top Popular Courses
                    </span>
                    <h2 className="section-title mb-0">
                      Explore Featured Courses
                    </h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-12">
                  <div className="h3_course-tab mb-40">
                    <ul className="nav nav-pills">
                      {category.map((tab) => (
                        <li key={tab.course_id} className="nav-item">
                          <button
                            className={`nav-link ${
                              activeTab === tab.department ? "active" : ""
                            }`}
                            onClick={() => setActiveTab(tab.department)}
                          >
                            {tab.department}
                          </button>
                        </li>
                      ))}
                      <li>
                        <Link
                          className={`nav-link ${
                            activeTab === "all" ? "active" : ""
                          }`}
                          onClick={() => setActiveTab("all")}
                        >
                          See All
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="h3_course-wrap">
                <div className="row">
                  {filteredGallery.map((item, index) => (
                    <div key={index} className="col-xl-4 col-lg-6 col-md-6">
                      <div className="h2_course-item mb-30">
                        <div className="h2_course-item-img">
                          <Link to={`/UGProgramDetails/${item?.course_id}`}>
                            <img src={`https://ecas.unitdtechnologies.com/storages/${item?.file_name}`} alt="Course Thumbnail"
                             style={{
                              width: "100%", // Make it responsive
                              height: "250px", // Fixed height for uniformity
                              objectFit: "cover", // Ensures images maintain aspect ratio
                              borderRadius: "10px" // Optional: for rounded corners
                            }}
                            />
                          </Link>
                        </div>
                        <div className="h2_course-content">
                          <div className="h2_course-content-top">
                            <div className="h2_course-rating">
                              <ul>
                                {[...Array(5)].map((_, i) => (
                                  <li key={i}>
                                    <i className="fa fa-star"></i>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="h2_course-save">
                              <Link to={`/UGProgramDetails/${item.course_id}`}>
                                <i className="fa fa-bookmark"></i>
                              </Link>
                            </div>
                          </div>
                          <h6 className="h2_course-content-title">
                            <Link to={`/UGProgramDetails/${item.course_id}`}>{item.course_name}</Link>
                          </h6>
                          <div className="h2_course-content-info">
                            <span>
                              <i className="fa fa-book"></i> Course Duration:
                            </span>
                            {item.course_duration}
                          </div>
                          <p className="h2_course-content-text">
                            Level:  {item.level}
                          </p>
                          <p>Mode:  {item.mode}</p>
                        </div>
                        <div className="h2_course-content-bottom">
                          <div className="h2_course-bottom-btn">
                            <Link to={`/UGProgramDetails/${item.course_id}`}>
                              More Details <i className="fa fa-arrow-right"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* You can add more course listings for other tabs here */}
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default CourseSection;
