import React from 'react';
import SignUpButton from './SignUpButton';
import './SignUp.css';
import illustration from '../assets/Boy.jpeg'; // Replace with your image path

const SignUp = () => {
    const handleSignUp = () => {
        console.log('Sign Up button clicked');
    };

    return (
        <div className="signup-container">
            <h2>Sign Up</h2>
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
            <SignUpButton onClick={handleSignUp} />
            <p className="login-text">
                Already have an account? <a href="/login">LogIn</a>
            </p>
            <div className="signup-illustration">
                <img src={illustration} alt="Illustration" />
            </div>
        </div>
    );
};

export default SignUp;
