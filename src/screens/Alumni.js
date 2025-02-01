import React, { useState, useEffect } from "react";
import { FaSearch, FaLinkedin } from "react-icons/fa";
import "../assets/css/AlumniPage.css"

const alumniData = [
  {
    id: 1,
    name: "John Doe",
    batch: "Class of 2020",
    position: "Software Engineer at Google",
    image: "https://via.placeholder.com/150",
    linkedin: "https://linkedin.com/in/johndoe",
  },
  {
    id: 2,
    name: "Jane Smith",
    batch: "Class of 2019",
    position: "Data Scientist at Microsoft",
    image: "https://via.placeholder.com/150",
    linkedin: "https://linkedin.com/in/janesmith",
  },
  {
    id: 3,
    name: "Michael Johnson",
    batch: "Class of 2018",
    position: "UX Designer at Adobe",
    image: "https://via.placeholder.com/150",
    linkedin: "https://linkedin.com/in/michaeljohnson",
  },
];

const AlumniPage = () => {
  const [search, setSearch] = useState("");
  const [filteredAlumni, setFilteredAlumni] = useState(alumniData);

  useEffect(() => {
    setFilteredAlumni(
      alumniData.filter((alumni) =>
        alumni.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

  return (
    <div className="alumni-container">
      <h1 className="alumni-title">College Alumni Network</h1>
      <p className="alumni-subtitle">
        Connect with our successful alumni and explore their achievements.
      </p>

      {/* Search Bar */}
      <div className="search-bar">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search alumni..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Alumni Grid */}
      <div className="alumni-grid">
        {filteredAlumni.length > 0 ? (
          filteredAlumni.map((alumni) => (
            <div key={alumni.id} className="alumni-card">
              <img src={alumni.image} alt={alumni.name} />
              <h2 className="alumni-name">{alumni.name}</h2>
              <p className="alumni-batch">{alumni.batch}</p>
              <p className="alumni-position">{alumni.position}</p>
              <a
                href={alumni.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="linkedin-link"
              >
                <FaLinkedin size={18} /> Connect
              </a>
            </div>
          ))
        ) : (
          <p>No alumni found.</p>
        )}
      </div>
    </div>
  );
};

export default AlumniPage;
