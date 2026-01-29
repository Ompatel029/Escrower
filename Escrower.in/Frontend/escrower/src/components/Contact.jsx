import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      {/* First Section - 3D Character + Contact Info */}
      <section id="contact" className="contact-page">
        <div className="contact-inner">
          {/* Left Image */}
          <div className="img-box">
            <img src="/contact-image.jpg" alt="3D Character" />
          </div>

          {/* Right Side Contact Info */}
          <div className="details-box">
            {/* Phone - first box (less rounded / almost square) */}
            <div className="contact-card first-box">
              <span className="contact-text">+1(800)123-8946</span>
            </div>

            {/* Arrow 1 */}
            <div className="arrow">
              <svg className="arrow-svg" viewBox="0 0 40 70" fill="none">
                <path d="M20 2 L20 22" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="20" cy="28" r="3.2" fill="white" />
                <path d="M20 34 L20 52" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                <path
                  d="M12 44 L20 52 L28 44"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Email */}
            <div className="contact-card">
              <span className="contact-text">hello@zex.com</span>
            </div>

            {/* Arrow 2 */}
            <div className="arrow">
              <svg className="arrow-svg" viewBox="0 0 40 70" fill="none">
                <path d="M20 2 L20 22" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="20" cy="28" r="3.2" fill="white" />
                <path d="M20 34 L20 52" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                <path
                  d="M12 44 L20 52 L28 44"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Address - last box (more rounded + wide) */}
            <div className="contact-card address-box">
              <span className="contact-text text-center">
                15th street, Office 478 Berlin,<br />
                De81564
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section - Map + Form */}
      <section id="contact-form" className="contact-page form-page">
        <div className="contact-inner form-box">
          {/* Left Side - Map with Heading */}
          <div className="img-box map-section">
            <h2 className="contact-heading">Get in touch!</h2>
            <div className="map-container">
              <img src="/map.png" alt="Location Map" className="map-image" />
            </div>
          </div>

          {/* Right Side - Form Inputs */}
          <div className="details-box form-section">
            {/* Name Input */}
            <div className="contact-card form-input-card">
              <input 
                type="text" 
                placeholder="Name" 
                className="contact-input"
              />
            </div>

            {/* Phone Input */}
            <div className="contact-card form-input-card">
              <input 
                type="tel" 
                placeholder="Phone" 
                className="contact-input"
              />
            </div>

            {/* Email Input */}
            <div className="contact-card form-input-card">
              <input 
                type="email" 
                placeholder="Email" 
                className="contact-input"
              />
            </div>

            {/* Message Textarea */}
            <div className="contact-card form-textarea-card">
              <textarea 
                placeholder="Type your message" 
                className="contact-textarea"
                rows="4"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="contact-card submit-card">
              <button className="gradient-button">
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;