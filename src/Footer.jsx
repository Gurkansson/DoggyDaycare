import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; 2024 Dog Daycare. All rights reserved.</p>
            <nav>
                <a href="/privacy" className="footer-link">Privacy Policy</a>
                <a href="/terms" className="footer-link">Terms of Service</a>
                <a href="/contact" className="footer-link">Contact Us</a>
            </nav>
        </footer>
    );
};

export default Footer;