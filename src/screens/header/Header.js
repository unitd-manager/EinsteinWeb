import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PDFDownloadLink } from '@react-pdf/renderer';
import logoImage from "../../assets/img/logoImage.webp";
import Marquee from "react-fast-marquee";
import Navbar from "./NavMenu";
import { getUser, getTeacherUser } from "../../auth/user";
import api from "../../constants/api";
import Marquees from "../Marquees";
import ApplicationAckPdf from "../AcknowledgementPdf.js";

const Home = () => {
  const user = getUser();
  const teacherUser = getTeacherUser();
  const [ApplicationPaid, setPaid] = useState();

  const navigate = useNavigate();

  const application = {
    name: "Mohammed Navab",
    email: "rafi@unitdtechnologies.com",
    id: "APP123456",
    date: new Date().toLocaleDateString(),
  };

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
    if (user) {
      navigate('/Student');
    } else {
      navigate('/StudentList');
    }
  };

  const editstudentAppicationPaid = () => {
    const studentAppicationPaid = {
      payment_status: "Application Paid",
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
    editstudentAppicationPaid();
  };

  const handlePaymentFailure = (error) => {
    console.error("Payment Failed:", error);
  };

  const onPaymentPress = () => {
    if (ApplicationPaid === "Application Paid") {
      navigate('/Application');
      return;
    }

    if (!user) {
      navigate('/Login');
      return;
    }

    const totalAmount = 200;
    const amountInPaise = totalAmount * 100;

    if (!window.Razorpay) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const options = {
      key: "rzp_test_yE3jJN90A3ObCp",
      amount: amountInPaise,
      currency: "INR",
      name: "United",
      description: "Application Fee",
      handler: handlePaymentSuccess,
      prefill: {
        name: "Mohammed Navab",
        email: "rafi@unitdtechnologies.com",
        contact: "9750792020",
      },
      notes: { address: "Corporate Office" },
      theme: { color: "#532C6D" },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
    rzp.on("payment.failed", handlePaymentFailure);
  };

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
                  <a><i className="fa-solid fa-grid"></i><span>Login</span></a>
                  <ul className="h2_header-category-submenu">
                    <li><Link to="/StudentLogin">Student Login</Link></li>
                    <li><Link to="/Login">Application Form</Link></li>
                    <li><Link to="/TeacherLogin">Teacher Login</Link></li>
                  </ul>
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
                  <i className="fas fa-sign-out-alt" style={{ fontSize: '14px', cursor: 'pointer', color: 'red' }} onClick={logout}></i>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="offcanvas-overlay" />

      {/* Header */}
      <header>
        <div className="h2_header-area header-sticky">
          <div className="row align-items-center">
            <div className="col-6 col-xl-3">
              <div className="h2_header-left">
                <div className="h2_header-logo">
                  <a href="/Home">
                    <img src={logoImage} alt="logo" />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-xl-6 d-none d-xl-block">
              <Navbar />
            </div>

            <div className="col-xl-3 d-none d-xl-block text-end">
              <div className="h2_header-btns">
                {!user && !teacherUser ? (
                  <>
                    <div className="h2_header-category d-sm-block">
                      <a><i className="fa-solid fa-grid"></i><span>Login</span></a>
                      <ul className="h2_header-category-submenu">
                        <li><Link to="/StudentLogin">Student Login</Link></li>
                        <li><Link to="/Login">Application Form</Link></li>
                        <li><Link to="/TeacherLogin">Teacher Login</Link></li>
                      </ul>
                    </div>
                    <div className="h2_header-btn d-sm-block" style={{ marginTop: 15 }}>
                      <Link to="#" onClick={onPaymentPress} className="header-btn theme-btn theme-btn-medium">
                        Application
                      </Link>
                    </div>
                  </>
                ) : (
                  <>
                    {ApplicationPaid !== "Selected" && !teacherUser && (
                      <div className="h2_header-btn d-none d-sm-block" style={{ marginRight: 23 }}>
                        <Link to="#" onClick={onPaymentPress} className="header-btn theme-btn theme-btn-medium">
                          Application
                        </Link>
                      </div>
                    )}
                    {(ApplicationPaid === "Selected" || teacherUser) && (
                      <div className="h2_header-btn d-none d-sm-block" style={{ marginRight: 23 }}>
                        <Link to="#" onClick={StudentDetails} className="header-btn theme-btn theme-btn-medium">
                          Student
                        </Link>
                      </div>
                    )}
                    <div className="h2_header-btn d-none d-sm-block" title="Logout" style={{ marginRight: 23 }}>
                      <i className="fas fa-sign-out-alt" style={{ fontSize: '14px', cursor: 'pointer', color: 'red' }} onClick={logout}></i>
                    </div>
                  </>
                )}
              </div>
            </div>

             {/* Hamburger Menu for Mobile */}
      <div className="col-6 text-end d-xl-none">
        <div className="header-menu-bar">
          <span className="header-menu-bar-icon side-toggle">
            <i className="fa-solid fa-bars" style={{ fontSize: "24px", cursor: "pointer", color: "#333" }} />
          </span>
        </div>
      </div>
    </div>
  </div>
      </header>

      {/* PDF Download Link */}
      <PDFDownloadLink
        document={<ApplicationAckPdf application={application} />}
        fileName={`Application_Acknowledgment_${application.id}.pdf`}
      >
        {({ loading }) => loading ? 'Generating PDF...' : 'Download Acknowledgment'}
      </PDFDownloadLink>

      {/* Marquees */}
      <Marquees />
      <div style={{ backgroundColor: 'red', color: 'white' }}>
        <Marquee gradient={false} speed={50}>
          📢 Admissions Open for 2025 | 🎓 Enroll Now in B.Sc, B.A, B.Com, B.B.A, B.C.A Programs | 🌐 Industry-Relevant Curriculum | 🏆 Experienced Faculty | 💼 100% Placement Assistance | 📝 Apply Online Today | 📞 Call Now for Counseling & Scholarships!
        </Marquee>
      </div>
    </>
  );
};

export default Home;
