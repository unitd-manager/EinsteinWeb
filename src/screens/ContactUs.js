import React, { useState, useEffect } from "react";
import api from "../constants/api";
import Select from "react-select";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is loaded
import "../assets/css/event.css";
import shape1 from "../assets/img/breadcrumb/shape-1.png";
import breadcrumb from "../assets/img/breadcrumb/breadcrumb-bg.jpg";
import viceprincipal from "../assets/img/DSC_1491.JPG";
import { message } from 'antd';




const Home = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [address, setAddress] = useState({});
  const [contact, setContact] = useState({});
  const [mailId, setMailId] = useState("");
  const [captchaValue, setCaptchaValue] = useState(null);
  const [user, setUser] = useState({
    first_name: "",
    email: "",
    phone: "",
    comments: "",
    department: "",
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState(""); // New state for success message

  useEffect(() => {
    getEmail();
    // getCompanyName();
    getAddress();
    getMobile();
    window.scrollTo(0, 0);
  }, []);

  const validateFields = () => {
    let validationErrors = {};
    if (!user.first_name) validationErrors.first_name = "Name is required.";
    if (!user.email) validationErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(user.email)) validationErrors.email = "Email is invalid.";
    if (!user.phone) validationErrors.phone = "Phone number is required.";
    else if (!/^\d{10}$/.test(user.phone)) validationErrors.phone = "Phone number must be 10 digits.";
    if (!user.comments) validationErrors.comments = "Message is required.";
    return validationErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });

    // Clear the error message for the field being edited
    setErrors({ ...errors, [name]: "" });
  };

  const onFinish = (e) => {
    e.preventDefault();
    const validationErrors = validateFields();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    if (!captchaValue) {
      return message.error("Please complete the CAPTCHA!");
    }

    api.post("/enquiry/insertEnquiry", user)
      .then((res) => {
        setSuccessMessage("Thank you for reaching out! Your message has been successfully submitted.");
        setUser({ first_name: "", email: "", phone: "", comments: "", department: "" });
        setCaptchaValue(null);
        message.success("Form submitted successfully!");

        // Call sendMail function to send the email after form submission
        sendMail();
      })
      .catch((err) => {
        message.error("An error occurred while submitting the form.");
        console.error(err);
      });
  };

  const sendMail = () => {
    if (user.first_name && user.email && user.phone) {
      const to = mailId.mailId;
      const dynamic_template_data = {
        first_name: user.first_name,
        email: user.email,
        comments: user.comments,
        phone: user.phone,
        department: user.department,
      };
      api.post("/contact/sendemail2", { to, dynamic_template_data })
        .then(() => {
          message.success("Thanks for contacting us. We will respond to your enquiry as soon as possible");
        })
        .catch((error) => {
          console.error("Email send error:", error);
        });
    }
  };

  const onCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  // Fetching functions
  const getEmail = async () => {
    try {
      const res = await api.get('/setting/getEmail');
      setMailId(res.data.data);
    } catch (error) {
      console.error("Error fetching email:", error);
    }
  };
  // const getCompanyName = async () => {
  //   try {
  //     const res = await api.get('/setting/getCompanyName');
  //     setCompanyName(res.data.data[0]);
  //   } catch (error) {
  //     console.error("Error fetching company name:", error);
  //   }
  // };
  const getAddress = async () => {
    try {
      const res = await api.get('/setting/getAddress');
      setAddress(res.data.data[0]);
    } catch (error) {
      console.error("Error fetching address:", error);
    }
  };
  const getMobile = async () => {
    try {
      const res = await api.get('/setting/getContacts');
      setContact(res.data.data[0]);
    } catch (error) {
      console.error("Error fetching contact:", error);
    }
  };

  const options = [
    { value: "1", label: "Select Subject" },
    { value: "2", label: "Art & Design" },
    { value: "3", label: "Graphic Design" },
    { value: "4", label: "Web Design" },
    { value: "5", label: "UX/UI Design" },
  ];

  return (
    <main>
      {/* breadcrumb area start */}
      <section
        className="breadcrumb-area bg-default"
        style={{ backgroundImage: `url(${breadcrumb})` }}
      >
        <img src={shape1} alt="" className="breadcrumb-shape" />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb-content">
                <h2 className="breadcrumb-title">Contact Us</h2>
                <div className="breadcrumb-list">
                  <a href="/">Home</a>
                  <span>Contact Us</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* breadcrumb area end */}
      
      {/* contact area start */}
      <section className="contact-area pt-120 pb-120">
        <div className="container">
          <div className="contact-wrap">
            <div className="row">
              <div className="col-xl-8 col-md-8">
                <div className="contact-content pr-80 mb-20">
                  <h3 className="contact-title mb-25">Send Me Message</h3>
                  <form action="#" className="contact-form" onSubmit={onFinish}>
                    <div className="row">
                      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-6">
                        <div className="contact-form-input mb-30">
                          <input
                            type="text"
                            name="first_name"
                            placeholder="Your Name"
                            value={user.first_name}
                            onChange={handleChange}
                          />
                          <span className="inner-icon">
                            <i className="fa-thin fa-user" />
                          </span>
                          {errors.first_name && <div className="error-message">{errors.first_name}</div>}
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-6">
                        <div className="contact-form-input mb-30">
                          <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={user.email}
                            onChange={handleChange}
                          />
                          <span className="inner-icon">
                            <i className="fa-thin fa-envelope" />
                          </span>
                          {errors.email && <div className="error-message">{errors.email}</div>}
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-6">
                        <div className="contact-form-input mb-30">
                          <input
                            type="text"
                            name="phone"
                            placeholder="Your Number"
                            value={user.phone}
                            onChange={handleChange}
                          />
                          <span className="inner-icon">
                            <i className="fa-thin fa-phone-volume" />
                          </span>
                          {errors.phone && <div className="error-message">{errors.phone}</div>}
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-6">
                        <div className="contact-form-input">
                          <Select
                            options={options}
                            value={selectedOption}
                            onChange={setSelectedOption}
                            className="contact-form-list has-nice-select mb-30"
                            classNamePrefix="react-select" // Helps with custom styling
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="contact-form-input mb-50 contact-form-textarea">
                          <textarea
                            name="comments"
                            cols={30}
                            rows={10}
                            placeholder="Feel free to get in touch!"
                            value={user.comments}
                            onChange={handleChange}
                          />
                          <span className="inner-icon">
                            <i className="fa-thin fa-pen" />
                          </span>
                          {errors.comments && <div className="error-message">{errors.comments}</div>}
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="contact-form-submit mb-30">
                          <div className="contact-form-btn">
                            <button type="submit" className="theme-btn contact-btn">
                              Send Message
                            </button>
                          </div>
                          <div className="contact-form-condition">
                            <label className="condition_label">
                              I agree that my data is collected and stored.
                              <input type="checkbox" />
                              <span className="check_mark" />
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-xl-4 col-md-4">
                <div className="contact-info ml-50 mb-20">
                  <h3 className="contact-title mb-40">Get In Touch</h3>
                  <div className="contact-info-item">
                    <span>
                      <i className="fa-thin fa-location-dot" />
                      Address
                    </span>
                    <p>{contact.address}</p>
                  </div>
                  <div className="contact-info-item">
                    <span>
                      <i className="fa-thin fa-phone-volume" />
                      Call Us
                    </span>
                    <p>{contact.phone}</p>
                  </div>
                  <div className="contact-info-item">
                    <span>
                      <i className="fa-thin fa-envelope" />
                      Email
                    </span>
                    <p>{contact.email}</p>
                  </div>
                <div className="contact-social">
                  <span>Social Media</span>
                  <ul>
                    <li>
                      <a href="https://www.instagram.com/einstein.college.official/">
                        <i className="fa-brands fa-twitter" />
                      </a>
                    </li>
                    <li>
  <a href="https://www.instagram.com/einstein.college.official/" target="_blank" rel="noopener noreferrer">
    <i className="fa-brands fa-instagram" />
  </a>
</li>

                    <li>
                      <a href="https://www.facebook.com/groups/743772275964912/">
                        <i className="fa-brands fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="https://in.linkedin.com/company/einstein-group-of-institutions">
                        <i className="fa-brands fa-linkedin-in" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-map">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.0463871792363!2d77.61511449999999!3d8.781706300000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04172f83872b1b%3A0x67a9b18efadc58db!2sEinstein%20College%20of%20Arts%20and%20Science!5e0!3m2!1sen!2sin!4v1738520625459!5m2!1sen!2sin"
    width="600"
    height="450"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

    </section>
  </main>
  );
};

export default Home;
