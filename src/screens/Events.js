import React, { useState, useEffect } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import api from "../constants/api";
import Web from "../assets/img/Faculty/EinsteinWebsite.jpg";

const Event = () => {
  const [event, setEvent] = useState([]);
  const [events, setEvents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState([]);
  const [activeTab, setActiveTab] = useState("all"); // Default to 'See All'
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const itemsPerPage = 6; // Display 6 items per page

  useEffect(() => {
    api
      .get("/content/getEventsFile")
      .then((res) => {
        setEvent(res.data.data);
      })
      .catch((err) => {
        console.error("Error fetching details:", err);
      });
  }, []);

  useEffect(() => {
      api
        .get("/category/getEventsFromCategoryType") // Replace with actual API
        .then((res) => {
          setCategory(res.data.data); // Assuming API returns a list of images with categories
        })
        .catch((err) => console.error("Error fetching gallery data", err));
    }, []);

    const filteredEvents = event.filter((item) =>
      activeTab === "all" ? true : item.category_title === activeTab
    );
    console.log("event", filteredEvents)

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const applyFilters = () => {
    let filteredData = [...event];

    if (searchQuery !== "") {
      filteredData = filteredData.filter(
        (item) =>
          (item.search_keyword &&
            item.search_keyword.toLowerCase().includes(searchQuery.toLowerCase())) ||
          (item.title && item.title.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    return filteredData;
  };

  const filteredGallery = applyFilters();
  const totalPages = Math.ceil(filteredGallery.length / itemsPerPage);

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const paginatedEvents = filteredGallery.slice(indexOfFirstItem, indexOfLastItem);
  const paginatedEventsByCategoryType = filteredEvents.slice(indexOfFirstItem, indexOfLastItem);

  // Handle page click
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
 // Open Modal & Set Image
 const openModal = (imageUrl) => {
  setEvent(imageUrl);
  setModalIsOpen(true);
};

// Close Modal
const closeModal = () => {
  setModalIsOpen(false);
  setEvent(null);
};
  return (
    <>
      <main>
        <section className="breadcrumb-area bg-default" style={{ backgroundImage: `url(${Web})` }}>
          <img src="assets/img/breadcrumb/shape-1.png" alt="" className="breadcrumb-shape" />
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="breadcrumb-content">
                  <h2 className="breadcrumb-title">Upcoming Events</h2>
                  <div className="breadcrumb-list">
                    <Link to="/Home">Home</Link>
                    <span>Upcoming Events</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
          
        

        <section className="innerPage_event-area pt-120 pb-90">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6">
                <div className="section-area mb-50 section-area-top text-center">
                  <span className="section-subtitle">Conference on Education</span>
                  <h2 className="section-title mb-20">Upcoming Events</h2>
                </div>
              </div>
            </div>

                      


            <div className="innerPage_course-top mb-30">
              <div className="row justify-content-between align-items-center">
                <div className="col-xl-4 col-md-4">
                  <p>Showing {paginatedEventsByCategoryType.length} of {filteredEvents.length} results</p>
                </div>
                {/* <div className="col-xl-8 col-md-8">
                  <div className="innerPage_course-right">
                    <div className="innerPage_course-search">
                      <input type="text" placeholder="Search Events" value={searchQuery} onChange={handleSearchChange} />
                      <button type="button" className="innerPage_course-search-btn">
                        <i className="fa-thin fa-magnifying-glass" />
                      </button>
                    </div>
                  </div>
                </div> */}
                <div className="col-xl-7 col-lg-6">
                          <div className="innerPage_gallery-tab mb-40">
                            <ul className="nav nav-pills">
                              {category.map((tab) => (
                                <li className="nav-item" key={tab.category_id}>
                                  <button
                                    className={`nav-link ${
                                      activeTab === tab.category_title ? "active" : ""
                                    }`}
                                    onClick={() => setActiveTab(tab.category_title)}
                                  >
                                    {tab.category_title}
                                  </button>
                                </li>
                              ))}
                              <li>
                                <Link
                                  className={`nav-link ${
                                    activeTab === "all" ? "active" : ""
                                  }`}
                                  onClick={() => setActiveTab("all")}
                                >
                                  See All
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
             
              </div>
            </div>

            <div className="row">
              {paginatedEventsByCategoryType.map((item, index) => (
                <div className="col-xl-4 col-lg-4 col-md-6" style={{ marginBottom: 52 }} key={index}>
                  <div className="event-item mb-30">
                    <div className="event-img">
                      <img
                        src={`https://ecasadmin.unitdtechnologies.com/storages/${item.event_image}`}
                        alt=""
                        style={{
                          width: "100%",
                          height: "250px",
                          objectFit: "cover",
                          borderRadius: "10px",
                        }}
                      />
                    </div>
                    <div className="event-content">
                      <div className="event-content-meta">
                        <span><i className="fa-thin fa-location-dot" /> {item.upload_country}</span>
                        <span><i className="fa-thin fa-clock" /> {moment(item.content_date).format("DD-MM-YYYY")}</span>
                      </div>
                      <h5 className="event-content-title">
                        <Link to={`/EventDetails/${item.content_id}`}>{item?.title}</Link>
                      </h5>
                      <Link to={`/EventDetails/${item.content_id}`} className="t-theme-btn theme-btn event-btn">
                        More Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination UI (Maintaining Same Structure) */}
            <div className="row">
              <div className="col-12">
                <div className="pagination-area mt-20 mb-30">
                  <ul>
                    {[...Array(totalPages)].map((_, index) => (
                      <li key={index}>
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            handlePageClick(index + 1);
                          }}
                          className={currentPage === index + 1 ? "active-page" : ""}
                        >
                          {index + 1}
                        </a>
                      </li>
                    ))}
                    {currentPage < totalPages && (
                      <li>
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            handlePageClick(currentPage + 1);
                          }}
                        >
                          <i className="fa-light fa-angle-right" />
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
            
          </div>
        </section>
      </main>
    </>
  );
};

export default Event;
