import React from "react";
import { Link } from "react-router-dom";
import SampleImage from "../assets/img/CollegeFees.png"; // Replace with your image path

const ImageWithLink = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <img
        src={SampleImage}
        alt="Sample"
        style={{ width: "600px", height: "auto", borderRadius: "8px" }}
      />
      <div style={{ marginTop: "10px" }}>
        <Link to="https://formbuilder.ccavenue.com/live/city-union-bank/einstein-college-of-arts-and-science/college-fees " style={{ color: "#007BFF", textDecoration: "underline" }}>
          Click here To College Fees
        </Link>
      </div>
    </div>
  );
};

export default ImageWithLink;
