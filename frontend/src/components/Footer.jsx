
import React from "react";

const Footer = () => {
  return (
   <footer className="container-sm" style={{ backgroundColor: "#c0dcf5ff", color: "#222222ff", padding: "2rem" }}>
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
    <h3> <img src="/src/assets/download.jpeg" alt="image" width={50} height={50} /> Krishna Self Study Library</h3>
    <h5>📍 Near Nikhil and Krishna Building Matrials, jangha Road, Rampur Chauraha, Uttar Pradesh - 273202</h5>

    {/* Google Maps Embed */}
    <iframe
      title="Library Location"
      src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3565.748838187071!2d83.49549707543063!3d26.656522976800847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDM5JzIzLjUiTiA4M8KwMjknNTMuMSJF!5e0!3m2!1sen!2sin!4v1756022234591!5m2!1sen!2sin"
      width="300"
      height="200"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>

    <h6>© {new Date().getFullYear()} Krishna Library. All rights reserved.</h6>
  </div>
  
</footer>
  );
};

export default Footer;
