import React from "react";
import { Link } from "react-router-dom";
import SampleImage from "../assets/img/about/principal image.png"; 

const ImageWithLink = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <img
        src={SampleImage}
        alt="Sample"
        style={{ width: "300px", height: "auto", borderRadius: "8px" }}
      />
      <div style={{ marginTop: "10px" }}>
        <Link to="/target-page" style={{ color: "#007BFF", textDecoration: "underline" }}>
          Click here
        </Link>
      </div>
    </div>
  );
};

export default ImageWithLink;
