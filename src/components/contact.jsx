import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import nice from "./pics/nice.jpg";

const Contact = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md="12">
            <center>
            <div className="contact">
              <h1>
                <span style={{color:'white'}}>Contact </span>
                <span>Us</span>
                </h1>
                <p>Please, feel confortable to fill our contact form</p>
            </div>
            </center>
          </Col>
        </Row>
        <Row className="contactrow" style={{backgroundColor:'white', height:'400px'}}>
          <Col md='6'>
            <div className="contacthalf">
            <h5>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam,
               provident fuga! Dolores sed qui voluptates a,
              </h5>

              <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam,
               provident fuga! Dolores sed qui voluptates a
              </p>
              </div>
          </Col>
          <Col md='6'>
            <img src={nice} alt="#" className="contactimg"/>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
