import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import api from "../constants/api"; // Ensure API setup
import "../assets/css/gallery.css"; // Ensure existing CSS
import line from "../assets/img/gallery/line.png";

import "../assets/css/event.css";
import shape1 from "../assets/img/breadcrumb/shape-1.png";
import breadcrumb from "../assets/img/breadcrumb/breadcrumb-bg.jpg";
import viceprincipal from "../assets/img/DSC_1491.JPG";
import { Link } from "react-router-dom";

// Set the app root for accessibility
Modal.setAppElement("#root");

const Home = () => {
  const [activeTab, setActiveTab] = useState("all"); // Default to 'See All'
  const [galleryItems, setGalleryItems] = useState([]);
  const [category, setCategory] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    api
      .get("/content/getGalleryImages") // Replace with actual API
      .then((res) => {
        setGalleryItems(res.data.data); // Assuming API returns a list of images with categories
      })
      .catch((err) => console.error("Error fetching gallery data", err));
  }, []);

  useEffect(() => {
    api
      .get("/category/getCategoryType") // Replace with actual API
      .then((res) => {
        setCategory(res.data.data); // Assuming API returns a list of images with categories
      })
      .catch((err) => console.error("Error fetching gallery data", err));
  }, []);

  // Filter images based on the selected category
  const filteredGallery = galleryItems.filter((item) =>
    activeTab === "all" ? true : item.category_title === activeTab
  );

  // Open Modal & Set Image
  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setModalIsOpen(true);
  };

  // Close Modal
  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <main>
      <section
        className="breadcrumb-area bg-default"
        style={{ backgroundImage: `url(${breadcrumb})` }}
      >
        <img src={shape1} alt="" className="breadcrumb-shape" />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb-content">
                <h2 className="breadcrumb-title">Gallery</h2>
                <div className="breadcrumb-list">
                  <a href="/">Home</a>
                  <span>Gallery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Filter Tabs */}
      <section className="innerPage_gallery-area pt-110 pb-90">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-xl-5 col-lg-6">
              <div className="section-area-2">
                <h2 className="section-title mb-50">
                  Browse Our
                  <br /> Exclusive{" "}
                  <span>
                    Gallery <img src={line} alt="" />
                  </span>
                </h2>
              </div>
            </div>

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

          {/* Gallery Content - Dynamically Filtered */}
          <div className="row">
            {filteredGallery.length > 0 ? (
              filteredGallery.map((item, index) => (
                <div
                  className="col-xl-4 col-lg-4 col-md-6 col-sm-6"
                  key={index}
                >
                  <div className="innerPage_gallery-item mb-30">
                    <div className="innerPage_gallery-img">
                      <img
                        src={`https://ecasadmin.unitdtechnologies.com/storages/${item.file_name}`}
                        alt={item.title || "Gallery Image"}
                        className="gallery-image"
                        onClick={() =>
                          openModal(
                            `https://ecasadmin.unitdtechnologies.com/storages/${item.file_name}`
                          )
                        }
                      />
                    </div>
                    <div className="innerPage_gallery-content">
                      <a
                        href="#"
                        className="popup-image"
                        onClick={(e) => {
                          e.preventDefault();
                          openModal(
                            `https://ecasadmin.unitdtechnologies.com/storages/${item.file_name}`
                          );
                        }}
                      >
                        <i className="fa-thin fa-plus" />
                      </a>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-12 text-center">
                <p>No images available for this category.</p>
              </div>
            )}
          </div>

          {/* Modal Popup */}
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Image Preview"
            className="modal-content"
            overlayClassName="modal-overlay"
          >
            <button className="close-button" onClick={closeModal}>
              ✖
            </button>
            {selectedImage && (
              <img src={selectedImage} alt="Preview" className="modal-image" />
            )}
          </Modal>
        </div>
      </section>
    </main>
  );
};

export default Home;
