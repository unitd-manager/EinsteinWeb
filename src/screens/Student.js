import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import AttendanceStats from "./AttendanceStats";
import AttendanceTable from "./AttendanceTable";
import BestMonthAttendance from "./BestMonthAttendance";
import AttendanceAdvice from "./AttendanceAdvice";
import api from "../constants/api";
import moment from "moment";
import { getUser } from "../../src/auth/user";
import "../assets/css/searchfilter.css";

const Aboutus = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const user = getUser();
  const id  = user?.student_id
  const [studentDetails, setStudentEdit] = useState({}); // Student details state
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch student details by ID
  const getStudentById = () => {
    setLoading(true); // Set loading to true when fetching data
    api
      .post("/student/getStudentMediaById", { student_id: id })
      .then((res) => {
        if (res.data && res.data.data) {
          setStudentEdit(res.data.data[0] || {});
        } else {
          setStudentEdit({});
        }
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((err) => {
        console.error("Error fetching student details:", err);
        setStudentEdit({});
        setLoading(false);
      });
  };

  // Fetch student details on component mount or when ID changes
  useEffect(() => {
    getStudentById();
  }, [id]);

  return (
    <div>
      <section className="course_details-area pt-120 pb-60">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="course_details-wrap mb-55">
                <section className="h3_about-area pt-140 pb-90">
                  <div className="container">
                    <div className="row align-items-center">
                      <div className="col-xl-6 col-lg-6">
                        <div className="h3_about-img mb-50">
                          <div className="h3_about-inner-img w_img mr-50">
                            {studentDetails?.file_name ? (
                              <img
                                src={`https://ecas.unitdtechnologies.com/storages/${studentDetails.file_name}`}
                                alt="Student"
                              />
                            ) : (
                              <img
                                src={"https://via.placeholder.com/150"}
                                alt="Student"
                              />
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-12">
                        <div className="h3_about-wrap mr-65 mb-50">
                          <div className="section-area-3 mb-35 small-section-area-3">
                            <span className="section-subtitle">Student Details</span>
                            <h2 className="section-title mb-25">
                              {studentDetails?.student_name || "No Name"}
                            </h2>
                            <p className="section-text">
                              {studentDetails?.course || "No Course"}
                            </p>
                          </div>
                          <div className="h3_about-content mb-35">
                            <div className="row">
                              <div className="col-sm-6">
                                <span>Gender: {studentDetails?.gender || "N/A"}</span>
                              </div>
                              <div className="col-sm-6">
                                <span>
                                  Year of Admission: {studentDetails?.year_of_admission || "N/A"}
                                </span>
                              </div>
                              <div className="col-sm-6">
                                <span>Student ID: {studentDetails?.ref_no || "N/A"}</span>
                              </div>
                              <div className="col-sm-6">
                                <span>
                                  Date of Birth:{" "}
                                  {studentDetails?.date_of_birth
                                    ? moment(studentDetails.date_of_birth).format("DD-MM-YYYY")
                                    : "N/A"}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Tab buttons */}
                <div className="course_details-tab-button">
                  <ul className="nav nav-pills" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className={`nav-link ${activeTab === "overview" ? "active" : ""}`}
                        onClick={() => setActiveTab("overview")}
                        type="button"
                        role="tab"
                      >
                        <i className="fa-solid fa-bookmark"></i>
                        <span>Overall Attendance</span>
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className={`nav-link ${activeTab === "AttendanceDetails" ? "active" : ""}`}
                        onClick={() => setActiveTab("AttendanceDetails")}
                        type="button"
                        role="tab"
                      >
                        <i className="fa-thin fa-box"></i>
                        <span>Attendance Details</span>
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className={`nav-link ${activeTab === "bestmonth" ? "active" : ""}`}
                        onClick={() => setActiveTab("bestmonth")}
                        type="button"
                        role="tab"
                      >
                        <i className="fa-thin fa-user"></i>
                        <span>Progress Report</span>
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className={`nav-link ${activeTab === "reviews" ? "active" : ""}`}
                        onClick={() => setActiveTab("reviews")}
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
                  <div className="tab-content">
                    {activeTab === "overview" && (
                      <div className="tab-pane fade show active">
                        <h4>Overall Summary</h4>
                        {!loading ? (
                          <AttendanceStats studentDetails={studentDetails} />
                        ) : (
                          <p>Loading...</p>
                        )}
                      </div>
                    )}
                    {activeTab === "AttendanceDetails" && (
                      <div className="tab-pane fade show active">
                        <h4>Attendance Details</h4>
                        {!loading ? (
                          <AttendanceTable studentDetails={studentDetails} />
                        ) : (
                          <p>Loading...</p>
                        )}
                      </div>
                    )}
                    {activeTab === "bestmonth" && (
                      <div className="tab-pane fade show active">
                        <h4>Best Month</h4>
                        <BestMonthAttendance />
                      </div>
                    )}
                    {activeTab === "reviews" && (
                      <div className="tab-pane fade show active">
                        <h4>Remark</h4>
                        <AttendanceAdvice studentDetails={studentDetails} />
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
