import React from 'react';
import { useLocation } from 'react-router-dom';
import './Sidebar.css';

const Sidebar: React.FC = () => {
    const location = useLocation();

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
                <a href = '/' className = {location.pathname === '/' ? 'active' : ''}> Dashboard </a>
                <a href = "/manage-study-dates" className = {location.pathname === '/manage-study-dates' ? 'active' : ''}> Manage Study Dates </a>
                <a href = "/manage-teacher-assignments" className = {location.pathname === '/manage-teacher-assignments' ? 'active' : ''}> Manage Teacher Assignments </a>
                <a href = "/group-statistics" className = {location.pathname === '/group-statistics' ? 'active' : ''}> Group Statistics </a>
            </nav>
            
            <button className="logout-button"> Logout </button>
        
        </div>
    );
};

export default Sidebar;
