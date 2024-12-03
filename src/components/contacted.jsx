import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "./contact.css"
const Contacted = () => {
  return (
    <section>
        <Container>
            <div className="headline">
                <h1>Contact Us</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
            </div>
            <div className="contactform">
              <Row>
                <Col lg={6}>
                <p>Name</p>
                <input type="text" placeholder='Enter your name'/>
                <p>Subject</p>
                <input type="text" placeholder='Provide Context' />
                
                </Col>
                <Col lg={6}>
                <p>Email</p>
                <input type="text" placeholder='Enter Email'/>
                <p>Subject</p>
                <input type="text" placeholder='Select' />
                
                </Col>

                <p style={{textAlign:"left"}}>Message</p>
                <input className='message' type="text" placeholder='Write your question here' style={{padding:"100px 0"}}/>
                
              </Row>

              <Row>
                <Col lg={2}>
                <input type="submit" className='submitbtn' />
                </Col>
              </Row>
            
              
            </div>
        </Container>
    </section>
  )
}

export default Contacted