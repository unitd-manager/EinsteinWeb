import React, { useState,useEffect} from "react";
import { Link,useNavigate } from 'react-router-dom';
import api from "../constants/api";
import shape1 from '../assets/img/breadcrumb/shape-1.png'
import breadcrumb from '../assets/img/breadcrumb/breadcrumb-bg.jpg'

const SignUp = () => {


  const navigate = useNavigate();

  const [signupData, setSignupData] = useState({
    student_name: "",
    email: "",
    pass_word: "",
    father_mobile_number:"",
    // alternate_number:"",
    // address1: "",
    // address_city: "",
    // address_state: "",
    // address_country_code: "",
    // address_po_code: "",
    // otp_no: "",
  });

  const [errors, setErrors] = useState({});
  const [mailId, setMailId] = useState("");
  const [loading, setLoading] = useState(false);

  const generateOTP = () => {
    const min = 1000;
    const max = 9999;
    const otp = Math.floor(Math.random() * (max - min + 1)) + min;
    setSignupData((prev) => ({ ...prev, otp_no: otp.toString() }));
  };

  const getEmail = async () => {
    try {
      const res = await api.get("/setting/getMailId");
      setMailId(res.data.data[0]?.email || "");
    } catch (err) {
      console.error("Error fetching mail ID:", err);
    }
  };

  const validateField = (name, value) => {
    const patterns = {
      // first_name: /^[a-zA-Z\s]+$/,
      // last_name: /^[a-zA-Z\s]+$/,
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      pass_word: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/,
      // address_po_code: /^\d{5,6}$/, // Supports 5 or 6-digit PIN codes
    };
    if (patterns[name]) return patterns[name].test(value);
    return value.trim() !== ""; // For fields without specific patterns
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupData({ ...signupData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear errors on input change
  };

  const validateForm = () => {
    const newErrors = {};
    Object.entries(signupData).forEach(([key, value]) => {
      if (key !== "otp_no" && !validateField(key, value)) {
        newErrors[key] = `Invalid ${key.replace("_", " ")}`;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      const res = await api.post("/api/registerStudent", signupData);
      console.log("Registration successful:", res.data.data);

      // Send email to the user
      await api.post("/commonApi/sendUseremail", {
        to: signupData.email,
        subject: "Registration",
        
      });
      setTimeout(() => {
        navigate("/Login");
      }, 300);

      // Send a copy to the admin
      await api.post("/commonApi/sendregisteremail", {
        to: mailId,
        text: JSON.stringify(signupData),
        subject: "New User Registration",
        dynamic_template_data: {
          student_name: signupData.student_name,
          email: signupData.email,
          pass_word: signupData.pass_word,
        },
      });

      // // Navigate to verification page
      // navigate(`/register-verification/${signupData.email}`, {
      //   state: { otpNo: signupData.otp_no },
      // });
      setTimeout(() => {
        navigate("/");
      }, 300);
    } catch (err) {
      console.error("Error during registration:", err);
      setErrors({ email: "This email is already registered." });
    } finally {
      setLoading(false);
    }
  };
  
  const [allcountries, setallCountries] = useState();
  const getAllCountries = () => {
    api
      .get("/commonApi/getCountry")
      .then((res) => {
        setallCountries(res.data.data);
      })
      .catch(() => {});
  };

  useEffect(() => {
    getAllCountries();
  }, []);

  useEffect(() => {
    getEmail();
    generateOTP();
  }, []);

  return (
   <>
     <main>
    {/* breadcrumb area start */}
    <section
      className="breadcrumb-area bg-default"
      style={{ backgroundImage: `url(${breadcrumb})`,}}
    >
      <img
        src={shape1}
        alt=""
        className="breadcrumb-shape"
      />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="breadcrumb-content">
              <h2 className="breadcrumb-title">Sign Up</h2>
              <div className="breadcrumb-list">
                <Link to ="index.html">Home</Link>
                <span>Sign Up</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* breadcrumb area end */}
    {/* sign up area start */}
    <div className="account-area pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-8 col-md-10">
            <div className="account-wrap">
              <div className="account-top sign-up">
                <div className="account-top-current">
                  <span>Sign Up</span>
                </div>
                <div className="account-top-link">
                  <Link to="/Login">Sign In</Link>
                </div>
              </div>
              <div className="account-main">
                <h3 className="account-title">Sign in to Your Account 👋</h3>
                <form onSubmit={handleSubmit} className="account-form">
                  <div className="account-form-item mb-20">
                    <div className="account-form-label">
                      <label>Student Name</label>
                    </div>
                    <div className="account-form-input">
                      <input type="text" name="student_name" placeholder="Student Name"  value={signupData.student_name}
                      onChange={handleChange}/>
                    </div>
                    {errors.student_name && (
                      <span className="error">{errors.student_name}</span>
                    )}
                  </div>
                  {/* <div className="account-form-item mb-20">
                    <div className="account-form-label">
                      <label>Last Name</label>
                    </div>
                    <div className="account-form-input">
                      <input type="text" name="last_name" placeholder="Last Name"   value={signupData.last_name}
                      onChange={handleChange}/>
                    </div>
                    {errors.last_name && (
                      <span className="error">{errors.last_name}</span>
                    )}
                  </div> */}
                  <div className="account-form-item mb-20">
                    <div className="account-form-label">
                      <label>Your Email</label>
                    </div>
                    <div className="account-form-input">
                      <input type="email" name="email" placeholder="Enter Your Email"  value={signupData.email}
                      onChange={handleChange}/>
                    </div>
                    {errors.email && <span className="error">{errors.email}</span>}
                  </div>
                  <div className="account-form-item mb-15">
                    <div className="account-form-label">
                      <label>Your Password</label>
                    </div>
                    <div className="account-form-input account-form-input-pass">
                      <input type="text" name="pass_word" placeholder="*********" value={signupData.pass_word}
                      onChange={handleChange} />
                      <span>
                        <i className="fa-thin fa-eye" />
                      </span>
                    </div>
                    {errors.pass_word && (
                      <span className="error">{errors.pass_word}</span>
                    )}
                  </div>
                  <div className="account-form-item mb-20">
                    <div className="account-form-label">
                      <label>Mobile Number</label>
                    </div>
                    <div className="account-form-input">
                      <input type="text" name="father_mobile_number" placeholder="Enter Your Mobile Number"  value={signupData.father_mobile_number}
                      onChange={handleChange}/>
                    </div>
                    {errors.father_mobile_number && (
                      <span className="error">{errors.father_mobile_number}</span>
                    )}
                  </div>
                  {/* <div className="account-form-condition">
                    <label className="condition_label">
                      Remember Me
                      <input type="checkbox" />
                      <span className="check_mark" />
                    </label>
                  </div> */}
                  <div className="account-form-button">
                        <button type="submit" className="account-btn" disabled={loading}>
                          {loading ? "Signing Up..." : "Sign Up"}
                        </button>
                      </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* sign up area end */}
    {/* cta area start */}
    <div className="cta-area">
      <div className="container">
        <div className="cta-wrapper">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="cta-content mb-30 mb-lg-0">
                <span className="cta-subtitle">Download App</span>
                <h2 className="cta-title">
                  Are you Ready to Start your Online Course?
                </h2>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="cta-button">
                <a href="#" className="cta-btn">
                  <i className="fa-brands fa-apple" />
                  Apple Store
                </a>
                <a href="#" className="cta-btn">
                  <i className="fa-brands fa-google-play" />
                  Play Store
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* cta area end */}
  </main>

   </>
  );
};

export default SignUp;
