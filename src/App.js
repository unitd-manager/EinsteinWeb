import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "../src/screens/Home.js";
import About from "../src/screens/About.js";
import UgProgrammes from "./screens/UgProgram.js";
import CourseDetails from "../src/screens/CourseDetails.js";
import Events from "../src/screens/Events.js";
import Team from "../src/screens/Team.js";
import Student from "../src/screens/Student.js"
import StudentList from "../src/screens/StudentList.js"
import StudentDetails from "../src/screens/StudentDetails.js"
import Application from "../src/screens/Application.js"
import Header from "../src/screens/header/Header.js";
import Footer from "../src/screens/header/Footer.js";
import Login from "../src/auth/Login.js"
import TeacherLogin from "../src/auth/TeacherLogin.js"
import StudentLogin from "../src/auth/StudentLogin.js"
import SignUp from "../src/auth/SignUp.js"
import EventDetails from "../src/screens/EventDetails.js";
import TeamDetails from "../src/screens/TeamDetails.js";
import UGProgramDetails from "../src/screens/UGProgramDetails.js";

import Gallery from "../src/screens/Gallery"
import ContactUs from "../src/screens/ContactUs"
import Alumni from "../src/screens/Alumni"
import Training from "../src/screens/Training"
import VicePrincipal from "../src/screens/VicePrincipal.js";
import Principal from "../src/screens/Principal.js";
import ManagingTrustee from "../src/screens/ManagingTrustee.js";
import Founder from "../src/screens/Founder.js";


import '../src/assets/css/style.css'
import '../src/assets/css/AlumniPage.css'
import '../src/assets/css/animate-headline.css'
import '../src/assets/css/animate.min.css'
import '../src/assets/css/animated-circle.css'
import '../src/assets/css/bootstrap.min.css'
import '../src/assets/css/cross2.min.css'
import '../src/assets/css/datepicker.css'
import '../src/assets/css/fontawesome-all.min.css'
import '../src/assets/css/magnific-popup.css'
import '../src/assets/css/main.css'
import '../src/assets/css/main.css.map'
import '../src/assets/css/meanmenu.css'
import '../src/assets/css/nice-select.css'
import '../src/assets/css/odometer.min.css'
import '../src/assets/css/select2.min.css'
import '../src/assets/css/slick.css'
import '../src/assets/css/swiper-bundle.min.css'
import '../src/assets/css/swipper.css'
import '../src/assets/css/ui-range-slider.css'
import "../src/assets/css/searchfilter.css";






import '../src/assets/fonts/fa-brands-400.ttf'
import '../src/assets/fonts/fa-brands-400.woff2'
import '../src/assets/fonts/fa-duotone-900.woff2'
import '../src/assets/fonts/fa-light-300.ttf'
import '../src/assets/fonts/fa-light-300.woff2'
import '../src/assets/fonts/fa-regular-400.woff2'
import '../src/assets/fonts/fa-solid-900.woff2'
import '../src/assets/fonts/fa-thin-100.ttf'
import '../src/assets/fonts/fa-v4compatibility.ttf'
import '../src/assets/fonts/fa-v4compatibility.woff2'
import '../src/assets/fonts/fa-thin-100.woff2'

import '../src/assets/scss/abstracts/_common.scss'
import '../src/assets/scss/components/_about.scss'
import '../src/assets/scss/components/_section.scss'
import '../src/assets/scss/components/_teacher.scss'
import '../src/assets/scss/components/_course-details.scss'
import '../src/assets/scss/components/_course.scss'
import '../src/assets/scss/components/_faq.scss'
import '../src/assets/scss/components/_sidebar.scss'
import '../src/assets/scss/components/_apply.scss'
import '../src/assets/scss/components/_banner.scss'
import '../src/assets/scss/components/_admission.scss'
import '../src/assets/scss/components/_button.scss'
import '../src/assets/scss/components/_event.scss'
import '../src/assets/scss/components/_contact.scss'
import '../src/assets/scss/components/_header.scss'


function App() {
  
  return (
    <>
     
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} /> 
          <Route path="/UgProgram" element={<UgProgrammes />} /> 
          <Route path="/CourseDetails" element={<CourseDetails />} /> 
          <Route path="/Events" element={<Events />} /> 
          <Route path="/EventDetails/:id" element={<EventDetails />} /> 
          <Route path="/Gallery" element={<Gallery />} /> 
          <Route path="/ContactUs" element={<ContactUs />} /> 
          <Route path="/Team" element={<Team />} /> 
          <Route path="/Training" element={<Training />} /> 
          <Route path="/TeamDetails/:id" element={<TeamDetails />} />
          <Route path="/UGProgramDetails/:id" element={<UGProgramDetails />} />
          <Route path="/Student" element={<Student />} /> 
          <Route path="/StudentDetails/:id" element={<StudentDetails />} />
          <Route path="/StudentList" element={<StudentList />} /> 
          <Route path="/Application" element={<Application />} /> 
          <Route path="/Alumni" element={<Alumni />} /> 
          <Route path="/VicePrincipal" element={<VicePrincipal />} /> 
          <Route path="/Principal" element={<Principal />} /> 
          <Route path="/ManagingTrustee" element={<ManagingTrustee />} /> 
          <Route path="/Founder" element={<Founder />} /> 

          {/* Login */}
          
          <Route path="/Login" element={<Login />} />
          <Route path="/StudentLogin" element={<StudentLogin />} />
          <Route path="/TeacherLogin" element={<TeacherLogin />} />
          <Route path="/SignUp" element={<SignUp />} /> 
          

       </Routes>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
