import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PDFDownloadLink } from '@react-pdf/renderer';
import logoImage from "../../assets/img/Logopng.png";
import logoImage2 from "../../assets/img/founderLogo.png";
import Marquee from "react-fast-marquee";
import Navbar from "./NavMenu";
import { getUser, getTeacherUser } from "../../auth/user";
import api from "../../constants/api";
import Marquees from "../Marquees";
import "../../assets/css/modal.css"
import ApplicationAckPdf from "../AcknowledgementPdf.js";

const Home = () => {
  const user = getUser();
  const teacherUser = getTeacherUser();
  const [ApplicationPaid, setPaid] = useState();
  const [marquee, setMarquee] = useState([]);

  const navigate = useNavigate();

  const application = {
    name: "Mohammed Navab",
    email: "rafi@unitdtechnologies.com",
    id: "APP123456",
    date: new Date().toLocaleDateString(),
  };

  useEffect(() => {
    api
      .get("/content/getMarquee")
      .then((res) => {
        setMarquee(res.data.data[0]);
      })
      .catch((err) => {
        console.error("Error fetching  details:", err);
      });
  }, []);

  useEffect(() => {
    if (user?.student_id) {
      api.post('/student/getStudentById', { student_id: user.student_id })
        .then(res => {
          setPaid(res.data.data[0]?.payment_status);
        })
        .catch(err => {
          console.error('Error fetching student data:', err);
        });
    }
  }, [user]);

  const logout = () => {
    localStorage.clear();
    setTimeout(() => {
      window.location.reload();
    }, 200);
  };

  const StudentDetails = () => {
    if(user){
      setTimeout(() => {
        navigate('/Student');
      }, 200);

    }else{
      setTimeout(() => {
        navigate('/StudentList');
      }, 200);
    }
};

  const editstudentAppicationPaid = (code) => {
    console.log('code1',code)
    const studentAppicationPaid = {
      payment_status: "Application Paid",
      application_no: code,
      student_id: user?.student_id
    };
    api.post("/student/editStudentApplicationPaid", studentAppicationPaid)
      .then(() => {
        alert("Record edited successfully");
        navigate('/Application');
      })
      .catch(() => {
        alert("Unable to edit record.");
      });
  };

  const handlePaymentSuccess = (data) => {
    console.log("Payment Successful:", data);
    api.post('/commonApi/getCodeValue', { type: 'studentApplication' })
    .then((res) => {
      console.log('Full response:', res);
      console.log('Extracted code:', res.data.data);
      editstudentAppicationPaid(res.data.data); // Check this value
    })
    .catch((err) => {
      console.error("Error generating code:", err);
    });
  
  };

  const handlePaymentFailure = (error) => {
    console.error("Payment Failed:", error);
  };

  const onPaymentPress = () => {
    if(ApplicationPaid === "Application Paid"){
      setTimeout(() => {
        navigate('/Application');
      }, 0);
  
    }else{
  
        if (!user) {
          setTimeout(() => {
            navigate('/Login');
          }, 0);
          console.log("mmsmsmsm")
          return;
        }

        api.post('/commonApi/getCodeValue', { type: 'studentApplication' })
        .then((res) => {
          console.log('Full response:', res);
          console.log('Extracted code:', res.data.data);
          editstudentAppicationPaid(res.data.data); // Check this value
        })
        .catch((err) => {
          console.error("Error generating code:", err);
        });
  
        // const totalAmount = 200;
        // const amountInPaise = totalAmount * 100;
  
        // const options = {
        //   key: "rzp_test_yE3jJN90A3ObCp", // Replace with your Razorpay test/live key
        //   key_secret: "tt8BnBOG7yRvYZ6TSB28RXJy",
        //   amount: amountInPaise,
        //   currency: "INR",
        //   name: "United",
        //   description: "Application Fee",
        //   image: "",
        //   handler: handlePaymentSuccess,
        //   prefill: {
        //     name:"Mohammed Navab",
        //     email:"rafi@unitdtechnologies.com",
        //     contact:"9750792020",
        //   },
        //   notes: {
        //     address: "Corporate Office",
        //   },
        //   theme: {
        //     color: "#532C6D",
        //   },
        // };
  
        // const rzp = new window.Razorpay(options);
        // rzp.open();
        // rzp.on("payment.failed", handlePaymentFailure);
      };
    }

  useEffect(() => {
    const menuToggle = document.querySelector(".header-menu-bar-icon");
    const sidebar = document.querySelector(".sidebar-info");
    const overlay = document.querySelector(".offcanvas-overlay");
    const closeBtn = document.querySelector(".sidebar-close");

    const openSidebar = () => {
      sidebar.classList.add("info-open");
      overlay.classList.add("overlay-open");
    };

    const closeSidebar = () => {
      sidebar.classList.remove("info-open");
      overlay.classList.remove("overlay-open");
    };

    if (menuToggle && sidebar && overlay && closeBtn) {
      menuToggle.addEventListener("click", openSidebar);
      closeBtn.addEventListener("click", closeSidebar);
      overlay.addEventListener("click", closeSidebar);

      const sidebarClickHandler = (e) => {
        if (e.target.closest("a") || e.target.closest("button")) {
          closeSidebar();
        }
      };
      sidebar.addEventListener("click", sidebarClickHandler);

      return () => {
        menuToggle.removeEventListener("click", openSidebar);
        closeBtn.removeEventListener("click", closeSidebar);
        overlay.removeEventListener("click", closeSidebar);
        sidebar.removeEventListener("click", sidebarClickHandler);
      };
    }
  }, []);
  const [showLoginDropdown, setShowLoginDropdown] = useState(false);

  return (
    <>
      {/* Sidebar */}
      <div className="sidebar-info side-info">
        <div className="sidebar-logo-wrapper mb-25">
          <div className="row align-items-center">
            <div className="col-8">
              <div className="sidebar-logo">
                <a href="/Home">
                  <img src={logoImage} alt="logo" />
                </a>
              </div>
            </div>
            <div className="col-4 text-end">
              <button className="sidebar-close side-info-close">
                <i className="fal fa-times" />
              </button>
            </div>
          </div>
        </div>

        <div className="sidebar-menu-wrapper fix">
          <Navbar />
          <div className="sidebar-links">
            {!user && !teacherUser ? (
              <>
               <div className="h2_header-category d-sm-block">
  <a onClick={() => setShowLoginDropdown(!showLoginDropdown)} style={{ cursor: 'pointer' }}>
    <i className="fa-solid fa-grid"></i><span>Login</span>
  </a>
  {showLoginDropdown && (
    <ul className="h2_header-category-submenu">
      <li><Link to="/StudentLogin">Student Login</Link></li>
      <li><Link to="/Login">Application Form</Link></li>
      <li><Link to="/TeacherLogin">Teacher Login</Link></li>
    </ul>
  )}
</div>

                <div className="h2_header-btn d-sm-block" style={{ marginLeft: 75 }}>
                  <Link to="#" onClick={onPaymentPress} className="header-btn theme-btn theme-btn-medium">
                    Application
                  </Link>
                </div>
              </>
            ) : (
              <>
                {ApplicationPaid !== "Selected" && !teacherUser && (
                  <div className="h2_header-btn d-sm-block" style={{ marginTop: 15 }}>
                    <Link to="#" onClick={onPaymentPress} className="header-btn theme-btn theme-btn-medium">
                      Application
                    </Link>
                  </div>
                )}
                {(ApplicationPaid === "Selected" || teacherUser) && (
                  <div className="h2_header-btn d-sm-block" style={{ marginTop: 15 }}>
                    <Link to="#" onClick={StudentDetails} className="header-btn theme-btn theme-btn-medium">
                      Student
                    </Link>
                  </div>
                )}
                <div className="h2_header-btn d-sm-block" title="Logout" style={{ marginTop: 15 }}>
                  <i className="fas fa-sign-out-alt" style={{ fontSize: '14px', cursor: 'pointer', color: 'white' }} onClick={logout}></i>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="offcanvas-overlay" />

      {/* Header */}
      <header>
        <div className="header-sticky">
        <div style={{ backgroundColor: '#58213f', color: 'white' }}>
    <div className="container d-flex justify-content-between align-items-center py-2 flex-wrap">
    <div className="d-none d-xl-flex col-xl-8">
          <span className="me-4">
            <i className="fa fa-envelope me-2"></i> Email: info@einstein.com
          </span>
          <span>
            <i className="fa fa-phone-volume me-2"></i> Call Us: (+91) 9489903808
          </span>
        </div>

        <div className="col-xl-2 d-none d-xl-block text-end">
                <div className="">
                  {!user && !teacherUser ? (
                    <>
                      <div className="h2_header-btn d-sm-block" style={{ float:"right" }} >
                        <Link to="#" onClick={onPaymentPress} className="header-btn theme-btn theme-btn-medium application">
                          Application
                        </Link>
                      </div>
                      <div className="h2_header-category d-sm-block" style={{ float:"right" }}>
                        <a><i className="fa-solid fa-grid"></i><span style={{ color:"white" }} >Login</span></a>
                        <ul className="h2_header-category-submenu">
                          <li><Link to="/StudentLogin">Student Login</Link></li>
                          <li><Link to="/Login">Application Form</Link></li>
                          <li><Link to="/TeacherLogin">Teacher Login</Link></li>
                        </ul>
                      </div>
                    
                    </>
                  ) : (
                    <>
                      <div className="h2_header-btn d-none d-sm-block" title="Logout" style={{ marginRight: 23, float:"right" }}>
                        <i className="fas fa-sign-out-alt" style={{ fontSize: '14px', cursor: 'pointer', color: 'white' }} onClick={logout}></i>
                      </div>
                      {ApplicationPaid !== "Selected" && !teacherUser && (
                        <div className="h2_header-btn d-none d-sm-block" style={{ marginRight: 23, float:"right" }}>
                          <Link to="#" onClick={onPaymentPress} className="header-btn theme-btn theme-btn-medium">
                            Application
                          </Link>
                        </div>
                      )}
                      {(ApplicationPaid === "Selected" || teacherUser) && (
                        <div className="h2_header-btn d-none d-sm-block" style={{ marginRight: 23, float:"right" }}>
                          <Link to="#" onClick={StudentDetails} className="header-btn theme-btn theme-btn-medium">
                            Student
                          </Link>
                        </div>
                      )}
                    </>
                  )}
                </div>
      </div>
        {/* Mobile Contact Info */}
        <div className="col-12">
        <div className="col-9" style={{float:'left'}}>
            <div className="d-flex d-xl-none flex-column w-100 mb-2">
              <span className="mb-1">
                <i className="fa fa-envelope me-2"></i> Email: info@einstein.com
              </span>
              <span>
                <i className="fa fa-phone-volume me-2"></i> Call Us: (+91) 9489903808
              </span>
            </div>
        </div>
            <div className="col-3 text-end d-xl-none" style={{float:'left'}}>
              <div className="header-menu-bar">
                <span className="header-menu-bar-icon side-toggle">
                  <i className="fa-solid fa-bars" style={{ fontSize: "24px", cursor: "pointer", color: "#fff" }} />
                </span>
              </div>
            </div>
        </div>
    </div>
  </div>
       <div className="headerpg">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-6 col-xl-2">
                <div className="h2_header-left">
                  <div className="h2_header-logo" style={{ paddingTop: '10px', paddingBottom: '10px' }}>
                    <a href="/#/">
                      <img src={logoImage} alt="logo" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-8 content-center">
              <div className=""  style={{ color: '#58213f', fontSize: 20, fontWeight: 'bold' ,marginBottom:10,color:'#f7951e'}}>
                  <span>“யாதும் ஊரே யாவரும் கேளிர்”</span>
                </div>
                <div className=""  style={{ color: '#58213f', fontSize: 35, fontWeight: 'bold',marginBottom:10, fontFamily:'Georgia'}} >
                  <span>EINSTEIN COLLEGE OF ARTS & SCIENCE</span>
                </div>
                <div className=""  style={{ color: '#58213f' }}>
                  Sir C.V.Raman Nagar, Tirunelveli - 627012, <br></br>
                  (Affiliated to Manonmaniam Sundaranar University) 
                </div>
              </div>
              <div className="col-xl-2 d-none d-xl-block text-end">
              <div className="h2_header-left">
                  <div className="h2_header-logo" style={{ paddingTop: '10px', paddingBottom: '10px' }}>
                    <a href="/Home">
                      <img src={logoImage2} alt="logo" height={150}/>
                    </a>
                  </div>
                </div>
                </div>
            
            </div>
          </div>
          </div>
          <div className="row align-items-center">
            <div className="col-xl-12 d-none d-xl-block content-center">
              <Navbar />
            </div>
            {/* Hamburger Menu for Mobile */}
          </div>
        </div>
      </header>

      {/* <PDFDownloadLink
        document={<ApplicationAckPdf application={application} />}
        fileName={`Application_Acknowledgment_${application.id}.pdf`}
      >
        {({ loading }) => loading ? 'Generating PDF...' : 'Download Acknowledgment'}
      </PDFDownloadLink> */}

      {/* Marquees */}
      {/* <Marquees /> */}
      {/* <div style={{ backgroundColor: '#58213f', color: 'white' }}>
        <Marquee gradient={false} speed={50}>
          <Link to="/Application"> {marquee?.description_short}</Link>
       
        </Marquee>
      </div> */}
    </>
  );
};

export default Home;
