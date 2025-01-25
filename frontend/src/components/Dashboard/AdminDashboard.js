import React from 'react';
import Sidebar from './Sidebar';
import DashboardHeader from './DashboardHeader';
import './Dashboard.css';

const AdminDashboard = () => {

    return (
        <div className="dashboard-container">
            <Sidebar role="admin" />
            <div className="dashboard-content">
                <DashboardHeader username="Admin" />
                
                <div className="dashboard-section">
                    <h2>Manage Courses</h2>
                    <p>View and manage all courses from here.</p>
                </div>

            
            </div>
        </div>
    );
};

export default AdminDashboard;
