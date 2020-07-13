import React, { Component } from 'react'
import './Nav.css'
import { Navbar, Nav, NavItem, Form, Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import { ScrollLink } from 'react-scroll'
import axios from 'axios'


export class Navigation extends Component {
    render() {
        return (
            <div className="pages">
                <Navbar className="nav" default collapseOnSelect>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <div className="home">
                                <Nav.Link href="/">Home</Nav.Link>
                            </div>
                            {/* <div className="contact">
                                <Nav.Link href="/Contact">Contact Us</Nav.Link>
                            </div> */}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Navigation
