import React from 'react'
import "./Footer.css"

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-modern">
      <div className="footer-content">
        <div className="footer-section">
          <h5>About</h5>
          <p>A modern React development showcase with comprehensive component examples.</p>
        </div>
        <div className="footer-section">
          <h5>Quick Links</h5>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/counter">Counter</a></li>
            <li><a href="/form">Register</a></li>
            <li><a href="/table">Table</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h5>Contact</h5>
          <p>Email: info@reactdev.com</p>
          <p>Phone: +1 (555) 123-4567</p>
        </div>
      </div>
      <div className="footer-divider"></div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} React Dev Hub. All rights reserved.</p>
        <p>Created with ❤️ for web developers</p>
        <p className="institution-credit">@Copyright: KIeT MCA</p>
      </div>
    </footer>
  )
}

export default Footer