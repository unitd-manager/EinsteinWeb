import React, { useState, useEffect } from "react";
import api from "../constants/api";
import Web from "../assets/img/Faculty/EinsteinWebsite.jpg";
import Bachelor from "../assets/img/Academics/Bachelorofarts.jpg";
import { Link ,useParams} from "react-router-dom";

const CourseSection = () => {

  const [UgProgram, setUgProgram] = useState([]);


  const { id } = useParams();

  useEffect(() => {
    api
      .post("/content/getUGProgramDetailsById", { content_id: id })
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
              <Link to="?Home">Home</Link>
              <span>Course Details</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div className="h6_cta-button">
                <Link to='/UgProgram' className="h6_cta-btn">
                  Back to List
                  <i className="fa-light fa-arrow-up-right" />
                </Link>
              </div>
  {/* breadcrumb area end */}
  {/* course details area start */}
  <section className="course_details-area pt-120 pb-60">
    <div className="container">
      <div className="course_details-img">
        <img src={`https://ecas.unitdtechnologies.com/storages/${UgProgram?.file_name}`} alt="" />
      </div>
      <div className="row">
        <div className="col-xl-8 col-lg-8">
          <div className="course_details-wrap mb-55">
            <div className="course_details-top mb-60">
              <h3 className="course_details-title">
              {UgProgram?.title}
              </h3>
              <div className="course_details-meta">
                <div className="course_details-meta-left">
                  <div className="course_details-author">
                    <div className="course_details-author-img">
                      <img src="assets/img/course/details/author.jpg" alt="" />
                    </div>
                    <div className="course_details-author-info">
                      <span>Teacher</span>
                      <h5>
                        <a>Dylan Meringue</a>
                      </h5>
                    </div>
                  </div>
                  <div className="course_details-category">
                    <span>Categories</span>
                    <h5>
                      <a >Regular Teaching</a>
                    </h5>
                  </div>
                  <div className="course_details-rating">
                    <span>Review</span>
                    <ul>
                      <li>
                        <i className="fa-solid fa-star" />
                      </li>
                      <li>
                        <i className="fa-solid fa-star" />
                      </li>
                      <li>
                        <i className="fa-solid fa-star" />
                      </li>
                      <li>
                        <i className="fa-solid fa-star" />
                      </li>
                      <li>
                        <i className="fa-solid fa-star" />
                      </li>
                    </ul>
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
                    className="nav-link active"
                    id="pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-home"
                    type="button"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                  >
                    <i className="fa-solid fa-bookmark" />
                    <span>Overview</span>
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                  >
                    <i className="fa-thin fa-box" />
                    <span>Curriculum</span>
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-contact-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-contact"
                    type="button"
                    role="tab"
                    aria-controls="pills-contact"
                    aria-selected="false"
                  >
                    <i className="fa-thin fa-user" />
                    <span>Instructor</span>
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-four-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-four"
                    type="button"
                    role="tab"
                    aria-controls="pills-four"
                    aria-selected="false"
                  >
                    <i className="fa-thin fa-message-dots" />
                    <span>Reviews</span>
                  </button>
                </li>
              </ul>
            </div>
            <div className="course_details-tab-content">
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                  tabIndex={0}
                >
                  <div className="course_details-content">
                    <h4 className="course_details-content-title mb-15">
                      Courses Description
                    </h4>
                    <p className="mb-25">
                      Curabitur tempus tincidunt tellus ac placerat. Nullam non
                      libero nisi. Fusce congue est eget nisl tristique ornare.
                      Vestibulum id massa felis. Nullam vehicula bibendum nulla
                      eu vulputate. Aenean fringilla tortor ut laoreet congue
                      magna, a viverra turpis consectetur porta.
                    </p>
                    <p className="mb-40">
                      Curabitur tempus tincidunt tellus ac placerat. Nullam non
                      libero nisi. Fusce congue est eget nisl tristique ornare.
                      Vestibulum id massa felis. Nullam vehicula bibendum nulla
                      eu vulputate. Aenean fringilla tortor ut laoreet congue
                      magna, a viverra turpis consectetur porta.
                    </p>
                    <h4 className="course_details-content-title mb-20">
                      What you will learn in this course
                    </h4>
                    <div className="course_details-content-list">
                      <ul>
                        <li>
                          Etyma protium et olio gravida cur abitur est dui
                          viverrid non mi egret
                        </li>
                        <li>
                          Dictum Bibendum sapiens internum malasada fames ac
                          ante ipsum primes
                        </li>
                        <li>
                          Fauci bus cur abitur pulvinar rut rum masa sed so
                          dales sapiens utricles
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-profile"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab"
                  tabIndex={0}
                >
                  <div className="course_details-curriculum">
                    <h4 className="course_details-content-title mb-15">
                      Course Curriculum
                    </h4>
                    <p className="mb-25">
                      Curabitur tempus tincidunt tellus ac placerat. Nullam non
                      libero nisi. Fusce congue est eget nisl tristique ornare.
                      Vestibulum id massa felis. Nullam vehicula bibendum nulla
                      eu vulputate. Aenean fringilla tortor ut laoreet congue
                      magna, a viverra turpis consectetur porta.
                    </p>
                    <div className="accordion" id="Expp">
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            Greetings and introduction
                          </button>
                        </h2>
                        <div
                          id="collapseOne"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingOne"
                          data-bs-parent="#Expp"
                        >
                          <div className="accordion-body">
                            <ul>
                              <li>
                                <a href="#">
                                  <i className="fa-brands fa-youtube" />
                                  Getting Started{" "}
                                </a>
                                <span>
                                  04:00
                                  <i className="fa-light fa-lock-keyhole" />
                                </span>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa-brands fa-youtube" />
                                  WP Theme Development
                                </a>
                                <span>
                                  04:00
                                  <i className="fa-light fa-lock-keyhole" />
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            Lesson 1
                          </button>
                        </h2>
                        <div
                          id="collapseThree"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#Expp"
                        >
                          <div className="accordion-body">
                            <ul>
                              <li>
                                <a href="#">
                                  <i className="fa-brands fa-youtube" />
                                  Getting Started{" "}
                                </a>
                                <span>
                                  04:00
                                  <i className="fa-light fa-lock-keyhole" />
                                </span>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa-brands fa-youtube" />
                                  WP Theme Development
                                </a>
                                <span>
                                  04:00
                                  <i className="fa-light fa-lock-keyhole" />
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFour">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFour"
                            aria-expanded="false"
                            aria-controls="collapseFour"
                          >
                            Lesson 2
                          </button>
                        </h2>
                        <div
                          id="collapseFour"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingFour"
                          data-bs-parent="#Expp"
                        >
                          <div className="accordion-body">
                            <ul>
                              <li>
                                <a href="#">
                                  <i className="fa-brands fa-youtube" />
                                  Getting Started{" "}
                                </a>
                                <span>
                                  04:00
                                  <i className="fa-light fa-lock-keyhole" />
                                </span>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa-brands fa-youtube" />
                                  WP Theme Development
                                </a>
                                <span>
                                  04:00
                                  <i className="fa-light fa-lock-keyhole" />
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFive">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFive"
                            aria-expanded="false"
                            aria-controls="collapseFive"
                          >
                            Lesson 3
                          </button>
                        </h2>
                        <div
                          id="collapseFive"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingFive"
                          data-bs-parent="#Expp"
                        >
                          <div className="accordion-body">
                            <ul>
                              <li>
                                <a href="#">
                                  <i className="fa-brands fa-youtube" />
                                  Getting Started{" "}
                                </a>
                                <span>
                                  04:00
                                  <i className="fa-light fa-lock-keyhole" />
                                </span>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa-brands fa-youtube" />
                                  WP Theme Development
                                </a>
                                <span>
                                  04:00
                                  <i className="fa-light fa-lock-keyhole" />
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingSix">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseSix"
                            aria-expanded="false"
                            aria-controls="collapseSix"
                          >
                            Lesson 4
                          </button>
                        </h2>
                        <div
                          id="collapseSix"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingSix"
                          data-bs-parent="#Expp"
                        >
                          <div className="accordion-body">
                            <ul>
                              <li>
                                <a href="#">
                                  <i className="fa-brands fa-youtube" />
                                  Getting Started{" "}
                                </a>
                                <span>
                                  04:00
                                  <i className="fa-light fa-lock-keyhole" />
                                </span>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa-brands fa-youtube" />
                                  WP Theme Development
                                </a>
                                <span>
                                  04:00
                                  <i className="fa-light fa-lock-keyhole" />
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-contact"
                  role="tabpanel"
                  aria-labelledby="pills-contact-tab"
                  tabIndex={0}
                >
                  <div className="course_details-instructor">
                    <div className="course_details-thumbnail w_img">
                      <img src="assets/img/teacher/2/1.jpg" alt="team images" />
                    </div>
                    <div className="course_details-author-content">
                      <h6 className="course_details-author-title">
                        Jane Seymour
                      </h6>
                      <span className="course_details-author-subtitle">
                        Founder &amp; CEO
                      </span>
                      <p>
                        Consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt labore et dolore magna aliqua enim minim
                        veniam quis nostrud exercitation ulla mco laboris nisi
                        ut aliquip ex ea commodo consequat. duis aute irure
                        dolor in reprehenderit in voluptate.
                      </p>
                      <div className="contact-social">
                        <span>Social Media</span>
                        <ul>
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-facebook-f" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-linkedin-in" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-behance" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-four"
                  role="tabpanel"
                  aria-labelledby="pills-four-tab"
                  tabIndex={0}
                >
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
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4">
          <div className="course_details-sidebar mb-60">
            <div className="course_details-price">
              <del>$36.00</del>
              <h2>$28.00</h2>
            </div>
            <div className="course_details-list">
              <ul>
                <li>
                  <span>
                    <i className="fa-thin fa-clock" />
                    Duration
                  </span>
                  <span>15 Weeks</span>
                </li>
                <li>
                  <span>
                    <i className="fa-thin fa-user-group" />
                    Students
                  </span>
                  <span>354</span>
                </li>
                <li>
                  <span>
                    <i className="fa-thin fa-file-lines" />
                    Lessons
                  </span>
                  <span>42</span>
                </li>
                <li>
                  <span>
                    <i className="fa-thin fa-chart-line-up" />
                    Skill Level
                  </span>
                  <span>Beginner</span>
                </li>
                <li>
                  <span>
                    <i className="fa-thin fa-language" />
                    Language
                  </span>
                  <span>English</span>
                </li>
                <li>
                  <span>
                    <i className="fa-thin fa-user" />
                    Instructor
                  </span>
                  <span>Dylan Meringue</span>
                </li>
                <li>
                  <span>
                    <i className="fa-thin fa-percent" />
                    Pass Percentage
                  </span>
                  <span>84%</span>
                </li>
                <li>
                  <span>
                    <i className="fa-thin fa-calendar-days" />
                    Deadline
                  </span>
                  <span>24 March 2023</span>
                </li>
              </ul>
              <div className="course_details-sidebar-btn">
                <a href="#" className="course-btn theme-btn theme-btn-big">
                  Purchase Now
                </a>
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
};

export default CourseSection;
