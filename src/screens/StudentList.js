import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Table, Input, Row, Col, Button } from "reactstrap";
import api from "../constants/api";
import { getTeacherUser } from "../../src/auth/user";
import * as Icon from "react-feather";
import "../assets/css/searchfilter.css";

const Aboutus = () => {
  // const { id } = useParams();
  const user = getTeacherUser();
  const [students, setStudents] = useState([]);
  const [regNo, setRegNo] = useState("");

  // Handler for search input change
  const handleSearchChange = (event) => {
    setRegNo(event.target.value);
  };

  // Function to filter students based on registration number input
  const applyFilters = () => {
    if (!regNo.trim()) return students; // If no input, return all students
  
    const searchTerm = regNo.toLowerCase();
  
    return students.filter((item) =>
      item.ref_no?.toLowerCase().includes(searchTerm) ||
      item.student_name?.toLowerCase().includes(searchTerm) ||
      item.course?.toLowerCase().includes(searchTerm) // Add additional fields as needed
    );
  };
  

  const filteredRefNo = applyFilters();
  const studentId = filteredRefNo.length > 0 ? filteredRefNo[0].student_id : null;

  console.log("user", user);

  const getStudent = () => {
    api
      .post("/student/getStudentDepartment",{department:user?.department})
      .then((res) => {
        setStudents(res.data.data || []);
      })
      .catch((err) => {
        console.error("Error fetching students:", err);
      });
  };

  useEffect(() => {
    getStudent();
  }, []);

  return (
    <div className="p-3">
      <h2 className="text-center mb-4">Student List</h2>

      {/* Search Bar */}
      <Row className="mb-3">
        <Col xs={12} md={6} className="mx-auto">
          <Input
            type="text"
            placeholder="Search by Name and Registration Number and course"
            value={regNo}
            onChange={handleSearchChange}
            className="rounded-pill shadow-sm"
          />
        </Col>
      </Row>

      {/* Student Table */}
      <div className="table-responsive">
  <Table striped bordered hover responsive>
    <thead className="table-dark">
      <tr>
        <th className="table-col-name">Name</th>
        <th className="table-col-action">Action</th>
        <th className="table-col-course">Course</th>
        <th className="table-col-gender">Gender</th>
        <th className="table-col-regno">Reg No</th>
      </tr>
    </thead>
    <tbody>
      {filteredRefNo.length > 0 ? (
        filteredRefNo.map((attendance, index) => (
          <tr key={index} className="table-row">
            <td data-label="Name">{attendance.student_name}</td>
            <td data-label="Action">
              <Link to={`/StudentDetails/${attendance.student_id}`}>
                <Icon.Edit2 />
              </Link>
            </td>
            <td data-label="Course">{attendance.course}</td>
            <td data-label="Gender">{attendance.gender}</td>
            <td data-label="Reg No">{attendance.ref_no}</td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan="5" style={{ textAlign: "center" }}>No records found</td>
        </tr>
      )}
    </tbody>
  </Table>
</div>


    </div>
  );
};

export default Aboutus;
