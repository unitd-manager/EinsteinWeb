import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../constants/api";
import Web from "../assets/img/Faculty/EinsteinWebsite.jpg";;


const Alumni = () => {
  const [AlumniDetails, setAlumni] = useState([]);
  const [AlumniDetailsMedia, setAlumniMedia] = useState([]);



  useEffect(() => {
    api
      .get("/content/getAlumni")
      .then((res) => {
        setAlumni(res.data.data[0]);
      })
      .catch((err) => {
        console.error("Error fetching  details:", err);
      });
  }, []);

  useEffect(() => {
    api
      .get("/content/getAlumni")
      .then((res) => {
        setAlumniMedia(res.data.data);
      })
      .catch((err) => {
        console.error("Error fetching student details:", err);
      });
  }, []);

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
                <h2 className="breadcrumb-title">Alumni</h2>
                <div className="breadcrumb-list">
                  <Link to="/Home">Home</Link>
                  <span>Alumni</span>
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
          <div className="event_details-img">
            <img
              src={`https://ecas.unitdtechnologies.com/storages/${AlumniDetails?.file_name}`}
              alt=""
              style={{
                width: "100%", // Make it responsive
                height: "50%", // Fixed height for uniformity
                objectFit: "cover", // Ensures images maintain aspect ratio
                borderRadius: "10px", // Optional: for rounded corners
              }}
            />
          </div>
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
                  {AlumniDetailsMedia.map((item, index) => (
                    <img
                      key={index}
                      src={`https://ecas.unitdtechnologies.com/storages/${item?.file_name}`}
                      alt=""
                      style={{
                        width: "100%",
                        height: "90%",
                        objectFit: "cover",
                        borderRadius: "10px",
                      }}
                    />
                  ))}
                </div>

                {/* <div className="event_details-content">
              <h3 className="event_details-content-title">
                The Whole Child Fostering Social and Emotional Development.
              </h3>
              <div className="event_details-content-list">
                <ul>
                  <li>
                    Etyma protium et olio gravida cur abitur est dui viverrid
                    non mi egret
                  </li>
                  <li>
                    Dictum Bibendum sapiens internum malasada fames ac ante
                    ipsum primes
                  </li>
                  <li>
                    Fauci bus cur abitur pulvinar rut rum masa sed so dales
                    sapiens utricles
                  </li>
                </ul>
              </div>
            </div> */}
              </div>
            </div>
            {/* <div className="col-xl-4 col-lg-4">
              <div className="event_details-sidebar mb-60">
                <div className="event_details-sidebar-content mb-40">
                  <h4 className="event_details-sidebar-content-title">
                    Buy Ticket
                  </h4>
                  <ul>
                    <li>
                      <span>Total Slots</span>
                      <span>354</span>
                    </li>
                    <li>
                      <span>Booked Slots</span>
                      <span>03</span>
                    </li>
                    <li>
                      <span>Cost</span>
                      <span>Free</span>
                    </li>
                    <li>
                      <span>Quantity</span>
                      <span>1</span>
                    </li>
                  </ul>
                  <div className="event_details-sidebar-btn">
                    <a
                      href="#"
                      className="theme-btn theme-btn-big theme-btn-full"
                    >
                      Buy Ticket
                    </a>
                  </div>
                </div>
                <div className="event_details-sidebar-map">
                  <h4 className="event_details-sidebar-content-title">Map</h4>
                  <div className="inner-map">
                    <iframe
                      src={AlumniDetails?.short_description}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </main>

  );
};

export default Alumni;
