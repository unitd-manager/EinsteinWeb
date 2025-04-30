import React, { useState, useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";
import api from "../constants/api";
import { getUser } from "../../src/auth/user";
import StudentMarks from "./StudentMarks";
import StudentMarksEdit from "./StudentMarksEdit";
import { Button } from "reactstrap";
import {  FaUpload, FaFilePdf, FaFileDownload, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const SignUp = () => {
  const user = getUser();
  const navigate = useNavigate();
  const [showStudentMarks, setShowStudentMarks] = useState(false);
  console.log("user", user);

  const [studentEdit, setStudentEdit] = useState({});
  const [loading, setLoading] = useState(false);
  console.log("studentEdit", studentEdit);
  const [receiptFileDoc, setReceiptFileDoc] = useState(null);
  const[uploaded1, setUploaded1]=useState(null);
  const [receiptUrl1, setReceiptUrl1] = useState("");

  //const genderOptions = ["Male", "Female"];
  //const courseOptions = ["B.Sc. (Mathematics)", "B.Sc. (Physics)", "B.Sc. (Chemistry)", "B.Sc. (Computer Science)", "B.Sc. (Statistics)", "B.Com. (Corporate Secretaryship)", "B.A. (English)", "B.A. (Tamil)", "B.Com.", "B.B.A.", "B.C.A"];
  const [gender, setGender] = useState();
  const getGender = () => {
   api.get('/student/getValueGender').then((res) => {
    setGender(res.data.data);
   });
  };
  const [course, setCourse] = useState();
  const getCourse = () => {
    api.get('/teachers/getCourse').then((res) => {
      setCourse(res.data.data);
    });
  };
  const [bloodGroup, setBloodGroup] = useState();
  const getBloodGroup = () => {
    api.get('/student/getValueBloodGroup').then((res) => {
      setBloodGroup(res.data.data);
    });
  };
 
  const [marksData, setMarksData] = useState({
    student_id: "",
    marks: [], // this should contain all marks entries (each with subject, mark, etc.)
  });
  
  // const [marksData, setMarksData] = useState({
  //   student_id: "",
  //   subject: "",
  //   marks: "",
  //   maximum:"",
  //   month_year_passing:"",
  //   hsc_reg_no:"",
  //   no_of_attempt:"",
  // });

  const getStudentById = () => {

    if (!user) {
      setTimeout(() => {
        navigate('/Login');
      }, 0);
      console.log("mmsmsmsm")
      return;
    }
    api
      .post("/student/getStudentById", { student_id: user?.student_id })
      .then((res) => {
        setStudentEdit(res.data.data[0]);
      })
      .catch(() => {});

      api.post('/file/getListOfFiles', { record_id: user?.student_id, room_name: 'Student' }).then((res) => {
        setReceiptUrl1(res.data);
      });
  
    };

  const handleStudentMark = (e, index) => {
    const { name, value } = e.target;
    const field = name.match(/marks\[\d+\]\.(.*)/)?.[1];
  
    const updatedMarks = [...(marksData.marks || [])];
    updatedMarks[index] = {
      ...(updatedMarks[index] || {}),
      [field]: value,
    };
  
    setMarksData({
      ...marksData,
      marks: updatedMarks,
    });
  };

  const AddStudentMark = () => {
    const { student_id, marks } = marksData;
  
    // if (!student_id) {
    //   alert('Student ID is required.', 'info');
    //   return;
    // }
  
    if (!marks || marks.length === 0) {
      alert('Please enter at least one subject mark.', 'info');
      return;
    }
  
    const filteredMarks = marks.filter(
      (m) =>
        m.subject &&
        m.marks &&
        m.maximum &&
        m.month_year_passing &&
        m.hsc_reg_no &&
        m.no_of_attempt
    );
  
    // if (filteredMarks.length === 0) {
    //   alert('All fields are required for each subject.', 'info');
    //   return;
    // }
  
    // Send each mark entry one by one
    const requests = filteredMarks.map((mark) => {
      api.post('/student/insertStudentmarks', {
        student_id,
        ...mark,
      });
    });
  
    Promise.all(requests)
      .then(() => {
        alert('Marks Inserted Successfully', 'success');
      })
      .catch((error) => {
        console.error(error);
        alert('Failed to insert one or more marks.', 'error');
      });
  };    
  
  const handleInputs = (e) => {
    const { name, value } = e.target;

    if (name === "father_mobile_number" && !/^\d*$/.test(value)) {
      return; // Block non-numeric input
    }
    if (name === "aadhar_no" && !/^\d*$/.test(value)) {
      return; // Block non-numeric input
    }
    if (name === "address_po_code" && !/^\d*$/.test(value)) {
      return; // Block non-numeric input
    }
    if (name === "overall_mark_percentage" && !/^\d*$/.test(value)) {
      return; // Block non-numeric input
    }
    if (name === "account_no" && !/^\d*$/.test(value)) {
      return; // Block non-numeric input
    }

    setStudentEdit({ ...studentEdit, [e.target.name]: e.target.value });
  };

  const handleFileDocChange = (e) => {
    setReceiptFileDoc(e.target.files[0]);
  };  

  const handleUploadOnDoc = async () => {
    const formData = new FormData();
    formData.append("files", receiptFileDoc);
    formData.append("student_id", user?.student_id);
    formData.append('record_id', user?.student_id)
    formData.append('room_name', 'Student')
    formData.append('alt_tag_data', 'StudentRelatedData')
    formData.append('description', 'StudentRelatedData')
    api.post('/file/uploadFiles',formData,{onUploadProgress:(filedata)=>{
      console.log( Math.round((filedata.loaded/filedata.total)*100))
      setUploaded1( Math.round((filedata.loaded/filedata.total)*100))                 
    }}).then(()=>{
      alert("Files Uploaded Successfully", {
        appearance: "success",
        autoDismiss: true,
      })
      setTimeout(() => {
          window.location.reload()
      }, 400);
    }).catch(()=>{                  
      alert("Unable to upload file", {
        appearance: "error",
        autoDismiss: true,
      })                                
    })
  }; 

  const deleteFile = (fileId) => {
    Swal.fire({
      title: `Are you sure?`,
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#124157',
      cancelButtonColor: 'grey',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        api
          .post('/file/deleteFile', { media_id: fileId })
          .then((res) => {
            console.log(res);
            Swal.fire('Deleted!', 'Media has been deleted.', 'success');
            //setViewLineModal(false)

            window.location.reload();
          })
          .catch(() => {
            alert("Unable to Upload file", {
              appearance: "success",
              autoDismiss: true,
            })
          });
      }
    });
  };

  
  const editStudent = (e) => {
    e.preventDefault(); // Prevent the form from submitting the default way
  
    if (studentEdit.student_name !== "") {
      setLoading(true);
      api
        .post("/student/editStudent", studentEdit)
        .then(() => {
          const { student_id, marks } = marksData;
          const filteredMarks = marks.filter(
            (m) =>
              m.subject &&
              m.marks &&
              m.maximum &&
              m.month_year_passing &&
              m.hsc_reg_no &&
              m.no_of_attempt
          );
  
          // Use Promise.all to ensure all mark insertions complete before navigating
          return Promise.all(
            filteredMarks.map((mark) =>
              api.post("/student/insertStudentmarks", {
                student_id,
                ...mark,
              })
            )
          );
        })
        .then(() => {
          alert("Record edited successfully", "success");
          setTimeout(() => {
            navigate("/ApplicationSuccess", { state: { studentEdit } });
          }, 200);
        })
        .catch(() => {
          alert("Unable to edit record.", "error");
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      alert("Please fill all required fields", "warning");
    }
  };
  
  useEffect(() => {
      getGender()
      getCourse()
      getBloodGroup()
      getStudentById();
  }, []);

  return (
    <>
      <main>
        {/* breadcrumb area start */}
        <section>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="breadcrumb-content">
                  <h2 className="breadcrumb-title">Application</h2>
                  <div className="breadcrumb-list">
                    <Link to="/">Home</Link>
                    <span>Application Form</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* breadcrumb area end */}
        {/* Application area start */}
        <div className="account-area pt-120 pb-120">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-10 col-lg-10 col-md-10">
                <div className="account-wrap">
                  <div className="account-top sign-up">
                    <div className="account-top-current">
                      <h3>Application Form</h3>
                    </div>
                  </div>
                  <div className="account-main">
                    <h3 className="account-title">Apply Now 👋</h3>
                    <form onSubmit={editStudent} className="account-form">
                      <h4 className="mb-3 mt-4">Personal Information</h4>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="account-form-item mb-20">
                            <div className="account-form-label">
                              <label>Student Name</label>
                            </div>
                            <div className="account-form-input">
                              <input
                                type="text"
                                name="student_name"
                                placeholder="Student Name"
                                value={studentEdit?.student_name || ""}
                                onChange={handleInputs}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="account-form-item mb-20">
                            <div className="account-form-label">
                              <label>Email</label>
                            </div>
                            <div className="account-form-input">
                              <input
                                type="email"
                                name="email"
                                placeholder="Enter Your Email"
                                value={studentEdit?.email||""}
                                onChange={handleInputs}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="account-form-item mb-20">
                            <div className="account-form-label">
                              <label>Mobile</label>
                            </div>
                            <div className="account-form-input">
                              <input
                                type="text"
                                name="father_mobile_number"
                                placeholder="Enter Your Mobile Number"
                                value={studentEdit?.father_mobile_number}
                                onChange={handleInputs}
                                inputMode="numeric"
                                pattern="[0-9]*"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="account-form-item mb-20">
                            <div className="account-form-label">
                              <label>Aadhar Number Of Applicant</label>
                            </div>
                            <div className="account-form-input">
                              <input
                                type="text"
                                name="aadhar_no"
                                placeholder="Enter Your Aadhar Number"
                                value={studentEdit?.aadhar_no}
                                onChange={handleInputs}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="account-form-item mb-20">
                            <div className="account-form-label">
                              <label>Course Applying For</label>
                            </div>
                            <div className="account-form-input">
                              <select
                                name="course"
                                value={studentEdit?.course || ""}
                                onChange={handleInputs}
                              >
                                <option value="">Select Course</option>
                                {course?.map((option) => (
                                  <option key={option.course_name} value={option.course_name}>
                                    {option.course_name}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                        </div>

                        <hr />
                        <h4 className="mb-3 mt-4">Identification & Demographics</h4>
                        <div className="col-md-6">
                          <div className="account-form-item mb-20">
                            <div className="account-form-label">
                              <label>Date of Birth</label>
                            </div>
                            <div className="account-form-input">
                              <input
                                type="date"
                                name="date_of_birth"
                                placeholder="Enter Your date of birth"
                                value={studentEdit?.date_of_birth}
                                onChange={handleInputs}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="account-form-item mb-20">
                            <div className="account-form-label">
                              <label>Nationality</label>
                            </div>
                            <div className="account-form-input">
                              <input
                                type="text"
                                name="nationality"
                                placeholder="Enter Your Nationality"
                                value={studentEdit?.nationality}
                                onChange={handleInputs}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="account-form-item mb-20">
                            <div className="account-form-label">
                              <label>Religion</label>
                            </div>
                            <div className="account-form-input">
                              <input
                                type="text"
                                name="religion"
                                placeholder="Enter Your Religion"
                                value={studentEdit?.religion}
                                onChange={handleInputs}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="account-form-item mb-20">
                            <div className="account-form-label">
                              <label>Caste</label>
                            </div>
                            <div className="account-form-input">
                              <input
                                type="text"
                                name="caste"
                                placeholder="Enter Your Caste"
                                value={studentEdit?.caste}
                                onChange={handleInputs}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="account-form-item mb-20">
                            <div className="account-form-label">
                              <label>Community</label>
                            </div>
                            <div className="account-form-input">
                              <input
                                type="text"
                                name="community"
                                placeholder="Enter Community"
                                value={studentEdit?.community}
                                onChange={handleInputs}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="account-form-item mb-20">
                            <div className="account-form-label">
                              <label>Gender</label>
                            </div>
                            <div className="account-form-input">
                              <select
                                name="gender"
                                value={studentEdit?.gender || ""}
                                onChange={handleInputs}
                              >
                                <option value="">Select Gender</option>
                                {gender?.map((option) => (
                                  <option key={option.value} value={option.value}>
                                    {option.value}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                        </div>

                        <hr />
                        <h4 className="mb-3 mt-4">Family Details</h4>
                        <div className="col-md-6">
                          <div className="account-form-item mb-20">
                            <div className="account-form-label">
                              <label>Father Name</label>
                            </div>
                            <div className="account-form-input">
                              <input
                                type="text"
                                name="name_of_the_father"
                                placeholder="Enter Your Father Name"
                                value={studentEdit?.name_of_the_father}
                                onChange={handleInputs}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="account-form-item mb-20">
                            <div className="account-form-label">
                              <label>Father Qualification</label>
                            </div>
                            <div className="account-form-input">
                              <input
                                type="text"
                                name="father_qualification"
                                placeholder="Enter Your Father Qualification"
                                value={studentEdit?.father_qualification}
                                onChange={handleInputs}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="account-form-item mb-20">
                            <div className="account-form-label">
                              <label>Father Occupation</label>
                            </div>
                            <div className="account-form-input">
                              <input
                                type="text"
                                name="father_occupation"
                                placeholder="Enter Your Father Occupation"
                                value={studentEdit?.father_occupation}
                                onChange={handleInputs}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="account-form-item mb-20">
                            <div className="account-form-label">
                              <label>Father Income</label>
                            </div>
                            <div className="account-form-input">
                              <input
                                type="text"
                                name="father_income"
                                placeholder="Enter Your Father Income"
                                value={studentEdit?.father_income}
                                onChange={handleInputs}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="account-form-item mb-20">
                            <div className="account-form-label">
                              <label>Mother Name</label>
                            </div>
                            <div className="account-form-input">
                              <input
                                type="text"
                                name="name_of_the_mother"
                                placeholder="Enter Your Mother Name"
                                value={studentEdit?.name_of_the_mother}
                                onChange={handleInputs}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="account-form-item mb-20">
                            <div className="account-form-label">
                              <label>Mother Qualification</label>
                            </div>
                            <div className="account-form-input">
                              <input
                                type="text"
                                name="mother_qualification"
                                placeholder="Enter Your Mother Qualification"
                                value={studentEdit?.mother_qualification}
                                onChange={handleInputs}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="account-form-item mb-20">
                            <div className="account-form-label">
                              <label>Mother Occupation</label>
                            </div>
                            <div className="account-form-input">
                              <input
                                type="text"
                                name="mother_occupation"
                                placeholder="Enter Your Mother Occupation"
                                value={studentEdit?.mother_occupation}
                                onChange={handleInputs}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="account-form-item mb-20">
                            <div className="account-form-label">
                              <label>Mother Income</label>
                            </div>
                            <div className="account-form-input">
                              <input
                                type="text"
                                name="mother_income"
                                placeholder="Enter Your Mother Income"
                                value={studentEdit?.mother_income}
                                onChange={handleInputs}
                              />
                            </div>
                          </div>
                        </div>

                        <hr />
                        <h4 className="mb-3 mt-4">Address</h4>
                        <div className="col-md-6">
                          <div className="account-form-item mb-20">
                            <div className="account-form-label">
                              <label>Communication Address</label>
                            </div>
                            <div className="account-form-input">
                              <input
                                type="text"
                                name="communication_address"
                                placeholder="Enter Your Communication Address"
                                value={studentEdit?.communication_address}
                                onChange={handleInputs}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="account-form-item mb-20">
                            <div className="account-form-label">
                              <label>Pin Code</label>
                            </div>
                            <div className="account-form-input">
                              <input
                                type="text"
                                name="address_po_code"
                                placeholder="Enter Your Pin Code"
                                value={studentEdit?.address_po_code}
                                onChange={handleInputs}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="account-form-item mb-20">
                            <div className="account-form-label">
                              <label>Taluk</label>
                            </div>
                            <div className="account-form-input">
                              <input
                                type="text"
                                name="address_taluk"
                                placeholder="Enter Your Taluk"
                                value={studentEdit?.address_taluk}
                                onChange={handleInputs}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="account-form-item mb-20">
                            <div className="account-form-label">
                              <label>District</label>
                            </div>
                            <div className="account-form-input">
                              <input
                                type="text"
                                name="address_district"
                                placeholder="Enter Your District"
                                value={studentEdit?.address_district}
                                onChange={handleInputs}
                              />
                            </div>
                          </div>
                        </div>

                        <hr />
                        <h4 className="mb-3 mt-4">Academic Information</h4>
                        <div className="col-md-6">
                          <div className="account-form-item mb-20">
                            <div className="account-form-label">
                              <label>Name Of The School Last Studied</label>
                            </div>
                            <div className="account-form-input">
                              <input
                                type="text"
                                name="school_name"
                                placeholder="Enter Name Of The School Last Studied"
                                value={studentEdit?.school_name}
                                onChange={handleInputs}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="account-form-item mb-20">
                            <div className="account-form-label">
                              <label>Qualifying Examination Passed</label>
                            </div>
                            <div className="account-form-input">
                              <input
                                type="text"
                                name="qualifying_exam_passed"
                                placeholder="Enter Qualifying Examination Passed"
                                value={studentEdit?.qualifying_exam_passed}
                                onChange={handleInputs}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="account-form-item mb-20">
                            <div className="account-form-label">
                              <label>Medium Of Instruction</label>
                            </div>
                            <div className="account-form-input">
                              <input
                                type="text"
                                name="medium_instruction"
                                placeholder="Enter Your Medium Of Instruction"
                                value={studentEdit?.medium_instruction}
                                onChange={handleInputs}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="account-form-item mb-20">
                            <div className="account-form-label">
                              <label>Overall % Of Marks</label>
                            </div>
                            <div className="account-form-input">
                              <input
                                type="text"
                                name="overall_mark_percentage"
                                placeholder="Enter Your Overall % Of Marks"
                                value={studentEdit?.overall_mark_percentage}
                                onChange={handleInputs}
                              />
                            </div>
                          </div>
                        </div>
                        {showStudentMarks && (
                          <StudentMarks studentId={studentEdit?.student_id} setShowStudentMarks={setShowStudentMarks} showStudentMarks={showStudentMarks}/>
                        )}

                        <StudentMarksEdit studentId={studentEdit?.student_id} setShowStudentMarks={setShowStudentMarks}></StudentMarksEdit>

                        {/* <div className="table-responsive mb-4">
                          <table className="table table-bordered">
                            <thead>
                              <tr>
                                <th>Subject</th>
                                <th>Marks Obtained</th>
                                <th>Maximum</th>
                                <th>Month & Year of Passing</th>
                                <th>HSC Reg. No</th>
                                <th>No. of Attempt(s)</th>
                              </tr>
                            </thead>
                            <tbody>
                              {Array.from({ length: 5 }).map((_, index) => (
                                <tr key={index}>
                                  <td>
                                    <input
                                      type="text"
                                      className="form-control"
                                      name={`marks[${index}].subject`}
                                      value={marksData.marks?.[index]?.subject || ""}
                                      onChange={(e) => handleStudentMark(e, index)}
                                      placeholder="Subject"
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="number"
                                      className="form-control"
                                      name={`marks[${index}].marks`}
                                      value={marksData.marks?.[index]?.marks || ""}
                                      onChange={(e) => handleStudentMark(e, index)}
                                      placeholder="Mark"
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="number"
                                      className="form-control"
                                      name={`marks[${index}].maximum`}
                                      value={marksData.marks?.[index]?.maximum || ""}
                                      onChange={(e) => handleStudentMark(e, index)}
                                      placeholder="Max Mark"
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      className="form-control"
                                      name={`marks[${index}].month_year_passing`}
                                      value={marksData.marks?.[index]?.month_year_passing || ""}
                                      onChange={(e) => handleStudentMark(e, index)}
                                      placeholder="MM/YYYY"
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      className="form-control"
                                      name={`marks[${index}].hsc_reg_no`}
                                      value={marksData.marks?.[index]?.hsc_reg_no || ""}
                                      onChange={(e) => handleStudentMark(e, index)}
                                      placeholder="Reg. No"
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="number"
                                      className="form-control"
                                      name={`marks[${index}].no_of_attempt`}
                                      value={marksData.marks?.[index]?.no_of_attempt || ""}
                                      onChange={(e) => handleStudentMark(e, index)}
                                      placeholder="Attempts"
                                    />
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div> */}
                        <h4 className="mb-3 mt-4">Other Details</h4>
                        <div className="col-md-6">
                          <div className="account-form-item mb-20">
                            <div className="account-form-label">
                              <label>Blood Group</label>
                            </div>
                            <div className="account-form-input">
                              <select
                                name="blood_group"
                                value={studentEdit?.blood_group || ""}
                                onChange={handleInputs}
                              >
                                <option value="">Select Blood Group</option>
                                {bloodGroup?.map((option) => (
                                  <option key={option.value} value={option.value}>
                                    {option.value}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="account-form-item mb-20">
                            <div className="account-form-label">
                              <label>Are you differently abled?</label>
                            </div>
                            <div className="account-form-input radio radio d-flex gap-3">
                              <label>
                                <input
                                  type="radio"
                                  name="differently_abled"
                                  value="1"
                                  checked={studentEdit?.differently_abled === "1"}
                                  onChange={handleInputs}
                                />{" "}
                                Yes
                              </label>
                              <label>
                                <input
                                  type="radio"
                                  name="differently_abled"
                                  value="0"
                                  checked={studentEdit?.differently_abled === "0"}
                                  onChange={handleInputs}
                                />{" "}
                                No
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="account-form-item mb-20">
                            <div className="account-form-label">
                              <label>Are you son / daughter of Ex-Service man of Tamil Nadu Origin?</label>
                            </div>
                            <div className="account-form-input radio d-flex gap-3">
                              <label>
                                <input
                                  type="radio"
                                  name="exservice_man_child"
                                  value="1"
                                  checked={studentEdit?.exservice_man_child === "1"}
                                  onChange={handleInputs}
                                />{" "}
                                Yes
                              </label>
                              <label>
                                <input
                                  type="radio"
                                  name="exservice_man_child"
                                  value="0"
                                  checked={studentEdit?.exservice_man_child === "0"}
                                  onChange={handleInputs}
                                />{" "}
                                No
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="account-form-item mb-20">
                            <div className="account-form-label">
                              <label>Are you of Tamil Nadu orgin from Andaman Nicobar Islands?</label>
                            </div>
                            <div className="account-form-input radio d-flex gap-3">
                              <label>
                                <input
                                  type="radio"
                                  name="origin_from_andaman_nicobar_island"
                                  value="1"
                                  checked={studentEdit?.origin_from_andaman_nicobar_island === "1"}
                                  onChange={handleInputs}
                                />{" "}
                                Yes
                              </label>
                              <label>
                                <input
                                  type="radio"
                                  name="origin_from_andaman_nicobar_island"
                                  value="0"
                                  checked={studentEdit?.origin_from_andaman_nicobar_island === "0"}
                                  onChange={handleInputs}
                                />{" "}
                                No
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="account-form-item mb-20">
                            <div className="account-form-label">
                              <label>Are you the first graduate of your family?</label>
                            </div>
                            <div className="account-form-input radio d-flex gap-3">
                              <label>
                                <input
                                  type="radio"
                                  name="first_graduate_of_family"
                                  value="1"
                                  checked={studentEdit?.first_graduate_of_family === "1"}
                                  onChange={handleInputs}
                                />{" "}
                                Yes
                              </label>
                              <label>
                                <input
                                  type="radio"
                                  name="first_graduate_of_family"
                                  value="0"
                                  checked={studentEdit?.first_graduate_of_family === "0"}
                                  onChange={handleInputs}
                                />{" "}
                                No
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="account-form-item mb-20">
                            <div className="account-form-label">
                              <label>Do you have below poverty line card / certificate?</label>
                            </div>
                            <div className="account-form-input radio d-flex gap-3">
                              <label>
                                <input
                                  type="radio"
                                  name="below_proverty_card"
                                  value="1"
                                  checked={studentEdit?.below_proverty_card === "1"}
                                  onChange={handleInputs}
                                />{" "}
                                Yes
                              </label>
                              <label>
                                <input
                                  type="radio"
                                  name="below_proverty_card"
                                  value="0"
                                  checked={studentEdit?.below_proverty_card === "0"}
                                  onChange={handleInputs}
                                />{" "}
                                No
                              </label>
                            </div>
                          </div>
                        </div>
                        <hr />
                        <h4 className="mb-3 mt-4">Bank Account Details</h4>
                        <div className="col-md-6">
                          <div className="account-form-item mb-20">
                            <div className="account-form-label">
                              <label>Bank Name</label>
                            </div>
                            <div className="account-form-input">
                              <input
                                type="text"
                                name="bank_name"
                                placeholder="Enter Your Bank Name"
                                value={studentEdit?.bank_name}
                                onChange={handleInputs}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="account-form-item mb-20">
                            <div className="account-form-label">
                              <label>Account No</label>
                            </div>
                            <div className="account-form-input">
                              <input
                                type="text"
                                name="account_no"
                                placeholder="Enter Your Account No"
                                value={studentEdit?.account_no}
                                onChange={handleInputs}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="account-form-item mb-20">
                            <div className="account-form-label">
                              <label>Place</label>
                            </div>
                            <div className="account-form-input">
                              <input
                                type="text"
                                name="bank_place"
                                placeholder="Enter Your Bank Place"
                                value={studentEdit?.bank_place}
                                onChange={handleInputs}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="account-form-item mb-20">
                            <div className="account-form-label">
                              <label>IFSC Code</label>
                            </div>
                            <div className="account-form-input">
                              <input
                                type="text"
                                name="ifsc_code"
                                placeholder="Enter Your IFSC Code"
                                value={studentEdit?.ifsc_code}
                                onChange={handleInputs}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="account-form-item mb-20">
                            <div className="account-form-label">
                              <label>MICR Code</label>
                            </div>
                            <div className="account-form-input">
                              <input
                                type="text"
                                name="micr_code"
                                placeholder="Enter Your MICR Code"
                                value={studentEdit?.micr_code}
                                onChange={handleInputs}
                              />
                            </div>
                          </div>
                        </div>
                        <hr />
                        <h4 className="mb-3 mt-4">Additional Information</h4>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="account-form-item mb-20">
                              <div className="account-form-label">
                                <label>Has the applicant been subjected to any disciplinary action?</label>
                              </div>
                              <div className="account-form-input radio d-flex gap-3">
                                <label>
                                  <input
                                    type="radio"
                                    name="disciplinary_action"
                                    value="1"
                                    checked={studentEdit?.disciplinary_action === "1"}
                                    onChange={handleInputs}
                                  />{" "}
                                  Yes
                                </label>
                                <label>
                                  <input
                                    type="radio"
                                    name="disciplinary_action"
                                    value="0"
                                    checked={studentEdit?.disciplinary_action === "0"}
                                    onChange={handleInputs}
                                  />{" "}
                                  No
                                </label>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="account-form-item mb-20">
                              <div className="account-form-label">
                                <label>Does the applicant need accommodation in the Hostel?</label>
                              </div>
                              <div className="account-form-input radio d-flex gap-3">
                                <label>
                                  <input
                                    type="radio"
                                    name="need_hostel"
                                    value="1"
                                    checked={studentEdit?.need_hostel === "1"}
                                    onChange={handleInputs}
                                  />{" "}
                                  Yes
                                </label>
                                <label>
                                  <input
                                    type="radio"
                                    name="need_hostel"
                                    value="0"
                                    checked={studentEdit?.need_hostel === "0"}
                                    onChange={handleInputs}
                                  />{" "}
                                  No
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <hr />
                      <h4 className="mb-3 mt-4">Documents To Be Submitted</h4>
                      <div className="row">
                        <p>The selected student should produce the following original certificates along with the Xerox copies as detailed below:</p>
                        <ul className="row list-unstyled ps-3">
                          <li>1. Original HSC mark statement with 3 Xerox copies</li>
                          <li>2. Original Transfer certificate</li>
                          <li>3. Original conduct certificate from the Head of the institution where studied last</li>
                          <li>4. One Xerox copy of the community certificate in the case of BC, MBC, DNC, SC / ST students</li>
                          <li>5. Ex-serviceman certificates (Whenever applicable) with one Xerox copy</li>
                        </ul>
                      </div>

                      {/* 2. On documents payment Upload Section */}
                      <div className="card p-4 text-center border-dashed mb-3">
                        <h6 className="d-flex justify-content-between align-items-center my-2 fw-bold mt-4">Documents Upload</h6>

                        <div className="custom-file-upload">
                          <input
                            type="file"
                            id="fileInputDoc"
                            className="d-none"
                            onChange={handleFileDocChange}
                          />
                          <label htmlFor="fileInputDoc" className="btn btn-outline-primary">
                            <FaUpload className="me-2" /> Choose File
                          </label>
                        </div>

                        {receiptFileDoc && (
                          <p className="mt-2 text-success">
                            {receiptFileDoc.name}
                          </p>
                        )}
                        { uploaded1 &&  <div className='progress mt-2'>
                          <div className="progress-bar h-4" role='progressbar'
                            aria-valuenow={uploaded1}
                            aria-valuemin='0'
                            aria-valuemax='100'
                            style={{width:`${uploaded1}%`}}>
                              {`${uploaded1}% uploaded`}
                          </div>
                        </div>}
                        {receiptFileDoc && (<button className="btn btn-primary mt-2" onClick={handleUploadOnDoc}>
                          <FaUpload className="me-2" /> Upload
                        </button>)}

                        
                      {receiptUrl1 && receiptUrl1.length > 0 && receiptUrl1.map((res1, index) => (
                      <div
                        key={index}
                        className="d-flex justify-content-between align-items-center my-2"
                      >
                        <a
                          href={`https://smartwave.unitdtechnologies.com:2014/category/download/${res1.name}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-decoration-none d-flex align-items-center text-primary"
                        >
                          <FaFileDownload className="me-2" />
                          {res1.name}
                        </a>
                  
                        <button
                          type="button"
                          className="btn btn-sm btn-light shadow-none"
                          onClick={() => deleteFile(res1.media_id)}
                        >
                          <FaTrash />
                        </button>
                      </div>
                      ))}
                      </div>

                      <div className="account-form-button">
                        <button
                          type="submit"
                          className="account-btn"
                          disabled={loading}
                        >
                          {loading ? "Saving Application..." : "Save"}
                        </button>
                      </div>
                    </form>
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

export default SignUp;
