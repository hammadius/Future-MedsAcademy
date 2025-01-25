import React from 'react';
import './SignUpButton.css';

const SignUpButton = ({ onClick, text }) => {
    return (
        <button className="signup-button" onClick={onClick}>
            {text || "Sign Up"}
        </button>
    );
};

export default SignUpButton;
