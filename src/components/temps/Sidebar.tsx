import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar: React.FC = () => {
    return (
        <div className="sidebar">
            <div className="profile-section">
                <img src="https://getwallpapers.com/wallpaper/full/5/2/8/1155495-full-size-assassins-creed-wallpaper-hd-1920x1080-for-desktop.jpg" alt="Profile Avatar" className="profile-avatar" />
                <div className="profile-info">
                    <h4> Muhammadrizo </h4>
                    <p> Owner </p>
                </div>
            </div>
            <nav className="nav-links">
                <a href='/'> Dashboard </a>
                <Link to="/manage-study-dates">Manage Study Dates</Link>
                <Link to="/manage-teacher-assignments">Manage Teacher Assignments</Link>
                <Link to="/group-statistics">Group Statistics</Link>
            </nav>
            <button className="logout-button">Logout</button>
        </div>
    );
};

export default Sidebar;
