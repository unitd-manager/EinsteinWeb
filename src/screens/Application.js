import React, { useState, useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";
import api from "../constants/api";
import { getUser } from "../../src/auth/user";

const SignUp = () => {
  const user = getUser();
  const navigate = useNavigate();

  console.log("user", user);

  const [studentEdit, setStudentEdit] = useState({});
  const [loading, setLoading] = useState(false);

  const getStudentById = () => {

    if (!user) {
      setTimeout(() => {
        navigate('/Login');
      }, 0);
      console.log("mmsmsmsm")
      return;
    }
    api
      .post("/student/getStudentById", { student_id: user?.student_id })
      .then((res) => {
        setStudentEdit(res.data.data[0]);
      })
      .catch(() => {});
  };

  const handleInputs = (e) => {
    setStudentEdit({ ...studentEdit, [e.target.name]: e.target.value });
  };

  const editStudent = (e) => {
    e.preventDefault(); // Prevent the form from submitting the default way
    if (studentEdit.student_name !== "") {
      setLoading(true);
      api
        .post("/student/editStudent", studentEdit)
        .then(() => {
          alert("Record edited successfully", "success");
        })
        .catch(() => {
          alert("Unable to edit record.", "error");
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      alert("Please fill all required fields", "warning");
    }
  };

  useEffect(() => {
    getStudentById();
  }, []);

  return (
    <>
      <main>
        {/* breadcrumb area start */}
        <section>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="breadcrumb-content">
                  <h2 className="breadcrumb-title">Application</h2>
                  <div className="breadcrumb-list">
                    <Link to="/">Home</Link>
                    <span>Application Form</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* breadcrumb area end */}
        {/* Application area start */}
        <div className="account-area pt-120 pb-120">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-8 col-md-10">
                <div className="account-wrap">
                  <div className="account-top sign-up">
                    <div className="account-top-current">
                      <span>Application Form</span>
                    </div>
                    {/* <div className="account-top-link">
                  <Link to="/Login">Sign In</Link>
                </div> */}
                  </div>
                  <div className="account-main">
                    <h3 className="account-title">Apply Now 👋</h3>
                    <form onSubmit={editStudent} className="account-form">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="account-form-item mb-20">
                            <div className="account-form-label">
                              <label>Student Name</label>
                            </div>
                            <div className="account-form-input">
                              <input
                                type="text"
                                name="student_name"
                                placeholder="Student Name"
                                value={studentEdit?.student_name || ""}
                                onChange={handleInputs}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6">
                          
                          <div className="account-form-item mb-20">
                            <div className="account-form-label">
                              <label>Last Name</label>
                            </div>
                            <div className="account-form-input">
                              <input
                                type="text"
                                name="last_name"
                                placeholder="Last Name"
                                value={studentEdit?.last_name || ""}
                                onChange={handleInputs}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                      <div className="col-md-6">
                        <div className="account-form-item mb-20">
                          <div className="account-form-label">
                            <label>Your Email</label>
                          </div>
                          <div className="account-form-input">
                            <input
                              type="email"
                              name="email"
                              placeholder="Enter Your Email"
                              value={studentEdit?.email||""}
                              onChange={handleInputs}
                            />
                          </div>
                        </div>
                        </div>
                        <div className="col-md-6">
                        <div className="account-form-item mb-20">
                          <div className="account-form-label">
                            <label>Mobile Number</label>
                          </div>
                          <div className="account-form-input">
                            <input
                              type="text"
                              name="father_mobile_number"
                              placeholder="Enter Your Mobile Number"
                              value={studentEdit?.father_mobile_number}
                              onChange={handleInputs}
                            />
                          </div>
                        </div>
                      </div>
                      </div>
                      {/* <div className="account-form-condition">
                    <label className="condition_label">
                      Remember Me
                      <input type="checkbox" />
                      <span className="check_mark" />
                    </label>
                  </div> */}
                      <div className="account-form-button">
                        <button
                          type="submit"
                          className="account-btn"
                          disabled={loading}
                        >
                          {loading ? "Saving Application..." : "Save"}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <main>
        {/* <section className="contact-area pt-120 pb-120">
          <div className="container">
            <div className="contact-wrap">
              <div className="row">
                <div className="contact-content pr-80 mb-20">
                  <h3 className="contact-title mb-25">Send Me Message</h3>
                  <form action="#" className="contact-form">
                    <div className="row">
                      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-6">
                        <div className="contact-form-input mb-30">
                          <input type="text" placeholder="Your Name" />
                          <span className="inner-icon">
                            <i className="fa-thin fa-user" />
                          </span>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-6">
                        <div className="contact-form-input mb-30">
                          <input type="email" placeholder="Email Address" />
                          <span className="inner-icon">
                            <i className="fa-thin fa-envelope" />
                          </span>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-6">
                        <div className="contact-form-input mb-30">
                          <input type="text" placeholder="Your Number" />
                          <span className="inner-icon">
                            <i className="fa-thin fa-phone-volume" />
                          </span>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-6 ">
                        <div className="contact-form-input">
                          <span className="inner-icon inner-icon-select">
                            <i className="fa-thin fa-circle-exclamation" />
                          </span>
                          <select
                            name="select"
                            className="contact-form-list has-nice-select mb-30"
                          >
                            <option value={1}>Select Subject</option>
                            <option value={2}>Art &amp; Design</option>
                            <option value={3}>Graphic Design</option>
                            <option value={4}>Web Design</option>
                            <option value={5}>UX/UI Design</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="contact-form-input mb-50 contact-form-textarea">
                          <textarea
                            name="message"
                            cols={30}
                            rows={10}
                            placeholder="Feel free to get in touch!"
                            defaultValue={""}
                          />
                          <span className="inner-icon">
                            <i className="fa-thin fa-pen" />
                          </span>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="contact-form-submit mb-30">
                          <div className="contact-form-btn">
                            <a href="#" className="theme-btn contact-btn">
                              Send Message
                            </a>
                          </div>
                          <div className="contact-form-condition">
                            <label className="condition_label">
                              I agree that my data is collected and stored.
                              <input type="checkbox" />
                              <span className="check_mark" />
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </main>
    </>
  );
};

export default SignUp;
