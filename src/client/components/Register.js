import React, {Component} from 'react'

import autobind from 'react-autobind'
import {Container, Col, Row, Card, Form, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

import '../styles/Login.css'

class Register extends Component {

    constructor(props) {
        super(props)

        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            confirmPassword: '',
            buttonDisable: true,
            errorBox: false
        }

        autobind(this)
    }

    onFirstNameChange(event) {
        this.setState({
            firstname: event.target.value
        }, () => this.isNotEmpty())
    }

    onLastNameChange(event) {
        this.setState({
            lastname: event.target.value
        })
    }

    onEmailChange(event) {
        this.setState({
            email: event.target.value
        }, () => this.isNotEmpty())
    }

    onPasswordChange(event) {
        this.setState({
            password: event.target.value
        }, () => this.isNotEmpty())
    }

    onConfirmPasswordChange(event) {
        this.setState({
            confirmPassword: event.target.value
        }, () => this.isNotEmpty())
    }

    onSubmit(event) {
        event.preventDefault()

        const {password, confirmPassword} = this.state

        if(password!==confirmPassword) {
            this.setState({
                errorBox: true
            })
        }
    }

    isNotEmpty() {
        const {firstname, email, password, confirmPassword} = this.state

        if(firstname.length>0 && password.length>0 && email.length>0 && confirmPassword.length>0) {
            this.setState({
                buttonDisable: false
            })
        } else {
            this.setState({
                buttonDisable: true
            })
        }
    }

    render() {
        return(
            <Container>
                <Row>
                    <Col></Col>
                    <Col md = {6} xs={12} lg = {4}>
                        <div className='center'>
                            <div className='verticalCenter'>
                                <h4>Account Register</h4>
                                <hr/>
                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Control type="text" placeholder="First Name" 
                                            value={this.state.firstname}
                                            onChange={this.onFirstNameChange}
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Control type="text" placeholder="Last Name" 
                                            value={this.state.lastname}
                                            onChange={this.onLastNameChange}
                                        />
                                    </Form.Group>

                                   <Form.Group controlId="formBasicEmail">
                                        <Form.Control type="email" placeholder="Email id" 
                                            value={this.state.email}
                                            onChange={this.onEmailChange}
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Control type="password" placeholder="Password" 
                                            value={this.state.password}
                                            onChange={this.onPasswordChange}
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Control type="password" placeholder="Confirm Password" 
                                            value={this.state.confirmPassword}
                                            onChange={this.onConfirmPasswordChange}
                                        />
                                    </Form.Group>

                                    <Button variant="primary" className='button' type="submit"
                                        disabled={this.state.buttonDisable}
                                        onClick={this.onSubmit}
                                    >
                                        Register
                                    </Button>
                                </Form>

                                <br/>
                                
                                <div className='invalid' hidden={!this.state.errorBox}>
                                    <p>Password does not match.</p>
                                </div>

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