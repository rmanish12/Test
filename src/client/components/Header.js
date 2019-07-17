import React, {Component} from 'react'

import { Link } from 'react-router-dom'
import {Navbar, Form, Nav, FormControl, Button, NavDropdown} from 'react-bootstrap'

import '../styles/Header.css'

class Header extends Component {
    render() {
        return(
            <div>
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                    <Link to='/' className='brand'>Brand Name</Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">

                        </Nav>
                        <Nav>
                            <Link to='/login' className='link'>Login</Link>
                            <Link to='/register' className='link'>Register</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Header