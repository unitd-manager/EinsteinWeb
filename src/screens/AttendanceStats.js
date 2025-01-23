import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register components for chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const AttendanceStats = () => {
    const attendanceData = {
        labels: ['Present', 'Absent'],
        datasets: [
            {
                label: 'Attendance',
                data: [120, 30], // Static attendance stats
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
                        <h5>Total Days Present</h5>
                        <p><strong>120</strong></p>
                    </div>
                    <div className="attendance-card">
                        <h5>Total Days Absent</h5>
                        <p><strong>30</strong></p>
                    </div>
                    <div className="attendance-card">
                        <h5>Attendance Percentage</h5>
                        <p><strong>80%</strong></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AttendanceStats;
