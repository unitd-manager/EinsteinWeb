import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import shape1 from "../assets/img/breadcrumb/shape-1.png";
import breadcrumb from "../assets/img/breadcrumb/breadcrumb-bg.jpg";
import api from "../constants/api";

const Login = () => {
  const [signinData, setSigninData] = useState({
    email: "",
    pass_word: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // const history = useHistory();
  const navigate = useNavigate();
  const validateEmail = (email) => {
    // Email validation regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validatePassword = (password) => {
    // Password validation regex pattern
    const passwordPattern =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    return passwordPattern.test(password);
  };
  const handleSigninData = (e) => {
    setSigninData({ ...signinData, [e.target.name]: e.target.value });
    console.log("signin", signinData);
  };
  const signin = (event) => {
    event.preventDefault();
    setEmailError("");
    setPasswordError("");

    if (!validateEmail(email)) {
      setEmailError("Invalid email");
    }

    if (!validatePassword(password)) {
      setPasswordError(
        "Please check your email and password and try again."
      );
    }

    if (validateEmail(email) && validatePassword(password)) {
      const credentials = {
        email: email,
        pass_word: password, // Ensure the correct field name as expected by the backend
      };
     
      // getLogin(credentials);
     
      // navigate("/");
      
  
      api
        .post("/api/loginTeacher", credentials)
        .then((res) => {
          if (res && res.status === 400) {
            alert("Invalid Username or Password");
          } else {
            localStorage.setItem("teacheruser", JSON.stringify(res.data.data));
            localStorage.setItem("teachertoken", JSON.stringify(res.data.token));
            navigate("/StudentList");
          }
        })
        .catch(() => {
          alert("Invalid Username or Password");
        });
    }
  };

  return (
    <>
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
                  <h2 className="breadcrumb-title">Sign In</h2>
                  <div className="breadcrumb-list">
                    <Link to="/Home">Home</Link>
                    <span>Teacher Login</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* breadcrumb area end */}
        {/* sign in area start */}
        <div className="account-area pt-120 pb-120">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-8 col-md-10">
                <div className="account-wrap">
                  <div className="account-top">
                    <div className="account-top-current">
                      <span>Sign In</span>
                    </div>
                  </div>
                  <div className="account-main">
                    <h3 className="account-title">
                      Sign in to Your Account 👋
                    </h3>
                    <form action="#" className="account-form">
                      <div className="account-form-item mb-20">
                        <div className="account-form-label">
                          <label>Your Email</label>
                        </div>
                        <div className="account-form-input">
                          <input
                            type="email"
                            name="email"
                            placeholder="Enter Your Email"
                            onChange={(e) => {
                              handleSigninData(e);
                              setEmail(e.target.value);
                            }}
                          />
                        </div>
                        {emailError && (
                          <span className="error">{emailError}</span>
                        )}
                      </div>
                      <div className="account-form-item mb-15">
  <div className="account-form-label">
    <label>Your Password</label>
    {/* <a href="#">Forgot Password ?</a> */}
  </div>
  <div className="account-form-input account-form-input-pass" style={{ position: "relative" }}>
    <input
      type={showPassword ? "text" : "password"} // Toggle input type
      name="pass_word"
      placeholder="*********"
      onChange={(e) => {
        handleSigninData(e);
        setPassword(e.target.value);
      }}
    />
    <span
      style={{ position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)", cursor: "pointer" }}
      onClick={() => setShowPassword(!showPassword)}
    >
      <i className={showPassword ? "fa fa-eye":"fa fa-eye-slash"} />
    </span>
  </div>
  {passwordError && <span className="error">{passwordError}</span>}
</div>
                      <div className="account-form-condition">
                        {/* <label className="condition_label">
                          Remember Me
                          <input type="checkbox" />
                          <span className="check_mark" />
                        </label> */}
                      </div>
                      <div className="account-form-button">
                        <button
                          type="submit"
                          className="account-btn"
                          onClick={signin}
                        >
                          Sign In
                        </button>
                      </div>
                    </form>
                    {/* <div className="account-break">
                  <span>OR</span>
                </div>
                <div className="account-bottom">
                  <div className="account-option">
                    <a href="#" className="account-option-account">
                      <img src="assets/img/bg/google.png" alt="" />
                      <span>Google</span>
                    </a>
                    <a href="#" className="account-option-account">
                      <img src="assets/img/bg/apple.png" alt="" />
                      <span>Apple</span>
                    </a>
                    <a href="#" className="account-option-account">
                      <img src="assets/img/bg/facebook.png" alt="" />
                      <span>Facebook</span>
                    </a>
                  </div>
                  <div className="account-bottom-text">
                    <p>
                      Don’t have an account ?{" "}
                      <a href="sign-up.html">Sign Up for free</a>
                    </p>
                  </div>
                </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
