import React from "react";
import nice from "./pics/nice.jpg";
import want from "./pics/want.jpg";
import rest from "./pics/rest.jpg";
import outside from "./pics/outside.jpg";
import { Container, Row, Col } from "react-bootstrap";

const Gallery = () => {
  return (
    <>
      <Container id="gall">
        <Row>
          <Col md="3">
            <div>
              <img className="imgimage" src={nice} alt="#" />
            </div>
          </Col>
          <Col md="3">
            <div>
              <img className="imgimage" src={want} alt="#" />
            </div>
          </Col>
          <Col md="3">
            <div>
              <img className="imgimage" src={rest} alt="#" />
            </div>
          </Col>
          <Col md="3">
            <div>
              <img className="imgimage" src={outside} alt="#" />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Gallery;
