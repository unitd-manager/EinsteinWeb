import React, {useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';
import api from '../constants/api';
import { getUser } from "../../src/auth/user";
import { FaCheckCircle, FaTimesCircle, FaClock } from 'react-icons/fa'; 

export default function AttendanceTable({ studentDetails }) {
    AttendanceTable.propTypes = {
        studentDetails: PropTypes.object,
    };

  const [attendanceData, setAttendanceModals] = useState([]);

  const user = getUser();
    const getAttendanceById = () => {
        api
          .post('/student/getStudentAttendanceById', { student_id: studentDetails?.student_id })
          .then((res) => {
            setAttendanceModals(res.data.data);
           
          })
          .catch(() => {
          
          });
      };

      useEffect(() => {
        getAttendanceById()
      }, []);


    // Function to return an icon and color based on status
    const getStatusIcon = (percentage) => {
        switch (percentage) {
            // case 'Present':
            //     return <FaCheckCircle style={{ color: 'green' }} />;
            case '75%':
                return <FaTimesCircle style={{ color: 'red' }} />;
            // case 'Late':
            //     return <FaClock style={{ color: 'orange' }} />;
            default:
                return null;
        }
    };

    return (
      <div>
        <Table striped bordered hover responsive>
            <thead>
                <tr>
                    <th>Month</th>
                    <th>No of working days</th>
                    <th>No of Absent</th>
                    <th>Attendance Percentage</th>
                   
                </tr>
            </thead>
            <tbody>
                {attendanceData.length > 0 ? (
                    attendanceData.map((attendance, index) => (
                        <tr key={index}>
                            <td>{attendance.month}</td>
                            <td>{attendance.no_of_working_days}</td>
                            <td>{attendance.no_of_absent}</td>
                            <td>{getStatusIcon(attendance.attendance_percentage)} 
                                <span>{attendance.attendance_percentage}</span></td>
                          
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="6" style={{ textAlign: 'center' }}>No records found</td>
                    </tr>
                )}
            </tbody>
        </Table>
    </div>
    );
};


