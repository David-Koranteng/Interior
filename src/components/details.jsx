import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import mansion from "./pics/mansion.jpg";
import But from "../extra.jsx/but";
import data from '../data.json'

const Details = () => {
  return (
    <>
      <Container>
        <Row className="firstrow">
          <Col md="5">
            <div className="firstdiv">
              <h1>{data && data[1].title}</h1>
              <p>
                {data && data[1].para}
             </p>
              <But
                stile={{ width: "200px" }}
                color="secondary"
                descript="More Details"
              />
            </div>
          </Col>
          <Col md="7">
            <div style={{ height: "100%" }} md="5">
              <img className="firstimage" src={mansion} alt="#" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col style={{ fontSize: "20px" }} md="12">
            <p>{data && data[1].text}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Details;
