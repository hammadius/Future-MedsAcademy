import React from 'react';
import './Dashboard.css';

const DashboardHeader = ({ username }) => {
    // Logout function to clear user session
    const handleLogout = () => {
        localStorage.removeItem('user');
        window.location.href = "/login";
    };
    return (
        <header className="dashboard-header">
            <h1>Welcome, {username}!</h1>
            <div className="dashboard-actions">
                <button className="logout-btn" onClick={handleLogout}>Logout</button>
            </div>
        </header>
    );
};

export default DashboardHeader;
