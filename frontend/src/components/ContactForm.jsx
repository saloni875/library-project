import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const ContactForm = () => {
  const containerStyle = {
    background: "linear-gradient(135deg, #f8f9fa, #e3f2fd)",
    borderRadius: "15px",
    boxShadow: "0 6px 15px rgba(0, 0, 0, 0.1)",
    padding: "3rem",
    marginTop: "2rem",
    marginBottom: "2rem",
  };

  const headingStyle = {
    color: "rgba(9, 97, 192, 1)",
    fontWeight: "700",
    marginBottom: "1rem",
  };

  const infoText = {
    fontSize: "1.4rem",
    color: "#31363bff",
  };

  return (
    <div className="container contact-container" style={containerStyle}>
      <h1 className="text-center" style={headingStyle}>
        Contact Us
      </h1>
      <p className="text-center mb-5" style={infoText}>
        We'd love to hear from you! Reach out for queries, membership, or feedback.
      </p>

      <div className="row">
        {/* Contact Info */}
        <div className="col-md-6 mb-4">
          <h4 className=" mb-3" style={{color: 'rgba(9, 97, 192, 1)'}}>Contact Information</h4>
          <p style={{fontSize : '1.1rem'}}><strong>📍 Address:</strong> Near Golghar, Gorakhpur, Uttar Pradesh</p>
          <p style={{fontSize : '1.1rem'}}><strong>📞 Phone:</strong> +91 98765 43210</p>
          <p style={{fontSize : '1.1rem'}}><strong>✉️ Email:</strong> krishnalibrary@gmail.com</p>
          <p style={{fontSize : '1.1rem'}}><strong>📸 Instagram:</strong> @krishna.library</p>
          <p style={{fontSize : '1.1rem'}}><strong>👩‍💼 Owner:</strong> Awadhesh Singh</p>
        </div>

        {/* Contact Form */}
        <div className="col-md-6">
          <h4 className="mb-3" style={{color: 'rgba(9, 97, 192, 1)'}}>Send Us a Message</h4>
          <form>
            <div className="mb-3">
              <label className="form-label">Your Name</label>
              <input type="text" className="form-control" placeholder="Enter your name" />
            </div>
            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input type="email" className="form-control" placeholder="Enter your email" />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea
                className="form-control"
                rows="4"
                placeholder="Write your message here..."
              ></textarea>
            </div>


            <button type="submit" className="btn px-4" style={{backgroundColor: 'rgba(83, 151, 222, 1)', color: '#0b0b0bff'}}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

