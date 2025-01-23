import React, { useEffect, useState } from 'react';
import { Table } from 'reactstrap'; // Assuming Bootstrap for styling

const attendanceData = [
    { date: '2024-01-01', status: 'Present' },
    { date: '2024-01-02', status: 'Absent' },
    { date: '2024-01-03', status: 'Present' },
    { date: '2024-02-01', status: 'Present' },
    { date: '2024-02-02', status: 'Present' },
    { date: '2024-02-03', status: 'Absent' },
    { date: '2024-02-04', status: 'Present' },
    { date: '2024-03-01', status: 'Present' },
    { date: '2024-03-02', status: 'Late' },
    { date: '2024-03-03', status: 'Present' },
    { date: '2024-03-04', status: 'Absent' },
    { date: '2024-04-01', status: 'Present' },
    { date: '2024-04-02', status: 'Present' },
    { date: '2024-04-03', status: 'Present' },
    { date: '2024-04-04', status: 'Absent' }
];

// Function to calculate attendance percentage for each month
const calculateMonthlyAttendance = (data) => {
    const monthlyData = {};

    data.forEach((record) => {
        const month = new Date(record.date).toLocaleString('default', { month: 'long' });
        if (!monthlyData[month]) {
            monthlyData[month] = { present: 0, total: 0 };
        }
        monthlyData[month].total += 1;
        if (record.status === 'Present') {
            monthlyData[month].present += 1;
        }
    });

    const monthlyAttendance = Object.keys(monthlyData).map((month) => {
        const percentage = (monthlyData[month].present / monthlyData[month].total) * 100;
        return {
            month,
            percentage: percentage.toFixed(2),
        };
    });

    return monthlyAttendance;
};

// Function to sort the months and return the top 3 with highest attendance
const getTopThreeMonths = (monthlyAttendance) => {
    return monthlyAttendance
        .sort((a, b) => b.percentage - a.percentage) // Sort by percentage in descending order
        .slice(0, 3); // Take top 3 months
};

const TopThreeMonthAttendance = () => {
    const [topThreeMonths, setTopThreeMonths] = useState([]);

    useEffect(() => {
        const monthlyAttendance = calculateMonthlyAttendance(attendanceData);
        const topThree = getTopThreeMonths(monthlyAttendance);
        setTopThreeMonths(topThree);
    }, []);

    return (
        <div>
            {topThreeMonths.length > 0 ? (
                <Table>
                    <thead>
                        <tr>
                            <th>Month</th>
                            <th>Attendance Percentage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {topThreeMonths.map((monthData, index) => (
                            <tr key={index}>
                                <td>{monthData.month}</td>
                                <td>{monthData.percentage}%</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            ) : (
                <p>Loading top 3 months data...</p>
            )}
        </div>
    );
};

export default TopThreeMonthAttendance;
