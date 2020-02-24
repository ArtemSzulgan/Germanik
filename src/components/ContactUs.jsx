import React from "react";
import {Form, Button, Container} from "react-bootstrap";
function ContactUs() {
    return(
        <section id="contact-us">
            <h1>...OR JUST SEND AN EMAIL FOR US</h1>
            <Container>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email"/>
                        <Form.Text>We'll never share your email with anyone else</Form.Text>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.Password">
                        <Form.Label>Your name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your name" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Chose theme</Form.Label>
                        <Form.Control as="select">
                            <option>Calculate shipment</option>
                            <option>Partnership</option>
                            <option>Looking for a work</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Your message</Form.Label>
                        <Form.Control as="textarea" rows="5" />
                    </Form.Group>
                    <Button variant="outline-dark"  type="submit">Send</Button>
                </Form>
            </Container>
        </section>
    )
}

export default ContactUs;