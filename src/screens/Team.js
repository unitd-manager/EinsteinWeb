import React, { useState, useEffect } from "react";
import api from "../constants/api";
// import './TeacherArea.css'; // Assuming CSS is in the same directory
import Web from "../assets/img/Faculty/EinsteinWebsite.jpg";
import Line from "../assets/img/line.png";
import Blu from "../assets/img/teacher/2/bg2.jpg";
import SugirthaMalar from "../assets/img/Faculty/Sugirthamalar-hod.webp";
import Assis from "../assets/img/Faculty/assistant-professor-bba.webp";
import Thiru from "../assets/img/Faculty/Mr.-R.-Thirumalai-Kumar-AP-BBA.webp";
import Sivara from "../assets/img/Faculty/sivaratheesh.webp";
import Arul from "../assets/img/Faculty/Dr.-A.-Arul-Kamraj.webp";
import Kayal from "../assets/img/Faculty/Dr.-M.-Kayalvizhi.webp";
import Ranjith from "../assets/img/Faculty/Dr.-M.-Ranjith-Kumar.webp";
import Nayagam from "../assets/img/Faculty/Dr.-P.-Nayagam.webp";
import Thirumalai from "../assets/img/Faculty/Thirumalai-Kumar.webp";
import Murugan from "../assets/img/Faculty/murugan.webp";
import Iyappan from "../assets/img/Faculty/Iyappan.webp";
import Oliver from "../assets/img/Faculty/Oliver-Josephin-Mary.webp";
import Vignesh from "../assets/img/Faculty/Dr.-G.-Vignesh-HOD-Chemistry.webp";
import Mary from "../assets/img/Faculty/mary-thangam.webp";
import Balasubramanian from "../assets/img/Faculty/Dr.-S.-Balasubramanian.webp";
import DeepaLakshmi from "../assets/img/Faculty/Dr.-M.-Deepa-Lakshmi.webp";
import Ramkumar from "../assets/img/Faculty/Mr.-M.-Ramkumar.webp";
import VarusaiMohammed from "../assets/img/Faculty/Mr.-M.-Varusai-Mohamed.webp";
import BabyJoice from "../assets/img/Faculty/Mrs.-G.-Baby-Joice.webp";
import Shenbagam from "../assets/img/Faculty/Mrs.-P.-Shenbagapriya.webp";
import Sheik from "../assets/img/Faculty/Mr.-A.-Sheik-Mohamed.webp";
import Jebin from "../assets/img/Faculty/Mr.-D.B.-Jebin-Joseph.webp";
import Ahil from "../assets/img/Faculty/Mr.-S.-Ahil-Kannan.webp";
import Macky from "../assets/img/Faculty/Mrs.-G.-Macky-Annal-Mary.webp";
import Renuka from "../assets/img/Faculty/Ms.-M.-Renuka.webp";
import Menakshi from "../assets/img/Faculty/Ms.-V.-Meenakshi.webp";
import Sundar from "../assets/img/Faculty/Mr.-R.-Sundar-Rajan.webp";
import Siva from "../assets/img/Faculty/Mr.-G.R.-Sivaprakash.webp";
import Antony from "../assets/img/Faculty/Mr.-J.-Antony-Aravinth.webp";
import Christia from "../assets/img/Faculty/Mrs.-S.-Christia-Soniya.webp";
import Sudalai from "../assets/img/Faculty/Dr.-S.-Murugan-@-Sudalai-HOD-Tamil.webp";
import Laxme from "../assets/img/Faculty/Dr.-B.-Surya-Laxme-AP-Tamil.webp";
import Thambiran from "../assets/img/Faculty/Mr.-K.-Thambiran-AP-Tamil.webp";
import Prema from "../assets/img/Faculty/Dr.-C.-Prema-AP-Physics.webp";
import Kumar from "../assets/img/Faculty/Mr.-S.-Kumaran-HOD-Physics.webp";
import Nagu from "../assets/img/Faculty/Mr.-E.Nagarajan-Physical-Director.webp";
import { Link } from "react-router-dom";

const teachers = [
  { id: 1, name: 'Dr.R.Sugirtha Malar', role: 'HOD', imgSrc: SugirthaMalar },
  { id: 2, name: 'Samuel Saravanan', role: 'Assistant Professor', imgSrc: Assis },
  { id: 3, name: 'Mr.R.Thirumalai', role: 'Assistant Professor', imgSrc: Thiru },
  { id: 4, name: 'Mr.Sivaratheesh', role: 'Assistant Professor', imgSrc: Sivara },
];

