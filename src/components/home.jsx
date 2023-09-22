import React from "react";
import "../App.css";
import But from "../extra.jsx/but";
import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import studyroom from './pics/studyroom.jpg';
import corridor from './pics/corridor.jpg';
import nice from './pics/nice.jpg';
import mansion from './pics/mansion.jpg'
import blackkitchen from './pics/blackkitchen.jpg';
import kitchen from './pics/kitchen.jpg';
import tech from './pics/tech.jpg';
import arrow from './pics/arrow.svg'

const Home = () => {
  return (
    <>
      <Container>
        {/* This is the firstrow */}
        <Row className="firstrow">
          <Col md="5">
            <div className="firstdiv">
              <h1>YOUR PERSONAL LOFT DESIGN</h1>
              <p>
                The company was founded in 2015 and has been enjoying its
                popularity and quality for many yearsNihil quae, libero quis
                dicta quibusdam excepturi illo,
              </p>
              <Link to='/details'>
              <But
                stile={{ width:"200px" }}
                color="secondary"
                descript="More Details"
              />
              </Link>
            </div>
          </Col>
          <Col md="7">
            <div style={{height: "100%" }} md="5">
              <img className="firstimage" src={mansion} alt="#"/>
            </div>
          </Col>
        </Row>


            {/* You are in the second row */}
            <Link className="lin" to='/about'>
        <Row className="secondrow">
          <Col md="7">
            <div className="secondone">
             <img src={studyroom} alt="#"/>
            </div>
          </Col>
          <Col md="5">
            <div className="secondtwo">
              <h1>About Us</h1>
              <p className="secondpara">
                Discover the blend of modern aesthetics and urban charm as we
                unveil a symphony of creativity within each space. Our expertly
                curated designs transform ordinary spaces into extraordinary
                expressions of style and functionality.
              </p>
              <Row>
                <Col md="6">
                  <div>
                    <span className="numbers">400+</span>
                    <p className="numpara">Success Product</p>
                  </div>
                </Col>
                <Col md="6">
                  <div>
                    <span className="numbers">200+</span>
                    <p className="numpara">Product Lunches</p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md="12">
                  <div>
                    <span className="numbers">3500+</span>
                    <p className="numpara">Happy Customers</p>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        </Link>

             {/* This is the thirdrow */}
        <Row className="thirdrow">
          <h1>OUR CHOICE</h1>
          <Col md="12">
            <div className="ourchoice">
              <span className="big">Interior New Design </span>
              <span>Creating a complete design for your home</span>
              <img className="logo" src={arrow} alt="#"/>              
            </div>
          </Col>
          <hr />
          <Col md="12">
            <div className="ourchoice">
              <span className="big">Interior New Design </span>
              <span>Creating a complete design for your home</span>
              <img className="logo" src={arrow} alt="#"/>              
            </div>
          </Col>
          <hr />
          <Col md="12">
            <div className="ourchoice">
              <span className="big">Interior New Design </span>
              <span>Creating a complete design for your home</span>
              <img className="logo" src={arrow} alt="#"/>              
            </div>
          </Col>
          <hr />
          <Col md="12">
            <div className="ourchoice">
              <span className="big">Interior New Design </span>
              <span>Creating a complete design for your home</span>
              <img className="logo" src={arrow} alt="#"/>              
            </div>
          </Col>
          <hr />
          <Col md="12">
            <div className="ourchoice">
              <span className="big">Interior New Design </span>
              <span>Creating a complete design for your home</span>
              <img className="logo" src={arrow} alt="#"/>              
            </div>
          </Col>
          <hr />
        </Row>

         {/* The forthrow */}
        <div>
          <h1>Our Gallery</h1>
          <Row className="forthrow">
            <Col style={{paddingRight:'0px'}} className="firstpic" md="3">
              <img src={corridor} alt="#" className="images"></img>
            </Col>
            <Col idName="which" md="3">
              <img src={nice} alt="#" className="images"></img>
            </Col>
            <Col md="3">
              <img src={tech} alt="#" className="images"></img>
            </Col>
            <Col md="3">
              <img src={kitchen} alt="#" className="images"></img>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <Link to='/gallery'>
              <But
                color="secondary"
                stile={{
                  width: "200px",
                  border: "solid 2px gray",
                  marginTop: "50px",
                }}
                connect='./components/gallery'
                descript="Gallery"
              />
              </Link>
            </Col>
          </Row>
        </div>

        <Row style={{ marginTop: "60px" }} className="lastrow">
          <Col md="4">
            <div style={{ marginTop: "30px" }}>
              <h1>Start Your Project Right Now</h1>
              <h2>Turn your house into a dream! </h2>
              <But
                color="secondary"
                stile={{ marginTop: "40px", width: "200px" }}
                descript="More Details"
              />
            </div>
          </Col>
          <Col md="8">
            <img className="firstimage"  src={blackkitchen} alt="#"/>
          </Col>
        </Row>

        {/* footer */}
        <Row>
          <Col md="8">
            <div>
              <h5>
                <span className="inter">I</span>NTER
                <span className="love">
                  <span className="inter">L</span>OVE
                </span>
              </h5>
            </div>
          </Col>
          <Col md="4">
            <Row>
              <Col md="6">
                <Link to='/about' className="link">About</Link>
              </Col>
              <Col md="6">
                <Link to='contact' className="link">Contact Us</Link>
              </Col>
            </Row>
          </Col>
        </Row>
        <hr />

        <Row>
          <Col md="12">
            <footer>
              <center>
                <h5> 2023 InterLove all right reserved created by david</h5>
              </center>
            </footer>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
