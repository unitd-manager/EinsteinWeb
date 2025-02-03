import React, { useState, useEffect } from "react";
import api from "../constants/api";
import Web from "../assets/img/Faculty/EinsteinWebsite.jpg";
import pongal1 from "../assets/img/event/pongal-celebration1.webp";
import pongal2 from "../assets/img/event/pongal-celebration2.webp";
import pongal3 from "../assets/img/event/pongal-celebration3.webp";
import pongal4 from "../assets/img/event/pongal-celebration4.webp";
import pongal5 from "../assets/img/event/PongalCele1.webp";
import breadCrumb from "../assets/img/breadcrumb/breadcrumb-bg.jpg";
import shape from "../assets/img/breadcrumb/shape-1.png";
import { Link, useParams } from "react-router-dom";

const EventDetails = () => {
  const [EventDetails, setEventDetails] = useState([]);
  const [EventDetailsMedia, setEventDetailsMedia] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    api
      .post("/content/getEventDetailsById", { content_id: id })
      .then((res) => {
        setEventDetails(res.data.data[0]);
      })
      .catch((err) => {
        console.error("Error fetching student details:", err);
      });
  }, []);

  useEffect(() => {
    api
      .post("/content/getEventMediaById", { content_id: id })
      .then((res) => {
        setEventDetailsMedia(res.data.data);
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
                <h2 className="breadcrumb-title">Events Details</h2>
                <div className="breadcrumb-list">
                  <Link to="/Home">Home</Link>
                  <span>Events Details</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h6_cta-button">
                <Link to='/Events' className="h6_cta-btn">
                  Back to List
                  <i className="fa-light fa-arrow-up-right" />
                </Link>
              </div>
      {/* breadcrumb area end */}
      {/* event details area start */}
      <section className="event_details-area pt-120 pb-60">
        <div className="container">
          <div className="event_details-img">
            <img
              src={`https://ecas.unitdtechnologies.com/storages/${EventDetails?.file_name}`}
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
                    {EventDetails?.title}
                  </h3>
                  <p
                    className="mb-25"
                    dangerouslySetInnerHTML={{
                      __html: EventDetails?.description,
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
                  {EventDetailsMedia.map((item, index) => (
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
                      src={EventDetails?.short_description}
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

    // <div>
    //   {/* Breadcrumb Area */}
    //   <section
    //     style={{
    //       position: "relative",
    //       backgroundImage: `url(${breadCrumb})`,
    //       backgroundSize: "cover",
    //       backgroundPosition: "center",
    //       padding: "80px 0",
    //       textAlign: "center",
    //       color: "#fff",
    //     }}
    //   >
    //     <img
    //       src={shape}
    //       alt=""
    //       style={{ position: "absolute", bottom: "10px", right: "10px", width: "80px" }}
    //     />
    //     <div>
    //       <h2 style={{ fontSize: "36px", fontWeight: "bold", textTransform: "uppercase" }}>
    //         Event Details
    //       </h2>
    //       <div>
    //         <a href="index.html" style={{ color: "#fff", fontWeight: "600", textDecoration: "none" }}>
    //           Home
    //         </a>
    //         <span style={{ marginLeft: "10px", color: "#f0f0f0" }}> / Event Details</span>
    //       </div>
    //     </div>
    //   </section>

    //   {/* Event Details Section */}
    //   <section style={{ padding: "60px 0", backgroundColor: "#f7f7f7" }}>
    //     <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
    //       {/* Main Event Image */}
    //       <div style={{ textAlign: "center", marginBottom: "30px" }}>
    //         <img
    //           src={pongal1}
    //           alt="Pongal Celebration"
    //           style={{
    //             width: "100%",
    //             maxHeight: "450px",
    //             objectFit: "cover",
    //             borderRadius: "10px",
    //             boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.15)",
    //           }}
    //         />
    //       </div>

    //       <div style={{ display: "flex", gap: "30px" }}>
    //         {/* Event Content */}
    //         <div style={{ flex: "2", background: "#fff", padding: "30px", borderRadius: "10px", boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)" }}>
    //           <h3 style={{ fontSize: "28px", fontWeight: "700", color: "#333", textAlign: "center", marginBottom: "20px" }}>
    //             Pongal Celebration
    //           </h3>
    //           {/* Main Image */}
    //           <div style={{ textAlign: "center", marginBottom: "20px" }}>
    //             <img
    //               src={pongal2}
    //               alt="Event"
    //               style={{
    //                 width: "100%",
    //                 borderRadius: "10px",
    //                 boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
    //               }}
    //             />
    //           </div>

    //           {/* Bigger Bottom Images (2-Column Layout) */}
    //           <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "15px" }}>
    //             {[pongal3, pongal4, pongal5].map((img, index) => (
    //               <img
    //                 key={index}
    //                 src={img}
    //                 alt={`Pongal Image ${index + 1}`}
    //                 style={{
    //                   width: "100%",
    //                   height: "auto",
    //                   borderRadius: "10px",
    //                   boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    //                   transition: "transform 0.3s ease-in-out",
    //                   cursor: "pointer",
    //                 }}
    //                 onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
    //                 onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
    //               />
    //             ))}
    //           </div>
    //         </div>

    //         {/* Sidebar */}
    //         <div style={{ flex: "1", background: "#fff", padding: "25px", borderRadius: "10px", boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)" }}>
    //           <h4 style={{ fontSize: "22px", fontWeight: "600", textAlign: "center", marginBottom: "15px" }}>Event Details</h4>
    //           <p style={{ fontSize: "16px", color: "#555", lineHeight: "1.6", textAlign: "center" }}>
    //             A grand Pongal celebration with fun activities, traditional performances, and cultural festivities.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </div>
  );
};

export default EventDetails;