const teachers1 = [
    { id: 1, name: 'Dr.A.Arul Kamraj', role: 'HOD', imgSrc: Arul },
    { id: 2, name: 'Dr.M.Kayal Vizhi', role: 'Assistant Professor', imgSrc: Kayal },
    { id: 3, name: 'Dr.M.Ranjith Kumar', role: 'Assistant Professor', imgSrc: Ranjith },
    { id: 4, name: 'Dr.P.Nayagam', role: 'Assistant Professor', imgSrc: Nayagam },
  ];
  const teachers2 = [
    { id: 1, name: 'Dr.M.Thirumalai Kumar', role: 'HOD', imgSrc: Thirumalai },
    { id: 2, name: 'Mr.M.Murugan', role: 'Assistant Professor', imgSrc: Murugan },
    { id: 3, name: 'Mr.S.Iyappan', role: 'Assistant Professor', imgSrc: Iyappan },
    { id: 4, name: 'Mrs. M. Oliver Josephin Mary', role: 'Assistant Professor', imgSrc: Oliver },
  ];
  const teachers3 = [
    { id: 1, name: 'Dr.G.Vignesh', role: 'HOD', imgSrc: Vignesh },
    { id: 2, name: 'Dr.M.A.Mary Thangam', role: 'Assistant Professor', imgSrc: Mary },
    { id: 3, name: 'Dr.S.BalaSubramanium', role: 'Assistant Professor', imgSrc: Balasubramanian },
  ];
  const teachers4 = [
    { id: 1, name: 'Dr. M. Deepa Lakshmi', role: 'Assistant Professor', imgSrc: DeepaLakshmi },
    { id: 2, name: 'Mr. M. Ramkumar', role: 'Assistant Professor', imgSrc: Ramkumar },
    { id: 3, name: 'Mr. M. Varusai Mohamed', role: 'Assistant Professor', imgSrc: VarusaiMohammed },
    { id: 4, name: 'Mrs. G. Baby Joice', role: 'Assistant Professor', imgSrc: BabyJoice },
    { id: 5, name: 'Mrs. P. Shenbagapriya', role: 'Assistant Professor', imgSrc: Shenbagam },
  ];
  const teachers5 = [
    { id: 1, name: 'Mr. A. Sheik Mohamed', role: 'HOD', imgSrc: Sheik },
    { id: 2, name: 'Mr. D.B. Jebin Joseph', role: 'Assistant Professor', imgSrc: Jebin },
    { id: 3, name: 'Mr. S. Ahil Kannan', role: 'Assistant Professor', imgSrc: Ahil },
    { id: 4, name: 'Mrs. G. Macky Annal Mary', role: 'Assistant Professor', imgSrc: Macky },
    { id: 5, name: 'Ms. M. Renuka ', role: 'Assistant Professor', imgSrc: Renuka },
    { id: 6, name: 'Ms. V. Meenakshi', role: 'Assistant Professor', imgSrc: Menakshi },

  ];
  const teachers6 = [
    { id: 1, name: 'Mr. R. Sundar Rajan', role: 'HOD', imgSrc: Sundar },
    { id: 2, name: 'Mr. G.R. Sivaprakash', role: 'Assistant Professor', imgSrc: Siva },
    { id: 3, name: 'Mr. Antony Aravinth', role: 'Assistant Professor', imgSrc: Antony },
    { id: 4, name: 'Mrs. S. Christia Soniya ', role: 'Assistant Professor', imgSrc: Christia },
  ];
  const teachers7 = [
    { id: 1, name: 'Dr. S. Murugan @ Sudalai', role: 'HOD', imgSrc: Sudalai },
    { id: 2, name: 'Dr. B. Surya Laxme', role: 'Assistant Professor', imgSrc: Laxme },
    { id: 3, name: 'Mr. K. Thambiran', role: 'Assistant Professor', imgSrc: Thambiran },
  ];
  const teachers8 = [
    { id: 1, name: 'Dr. C. Prema', role: 'Assistant Professor', imgSrc: Prema },
    { id: 2, name: 'Mr. S. Kumaran', role: 'HOD', imgSrc: Kumar },
  ];
  const teachers9 = [
    { id: 1, name: 'Mr. E.Nagarajan', role: 'HOD', imgSrc: Nagu },
  ];
  
