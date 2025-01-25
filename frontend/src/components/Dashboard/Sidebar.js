import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Sidebar = ({ role }) => {
    return (
        <div className="sidebar">
            <h2>Dashboard</h2>
            <ul>
                <li><Link to="/dashboard">Home</Link></li>
                {role === 'admin' && (
                    <>
                        <li><Link to="/admin-dashboard/manage-courses">Manage Courses</Link></li>
                        <li><Link to="/admin/students">Student Activities</Link></li>
                        <li><Link to="/admin/reports">Reports</Link></li>
                        <li><Link to="/admin/reports">Mock Test</Link></li>
                        <li><Link to="/admin/reports">Progress</Link></li>
                        
                    </>
                )}
                {role === 'student' && (
                    <>
                        <li><Link to="/student-dashboard/courses">My Courses</Link></li>
                        <li><Link to="/student/progress">Progress</Link></li>
                        <li><Link to="/student/resources">Resources</Link></li>
                    </>
                )}
                <li><Link to="/settings">Settings</Link></li>
            </ul>
        </div>
    );
};

export default Sidebar;
