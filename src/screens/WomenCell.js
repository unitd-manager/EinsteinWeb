import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../constants/api";
import Web from "../assets/img/Faculty/EinsteinWebsite.jpg";;


const Alumni = () => {
  const [AlumniDetails, setAlumni] = useState([]);
  // const [AlumniDetailsMedia, setAlumniMedia] = useState([]);



  useEffect(() => {
    api
      .get("/content/getWomenCell")
      .then((res) => {
        setAlumni(res.data.data[0]);
      })
      .catch((err) => {
        console.error("Error fetching  details:", err);
      });
  }, []);

  // useEffect(() => {
  //   api
  //     .get("/content/getAlumni")
  //     .then((res) => {
  //       setAlumniMedia(res.data.data);
  //     })
  //     .catch((err) => {
  //       console.error("Error fetching student details:", err);
  //     });
  // }, []);

  return (
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
                <h2 className="breadcrumb-title">Grievience</h2>
                <div className="breadcrumb-list">
                  <Link to="/Home">Home</Link>
                  <span>Grievience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* breadcrumb area end */}
      {/* event details area start */}
      <section className="event_details-area pt-120 pb-60">
        <div className="container">
       
          <div className="row">
            <div className="col-xl-12 col-lg-8">
              <div className="event_details-wrap mb-55">
                <div className="event_details-content">
                  <h3 className="event_details-content-title">
                    {AlumniDetails?.title}
                  </h3>
                  <p
                    className="mb-25"
                    dangerouslySetInnerHTML={{
                      __html: AlumniDetails?.description,
                    }}
                  ></p>
                </div>
                <div
                  className="event_details-inner-img"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)", // Two columns
                    gap: "20px",
                  }}
                >
                </div>
              </div>
            </div>
          
          </div>
        </div>
      </section>
    </main>

  );
};

export default Alumni;
