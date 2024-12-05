import React from 'react';
// import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar: React.FC = () => {
    return (
        <div className="sidebar">
            <div className="profile-section">
                <img src="https://greekherald.com.au/wp-content/uploads/2020/07/default-avatar.png" alt="Profile Avatar" className="profile-avatar" />
                <div className="profile-info">
                    <h4> Muhammadrizo </h4>
                    <p> Owner </p>
                </div>
            </div>
            <nav className="nav-links">
                {/* <Link to="/dashboard">Dashboard</Link>
        <Link to="/users">User Management</Link>
        <Link to="/content">Content Management</Link>
        <Link to="/settings">Settings</Link>
        <Link to="/analytics">Analytics</Link>
        <Link to="/notifications">Notifications</Link> */}
            </nav>
            <button className="logout-button">Logout</button>
        </div>
    );
};

export default Sidebar;
