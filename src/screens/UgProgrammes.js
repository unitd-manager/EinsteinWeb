import React from "react";
import Web from "../assets/img/Academics/EinsteinWeb.jpg";
import Bachelor from "../assets/img/Academics/Bachelorofarts.jpg";


const CourseSection = () => {
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
              background: "rgba(0, 0, 0, 0.6)", // Semi-transparent background
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
                background: "linear-gradient(90deg, #ff7e5f, #feb47b)", // Gradient color
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)", // Adds depth
              }}
            >
              UG Programmes
            </h2>
            <p
              style={{ fontSize: "1.2rem", lineHeight: "1.6" ,color: "#fff" }}
            >
              Spend your next few years studying at a center of intensive scholarship and taking
              advantage of our multidimensional academic experience.
            </p>
          </div>
          <div className="breadcrumb-list" style={{ marginTop: "15px" }}>
  <a
    href="index.html"
    style={{
      color: "#FF4500", // Gold for the link
      textDecoration: "none", // Removed underline for a cleaner look
      fontWeight: "bold", // Added weight for emphasis
    }}
  >
    Home
  </a>
  <span
    style={{
      color: "#FF4500", // White for static text
      marginLeft: "5px",
      fontWeight: "500",
    }}
  >
    &gt; UG Programmes
  </span>
</div>

        </div>
      </div>
    </div>
  </div>
</section>

<section className="breadcrumb-area bg-default" style={{ backgroundColor: "#003366" }}>
  <img
    src="assets/img/breadcrumb/shape-1.png"
    alt="Breadcrumb Shape"
    className="breadcrumb-shape"
  />
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="breadcrumb-content">
          <h2
            className="breadcrumb-title"
            style={{
              color: "#FFD700", /* Golden Yellow */
              fontWeight: "bold",
              textAlign: "center",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", /* Subtle shadow for depth */
            }}
          >
            8+ Undergraduate Courses
          </h2>
        </div>
        <p
          className="breadcrumb-description"
          style={{
            color: "#FFFFFF", /* Crisp white for contrast */
            fontSize: "16px",
            lineHeight: "1.8",
            padding: "10px 15px",
            backgroundColor: "rgba(255, 255, 255, 0.1)", /* Transparent white overlay */
            borderRadius: "8px",
          }}
        >
          At Einstein College Of Arts & Science, We have expert trainers to assist with the education
          of our students. Every trainer of ours is an expert in the particular field and can guide
          students with any sort of queries. At present, the college offers 8 undergraduate programmes –
          B.Sc. Computer Science, Mathematics, Physics, Chemistry, B.A. English, B.B.A, B.Com, and
          B.Com (Corporate Secretariat-ship).
        </p>
      </div>
    </div>
  </div>
