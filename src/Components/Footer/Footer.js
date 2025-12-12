import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
       <div className="logo-foot">
        Spiritual<span>Journeys</span>
      </div>
      <div className="footer-box">
        <h3>Quick Links</h3>
        <a href="#hero">Home</a>
        <a href="#tours">Tours</a>
        <a href="#packages">Packages</a>
        <a href="#booking">Book Now</a>
      </div>
<div className="footer-box">
        <h3>Contact Us</h3>
        <p><strong>Muhammad Umair</strong></p>
        <p>Email: info@spiritualjourneys.pk</p>
        <p>Phone: +92 323 6383700</p>
      </div>
    
      <div className="footer-box">
        <h3>Location</h3>
        <p>Narowal, Pakistan</p>
        <p>Islamabad, Pakistan</p>
      </div>

      <div className="footer-bottom">
        &copy; Designed by Marium. All Rights Reserved.
      </div>

    </footer>
  );
};
export default Footer;
