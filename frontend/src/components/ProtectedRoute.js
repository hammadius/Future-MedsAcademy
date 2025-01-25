import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element, role }) => {
    // Simulate user authentication (Replace with real authentication later)
    const user = JSON.parse(localStorage.getItem('user')) || null;

    if (!user) {
        return <Navigate to="/login" />;
    }

    if (role && user.role !== role) {
        alert("Access Denied. Admins only!");
        return <Navigate to="/" />;
    }

    return element;
};

export default ProtectedRoute;