</section>

      <section className="innerPage_course-area pt-120 pb-90">
        <div className="container">
          <div className="innerPage_course-top mb-30">
            <div className="row justify-content-between align-items-center">
              <div className="col-xl-4 col-md-4">
                <div className="innerPage_course-left mb-20">
                  <p>Showing 1-8 of 24 results</p>
                </div>
              </div>
              <div className="col-xl-8 col-md-8">
                <div className="innerPage_course-right mb-20">
                  <div className="innerPage_course-category">
                    <select
                      name="select"
                      className="innerPage_course-category-list has-nice-select"
                    >
                      <option value="1">Science</option>
                      <option value="2">Arts</option>
                      <option value="3">Commerce</option>
                      <option value="4">Business Administration</option>
                    </select>
                  </div>
                  <div className="innerPage_course-search">
                    <form action="#">
                      <input type="text" placeholder="Search Item" />
                      <button
                        type="submit"
                        className="innerPage_course-search-btn"
                      >
                        <i className="fa fa-magnifying-glass"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="h2_course-item mb-30">
                <div className="h2_course-item-img">
                  <a href="course-details.html">
                    <img
                      src={Bachelor}
                      alt="Course Thumbnail"
                    />
                  </a>
                </div>
                <div className="h2_course-content">
                  <div className="h2_course-content-top">
                    <div className="h2_course-rating">
                      <ul>
                        {[...Array(5)].map((_, index) => (
                          <li key={index}>
                            <i className="fa fa-star"></i>
                          </li>
                        ))}
                      </ul>
                      <span>(03 Reviews)</span>
                    </div>
                    <div className="h2_course-save">
                      <a href="#">
                        <i className="fa fa-bookmark"></i>
                      </a>
                    </div>
                  </div>
                  <h5 className="h2_course-content-title">
                    <a href="course-details.html">
                      B.A -Bachelor Of Arts(English)
                    </a>
                  </h5>
                  <div className="h2_course-content-info">
                    <span>
                      <i className="fa fa-book"></i>Course Duration :
                    </span>
                    <span>
                      <i className="fa fa-users"></i>3.0 years - 0.0 months
                    </span>
                  </div>
                  <p className="h2_course-content-text">
                    Level : Under Graduate
                    </p>
                    <p>
                    Mode  : Regular
                  </p>
                  <div className="h2_course-content-author">
                   
                  </div>
                </div>
                <div className="h2_course-content-bottom">
                
                  <div className="h2_course-bottom-btn">
                    <a href="course-details.html">
                      More Details
                      <i className="fa fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="h2_course-item mb-30">
                <div className="h2_course-item-img">
                  <a href="course-details.html">
                    <img
                      src={Bachelor}
                      alt="Course Thumbnail"
                    />
                  </a>
                </div>
                <div className="h2_course-content">
                  <div className="h2_course-content-top">
                    <div className="h2_course-rating">
                      <ul>
                        {[...Array(5)].map((_, index) => (
                          <li key={index}>
                            <i className="fa fa-star"></i>
                          </li>
                        ))}
                      </ul>
                      <span>(03 Reviews)</span>
                    </div>
                    <div className="h2_course-save">
                      <a href="#">
                        <i className="fa fa-bookmark"></i>
                      </a>
                    </div>
                  </div>
                  <h5 className="h2_course-content-title">
                    <a href="course-details.html">
                      B.B.A -Bachelor Of Business Administration
                    </a>
                  </h5>
                  <div className="h2_course-content-info">
                    <span>
                      <i className="fa fa-book"></i>Course Duration :
                    </span>
                    <span>
                      <i className="fa fa-users"></i>3.0 years - 0.0 months
                    </span>
                  </div>
                  <p className="h2_course-content-text">
                    Level : Under Graduate
                    </p>
                    <p>
                    Mode  : Regular
                  </p>
                  <div className="h2_course-content-author">
                   
                  </div>
                </div>
                <div className="h2_course-content-bottom">
                
                  <div className="h2_course-bottom-btn">
                    <a href="course-details.html">
                      More Details
                      <i className="fa fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="h2_course-item mb-30">
                <div className="h2_course-item-img">
                  <a href="course-details.html">
                    <img
                      src={Bachelor}
                      alt="Course Thumbnail"
                    />
                  </a>
                </div>
                <div className="h2_course-content">
                  <div className="h2_course-content-top">
                    <div className="h2_course-rating">
                      <ul>
                        {[...Array(5)].map((_, index) => (
                          <li key={index}>
                            <i className="fa fa-star"></i>
                          </li>
                        ))}
                      </ul>
                      <span>(03 Reviews)</span>
                    </div>
                    <div className="h2_course-save">
                      <a href="#">
                        <i className="fa fa-bookmark"></i>
                      </a>
                    </div>
                  </div>
                  <h5 className="h2_course-content-title">
                    <a href="course-details.html">
                      B.Sc -Bachelor Of Science(Maths)
                    </a>
                  </h5>
                  <div className="h2_course-content-info">
                    <span>
                      <i className="fa fa-book"></i>Course Duration :
                    </span>
                    <span>
                      <i className="fa fa-users"></i>3.0 years - 0.0 months
                    </span>
                  </div>
                  <p className="h2_course-content-text">
                    Level : Under Graduate
                    </p>
                    <p>
                    Mode  : Regular
                  </p>
                  <div className="h2_course-content-author">
                   
                  </div>
                </div>
                <div className="h2_course-content-bottom">
                
                  <div className="h2_course-bottom-btn">
                    <a href="course-details.html">
                      More Details
                      <i className="fa fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="h2_course-item mb-30">
                <div className="h2_course-item-img">
                  <a href="course-details.html">
                    <img
                      src={Bachelor}
                      alt="Course Thumbnail"
                    />
                  </a>
                </div>
                <div className="h2_course-content">
                  <div className="h2_course-content-top">
                    <div className="h2_course-rating">
                      <ul>
                        {[...Array(5)].map((_, index) => (
                          <li key={index}>
                            <i className="fa fa-star"></i>
                          </li>
                        ))}
                      </ul>
                      <span>(03 Reviews)</span>
                    </div>
                    <div className="h2_course-save">
                      <a href="#">
                        <i className="fa fa-bookmark"></i>
                      </a>
                    </div>
                  </div>
                  <h5 className="h2_course-content-title">
                    <a href="course-details.html">
                      B.Sc -Bachelor Of Science(Physics)
                    </a>
                  </h5>
                  <div className="h2_course-content-info">
                    <span>
                      <i className="fa fa-book"></i>Course Duration :
                    </span>
                    <span>
                      <i className="fa fa-users"></i>3.0 years - 0.0 months
                    </span>
                  </div>
                  <p className="h2_course-content-text">
                    Level : Under Graduate
                    </p>
                    <p>
                    Mode  : Regular
                  </p>
                  <div className="h2_course-content-author">
                   
                  </div>
                </div>
                <div className="h2_course-content-bottom">
                
                  <div className="h2_course-bottom-btn">
                    <a href="course-details.html">
                      More Details
                      <i className="fa fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="h2_course-item mb-30">
                <div className="h2_course-item-img">
                  <a href="course-details.html">
                    <img
                      src={Bachelor}
                      alt="Course Thumbnail"
                    />
                  </a>
                </div>
                <div className="h2_course-content">
                  <div className="h2_course-content-top">
                    <div className="h2_course-rating">
                      <ul>
                        {[...Array(5)].map((_, index) => (
                          <li key={index}>
                            <i className="fa fa-star"></i>
                          </li>
                        ))}
                      </ul>
                      <span>(03 Reviews)</span>
                    </div>
                    <div className="h2_course-save">
                      <a href="#">
                        <i className="fa fa-bookmark"></i>
                      </a>
                    </div>
                  </div>
                  <h5 className="h2_course-content-title">
                    <a href="course-details.html">
                      B.Sc -Bachelor Of Science(Chemistry)
                    </a>
                  </h5>
                  <div className="h2_course-content-info">
                    <span>
                      <i className="fa fa-book"></i>Course Duration :
                    </span>
                    <span>
                      <i className="fa fa-users"></i>3.0 years - 0.0 months
                    </span>
                  </div>
                  <p className="h2_course-content-text">
                    Level : Under Graduate
                    </p>
                    <p>
                    Mode  : Regular
                  </p>
                  <div className="h2_course-content-author">
                   
                  </div>
                </div>
                <div className="h2_course-content-bottom">
                
                  <div className="h2_course-bottom-btn">
                    <a href="course-details.html">
                      More Details
                      <i className="fa fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="h2_course-item mb-30">
                <div className="h2_course-item-img">
                  <a href="course-details.html">
                    <img
                      src={Bachelor}
                      alt="Course Thumbnail"
                    />
                  </a>
                </div>
                <div className="h2_course-content">
                  <div className="h2_course-content-top">
                    <div className="h2_course-rating">
                      <ul>
                        {[...Array(5)].map((_, index) => (
                          <li key={index}>
                            <i className="fa fa-star"></i>
                          </li>
                        ))}
                      </ul>
                      <span>(03 Reviews)</span>
                    </div>
                    <div className="h2_course-save">
                      <a href="#">
                        <i className="fa fa-bookmark"></i>
                      </a>
                    </div>
                  </div>
                  <h5 className="h2_course-content-title">
                    <a href="course-details.html">
                      B.Sc -Bachelor Of Science(Computer Science)
                    </a>
                  </h5>
                  <div className="h2_course-content-info">
                    <span>
                      <i className="fa fa-book"></i>Course Duration :
                    </span>
                    <span>
                      <i className="fa fa-users"></i>3.0 years - 0.0 months
                    </span>
                  </div>
                  <p className="h2_course-content-text">
                    Level : Under Graduate
                    </p>
                    <p>
                    Mode  : Regular
                  </p>
                  <div className="h2_course-content-author">
                   
                  </div>
                </div>
                <div className="h2_course-content-bottom">
                
                  <div className="h2_course-bottom-btn">
                    <a href="course-details.html">
                      More Details
                      <i className="fa fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
};

export default CourseSection;
