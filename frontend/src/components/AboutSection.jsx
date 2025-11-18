

import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const AboutSection = () => {
  useEffect(() => {
    const element = document.querySelector(".about-container");
    element.style.opacity = 0;
    element.style.transform = "translateY(30px)";
    element.style.transition = "opacity 1s ease, transform 1s ease";

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        element.style.opacity = 1;
        element.style.transform = "translateY(0)";
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
  }, []);

  const containerStyle = {
    background: "linear-gradient(135deg, #e0f7fa, #ffffff)",
    borderRadius: "15px",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
    padding: "3rem",
    marginTop: "2rem",
    marginBottom: "2rem",
  };

  const headingStyle = {
    color: "#007bff",
    fontWeight: "700",
    marginBottom: "2rem",
  };

  const paragraphStyle = {
    fontSize: "1.3rem",
    lineHeight: "1.8",
    color: "#222427ff",
  };

  return (
    <div className="container-sm about-container" style={containerStyle}>
      <h1 className="text-center" style={headingStyle}>
        About Krishna Library
      </h1>
      <p className="text-center" style={paragraphStyle}>
        Krishna Library is a peaceful and well-organized space dedicated to
        self-study and academic excellence. Located in the heart of the city,
        the library offers a quiet environment that supports deep focus and
        productivity. With comfortable seating, fast Wi-Fi, and a wide range of
        amenities, it's an ideal spot for students, aspirants, and readers of
        all kinds. Our mission is to provide a distraction-free zone where you
        can work towards your goals with complete dedication.
      </p>

      {/* Bootstrap Carousel */}
      <div
        id="libraryCarousel"
        className="carousel slide mt-5"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner rounded-4 shadow">
          <div className="carousel-item active">
            <img
              src="https://images.unsplash.com/photo-1519681393784-d120267933ba"
              className="d-block w-100 "
              alt="Study Area"
              style={{ height: "450px", objectFit: "cover" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1507842217343-583bb7270b66"
              className="d-block w-100"
              alt="Library Interior"
              style={{ height: "450px", objectFit: "cover" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1516979187457-637abb4f9353"
              className="d-block w-100"
              alt="Reading Zone"
              style={{ height: "450px", objectFit: "cover" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1507842217343-583bb7270b66"
              className="d-block w-100"
              alt="Library Interior"
              style={{ height: "450px", objectFit: "cover" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1507842217343-583bb7270b66"
              className="d-block w-100"
              alt="Library Interior"
              style={{ height: "450px", objectFit: "cover" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1507842217343-583bb7270b66"
              className="d-block w-100"
              alt="Library Interior"
              style={{ height: "450px", objectFit: "cover" }}
            />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#libraryCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#libraryCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>


      <div className="text-center mt-5">
        <h4 className="text-primary">Join Krishna Library Today</h4>
        <p>Discover a space where focus meets inspiration.</p>
        <button className="btn btn-primary mt-2 px-4 py-2">Explore Membership</button>
      </div>

    </div>
  );
};

export default AboutSection;


