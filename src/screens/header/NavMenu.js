import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import api from "../../constants/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [sections, setSections] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);

  const [hoveredSectionId, setHoveredSectionId] = useState(null);
  const [hoveredCategoryId, setHoveredCategoryId] = useState(null);

  const [openedSections, setOpenedSections] = useState({});
  const [openedCategories, setOpenedCategories] = useState({});
  const sectionRefs = useRef({});

  

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    api.get("/section/getSectionMenu1")
      .then((res) => setSections(res.data.data))
      .catch((error) => console.error("Error fetching sections:", error));

    api.get("/category/getCategories")
      .then((res) => setCategories(res.data.data))
      .catch((error) => console.error("Error fetching categories:", error));

    api.get("/subcategory/getSubCategory")
      .then((res) => setSubCategories(res.data.data))
      .catch((error) => console.error("Error fetching subcategories:", error));
  }, []);

  const getCategoriesForSection = (sectionId) =>
    categories.filter((category) => category.section_id === sectionId);

  const getSubCategoriesForCategory = (categoryId) =>
    subCategories.filter((subcategory) => subcategory.category_id === categoryId);

  const toggleSection = (sectionId) => {
    setOpenedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
    setTimeout(() => {
      sectionRefs.current[sectionId]?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }, 0);
  };

  const toggleCategory = (categoryId) => {
    setOpenedCategories((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }));
  };

  

  return (
    <div className="content-center">
      <nav className="h2_main-menu mobile-menu">
        <div
          className="main-menu d-lg-inline-block"
          style={isMobile ? { maxHeight: "100vh", overflowY: "auto" } : {}}
        >
          <ul>
            {sections.map((section) => {
              const sectionCategories = getCategoriesForSection(section.section_id);
              const isSectionOpen =
                (!isMobile && hoveredSectionId === section.section_id) ||
                (isMobile && openedSections[section.section_id]);

              return (
                <li
                  ref={(el) => (sectionRefs.current[section.section_id] = el)}
                  className={`menu-has-child ${sectionCategories.length > 0 ? 'has-category' : ''}`}
                  key={section.section_id}
                  onMouseEnter={() => !isMobile && setHoveredSectionId(section.section_id)}
                  onMouseLeave={() => !isMobile && setHoveredSectionId(null)}
                >
                  <div
                    onClick={isMobile ? (e) => {
                      if (sectionCategories.length > 0) {
                        e.preventDefault();
                        toggleSection(section.section_id);
                      }
                    } : undefined}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Link to={`/${section.routes}`} className="nav-link">
                        {section.section_title}
                      </Link>
                      {sectionCategories.length > 0 && (
                        <span
                          style={{ cursor: "pointer", marginLeft: "8px", color: "#fff" }}
                        >
                          <FontAwesomeIcon
                            icon={isSectionOpen ? faChevronUp : faChevronDown}
                            style={{ fontWeight: 900, fontSize: "14px" }}
                          />
                        </span>
                      )}
                    </div>
                  </div>

                  {sectionCategories.length > 0 && (
                    <ul
                      className="submenu"
                      style={isMobile ? { display: isSectionOpen ? "block" : "none" } : {}}
                    >
                      {sectionCategories.map((category) => {
                        const categorySubCategories = getSubCategoriesForCategory(category.category_id);
                        const isCategoryOpen =
                          (!isMobile && hoveredCategoryId === category.category_id) ||
                          (isMobile && openedCategories[category.category_id]);

                        return (
                          <li
                            key={category.category_id}
                            onMouseEnter={() => !isMobile && setHoveredCategoryId(category.category_id)}
                            onMouseLeave={() => !isMobile && setHoveredCategoryId(null)}
                          >
                            <div
                              onClick={isMobile ? (e) => {
                                if (categorySubCategories.length > 0) {
                                  e.preventDefault();
                                  toggleCategory(category.category_id);
                                }
                              } : undefined}
                              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                            >
                              <Link to={`/${category.routes}`} className="dropdown-item">
                                {category.category_title}
                              </Link>
                              {categorySubCategories.length > 0 && (
                                <span
                                  style={{ cursor: "pointer", marginLeft: "8px" }}
                                >
                                  <FontAwesomeIcon
                                    icon={
                                      openedCategories[category.category_id]
                                        ? faChevronUp
                                        : faChevronDown
                                    }
                                  />
                                </span>
                              )}
                            </div>

                            {categorySubCategories.length > 0 && (
                              <ul
                                className="submenu"
                                style={isMobile ? { display: isCategoryOpen ? "block" : "none" } : {}}
                              >
                                {categorySubCategories.map((subcategory) => (
                                  <li key={subcategory.sub_category_id}>
                                    {subcategory.external_link ? (
                                      <a
                                        href={subcategory.external_link}
                                        className="dropdown-item"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        {subcategory.sub_category_title}
                                      </a>
                                    ) : (
                                      <Link
                                        to={`${subcategory.routes}`}
                                        className="dropdown-item"
                                      >
                                        {subcategory.sub_category_title}
                                      </Link>
                                    )}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
