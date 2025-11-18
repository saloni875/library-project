

import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";

const facilities = [
  {
    title: "🪑 Comfortable Seating",
    description: "Dedicated seat with personal space for your daily study.",
  },
  {
    title: "💡 Power Backup & AC",
    description: "Cool, calm, and uninterrupted study time.",
  },
  {
    title: "🌐 High-Speed WiFi",
    description: "Stay connected for research and online prep.",
  },
  {
    title: "🚰 Water & Washroom",
    description: "Clean and hygienic utilities available.",
  },
  {
    title: "🧘 Peaceful Environment",
    description: "Silence zone for deep focus and self-discipline.",
  },
  {
    title: "👮 Security & Parking",
    description: "Safe for girls and boys with two-wheeler parking.",
  },
];

const FacilitySection = () => {
  return (
    <section className="py-5 bg-light">
      <Container>
        <h2 className="text-center  mb-4" data-aos="fade-up"  style={{color: 'rgba(9, 97, 192, 1)'}}>Our Facilities</h2>
        <Row>
          {facilities.map((item, index) => (
            <Col md={4} sm={6} className="mb-4" key={index}>
              <Card
                className="h-100 shadow-sm"
                data-aos="flip-left"
                data-aos-delay={index * 600}
              >
                <Card.Body>
                  <Card.Title  style={{color: 'rgba(9, 97, 192, 1)'}}>{item.title}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FacilitySection;
