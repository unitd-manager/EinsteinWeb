import React, { useState, useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";
import api from "../constants/api";
import { getUser } from "../../src/auth/user";

const SignUp = () => {
  const user = getUser();
  const navigate = useNavigate();

  console.log("user", user);

  const [studentEdit, setStudentEdit] = useState({});
  const [loading, setLoading] = useState(false);

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
  };

  const handleInputs = (e) => {
    setStudentEdit({ ...studentEdit, [e.target.name]: e.target.value });
  };

  const editStudent = (e) => {
    e.preventDefault(); // Prevent the form from submitting the default way
    if (studentEdit.student_name !== "") {
      setLoading(true);
      api
        .post("/student/editStudent", studentEdit)
        .then(() => {
          alert("Record edited successfully", "success");
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
                      <span>Application Form</span>
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

                        <hr />
                        <h4 className="mb-3 mt-4">Identification & Demographics</h4>
                        <div className="col-md-6">
                          <div className="account-form-item mb-20">
                            <div className="account-form-label">
                              <label>Date of Birth</label>
                            </div>
                            <div className="account-form-input">
                              <input
                                type="text"
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
                              <input
                                type="text"
                                name="gender"
                                placeholder="Enter Your Gender"
                                value={studentEdit?.gender}
                                onChange={handleInputs}
                              />
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

                        <hr />
                        <h4 className="mb-3 mt-4">Other Details</h4>
                        <div className="col-md-6">
                          <div className="account-form-item mb-20">
                            <div className="account-form-label">
                              <label>Blood Group</label>
                            </div>
                            <div className="account-form-input">
                              <input
                                type="text"
                                name="blood_group"
                                placeholder="Enter Your Blood Group"
                                value={studentEdit?.blood_group}
                                onChange={handleInputs}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="account-form-item mb-20">
                            <div className="account-form-label">
                              <label>Are you differently abled?</label>
                            </div>
                            <div className="account-form-input d-flex gap-3">
                              <label>
                                <input
                                  type="radio"
                                  name="differently_abled"
                                  value="Yes"
                                  checked={studentEdit?.differently_abled === "Yes"}
                                  onChange={handleInputs}
                                />{" "}
                                Yes
                              </label>
                              <label>
                                <input
                                  type="radio"
                                  name="differently_abled"
                                  value="No"
                                  checked={studentEdit?.differently_abled === "No"}
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
                            <div className="account-form-input d-flex gap-3">
                              <label>
                                <input
                                  type="radio"
                                  name="exservice_man_child"
                                  value="Yes"
                                  checked={studentEdit?.exservice_man_child === "Yes"}
                                  onChange={handleInputs}
                                />{" "}
                                Yes
                              </label>
                              <label>
                                <input
                                  type="radio"
                                  name="exservice_man_child"
                                  value="No"
                                  checked={studentEdit?.exservice_man_child === "No"}
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
                            <div className="account-form-input d-flex gap-3">
                              <label>
                                <input
                                  type="radio"
                                  name="origin_from_andaman_nicobar_island"
                                  value="Yes"
                                  checked={studentEdit?.origin_from_andaman_nicobar_island === "Yes"}
                                  onChange={handleInputs}
                                />{" "}
                                Yes
                              </label>
                              <label>
                                <input
                                  type="radio"
                                  name="origin_from_andaman_nicobar_island"
                                  value="No"
                                  checked={studentEdit?.origin_from_andaman_nicobar_island === "No"}
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
                            <div className="account-form-input d-flex gap-3">
                              <label>
                                <input
                                  type="radio"
                                  name="first_graduate_of_family"
                                  value="Yes"
                                  checked={studentEdit?.first_graduate_of_family === "Yes"}
                                  onChange={handleInputs}
                                />{" "}
                                Yes
                              </label>
                              <label>
                                <input
                                  type="radio"
                                  name="first_graduate_of_family"
                                  value="No"
                                  checked={studentEdit?.first_graduate_of_family === "No"}
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
                            <div className="account-form-input d-flex gap-3">
                              <label>
                                <input
                                  type="radio"
                                  name="below_proverty_card"
                                  value="Yes"
                                  checked={studentEdit?.below_proverty_card === "Yes"}
                                  onChange={handleInputs}
                                />{" "}
                                Yes
                              </label>
                              <label>
                                <input
                                  type="radio"
                                  name="below_proverty_card"
                                  value="No"
                                  checked={studentEdit?.below_proverty_card === "No"}
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
                              <div className="account-form-input d-flex gap-3">
                                <label>
                                  <input
                                    type="radio"
                                    name="disciplinary_action"
                                    value="Yes"
                                    checked={studentEdit?.disciplinary_action === "Yes"}
                                    onChange={handleInputs}
                                  />{" "}
                                  Yes
                                </label>
                                <label>
                                  <input
                                    type="radio"
                                    name="disciplinary_action"
                                    value="No"
                                    checked={studentEdit?.disciplinary_action === "No"}
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
                              <div className="account-form-input d-flex gap-3">
                                <label>
                                  <input
                                    type="radio"
                                    name="need_hostel"
                                    value="Yes"
                                    checked={studentEdit?.need_hostel === "Yes"}
                                    onChange={handleInputs}
                                  />{" "}
                                  Yes
                                </label>
                                <label>
                                  <input
                                    type="radio"
                                    name="need_hostel"
                                    value="No"
                                    checked={studentEdit?.need_hostel === "No"}
                                    onChange={handleInputs}
                                  />{" "}
                                  No
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
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
