import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="social-media">
                    <p>Let's get social :</p>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                        <a href="https://www.instagram.com/futuremedsacademy" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                    </div>
                </div>

                <div className="contact-info">
                    <p>Contact Us :</p>
                    <a href="http://www.futuremedsacademy.com">http://www.futuremedsacademy.com</a>
                </div>

                <div className="reach-out">
                    <p>Reach out to us :</p>
                    <p>Get your questions answered about learning with Us</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
