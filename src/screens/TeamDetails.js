import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../constants/api";
import Web from "../assets/img/Faculty/EinsteinWebsite.jpg";

const TeacherArea = () => {
  const [teacherDetails, setTeacherDetails] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    api
      .post("/teachers/getTeachersDetails", { teachers_id: id })
      .then((res) => {
        setTeacherDetails(res.data.data[0]);
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
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="breadcrumb-content">
                  <h2 className="breadcrumb-title">Our Professor</h2>
                  <div className="breadcrumb-list">
                    <Link to="/Home">Home</Link>
                    <span>Our Professor</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="h6_cta-button">
                <Link to='/Team' className="h6_cta-btn">
                  Back to List
                  <i className="fa-light fa-arrow-up-right" />
                </Link>
              </div>
        {/* breadcrumb area end */}
        {/* teacher details area start */}
        <section className="teacher_details-area pt-120 pb-60">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-5">
                <div className="teacher_details-img w_img mb-50">
                  <img
                    src={`https://ecas.unitdtechnologies.com/storages/${teacherDetails?.file_name}`}
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-8 col-md-7">
                <div className="teacher_details-content mb-50">
                  <div className="teacher_details-admin">
                    <h4 className="teacher_details-title">
                      {teacherDetails?.teachers_name}
                    </h4>
                    <span>{teacherDetails?.position}</span>
                  </div>
                  {/* <div className="teacher_details-rating">
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
              <span>(03 Reviews)</span>
            </div> */}
                  <h5 className="teacher_details-title2">About Me</h5>
                  <p className="mb-20">
                  {teacherDetails?.about_me}
                  </p>
                  <h5 className="teacher_details-title2">Contact Me</h5>
                  <div className="teacher_details-info">
                    <ul>
                      {/* <li>
                  <span>Address:</span>Hilton Conference Centre
                </li> */}
                      <li>
                        <span>Email:</span>
                        <Link to={`mailto:${teacherDetails.email}`}>
                          {teacherDetails.email}
                        </Link>
                      </li>
                      <li>
                        <span>Phone:</span>
                        <Link to={`tel:${teacherDetails.phone}`}> {teacherDetails.phone}</Link>
                      </li>
                    </ul>
                    <div className="teacher_details-social">
                      <a href="#">
                        <i className="fa-brands fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fa-brands fa-facebook-f" />
                      </a>
                      <a href="#">
                        <i className="fa-brands fa-instagram" />
                      </a>
                      <a href="#">
                        <i className="fa-brands fa-linkedin-in" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* teacher details area end */}
        {/* course area start */}
        {/* <section className="course-area pb-90">
    <div className="container">
      <div className="row">
        <div className="col-xl-12">
          <div className="course-section-area">
            <div className="section-area section-area-top">
              <h2 className="section-title mb-50">Our Featured Courses</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-4 col-lg-6 col-md-6">
          <div className="h2_course-item mb-30">
            <div className="h2_course-item-img">
              <a href="course-details.html">
                <img src="assets/img/course/2/1.jpg" alt="" />
              </a>
            </div>
            <div className="h2_course-content">
              <div className="h2_course-content-top">
                <div className="h2_course-rating">
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
                  <span>(03 Reviews)</span>
                </div>
                <div className="h2_course-save">
                  <a href="#">
                    <i className="fa-thin fa-bookmark" />
                  </a>
                </div>
              </div>
              <h5 className="h2_course-content-title">
                <a href="course-details.html">
                  Introduction to Psychology Subject
                </a>
              </h5>
              <div className="h2_course-content-info">
                <span>
                  <i className="fa-thin fa-book-blank" />
                  23 Lessons
                </span>
                <span>
                  <i className="fa-thin fa-user-group" />
                  45 Students
                </span>
              </div>
              <p className="h2_course-content-text">
                Through a combination of lectures, readings and discussions
                students.
              </p>
              <div className="h2_course-content-author">
                <div className="h2_course-author-img">
                  <img src="assets/img/course/2/author-1.jpg" alt="" />
                </div>
                <div className="h2_course-author-info">
                  <span>
                    By <a href="#">Eric Wid get</a>
                  </span>
                </div>
              </div>
            </div>
            <div className="h2_course-content-bottom">
              <div className="h2_course-bottom-price">
                <span>
                  <del>$140</del>$96.00
                </span>
              </div>
              <div className="h2_course-bottom-btn">
                <a href="course-details.html">
                  More Details
                  <i className="fa-light fa-arrow-right" />
                  <i className="fa-light fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6 col-md-6">
          <div className="h2_course-item mb-30">
            <div className="h2_course-item-img">
              <a href="course-details.html">
                <img src="assets/img/course/2/2.jpg" alt="" />
              </a>
            </div>
            <div className="h2_course-content">
              <div className="h2_course-content-top">
                <div className="h2_course-rating">
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
                  <span>(03 Reviews)</span>
                </div>
                <div className="h2_course-save">
                  <a href="#">
                    <i className="fa-thin fa-bookmark" />
                  </a>
                </div>
              </div>
              <h5 className="h2_course-content-title">
                <a href="course-details.html">
                  Complete Angular Developer in 2023
                </a>
              </h5>
              <div className="h2_course-content-info">
                <span>
                  <i className="fa-thin fa-book-blank" />
                  54 Lessons
                </span>
                <span>
                  <i className="fa-thin fa-user-group" />
                  72 Students
                </span>
              </div>
              <p className="h2_course-content-text">
                Through a combination of lectures, readings and discussions
                students.
              </p>
              <div className="h2_course-content-author">
                <div className="h2_course-author-img">
                  <img src="assets/img/course/2/author-2.jpg" alt="" />
                </div>
                <div className="h2_course-author-info">
                  <span>
                    By <a href="#">Hanson Deck</a>
                  </span>
                </div>
              </div>
            </div>
            <div className="h2_course-content-bottom">
              <div className="h2_course-bottom-price">
                <span>
                  <del>$120</del>$70.00
                </span>
              </div>
              <div className="h2_course-bottom-btn">
                <a href="course-details.html">
                  More Details
                  <i className="fa-light fa-arrow-right" />
                  <i className="fa-light fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6 col-md-6">
          <div className="h2_course-item mb-30">
            <div className="h2_course-item-img">
              <a href="course-details.html">
                <img src="assets/img/course/2/3.jpg" alt="" />
              </a>
            </div>
            <div className="h2_course-content">
              <div className="h2_course-content-top">
                <div className="h2_course-rating">
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
                  <span>(03 Reviews)</span>
                </div>
                <div className="h2_course-save">
                  <a href="#">
                    <i className="fa-thin fa-bookmark" />
                  </a>
                </div>
              </div>
              <h5 className="h2_course-content-title">
                <a href="course-details.html">
                  The Science of Well-being for Teens
                </a>
              </h5>
              <div className="h2_course-content-info">
                <span>
                  <i className="fa-thin fa-book-blank" />
                  67 Lessons
                </span>
                <span>
                  <i className="fa-thin fa-user-group" />
                  24 Students
                </span>
              </div>
              <p className="h2_course-content-text">
                Through a combination of lectures, readings and discussions
                students.
              </p>
              <div className="h2_course-content-author">
                <div className="h2_course-author-img">
                  <img src="assets/img/course/2/author-3.jpg" alt="" />
                </div>
                <div className="h2_course-author-info">
                  <span>
                    By <a href="#">Max Conversion</a>
                  </span>
                </div>
              </div>
            </div>
            <div className="h2_course-content-bottom">
              <div className="h2_course-bottom-price">
                <span>
                  <del>$150</del>$99.00
                </span>
              </div>
              <div className="h2_course-bottom-btn">
                <a href="course-details.html">
                  More Details
                  <i className="fa-light fa-arrow-right" />
                  <i className="fa-light fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> */}
      </main>
    </>
  );
};

export default TeacherArea;
