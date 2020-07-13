import React, { Component } from 'react'
import { Navbar, Nav, NavItem, Form, Button } from 'react-bootstrap';
import { Element } from 'react-scroll'
import Meet from '../assets/Meet.png'
import Playstore from '../assets/Playstore.svg'
import Apple from '../assets/Apple.svg'
import './Home.css'

export class Home extends Component {
    render() {
        return (
            <div id="Home">
                <div className="home-container">
                {/* Swap logo, not grid */}
                
                    <div className="swap-logo">
                        swap
                    </div>

                    {/* grid for welcome and swap image */}
                    <div className="welcome-swap">

                        {/* welcome texts  with 60% of the grid*/}

                        {/* swap image, takes 40% of the grid */}
                        <div className="swap-image">
                            <img className="image" src={Meet}/>
                        </div>

                        <div className="welcome-text">
                            <h2>Hello, Welcome to Swap  Mobile App</h2>
                            <h5>post an item, get an offer, meet-up for swap</h5>
                            <div className="link">
                                <a href="#" className="ios-link" style={{color:'white'}}>
                                    <div className="ios">
                                        <img className="apple" src={Apple} alt="apple"/>
                                        <p>Download on the App Store</p>
                                    </div>
                                </a>
                                <a href="#" className="android-link" style={{color:'white'}}>
                                    <div className="android">
                                        <img className="google" src={Playstore} alt="google"/>
                                        <p>Get the App on Google Play</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div><br></br><br></br>
                </div>
                <div className="info">
                    <div className="other-info">
                        <h4 className="career">Careers: </h4>
                        <p id="discuss">To discuss a career at swap, contact us at <br></br><span style={{color:'#FF9D5C'}}>hello@swap.com</span></p>
                        <h4 className="investors">Investors: </h4>
                        <p id="invest">For investments, sponsorships and adverts placements,<br></br> contact us at <span style={{color:'#FF9D5C'}}> sammyoyekeye@gmail.com</span></p>
                    </div>
                    <div className="pt-links">
                        <Nav.Link href="/Privacy" style={{color:'black'}} className="privacy">Privacy Policy</Nav.Link>
                        <Nav.Link href="/Terms" style={{color:'black'}} className="terms">Terms and Conditions</Nav.Link>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Home
