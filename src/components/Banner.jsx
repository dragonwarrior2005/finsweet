import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "./banner.css"
import bannerpic from "../assets/Illustration.png"

const Banner = () => {
  return (
    <section id="banner" style={{backgroundColor:"#1C1E53"}}>

        <Container>
            <Row style={{padding:'125px 0'}}>
                <Col lg={4}>
                <h1>Building stellar websites for early startups</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia beatae labore ipsam obcaecati natus accusantium ipsum voluptas? Mollitia ullam assumenda quisquam. Ipsam odio molestias modi expedita? Omnis reprehenderit minus ducimus.</p>

                <a href="#">View our work</a>
                <p style={{display:"inline-block", marginLeft:"40px"}}>View Pricing</p>
                </Col>
                <Col lg={1}></Col>
                <Col lg={6}><img src={bannerpic} alt="" /></Col>
            </Row>
        </Container>

    </section>
  )
}

export default Banner