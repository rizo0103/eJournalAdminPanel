// src/components/main/Main.tsx
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

    return (
        <main className="main-content">
            <Sidebar />
            <div className="dashboard-wrapper">
                <h2>Group Statistics</h2>
                <div className="chart-container">
                    <div className="chart">
                        <h3>Attendance</h3>
                        <Bar data={attendanceData} options={{ responsive: true, maintainAspectRatio: false }} />
                    </div>
                    <div className="chart">
                        <h3>Absence</h3>
                        <Pie data={absenceData} options={{ responsive: true, maintainAspectRatio: false }} />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Main;
