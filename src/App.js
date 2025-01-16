import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "../src/screens/Home.js";
import About from "../src/screens/About.js";
import Header from "../src/screens/header/Header.js";
import Footer from "../src/screens/header/Footer.js";



import '../src/assets/css/style.css'
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


function App() {
  
  return (
    <>
     
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} /> 
       </Routes>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
