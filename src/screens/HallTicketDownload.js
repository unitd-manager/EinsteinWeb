import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/css/event.css";
import api from "../constants/api";
import Web from "../assets/img/Faculty/EinsteinWebsite.jpg";;


const Alumni = () => {
  const [AlumniDetails, setAlumni] = useState([]);
  const [AlumniDetailsMedia, setAlumniMedia] = useState([]);



  useEffect(() => {
    api
      .get("/content/getHallTicketDownload")
      .then((res) => {
        setAlumni(res.data.data[0]);
      })
      .catch((err) => {
        console.error("Error fetching  details:", err);
      });
  }, []);

  useEffect(() => {
    api
      .get("/content/getHallTicketDownload")
      .then((res) => {
        setAlumniMedia(res.data.data);
      })
      .catch((err) => {
        console.error("Error fetching student details:", err);
      });
  }, []);

  return (
    <main>
      <section className="event_details-area pt-50 pb-60">
        <div className="container">
          <div className="event_details-img">
            <img
              src={`https://ecasadmin.unitdtechnologies.com/storages/${AlumniDetails?.file_name}`}
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
                  {/* <p
                    className="mb-25"
                    dangerouslySetInnerHTML={{
                      __html: AlumniDetails?.description,
                    }}
                  ></p> */}
                  <a
              href={AlumniDetails?.description_short}
              target="_blank"
              rel="noopener noreferrer"
              className="blink-gradient"
            >
              {"Click here for Hall Ticket"}
            </a>
                  
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
