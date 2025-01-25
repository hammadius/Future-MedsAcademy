import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

const Login = () => {
    const navigate = useNavigate();

    // State for form input
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // Hardcoded credentials for testing
    const users = {
        "admin@example.com": { role: "admin", password: "admin123" },
        "student@example.com": { role: "student", password: "student123" }
    };

    const handleLogin = () => {
        if (!email || !password) {
            setError('Please enter email and password.');
            return;
        }

        // Validate user credentials
        if (users[email] && users[email].password === password) {
            const user = { email, role: users[email].role, token: "dummyToken" };
            localStorage.setItem('user', JSON.stringify(user));
            navigate(user.role === 'admin' ? "/admin-dashboard" : "/student-dashboard");
        } else {
            setError('Invalid email or password. Please try again.');
        }
    };

    return (
        <div className="signup-container">
            <h2>Login</h2>
            {error && <p className="error-message">{error}</p>}
            <input 
                type="email" 
                placeholder="Email" 
                className="input-field" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
            />
            <input 
                type="password" 
                placeholder="Password" 
                className="input-field" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
            />
            <button className="signup-btn" onClick={handleLogin}>Login</button>
            <p className="login-text">
                Don't have an account? <a href="/signup">Sign Up</a>
            </p>
        </div>
    );
};

export default Login;
