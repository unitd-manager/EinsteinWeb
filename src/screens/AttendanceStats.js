import React, {useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import PropTypes from 'prop-types';
import api from '../constants/api';

// Register components for chart.js
ChartJS.register(ArcElement, Tooltip, Legend);



export default function AttendanceStats({ studentDetails }) {
    AttendanceStats.propTypes = {
        studentDetails: PropTypes.object,
    };

    const [attendanceDatas, setAttendanceAdvice] = useState([]);
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
     
      
      const getTotaldays = () => {
        return attendanceDatas.reduce((total, item) => total + Number(item.no_of_working_days || 0), 0);
      };

      const getTotalAbsentdays = () => {
        return attendanceDatas.reduce((total, item) => total + Number(item.no_of_absent || 0), 0);
      };
        const totalNumberOfWorkingDays = getTotaldays()
        const totalNumberOfAbsentDays = getTotalAbsentdays()

        const attendancePercentage = ((totalNumberOfWorkingDays / (totalNumberOfWorkingDays + totalNumberOfAbsentDays)) * 100).toFixed(2)
      


    const attendanceData = {
        labels: ['Present', 'Absent'],
        datasets: [
            {
                label: 'Attendance',
                data: [totalNumberOfWorkingDays, totalNumberOfAbsentDays], // Static attendance stats
                backgroundColor: ['#4caf50', '#f44336'],
                borderColor: ['#4caf50', '#f44336'],
                borderWidth: 1,
            },
        ],
    };

    const attendanceOptions = {
        responsive: true,
        maintainAspectRatio: false,
    };

    return (
        <div>
            <div className="row">
                <div className="col-md-6">
                    <div className="attendance-chart" style={{ height: '300px' }}>
                        <Pie data={attendanceData} options={attendanceOptions} />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="attendance-card">
                        <h5>Total No Of Working Days</h5>
                        <p><strong>{totalNumberOfWorkingDays}days</strong></p>
                    </div>
                    <div className="attendance-card">
                        <h5>Total Days Absent</h5>
                        <p><strong>{totalNumberOfAbsentDays}days</strong></p>
                    </div>
                    <div className="attendance-card">
                        <h5>Attendance Percentage</h5>
                        <p><strong>{attendancePercentage}%</strong></p>
                    </div>
                </div>
            </div>
        </div>
    );
};


