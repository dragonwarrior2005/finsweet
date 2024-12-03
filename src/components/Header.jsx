import React from 'react'
import "./header.css"
import logo from "../assets/finsweetlogo.png"
import { Link } from 'react-router-dom'

import { Container, Navbar, Nav } from 'react-bootstrap'

const Header = () => {
  return (
    <Navbar expand="lg">
    <Container>
      <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#home"><Link to='/'>Home</Link></Nav.Link>
          <Nav.Link href="#aboutus"><Link to='/about'>About us</Link></Nav.Link>
          <Nav.Link href="#privacy"><Link to='/privacypolicy'>Privacy Policy</Link></Nav.Link>
          <Nav.Link href="#pricing"><Link to='/pricing'>Pricing</Link></Nav.Link>
          <Nav.Link href="#faq"><Link to='/faq'>FAQ</Link></Nav.Link>
          <Nav.Link href="#blog">
            <Link to='/blog'>Blog</Link>
          </Nav.Link>
          <Nav.Link href="#contactus">
            <Link to='/contact' className='contactbtn'> Contact us</Link> </Nav.Link>

          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

  )
}

export default Header