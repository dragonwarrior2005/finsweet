import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "./homesec2.css"
import Howwework from './Howwework'
import pointer from '../assets/pointer.png'

const Homesec2 = () => {
  return (
    <section id='sectiontwo'>
        <Container>
            <Row>
                <Col lg={6}>
                <h1>How we work</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio odio sapiente voluptatibus necessitatibus consectetur, </p>

                <a href="#" style={{textDecoration:"none"}}>Get in touch with us</a>
                </Col>
                <Col lg={6}>
                <Row>
                    <Col lg={6}>
                    <Howwework title="Strategies" image={pointer}/>
                    <Howwework title="Design" image={pointer}/>

                    </Col>
                    <Col lg={6}>
                    <Howwework title="Wireframing" image={pointer}/>
                    <Howwework title="Development" image={pointer}/>
                    </Col>
                </Row>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Homesec2