const TeacherArea = () => {

  const [BAEnglish, setBAEnglish] = useState([]);
  const [BBA, setBBA] = useState([]);
  const [BCOM, setBCOM] = useState([]);
  const [BCOMBCorporateSecretary, setBCOMBCorporateSecretary] = useState([]);
  const [BscChemistry, setBscChemistry] = useState([]);
  const [BscComputerScience, setBscComputerScience] = useState([]);
  const [BscTamil, setBscTamil] = useState([]);
  const [BscMathematics, setBscMathematics] = useState([]);
  const [BscPhysics, setBscPhysics] = useState([]);



  console.log('BAEnglish',BAEnglish)

      useEffect(() => {
      api
      .get("/teachers/getBAEnglish")
      .then((res) => {
          setBAEnglish(res.data.data);
      })
      .catch((err) => {
        console.error("Error fetching student details:", err);
      });
      api
      .get("/teachers/getBBA")
      .then((res) => {
        setBBA(res.data.data);
      })
      .catch((err) => {
        console.error("Error fetching student details:", err);
      });
      api
      .get("/teachers/getBCOM")
      .then((res) => {
        setBCOM(res.data.data);
      })
      .catch((err) => {
        console.error("Error fetching student details:", err);
      });
      api
      .get("/teachers/getBCOMBCorporateSecretary")
      .then((res) => {
        setBCOMBCorporateSecretary(res.data.data);
      })
      .catch((err) => {
        console.error("Error fetching student details:", err);
      });
      api
      .get("/teachers/getBscChemistry")
      .then((res) => {
        setBscChemistry(res.data.data);
      })
      .catch((err) => {
        console.error("Error fetching student details:", err);
      });
      api
      .get("/teachers/getBscComputerScience")
      .then((res) => {
        setBscComputerScience(res.data.data);
      })
      .catch((err) => {
        console.error("Error fetching student details:", err);
      });
      api
      .get("/teachers/getBscMathematics")
      .then((res) => {
        setBscMathematics(res.data.data);
      })
      .catch((err) => {
        console.error("Error fetching student details:", err);
      });
      api
      .get("/teachers/getBscTamil")
      .then((res) => {
        setBscTamil(res.data.data);
      })
      .catch((err) => {
        console.error("Error fetching student details:", err);
      });
      api
      .get("/teachers/getBscPhysics")
      .then((res) => {
        setBscPhysics(res.data.data);
      })
      .catch((err) => {
        console.error("Error fetching student details:", err);
      });

    }, []);

  return ( 
    <>
      <section
        className="breadcrumb-area bg-default"
        style={{ backgroundImage: `url(${Web})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb-content">
                <h2 className="breadcrumb-title">Faculty</h2>
                <p>To serve humanity through Academic Excellence & Research with values. To enlighten students to become proficient Engineers of exceptional caliber and acquire novel research capabilities that gives them industrial recognition. </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="innerPage_teacher-area pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-8 col-md-12 mb-30">
              <div className="h2_teacher-section bg-default" style={{ backgroundImage: `url(${Blu})` }}>
                <div className="section-area-2">
                  <h2 className="section-title mb-30">
                    B.B.A Faculties
                    <span>Professor <img src={Line} alt="" /></span>
                  </h2>
                </div>
              </div>
            </div>
            {BBA.map(teacher => (
           <div key={teacher.teachers_id} className="col-xl-3 col-lg-4 col-sm-6">
           <div className="h2_teacher-item mb-30">
             <div className="h2_teacher-img">
               <img src={`https://ecas.unitdtechnologies.com/storages/${teacher?.file_name}`} alt={teacher.teachers_name} />
             </div>
             <div className="h2_teacher-content">
               <h5 className="h2_teacher-content-title">
                 <Link to={`/TeamDetails/${teacher.teachers_id}`}>{teacher?.teachers_name}</Link>
               </h5>
               <span>{teacher.department}</span>
             </div>
           </div>
         </div>
            ))}
          </div>
        </div>
      </section>
      <section className="innerPage_teacher-area pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-8 col-md-12 mb-30">
              <div className="h2_teacher-section bg-default" style={{ backgroundImage: `url(${Blu})` }}>
                <div className="section-area-2">
                  <h2 className="section-title mb-30">
                  B.Com Faculties
                    <span>Professor <img src={Line} alt="" /></span>
                  </h2>
                </div>
              </div>
            </div>
            {BCOM.map(teacher => (
               <div key={teacher.teachers_id} className="col-xl-3 col-lg-4 col-sm-6">
               <div className="h2_teacher-item mb-30">
                 <div className="h2_teacher-img">
                   <img src={`https://ecas.unitdtechnologies.com/storages/${teacher?.file_name}`} alt={teacher.teachers_name} />
                 </div>
                 <div className="h2_teacher-content">
                   <h5 className="h2_teacher-content-title">
                   <Link to={`/TeamDetails/${teacher.teachers_id}`}>{teacher?.teachers_name}</Link>
                   </h5>
                   <span>{teacher.department}</span>
                 </div>
               </div>
             </div>
            ))}
          </div>
        </div>
      </section>  
      <section className="innerPage_teacher-area pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-8 col-md-12 mb-30">
              <div className="h2_teacher-section bg-default" style={{ backgroundImage: `url(${Blu})` }}>
                <div className="section-area-2">
                  <h2 className="section-title mb-30">
                  B.Com (CS) Faculties
                    <span>Professor <img src={Line} alt="" /></span>
                  </h2>
                </div>
              </div>
            </div>
            {BCOMBCorporateSecretary.map(teacher => (
               <div key={teacher.teachers_id} className="col-xl-3 col-lg-4 col-sm-6">
               <div className="h2_teacher-item mb-30">
                 <div className="h2_teacher-img">
                   <img src={`https://ecas.unitdtechnologies.com/storages/${teacher?.file_name}`} alt={teacher.teachers_name} />
                 </div>
                 <div className="h2_teacher-content">
                   <h5 className="h2_teacher-content-title">
                   <Link to={`/TeamDetails/${teacher.teachers_id}`}>{teacher?.teachers_name}</Link>
                   </h5>
                   <span>{teacher.department}</span>
                 </div>
               </div>
             </div>
            ))}
          </div>
        </div>
      </section>
        <section className="innerPage_teacher-area pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-8 col-md-12 mb-30">
              <div className="h2_teacher-section bg-default" style={{ backgroundImage: `url(${Blu})` }}>
                <div className="section-area-2">
                  <h2 className="section-title mb-30">
                  B.Sc.(Chemistry) Faculties
                    <span>Professor <img src={Line} alt="" /></span>
                  </h2>
                </div>
              </div>
            </div>
            {BscChemistry.map(teacher => (
             <div key={teacher.teachers_id} className="col-xl-3 col-lg-4 col-sm-6">
             <div className="h2_teacher-item mb-30">
               <div className="h2_teacher-img">
                 <img src={`https://ecas.unitdtechnologies.com/storages/${teacher?.file_name}`} alt={teacher.teachers_name} />
               </div>
               <div className="h2_teacher-content">
                 <h5 className="h2_teacher-content-title">
                 <Link to={`/TeamDetails/${teacher.teachers_id}`}>{teacher?.teachers_name}</Link>
                 </h5>
                 <span>{teacher.department}</span>
               </div>
             </div>
           </div>
            ))}
          </div>
        </div>
      </section>  
      <section className="innerPage_teacher-area pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-8 col-md-12 mb-30">
              <div className="h2_teacher-section bg-default" style={{ backgroundImage: `url(${Blu})` }}>
                <div className="section-area-2">
                  <h2 className="section-title mb-30">
                  B.Sc.(Computer Science) Faculties
                    <span>Professor <img src={Line} alt="" /></span>
                  </h2>
                </div>
              </div>
            </div>
            {BscComputerScience.map(teacher => (
             <div key={teacher.teachers_id} className="col-xl-3 col-lg-4 col-sm-6">
             <div className="h2_teacher-item mb-30">
               <div className="h2_teacher-img">
                 <img src={`https://ecas.unitdtechnologies.com/storages/${teacher?.file_name}`} alt={teacher.teachers_name} />
               </div>
               <div className="h2_teacher-content">
                 <h5 className="h2_teacher-content-title">
                 <Link to={`/TeamDetails/${teacher.teachers_id}`}>{teacher?.teachers_name}</Link>
                 </h5>
                 <span>{teacher.department}</span>
               </div>
             </div>
           </div>
            ))}
          </div>
        </div>
      </section> 
       <section className="innerPage_teacher-area pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-8 col-md-12 mb-30">
              <div className="h2_teacher-section bg-default" style={{ backgroundImage: `url(${Blu})` }}>
                <div className="section-area-2">
                  <h2 className="section-title mb-30">
                  B.A (English) Faculties
                    <span>Professor <img src={Line} alt="" /></span>
                  </h2>
                </div>
              </div>
            </div>
            {BAEnglish.map(teacher => (
              <div key={teacher.teachers_id} className="col-xl-3 col-lg-4 col-sm-6">
                <div className="h2_teacher-item mb-30">
                  <div className="h2_teacher-img">
                    <img src={`https://ecas.unitdtechnologies.com/storages/${teacher?.file_name}`} alt={teacher.teachers_name} />
                  </div>
                  <div className="h2_teacher-content">
                    <h5 className="h2_teacher-content-title">
                    <Link to={`/TeamDetails/${teacher.teachers_id}`}>{teacher?.teachers_name}</Link>
                    </h5>
                    <span>{teacher.department}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
        <section className="innerPage_teacher-area pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-8 col-md-12 mb-30">
              <div className="h2_teacher-section bg-default" style={{ backgroundImage: `url(${Blu})` }}>
                <div className="section-area-2">
                  <h2 className="section-title mb-30">
                  B.Sc (Mathematics) Faculties
                    <span>Professor <img src={Line} alt="" /></span>
                  </h2>
                </div>
              </div>
            </div>
            {BscMathematics.map(teacher => (
              <div key={teacher.teachers_id} className="col-xl-3 col-lg-4 col-sm-6">
              <div className="h2_teacher-item mb-30">
                <div className="h2_teacher-img">
                  <img src={`https://ecas.unitdtechnologies.com/storages/${teacher?.file_name}`} alt={teacher.teachers_name} />
                </div>
                <div className="h2_teacher-content">
                  <h5 className="h2_teacher-content-title">
                  <Link to={`/TeamDetails/${teacher.teachers_id}`}>{teacher?.teachers_name}</Link>
                  </h5>
                  <span>{teacher.department}</span>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </section> 
       <section className="innerPage_teacher-area pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-8 col-md-12 mb-30">
              <div className="h2_teacher-section bg-default" style={{ backgroundImage: `url(${Blu})` }}>
                <div className="section-area-2">
                  <h2 className="section-title mb-30">
                  B.A (Tamil) Faculties
                    <span>Professor <img src={Line} alt="" /></span>
                  </h2>
                </div>
              </div>
            </div>
            {BscTamil.map(teacher => (
              <div key={teacher.teachers_id} className="col-xl-3 col-lg-4 col-sm-6">
              <div className="h2_teacher-item mb-30">
                <div className="h2_teacher-img">
                  <img src={`https://ecas.unitdtechnologies.com/storages/${teacher?.file_name}`} alt={teacher.teachers_name} />
                </div>
                <div className="h2_teacher-content">
                  <h5 className="h2_teacher-content-title">
                  <Link to={`/TeamDetails/${teacher.teachers_id}`}>{teacher?.teachers_name}</Link>
                  </h5>
                  <span>{teacher.department}</span>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </section>
        <section className="innerPage_teacher-area pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-8 col-md-12 mb-30">
              <div className="h2_teacher-section bg-default" style={{ backgroundImage: `url(${Blu})` }}>
                <div className="section-area-2">
                  <h2 className="section-title mb-30">
                  B.Sc (Physics) Faculties
                    <span>Professor <img src={Line} alt="" /></span>
                  </h2>
                </div>
              </div>
            </div>
            {BscPhysics.map(teacher => (
             <div key={teacher.teachers_id} className="col-xl-3 col-lg-4 col-sm-6">
             <div className="h2_teacher-item mb-30">
               <div className="h2_teacher-img">
                 <img src={`https://ecas.unitdtechnologies.com/storages/${teacher?.file_name}`} alt={teacher.teachers_name} />
               </div>
               <div className="h2_teacher-content">
                 <h5 className="h2_teacher-content-title">
                 <Link to={`/TeamDetails/${teacher.teachers_id}`}>{teacher?.teachers_name}</Link>
                 </h5>
                 <span>{teacher.department}</span>
               </div>
             </div>
           </div>
            ))}
          </div>
        </div>
      </section> 
       <section className="innerPage_teacher-area pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-8 col-md-12 mb-30">
              <div className="h2_teacher-section bg-default" style={{ backgroundImage: `url(${Blu})` }}>
                <div className="section-area-2">
                  <h2 className="section-title mb-30">
                   Physical Director
                    <span>Professor <img src={Line} alt="" /></span>
                  </h2>
                </div>
              </div>
            </div>
            {teachers9.map(teacher => (
              <div key={teacher.id} className="col-xl-3 col-lg-4 col-sm-6">
                <div className="h2_teacher-item mb-30">
                  <div className="h2_teacher-img">
                    <img src={teacher.imgSrc} alt={teacher.name} />
                  </div>
                  <div className="h2_teacher-content">
                    <h5 className="h2_teacher-content-title">
                    <Link to={`/TeamDetails/${teacher.teachers_id}`}>{teacher?.teachers_name}</Link>
                    </h5>
                    <span>{teacher.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TeacherArea;
