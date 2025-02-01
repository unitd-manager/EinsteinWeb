import React from "react";
import pongal1 from "../assets/img/event/pongal-celebration1.webp";
import pongal2 from "../assets/img/event/pongal-celebration2.webp";
import pongal3 from "../assets/img/event/pongal-celebration3.webp";
import pongal4 from "../assets/img/event/pongal-celebration4.webp";
import pongal5 from "../assets/img/event/PongalCele1.webp";
import breadCrumb from "../assets/img/breadcrumb/breadcrumb-bg.jpg";
import shape from "../assets/img/breadcrumb/shape-1.png";

const EventDetails = () => {
  return (
    <div>
      {/* Breadcrumb Area */}
      <section
        style={{
          position: "relative",
          backgroundImage: `url(${breadCrumb})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "80px 0",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <img
          src={shape}
          alt=""
          style={{ position: "absolute", bottom: "10px", right: "10px", width: "80px" }}
        />
        <div>
          <h2 style={{ fontSize: "36px", fontWeight: "bold", textTransform: "uppercase" }}>
            Event Details
          </h2>
          <div>
            <a href="index.html" style={{ color: "#fff", fontWeight: "600", textDecoration: "none" }}>
              Home
            </a>
            <span style={{ marginLeft: "10px", color: "#f0f0f0" }}> / Event Details</span>
          </div>
        </div>
      </section>

      {/* Event Details Section */}
      <section style={{ padding: "60px 0", backgroundColor: "#f7f7f7" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          {/* Main Event Image */}
          <div style={{ textAlign: "center", marginBottom: "30px" }}>
            <img
              src={pongal1}
              alt="Pongal Celebration"
              style={{
                width: "100%",
                maxHeight: "450px",
                objectFit: "cover",
                borderRadius: "10px",
                boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.15)",
              }}
            />
          </div>

          <div style={{ display: "flex", gap: "30px" }}>
            {/* Event Content */}
            <div style={{ flex: "2", background: "#fff", padding: "30px", borderRadius: "10px", boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)" }}>
              <h3 style={{ fontSize: "28px", fontWeight: "700", color: "#333", textAlign: "center", marginBottom: "20px" }}>
                Pongal Celebration
              </h3>
              {/* Main Image */}
              <div style={{ textAlign: "center", marginBottom: "20px" }}>
                <img
                  src={pongal2}
                  alt="Event"
                  style={{
                    width: "100%",
                    borderRadius: "10px",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
                  }}
                />
              </div>

              {/* Bigger Bottom Images (2-Column Layout) */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "15px" }}>
                {[pongal3, pongal4, pongal5].map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Pongal Image ${index + 1}`}
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "10px",
                      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                      transition: "transform 0.3s ease-in-out",
                      cursor: "pointer",
                    }}
                    onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
                    onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                  />
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div style={{ flex: "1", background: "#fff", padding: "25px", borderRadius: "10px", boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)" }}>
              <h4 style={{ fontSize: "22px", fontWeight: "600", textAlign: "center", marginBottom: "15px" }}>Event Details</h4>
              <p style={{ fontSize: "16px", color: "#555", lineHeight: "1.6", textAlign: "center" }}>
                A grand Pongal celebration with fun activities, traditional performances, and cultural festivities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventDetails;
