import React, { useState, useEffect } from "react";
import api from "../constants/api";
import Web from "../assets/img/Faculty/EinsteinWebsite.jpg";
import Bachelor from "../assets/img/Academics/Bachelorofarts.jpg";
import { Link, useParams } from "react-router-dom";

const CourseSection = () => {
  const [UgProgram, setUgProgram] = useState([]);
  const [activeTab, setActiveTab] = useState("overview");
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    api
      .post("/teachers/getCourseByIdMedia", { course_id: id })
      .then((res) => {
        setUgProgram(res.data.data[0]);
      })
      .catch((err) => {
        console.error("Error fetching student details:", err);
      });
  }, []);

  return (
    <>
      <main>
        {/* breadcrumb area start */}
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
                  <h2 className="breadcrumb-title">
                    Introduction to Course Details
                  </h2>
                  <div className="breadcrumb-list">
                    <Link to="/Home">Home</Link>
                    <span>Course Details</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="h6_cta-button">
          <Link to="/UgProgram" className="h6_cta-btn">
            Back to List
            <i className="fa-light fa-arrow-up-right" />
          </Link>
        </div>
        {/* breadcrumb area end */}
        {/* course details area start */}
        <section className="course_details-area pt-120 pb-60">
          <div className="container">
            <div className="course_details-img">
              <img
                src={`https://ecas.unitdtechnologies.com/storages/${UgProgram?.file_name}`}
                alt=""
              />
            </div>
            <div className="row">
              <div className="col-xl-8 col-lg-8">
                <div className="course_details-wrap mb-55">
                  <div className="course_details-top mb-60">
                    <h3 className="course_details-title">
                      {UgProgram?.course_name}
                    </h3>
                    <div className="course_details-meta">
                      <div className="course_details-meta-left">
                        <div className="course_details-category">
                          <span>Approving Body</span>
                          <h5>
                            <a>{UgProgram?.approving_body}</a>
                          </h5>
                        </div>
                        <div className="course_details-rating">
                          <span>Approving University</span>
                          <h5>
                            <a>{UgProgram?.approving_university}</a>
                          </h5>
                        </div>
                      </div>
                      {/* <div className="course_details-meta-right">
                  <a href="#" className="theme-btn theme-btn-medium">
                    Free
                  </a>
                </div> */}
                    </div>
                  </div>
                  <div className="course_details-tab-button">
                    <ul className="nav nav-pills" id="pills-tab" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button
                          className={`nav-link ${
                            activeTab === "overview" ? "active" : ""
                          }`}
                          onClick={() => setActiveTab("overview")}
                          type="button"
                          role="tab"
                        >
                          <i className="fa-solid fa-bookmark"></i>
                          <span>Overview</span>
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className={`nav-link ${
                            activeTab === "AttendanceDetails" ? "active" : ""
                          }`}
                          onClick={() => setActiveTab("AttendanceDetails")}
                          type="button"
                          role="tab"
                        >
                          <i className="fa-thin fa-box"></i>
                          <span>Curriculum</span>
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className={`nav-link ${
                            activeTab === "bestmonth" ? "active" : ""
                          }`}
                          onClick={() => setActiveTab("bestmonth")}
                          type="button"
                          role="tab"
                        >
                          <i className="fa-thin fa-user"></i>
                          <span>Career Opportunities</span>
                        </button>
                      </li>
                      {/* <li className="nav-item" role="presentation">
                      <button
                        className={`nav-link ${activeTab === "reviews" ? "active" : ""}`}
                        onClick={() => setActiveTab("reviews")}
                        type="button"
                        role="tab"
                      >
                        <i className="fa-thin fa-message-dots"></i>
                        <span>Placement & Industry</span>
                      </button>
                    </li> */}
                    </ul>
                  </div>

                  {/* Tab content */}
                  <div className="course_details-tab-content">
                    <div className="tab-content">
                      {activeTab === "overview" && (
                        <div className="tab-pane fade show active">
                          <div className="course_details-content">
                            <h4 className="course_details-content-title mb-15">
                              Courses Description
                            </h4>
                            <p
                              className="mb-25"
                              dangerouslySetInnerHTML={{
                                __html: UgProgram?.description,
                              }}
                            ></p>
                          </div>
                        </div>
                      )}
                      {activeTab === "AttendanceDetails" && (
                        <div className="tab-pane fade show active">
                          <div className="course_details-curriculum">
                            <h4 className="course_details-content-title mb-15">
                              Course Curriculum
                            </h4>
                            <p
                              className="mb-25"
                              dangerouslySetInnerHTML={{
                                __html: UgProgram?.Curriculum_description,
                              }}
                            ></p>
                          </div>
                        </div>
                      )}
                      {activeTab === "bestmonth" && (
                        <div className="tab-pane fade show active">
                          <div className="course_details-curriculum">
                            <h4 className="course_details-content-title mb-15">
                              Career Opportunities
                            </h4>
                            <p
                              className="mb-25"
                              dangerouslySetInnerHTML={{
                                __html: UgProgram?.Career_description,
                              }}
                            ></p>
                          </div>
                        </div>
                      )}
                      {/* {activeTab === "reviews" && (
                      <div className="tab-pane fade show active">
                           <div className="course_details-review">
                    <h4 className="course_details-review-title">
                      Student Ratings &amp; Reviews
                    </h4>
                    <div className="course_details-review-wrap">
                      <div className="row d-flex align-items-center">
                        <div className="col-md-4 col-sm-4">
                          <div className="course_details-review-left">
                            <h5>5.0</h5>
                            <ul>
                              <li>
                                <a href="#">
                                  <i className="fa-solid fa-star" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa-solid fa-star" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa-solid fa-star" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa-solid fa-star" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa-solid fa-star" />
                                </a>
                              </li>
                            </ul>
                            <p>(4 Reviews)</p>
                          </div>
                        </div>
                        <div className="col-md-8 col-sm-8">
                          <div className="course_details-review-content">
                            <ul>
                              <li>
                                <span className="review-rating">
                                  5 <i className="fa-solid fa-star" />
                                </span>
                                <span className="review-progress-bar" />
                                <span className="review-rating-count">1</span>
                              </li>
                              <li>
                                <span className="review-rating">
                                  4 <i className="fa-solid fa-star" />
                                </span>
                                <span className="review-progress-bar" />
                                <span className="review-rating-count">3</span>
                              </li>
                              <li>
                                <span className="review-rating">
                                  5 <i className="fa-solid fa-star" />
                                </span>
                                <span className="review-progress-bar" />
                                <span className="review-rating-count">0</span>
                              </li>
                              <li>
                                <span className="review-rating">
                                  5 <i className="fa-solid fa-star" />
                                </span>
                                <span className="review-progress-bar" />
                                <span className="review-rating-count">0</span>
                              </li>
                              <li>
                                <span className="review-rating">
                                  5 <i className="fa-solid fa-star" />
                                </span>
                                <span className="review-progress-bar" />
                                <span className="review-rating-count">0</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                      </div>
                    )} */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4">
                <div className="course_details-sidebar mb-60">
                  {/* <div className="course_details-price">
              <del>$36.00</del>
              <h2>$28.00</h2>
            </div> */}
                  <div className="course_details-list">
                    <ul>
                      <li>
                        <span>
                          <i className="fa-thin fa-clock" />
                          Duration
                        </span>
                        <span>{UgProgram?.course_duration}</span>
                      </li>
                      <li>
                        <span>
                          <i className="fa fa-users" />
                          Annual Intake
                        </span>

                        <span>{UgProgram?.annual_intake}</span>
                      </li>
                      <li>
                        <span>
                          <i className="fa fa-book" />
                          Course Type
                        </span>

                        <span>{UgProgram?.course_type}</span>
                      </li>
                      <li>
                        <span>
                          <i className="fa fa-chart-line" />
                          Discipline Group
                        </span>

                        <span>{UgProgram?.discipline_group}</span>
                      </li>
                      <li>
                        <span>
                          <i className="fa fa-trophy" />
                          Level
                        </span>

                        <span>{UgProgram?.level}</span>
                      </li>
                      <li>
                        <span>
                          <i className="fa fa-sun" />
                          Mode
                        </span>

                        <span>{UgProgram?.mode}</span>
                      </li>
                      <li>
                        <span>
                          <i className="fa fa-pencil-alt" />
                          Exam Type
                        </span>

                        <span>{UgProgram?.exam_type}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default CourseSection;
