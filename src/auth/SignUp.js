import React, { useState,useEffect} from "react";
import { Link,useNavigate } from 'react-router-dom';
import api from "../constants/api";
import shape1 from '../assets/img/breadcrumb/shape-1.png'
import breadcrumb from '../assets/img/breadcrumb/breadcrumb-bg.jpg'

const SignUp = () => {

  const navigate = useNavigate();

  const [signupData, setSignupData] = useState({
    student_name: "",
    last_name: "",
    email: "",
    pass_word: "",
    father_mobile_number:"",
    payment_status:"Register",
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
  const [showPassword, setShowPassword] = useState(false);

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
    signupData.payment_status = "Register";
    setLoading(true);
    
    try {
      const res = await api.post("/api/registerStudent", signupData);
      console.log("Email:", signupData.email);
  
      // ✅ Send email to the user (after successful registration)
      await api.post("/commonApi/sendUseremailSignUp", {
        to: signupData.email,
        password: signupData.pass_word,
      });
  
      // ✅ Redirect
      setTimeout(() => {
        navigate("/Login");
      }, 300);
    } catch (err) {
      console.error("Error during registration:", err);
      if (err.response?.data?.errorCode === 'DUPLICATE_EMAIL') {
        setErrors({ email: "This email is already registered." });
      } else {
        // Optional: Handle other errors
      }
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
                      <label>First Name</label>
                    </div>
                    <div className="account-form-input">
                      <input type="text" name="student_name" placeholder="First Name"  value={signupData.student_name}
                      onChange={handleChange}/>
                    </div>
                    {errors.student_name && (
                      <span className="error">{errors.student_name}</span>
                    )}
                  </div>
                  <div className="account-form-item mb-20">
                    <div className="account-form-label">
                      <label>Last Name</label>
                    </div>
                    <div className="account-form-input">
                      <input type="text" name="last_name" placeholder="Last Name"  value={signupData.last_name}
                      onChange={handleChange}/>
                    </div>
                    {errors.last_name && (
                      <span className="error">{errors.last_name}</span>
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
  <div className="account-form-input account-form-input-pass" style={{ position: "relative" }}>
    <input
      type={showPassword ? "text" : "password"} // Toggle input type
      name="pass_word"
      placeholder="*********"
      onChange={handleChange}
    />
    <span
      style={{ position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)", cursor: "pointer" }}
      onClick={() => setShowPassword(!showPassword)}
    >
      <i className={showPassword ? "fa fa-eye":"fa fa-eye-slash"} />
    </span>
  </div>
  {errors.pass_word && (
                      <span className="error">Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, special character, and one number</span>
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
    {/* <div className="cta-area">
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
    </div> */}
    {/* cta area end */}
  </main>

   </>
  );
};

export default SignUp;
