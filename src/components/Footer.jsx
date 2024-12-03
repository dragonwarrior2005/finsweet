import React from 'react'
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap'
import "./footer.css"
import logo from "../assets/finsweetlogo.png"
import icons from "../assets/mediaicon.png"

const Footer = () => {
  return (
    <section id="footer">
            <Container>
                <Row>
                    <Col lg={4}>
                    <div className="left">
                        <img src={logo} alt="" />

                        <p className='description'>We are always open to discuss your project and improve your online presence.</p>

                        <Row className='email'>
                            <Col lg={6}>
                            <h3>Email me at</h3>
                            <p>contact@website.com</p>
                            </Col>
                            <Col lg={6}>
                            <h3>Call us</h3>
                            <p>0927 6277 28525</p>
                            </Col>
                        </Row>
                    </div>
                    
                    </Col>
                    <Col lg={2}>
                    </Col>
                    <Col lg={6}>
                    <h2>Lets Talk!</h2>
                    <p className='description2'>We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.</p>
                    <img src={icons} alt="" />

                    
                    </Col>
                </Row>
            </Container>

            <Navbar expand="lg" className='copyright'>
    <Container>
      <Navbar.Brand href="#home">Copyright 2022, Finsweet.com</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#aboutus">About us</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <Nav.Link href="#faq">FAQ</Nav.Link>
          <Nav.Link href="#blog">Blog</Nav.Link>
          <Nav.Link href="#contactus" className='contactbtn'>Contact us</Nav.Link>

          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

    </section>

  )
}

export default Footer