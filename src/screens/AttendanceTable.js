import React from 'react';
import { Table } from 'reactstrap'; // For Bootstrap table, or use <table> directly if not using Reactstrap
import { FaCheckCircle, FaTimesCircle, FaClock } from 'react-icons/fa'; // Icons for status

const AttendanceTable = () => {
    const attendanceData = [
        { date: '2024-09-01', status: 'Present', subject: 'MPMC', remarks: 'On time' },
        { date: '2024-09-02', status: 'Absent', subject: 'Electronic Device', remarks: 'Sick' },
        { date: '2024-09-03', status: 'Late', subject: 'EVS', remarks: 'Late by 10 minutes' },
        { date: '2024-09-04', status: 'Present', subject: 'OOPS', remarks: 'On time' },
        { date: '2024-09-05', status: 'Absent', subject: 'CT', remarks: 'Family emergency' },
    ];

    // Function to return an icon and color based on status
    const getStatusIcon = (status) => {
        switch (status) {
            case 'Present':
                return <FaCheckCircle style={{ color: 'green' }} />;
            case 'Absent':
                return <FaTimesCircle style={{ color: 'red' }} />;
            case 'Late':
                return <FaClock style={{ color: 'orange' }} />;
            default:
                return null;
        }
    };

    return (
        <div>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Subject</th>
                        <th>Remarks</th>
                    </tr>
                </thead>
                <tbody>
                    {attendanceData.map((attendance, index) => (
                        <tr key={index}>
                            <td>{attendance.date}</td>
                            <td>
                                {getStatusIcon(attendance.status)} <span style={{ marginLeft: '10px' }}>{attendance.status}</span>
                            </td>
                            <td>{attendance.subject}</td>
                            <td>{attendance.remarks}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default AttendanceTable;
