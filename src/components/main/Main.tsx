import React from 'react';
import './style.css';
import Sidebar from '../temps/Sidebar';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const Main: React.FC = () => {
    // Sample data for the charts
    const attendanceData = {
        labels: ['Group 1', 'Group 2', 'Group 3'],
        datasets: [
            {
                label: 'Attendance Percentage',
                data: [85, 90, 75],
                backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)'],
                borderColor: ['rgba(75, 192, 192, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
                borderWidth: 1,
            },
        ],
    };

    const absenceData = {
        labels: ['Group 1', 'Group 2', 'Group 3'],
        datasets: [
            {
                label: 'Absence Percentage',
                data: [15, 10, 25],
                backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(255, 159, 64, 0.6)', 'rgba(153, 102, 255, 0.6)'],
                borderColor: ['rgba(255, 99, 132, 1)', 'rgba(255, 159, 64, 1)', 'rgba(153, 102, 255, 1)'],
                borderWidth: 1,
            },
        ],
    };

    const topGroups = [
        { groupName: 'Group 1', absencePercentage: '15%' },
        { groupName: 'Group 2', absencePercentage: '10%' },
        { groupName: 'Group 3', absencePercentage: '25%' },
    ];

    const topStudents = [
        { studentName: 'Alice', groupName: 'Group 1', absencePercentage: '5%' },
        { studentName: 'Bob', groupName: 'Group 2', absencePercentage: '3%' },
        { studentName: 'Charlie', groupName: 'Group 3', absencePercentage: '4%' },
    ];

    return (
        <main className="main-content">
            <Sidebar />
            <div className="dashboard-wrapper">
                <div className="chart-container">
                    <div className="chart">
                        <h3> Attendance: </h3>
                        <div className="chart-diagram">
                            <Bar data={attendanceData} options={{ responsive: true, maintainAspectRatio: false }} />
                        </div>
                    </div>
                    <div className="chart">
                        <h3>Absence:</h3>
                        <div className="chart-diagram">
                            <Pie data={absenceData} options={{ responsive: true, maintainAspectRatio: false }} />
                        </div>
                    </div>
                </div>
                <div className="top-section">
                    <div className="top-groups">
                        <h3> Top Groups with Smallest Absence: </h3>
                        <ul>
                            {topGroups.map((group, index) => (
                                <li key={index}>
                                    <span> {group.groupName} </span>
                                    <span> {group.absencePercentage} </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="top-students">
                        <h3> Top Students With Smallest Absence: </h3>
                        <table>
                            <thead>
                                <tr>
                                    <th> Student Name </th>
                                    <th> Group </th>
                                    <th> Absence Percentage </th>
                                </tr>
                            </thead>
                            <tbody>
                                {topStudents.map((student, index) => (
                                    <tr key={index}>
                                        <td> {student.studentName} </td>
                                        <td> {student.groupName} </td>
                                        <td> {student.absencePercentage} </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Main;
