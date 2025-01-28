import React, { useState } from "react";
import Web from "../assets/img/Faculty/EinsteinWebsite.jpg";
import Shape from "../assets/img/shape-1.png";

const CourseDetails = () => {
  const [activeTab, setActiveTab] = useState("courseOverview");

  const renderContent = () => {
    switch (activeTab) {
      case "courseOverview":
        return (
          <div className="panel-box">
            <h4>Course Overview</h4>
            <ul>
              <li>Level: Undergraduate</li>
              <li>Mode: Regular</li>
              <li>Discipline: Arts</li>
            </ul>
          </div>
        );

      case "curriculumDetails":
        return (
          <div className="panel-box">
            <h4>Curriculum Details</h4>
            <ul>
              <li>Annual Intake: 64</li>
              <li>Duration: 3.0 Years</li>
              <li>Course Type: Self Financing</li>
            </ul>
          </div>
        );

      case "instructorInfo":
        return (
          <div className="panel-box">
            <h4>Instructor Information</h4>
            <ul>
              <li>Examination Type: Semester</li>
              <li>Approving Body: University Grant Commission</li>
              <li>University: Manonmaniam Sundaranar University, Tirunelveli</li>
            </ul>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
  <section
      className="breadcrumb-area bg-default"
      style={{ backgroundImage: `url(${Web})` }}
    >
      <img
        src={Shape}
        alt=""
        className="breadcrumb-shape"
      />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="breadcrumb-content">
              <h2 className="breadcrumb-title">B.A Bachelor Of Arts(English)</h2>
              <div className="breadcrumb-list">
                <a href="index.html">Home</a>
                <span>Course Details</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
<section>
<div className="container1">
        <div className="overview-panel">
          <p>
            The Department of English has been one of the pioneer departments since the time of the inception of the institution. The department of English with its vibrant team has been performing the role of transferring the domain knowledge and also to the other field of knowledge through communicative subjects and teaching language through literature. Besides, the students have been allowed to participate in various events conducted by other colleges and other departments a few notable winning moments – the students namely D.SubaRanjani and G.JeyaKarthika from II B.A. English won second prize in Pictionary in the intracollegiate Sci-Fest 2k24 conducted by the Department of Chemistry, Mathematics, and Physics. Beyond academics, the students were also exposed to various localities through field visits. One such visit was organized by the department on 17.02-2024 in which the students were taken to Chitharal Rock Jain Temple, Eco Park, and Thiruparappu Falls. In addition to all these activities, the department organizes Elite – a one-day Intercollegiate Seminar on Empowerment towards Growth- a Self Exploration Journey to lay the platform to enhance the organizing skill of our department students and to reveal the hidden skills of other department students by conducting various academic and non-academic events. The department students have also exhibited dramatic skills by performing the play Pygmalion which was highly commendable by the audience. With all these multifaceted activities, the department of English has been adding feathers to the hat of Einstein College of Arts and Science.
          </p>
        </div>

        <div className="tab-buttons1">
      <button
        className={activeTab === "courseOverview" ? "active" : ""}
        onClick={() => setActiveTab("courseOverview")}
      >
        Overview
      </button>
      <button
        className={activeTab === "curriculumDetails" ? "active" : ""}
        onClick={() => setActiveTab("curriculumDetails")}
      >
        Curriculum
      </button>
      <button
        className={activeTab === "instructorInfo" ? "active" : ""}
        onClick={() => setActiveTab("instructorInfo")}
      >
        Instructor
      </button>
    </div>

    <div>{renderContent()}</div>
  </div>
  </section>
    </>
  );
};

export default CourseDetails;
