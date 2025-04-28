import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../constants/api";

function Navbar() {
  const [sections, setSections] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [hoveredCategoryId, setHoveredCategoryId] = useState(null);
  const [hoveredSectionId, setHoveredSectionId] = useState(null);

  useEffect(() => {
    api
      .get("/section/getSectionMenu1")
      .then((res) => {
        setSections(res.data.data);
      })
      .catch((error) => {
        console.error("Error fetching sections:", error);
      });

    api
      .get("/category/getCategories")
      .then((res) => {
        setCategories(res.data.data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });

    api
      .get("/subcategory/getSubCategory")
      .then((res) => {
        setSubCategories(res.data.data);
      })
      .catch((error) => {
        console.error("Error fetching subcategories:", error);
      });
  }, []);

  const getCategoriesForSection = (sectionId) => {
    return categories.filter((category) => category.section_id === sectionId);
  };

  const getSubCategoriesForCategory = (categoryId) => {
    return subCategories.filter(
      (subcategory) => subcategory.category_id === categoryId
    );
  };

  const handleSectionHover = (sectionId) => {
    setHoveredSectionId(sectionId);
  };

  const handleCategoryHover = (categoryId) => {
    setHoveredCategoryId(categoryId);
  };

  return (
    <div className="col-xl-8 d-xl-block">
      <div className="h2_header-middle">
        <nav className="h2_main-menu mobile-menu">
          <div className="main-menu d-lg-inline-block">
            <ul>
              {sections.map((section) => {
                const sectionCategories = getCategoriesForSection(section.section_id);
                return (
                  <li
                    className={`menu-has-child ${sectionCategories.length > 0 ? 'has-category' : ''}`}
                    key={section.section_id}
                    onMouseEnter={() => handleSectionHover(section.section_id)}
                    onMouseLeave={() => handleSectionHover(null)}
                  >
                    <Link to={`/${section.routes}`} className="nav-link">
                      {section.section_title}
                    </Link>

                    {sectionCategories.length > 0 && (
                      <ul
                        className="submenu"
                        style={{
                          display: hoveredSectionId === section.section_id ? "block" : "none",
                        }}
                      >
                        {sectionCategories.map((category) => {
                          const categorySubCategories = getSubCategoriesForCategory(category.category_id);
                          return (
                            <li
                              key={category.category_id}
                              onMouseEnter={() => handleCategoryHover(category.category_id)}
                              onMouseLeave={() => handleCategoryHover(null)}
                            >
                              <Link to={`/${category.routes}`} className="dropdown-item">
                                {category.category_title}
                              </Link>

                              {categorySubCategories.length > 0 && (
                                <ul
                                  className="sub-menu"
                                  style={{
                                    display: hoveredCategoryId === category.category_id ? "block" : "none",
                                  }}
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
