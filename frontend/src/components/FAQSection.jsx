import React from "react";
import { Accordion, Button, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

const FAQSection = () => {
  // Top 3 FAQs for homepage
  const faqs = [
    { question: "What are the library timings?", answer: "Our library is open 7 AM - 9 PM every day." },
    { question: "How can I become a member?", answer: "You can sign up online or visit the library to register." },
    { question: "Do you provide study materials?", answer: "no! We have facility which mention above." },
  ];

 

  return (
    <div className="container my-5">
      {/* FAQ Section */}
      <h2 className="text-center mb-4">Frequently Asked Questions</h2>
      <Accordion defaultActiveKey="0" className="mb-3">
        {faqs.map((faq, idx) => (
          <Accordion.Item eventKey={idx.toString()} key={idx}>
            <Accordion.Header>{faq.question}</Accordion.Header>
            <Accordion.Body>{faq.answer}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
      <div className="text-center mb-5">
        <Link to="/contact" className="btn rounded-pill px-4" style={{backgroundColor: 'rgba(83, 151, 222, 1)', color: '#0b0b0bff'}}>
          View All FAQs
        </Link>
      </div>

      
       
    </div>
  );
};

export default FAQSection;
