import React, {Component} from 'react'

import {Container, Col, Row, Card, Form, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

import '../styles/Login.css'

class Login extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col></Col>
                    <Col md = {4} xs={12}>
                        <div className='center'>
                            <div className='verticalCenter'>
                                <h4>Account Login</h4>
                                <hr/>
                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Control type="text" placeholder="Username" />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>

                                    <Button variant="primary" className='button' type="submit">
                                        Sign In
                                    </Button>
                                </Form>

                                <br/>
                                <br/>

                                <div className='help'>
                                    Forgot Password? <Link>Click Here</Link>
                                    <br/>
                                    Create an account? <Link to='/register'>Click Here</Link>
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

export default Login