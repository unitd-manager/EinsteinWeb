import React, { useEffect,useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import logoImage from "../../assets/img/logoImage.webp";
import Navbar from "./NavMenu";
import { getUser } from "../../auth/user";
import { getTeacherUser } from "../../auth/user";
import api from "../../constants/api";
import Marquee from "../Marquee";

const Home = () => {
  const user = getUser();
  const teacherUser = getTeacherUser();
  const [ApplicationPaid, setPaid] = useState();


console.log('ApplicationPaid',ApplicationPaid)
 

  const navigate = useNavigate();


  useEffect(() => {
 
  api.post('/student/getStudentById', { student_id: user?.student_id })
  .then(res => {
    setPaid(res.data.data[0]?.payment_status)
  })
  .catch(err => {
    console.error('Error fetching student data:', err);
  });
  
}, []);


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

  const editstudentAppicationPaid = () => {

    const studentAppicationPaid = {
      payment_status: "Application Paid",
      student_id :user?.student_id
    };
     
      api
        .post("/student/editStudentApplicationPaid", studentAppicationPaid)
        .then(() => {
          alert("Record edited successfully", "success");
          navigate('/Application');
        })
        .catch(() => {
          alert("Unable to edit record.", "error");
        })
       
  };

  const handlePaymentSuccess = (data) => {
    console.log("Payment Successful:", data);
    editstudentAppicationPaid()
  
   
    // history('/order-success');
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
    
      const totalAmount = 200;
      const amountInPaise = totalAmount * 100;
    
      const options = {
        key: "rzp_test_yE3jJN90A3ObCp", // Replace with your Razorpay test/live key
        key_secret: "tt8BnBOG7yRvYZ6TSB28RXJy",
        amount: amountInPaise,
        currency: "INR",
        name: "United",
        description: "Application Fee",
        image: "",
        handler: handlePaymentSuccess,
        prefill: {
          name:"Mohammed Navab",
          email:"rafi@unitdtechnologies.com",
          contact:"9750792020",
        },
        notes: {
          address: "Corporate Office",
        },
        theme: {
          color: "#532C6D",
        },
      };
    
      const rzp = new window.Razorpay(options);
      rzp.open();
      rzp.on("payment.failed", handlePaymentFailure);
    };
  }
  
  

  return (
    <>
      {/* sidebar-information-area-start */}
      <div className="sidebar-info side-info">
        <div className="sidebar-logo-wrapper mb-25">
          <div className="row align-items-center">
            <div className="col-xl-6 col-8">
              <div className="sidebar-logo">
                <a href="index.html">
                  <img src={logoImage} alt="logo-img" />
                </a>
              </div>
            </div>
            <div className="col-xl-6 col-4">
              <div className="sidebar-close-wrapper text-end">
                <button className="sidebar-close side-info-close">
                  <i className="fal fa-times" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="sidebar-menu-wrapper fix">
          <div className="mobile-menu" />
        </div>
      </div>
      <div className="offcanvas-overlay" />
      {/* sidebar-information-area-end */}
      {/* header area start */}
      <header>
        <div className="h2_header-area header-sticky">
          <div className="">
            <div className="row align-items-center">
              <div className="col-xl-2 col-sm-7 col-6" >
                <div className="h2_header-left">
                  <div className="h2_header-logo">
                    <a href="/Home">
                      <img src={logoImage} alt="" />
                    </a>
                  </div>
                
                </div>
              </div>
             
              <Navbar />
          
                      
              {!user && !teacherUser ? (
               
                <div class="col-xl-2 col-sm-7 col-6">
                <div class="h2_header-left">
                <div className ="h2_header-category d-none d-sm-block" >
                        <a><i class="fa-solid fa-grid"></i><span>Login</span></a>
                        <ul class="h2_header-category-submenu">
                            <li><Link to="/Login">Application Form</Link></li>
                            <li><Link to="/StudentLogin">Student Login</Link></li>
                            <li><Link to="/TeacherLogin">Teacher Login</Link></li>
                        </ul>
                    </div>
                <div className="h2_header-btn d-none d-sm-block"style={{marginLeft:13}}>
                    <Link
                        to="#"
                        onClick={onPaymentPress}
                        className="header-btn theme-btn theme-btn-medium"
                      >
                        Application
                      </Link>
                    </div>
                   
                </div>
            </div>

              ) : (
                <div className="col-xl-2 col-sm-5 col-6">
                  <div className="h2_header-right">
            
                    {ApplicationPaid !== "Selected" && !teacherUser &&
                  <div className="h2_header-btn d-none d-sm-block" style={{marginRight:23}}>
                      <Link
                        to="#"
                        onClick={onPaymentPress}
                        className="header-btn theme-btn theme-btn-medium"
                      >
                        Application
                      </Link>
                    </div>
                    }
                     {ApplicationPaid === "Selected" &&
                    <div className="h2_header-btn d-none d-sm-block" style={{marginRight:23}}>
                      <Link
                        to="#"
                        onClick={StudentDetails}
                        className="header-btn theme-btn theme-btn-medium"
                      >
                        Student
                      </Link>
                    </div>
                         }
                          {teacherUser &&
                    <div className="h2_header-btn d-none d-sm-block" style={{marginRight:23}}>
                      <Link
                        to="#"
                        onClick={StudentDetails}
                        className="header-btn theme-btn theme-btn-medium"
                      >
                        Student
                      </Link>
                    </div>
                         }
                    {/* <div className="h2_header-btn d-none d-sm-block">
                      <Link
                        to="#"
                        onClick={logout}
                        className="header-btn theme-btn theme-btn-medium"
                      >
                        LogOut
                      </Link>
                    </div> */}
              
              <div className="h2_header-btn d-none d-sm-block" title="Logout" style={{marginRight:23}}>
  <i 
    className="fas fa-sign-out-alt" 
    style={{ fontSize: '14px', cursor: 'pointer', color: 'red' }} 
    onClick={logout}
  ></i>
</div>
                    
                    <div className="header-menu-bar d-xl-none ml-10">
                      <span className="header-menu-bar-icon side-toggle">
                        <i className="fa-light fa-bars" />
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
      <Marquee></Marquee>
    </>
  );
};

export default Home;
