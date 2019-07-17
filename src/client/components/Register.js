import React, {Component} from 'react'

import {Container, Col, Row, Card, Form, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

import '../styles/Login.css'

class Register extends Component {
    render() {
        return(
            <Container>
                <Row>
                    <Col></Col>
                    <Col md = {4} xs={12}>
                        <div className='center'>
                            <div className='verticalCenter'>
                                <h4>Account Register</h4>
                                <hr/>
                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Control type="text" placeholder="First Name" />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Control type="text" placeholder="Last Name" />
                                    </Form.Group>

                                   <Form.Group controlId="formBasicEmail">
                                        <Form.Control type="email" placeholder="Email id" />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>

                                    <Button variant="primary" className='button' type="submit">
                                        Register
                                    </Button>
                                </Form>

                                <br/>
                                <br/>

                                <div className='help'>
                                    Already Have An Account? <Link to='/login'>Click Here</Link>
                                </div>
                            </div>
                        </div>                                   
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        )
    }
}

export default Register