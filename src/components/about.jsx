import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import studyroom from './pics/studyroom.jpg';
import data from '../data.json'

const About = () => {
  return (
    <>
      <Container>
        <Row>
            <Col>
            <center><h1>ABOUT <span style={{color:'white'}}>US</span></h1></center>
            </Col>
        </Row>
        <Row>
            <Col>
            <img className='aboutimage' src={studyroom} alt='#'/>
            <p className='aboutpara'>
               {data && data[0].text}
                </p>
            </Col>
        </Row>
      </Container>
    </>
  )
}

export default About
