import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ContactForm from "../ContactForm";

function Contact() {
  return (
    <div className="container p-5 mb-5">
      <Container className="text-center">
        <div className="mb-5 pb-3 border-bottom border-dark">
          <h1 className="header-font">Get in Touch</h1>
        </div>
      </Container>

      <Container fluid className="shadow-lg mb-5 floating-box-bg rounded">
        <Container className="p-4">
          <Row>
            <Col>
              <Container>
                <h4 className="subHeader-font mb-3 pb-3 border-bottom border-dark">Contact Info</h4>
                <div className="">
                  <p>
                    <a href="mailto:projectuoft@gmail.com" className="text-decoration-none">
                      <span className="material-symbols-outlined pe-4 contact-title">mail</span>
                      Email
                    </a>
                  </p>
                </div>
              </Container>
            </Col>

            <Col sm={12} md={6} lg={8} className="pt-sm-4 pt-lg-0">
              <Container>
                <h4 className="subHeader-font mb-3 pb-3 border-bottom border-dark">Send a Message</h4>
                <ContactForm />
              </Container>
            </Col>
          </Row>
        </Container>
      </Container>
      < br />
      < br />
    </div>
  );
}

export default Contact;
