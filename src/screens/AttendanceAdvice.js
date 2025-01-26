import React, {useEffect, useState } from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap'; 
import PropTypes from 'prop-types';
import api from '../constants/api';


export default function AttendanceAdvice({ studentDetails }) {
    AttendanceAdvice.propTypes = {
        studentDetails: PropTypes.object,
    };

    const [attendanceData, setAttendanceAdvice] = useState([]);
    const getAttendanceById = () => {
        api
          .post('/student/getStudentAttendanceById', { student_id: studentDetails?.student_id })
          .then((res) => {
            setAttendanceAdvice(res.data.data);
           
          })
          .catch(() => {
          
          });
      };

      useEffect(() => {
        getAttendanceById()
      }, []);

    return (
        <div className="subject-wise-advice-section">
         {Array.isArray(attendanceData) ? attendanceData.map((subject, index) => (
                <Card key={index} className="mb-4" style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                    <CardBody>
                        <CardTitle tag="h4" className="text-primary">
                            {subject.month} - Advice from {subject.staff}
                        </CardTitle>
                        <CardText style={{ fontSize: '16px', lineHeight: '1.6' }}>
                            {subject.remark}
                        </CardText>
                    </CardBody>
                </Card>
          )) : <p>No student details available.</p>}
        </div>
    );
};


