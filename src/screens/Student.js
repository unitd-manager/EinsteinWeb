import React, { useState, useEffect } from "react";
import AttendanceStats from "./AttendanceStats";
import AttendanceTable from "./AttendanceTable";
import BestMonthAttendance from "./BestMonthAttendance";
import AttendanceAdvice from "./AttendanceAdvice";
import api from "../constants/api";
import { getUser, getTeacherUser } from "../../src/auth/user";
import moment from "moment";
import "../assets/css/searchfilter.css";

const Aboutus = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const user = getUser();
  const teacherUser = getTeacherUser();

  const [studentDetails, setStudentEdit] = useState({});
  const [students, setStudents] = useState([]);
  const [regNo, setRegNo] = useState('');

  // Handler for search input change
  const handleSearchChange = (event) => {
    setRegNo(event.target.value);
  };

  // Function to filter students based on registration number input
  const applyFilters = () => {
    if (!regNo.trim()) return students; // If no input, return all students
    return students.filter((item) =>
      item.ref_no?.toLowerCase().includes(regNo.toLowerCase())
    );
  };

  const filteredRefNo = applyFilters();
  const studentId = filteredRefNo.length > 0 ? filteredRefNo[0].student_id : null;

  // Fetch list of students
  const getStudent = () => {
    api
      .get("/student/getStudentRegNo")
      .then((res) => {
        setStudents(res.data.data || []);
      })
      .catch((err) => {
        console.error("Error fetching students:", err);
      });
  };

  // Fetch student details by ID
  const getStudentById = (id) => {
    if (!id) return;

    const requestData = teacherUser
      ? { student_id: id }
      : { student_id: user?.student_id };

    api
      .post("/student/getStudentMediaById", requestData)
      .then((res) => {
        if (res.data && res.data.data) {
          setStudentEdit(res.data.data[0] || {});
        } else {
          setStudentEdit({});
        }
      })
      .catch((err) => {
        console.error("Error fetching student details:", err);
        setStudentEdit({});
      });
  };

  useEffect(() => {
    getStudent();
  }, []);

  useEffect(() => {
    if (studentId) {
      getStudentById(studentId);
    }
  }, [studentId]);

  return (
    <div>
      <section className="course_details-area pt-120 pb-60">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="course_details-wrap mb-55">

              {teacherUser &&
                <div className="student-search-container">
                  <form 
                    action="#" 
                    className="student-search-form" 
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <input
                      type="text"
                      placeholder="Enter Register Number"
                      className="student-search-input"
                      value={regNo}
                      onChange={handleSearchChange}
                    />
                    <button type="submit" className="student-search-btn">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.22222 13.4444C10.6587 13.4444 13.4444 10.6587 13.4444 7.22222C13.4444 3.78578 10.6587 1 7.22222 1C3.78578 1 1 3.78578 1 7.22222C1 10.6587 3.78578 13.4444 7.22222 13.4444Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M14.9995 15L11.6162 11.6167"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </form>
                </div>
              }
                <section className="h3_about-area pt-140 pb-90">
                  <div className="container">
                    <div className="row align-items-center">
                      <div className="col-xl-6 col-lg-6">
                        <div className="h3_about-img mb-50">
                          <div className="h3_about-inner-img w_img mr-50">
                            {studentDetails?.file_name ? (
                              <img
                                src={`https://ecas.unitdtechnologies.com/storage/uploads/${studentDetails.file_name}`}
                                alt="Student"
                              />
                            ) : (
                              <p>No image available</p>
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
                                  Date of Birth: 
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
                        <span>Progress Report</span>
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

                          <AttendanceStats studentDetails={studentDetails} />
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
                          <AttendanceTable studentDetails={studentDetails} />
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
                          <AttendanceAdvice  studentDetails={studentDetails}/>
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
