import React, { Component } from 'react'
import './Footer.css'
import { Navbar, Nav, NavItem, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="info">
                    <div className="other-info" id="#Contact">
                        <h4>Careers: </h4>
                        <p>To discuss a career at swap, contact us at <br></br><span style={{color:'#FF9D5C'}}>hello@swap.com</span></p>
                        <h4>Investors: </h4>
                        <p>For investments, sponsorships and adverts placements,<br></br> contact us at <span style={{color:'#FF9D5C'}}> sammyoyekeye@gmail.com</span></p>
                    </div>
                    <div className="links">
                        <Nav.Link href="/Privacy" style={{color:'white'}}>Privacy</Nav.Link>
                        <Nav.Link href="/Terns" style={{color:'white'}}>Terms and Conditions</Nav.Link>
                    </div>
                </div>
                
                <div className="swap">
                    <h5>swap</h5>
                    <p>Copyright &copy; swap 2020</p>
                </div>
            </div>
            // <a href="/Privacy" ></a>
        )
    }
}

export default Footer
