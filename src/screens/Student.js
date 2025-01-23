import React, { useState } from "react";
import AttendanceStats from "./AttendanceStats"; // Import the new component
import AttendanceTable from "./AttendanceTable"; // Import the new component
import BestMonthAttendance from "./BestMonthAttendance"; // Import the new component
import AttendanceAdvice from "./AttendanceAdvice"; // Import the new component
// import Topper1 from "../assets/img/course/3/topper2.jpg";

const Aboutus = () => {
  // State to control active tab
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div>
      <section className="course_details-area pt-120 pb-60">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="course_details-wrap mb-55">
                <div className="course_details-top mb-60">
                  <h3 className="course_details-title">
                    Attendance Details of the Student
                  </h3>
                  <div className="course_details-meta">
                    <div className="course_details-meta-left">
                      <div className="course_details-author">
                        <div className="course_details-author-img">
                          <img
                            // src={Topper1}
                            alt="Top performer"
                            className="round-image"
                          />
                        </div>
                        <div
                          className="course_details-author-info"
                          style={{
                            paddingRight: "180px",
                            paddingLeft: "180px",
                           
                          }}
                        >
                          <span style={{fontSize:"20px"}}>Student Name</span>
                          <h5 style={{fontSize:"18px"}}>
                            <a href="team.html">Ramesh</a>
                          </h5>
                        </div>
                      </div>
                      <div
                        className="course_details-author-info"
                        style={{ paddingRight: "180px" }}
                      >
                        <span style={{fontSize:"20px"}}>Year/Dept</span>
                        <h5 style={{fontSize:"18px"}}>
                          <a href="team.html">II-ECE</a>
                        </h5>
                      </div>
                      <div
                        className="course_details-author-info"
                        style={{ paddingRight: "180px" }}
                      >
                        <span style={{fontSize:"20px"}}>StudentId</span>
                        <h5 style={{fontSize:"18px"}}>
                          <a href="team.html">964123</a>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tab buttons */}
                <div className="course_details-tab-button">
                  <ul className="nav nav-pills" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className={`nav-link ${
                          activeTab === "overview" ? "active" : ""
                        }`}
                        id="pills-home-tab"
                        onClick={() => setActiveTab("overview")} // Set tab state to overview
                        type="button"
                        role="tab"
                      >
                        <i className="fa-solid fa-bookmark"></i>
                        <span>Overall Attendance</span>
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className={`nav-link ${
                          activeTab === "AttendanceDetails" ? "active" : ""
                        }`}
                        id="pills-profile-tab"
                        onClick={() => setActiveTab("AttendanceDetails")} // Set tab state to AttendanceDetails
                        type="button"
                        role="tab"
                      >
                        <i className="fa-thin fa-box"></i>
                        <span>Attendance Details</span>
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className={`nav-link ${
                          activeTab === "bestmonth" ? "active" : ""
                        }`}
                        id="pills-contact-tab"
                        onClick={() => setActiveTab("bestmonth")} // Set tab state to bestmonth
                        type="button"
                        role="tab"
                      >
                        <i className="fa-thin fa-user"></i>
                        <span>Best Months</span>
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className={`nav-link ${
                          activeTab === "reviews" ? "active" : ""
                        }`}
                        id="pills-four-tab"
                        onClick={() => setActiveTab("reviews")} // Set tab state to reviews
                        type="button"
                        role="tab"
                      >
                        <i className="fa-thin fa-message-dots"></i>
                        <span>Reviews</span>
                      </button>
                    </li>
                  </ul>
                </div>

                {/* Tab content */}
                <div className="course_details-tab-content">
                  <div className="tab-content" id="pills-tabContent">
                    {/* Overview Tab */}
                    {activeTab === "overview" && (
                      <div
                        className="tab-pane fade show active"
                        id="pills-home"
                        role="tabpanel"
                        aria-labelledby="pills-home-tab"
                        tabIndex="0"
                      >
                        <div className="course_details-content">
                          <h4 className="course_details-content-title mb-15">
                            Overall Summary
                          </h4>

                          <AttendanceStats />
                        </div>
                      </div>
                    )}

                    {/* Other Tabs */}
                    {activeTab === "AttendanceDetails" && (
                      <div
                        className="tab-pane fade show active"
                        id="pills-profile"
                        role="tabpanel"
                        aria-labelledby="pills-profile-tab"
                        tabIndex="0"
                      >
                        <div className="course_details-content">
                          <h4 className="course_details-content-title mb-15">
                            Attendance Detail
                          </h4>
                          <AttendanceTable />
                        </div>
                      </div>
                    )}

                    {activeTab === "bestmonth" && (
                      <div
                        className="tab-pane fade show active"
                        id="pills-contact"
                        role="tabpanel"
                        aria-labelledby="pills-contact-tab"
                        tabIndex="0"
                      >
                        <div className="course_details-content">
                          <h4 className="course_details-content-title mb-15">
                            Best Month
                          </h4>
                          <BestMonthAttendance />
                        </div>
                      </div>
                    )}

                    {activeTab === "reviews" && (
                      <div
                        className="tab-pane fade show active"
                        id="pills-reviews"
                        role="tabpanel"
                        aria-labelledby="pills-reviews-tab"
                        tabIndex="0"
                      >
                        <div className="course_details-content">
                          <h4 className="course_details-content-title mb-15">
                            Advice
                          </h4>
                          <AttendanceAdvice />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aboutus;
