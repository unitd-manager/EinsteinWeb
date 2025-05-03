import React, { useState, useEffect } from "react";
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

  const [openedSectionId, setOpenedSectionId] = useState(null);
  const [openedCategoryId, setOpenedCategoryId] = useState(null);

  const isMobile = window.innerWidth <= 768; // simple check

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

  const toggleSection = (sectionId) =>
    setOpenedSectionId(openedSectionId === sectionId ? null : sectionId);

  const toggleCategory = (categoryId) =>
    setOpenedCategoryId(openedCategoryId === categoryId ? null : categoryId);

  return (
    <div className="content-center">
      <div className="">
        <nav className="h2_main-menu mobile-menu">
          <div className="main-menu d-lg-inline-block">
            <ul>
              {sections.map((section) => {

                const sectionCategories = getCategoriesForSection(section.section_id);
                const isSectionOpen =
                  (!isMobile && hoveredSectionId === section.section_id) ||
                  (isMobile && openedSectionId === section.section_id);

                return (
                  <li
                    className={`menu-has-child ${sectionCategories.length > 0 ? 'has-category' : ''}`}
                    key={section.section_id}
                    onMouseEnter={() => !isMobile && setHoveredSectionId(section.section_id)}
                    onMouseLeave={() => !isMobile && setHoveredSectionId(null)}
                  >
                   <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
  <Link to={`/${section.routes}`} className="nav-link">
    {section.section_title}
  </Link>
  {sectionCategories.length > 0 && (
    <span
  onClick={(e) => {
    e.stopPropagation();
    toggleSection(section.section_id);
  }}
  style={{ cursor: "pointer", marginLeft: "8px", color: "#fff" }}
>
  
  <FontAwesomeIcon
    icon={isSectionOpen ? faChevronUp : faChevronDown}
    style={{ fontWeight: 900, fontSize: "14px" }}
  />
</span>

  )}
</div>


                    {sectionCategories.length > 0 && (
                      <ul
                        className="submenu"
                        style={{ display: isSectionOpen ? "block" : "none" }}
                      >
                        {sectionCategories.map((category) => {
                          const categorySubCategories = getSubCategoriesForCategory(category.category_id);
                          const isCategoryOpen =
                            (!isMobile && hoveredCategoryId === category.category_id) ||
                            (isMobile && openedCategoryId === category.category_id);

                          return (
                            <li
                              key={category.category_id}
                              onMouseEnter={() => !isMobile && setHoveredCategoryId(category.category_id)}
                              onMouseLeave={() => !isMobile && setHoveredCategoryId(null)}
                            >
                              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Link to={`/${category.routes}`} className="dropdown-item">
                                  {category.category_title}
                                </Link>
                                {categorySubCategories.length > 0 && (
  <span
    onClick={() => toggleCategory(category.category_id)}
    style={{
      cursor: "pointer",
      marginLeft: "8px",
    }}
  >
    <FontAwesomeIcon
      icon={
        openedCategoryId === category.category_id
          ? faChevronUp
          : faChevronDown
      }
    />
  </span>
)}

                              </div>

                              {categorySubCategories.length > 0 && (
                                <ul
                                  className="sub-menu"
                                  style={{ display: isCategoryOpen ? "block" : "none" }}
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
    </div>
  );
}

export default Navbar;
