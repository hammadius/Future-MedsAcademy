import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <div className="sidebar">
                <h2>Dashboard</h2>
                <ul>
                    <li>Activities</li>
                    <li>Progress</li>
                    <li>Mock Test</li>
                    <li>Reports</li>
                </ul>
            </div>

            <div className="dashboard-content">
                <div className="dashboard-card">
                    <h3>Activities</h3>
                    <div className="bar-chart">
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                </div>

                <div className="dashboard-card">
                    <h3>Progress</h3>
                    <div className="bar-chart">
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                </div>

                <div className="dashboard-card">
                    <h3>Mock Test</h3>
                    <div className="bar-chart">
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
