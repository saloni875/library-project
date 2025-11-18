

import React from "react";
import { Container, Button } from "react-bootstrap";

const HeroSection = () => {
  return (
    <section
      className="d-flex align-items-center justify-content-center text-center  container-sm"
      style={{
        background: "linear-gradient(to right, #6c9bcdff, #c2c2c9ff)",
        minHeight: "80vh",
        padding: "2rem",
      }}
    >
      <Container>
        <h1
          className="fw-bold text-primary"
          data-aos="fade-down"
          data-aos-duration="1200"
           style={{color: 'rgba(9, 97, 192, 1)'}}
        >
          Welcome to Krishna Library
        </h1>
        <p className="lead" data-aos="fade-up" data-aos-delay="200">
          A peaceful environment for self-study, exam prep & personal growth.
        </p>
        <Button  className="mt-3" data-aos="zoom-in" data-aos-delay="400" style={{backgroundColor: 'rgba(83, 151, 222, 1)', color: '#0b0b0bff'}}>
          Book Your Seat Now
        </Button>
      </Container>
    </section>
  );
};

export default HeroSection;
