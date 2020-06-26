import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Form, Row, Col, Button } from 'react-bootstrap'
import './Home.css'

export class Home extends Component {
    render() {
        return (
            <div className="home-container">
                {/* Swap logo, not grid */}
                <a href="/" style={{color:"black", textDecoration:"none"}}>
                    <div className="swap-logo">
                        swap
                    </div>
                </a>

                {/* grid for welcome and swap image */}
                <div className="welcome-swap">

                    {/* welcome texts  with 60% of the grid*/}

                    {/* swap image, takes 40% of the grid */}
                    <div className="swap-image">
                        <img className="image" src="../assets/meet.png"/>
                    </div>

                    <div className="welcome-text">
                        <h2>Hello, Welcome to Swap  Mobile App</h2>
                        <h5>post an item, get an offer, meet-up for swap</h5>
                        <div className="link">
                            <a href="#" className="ios-link" style={{color:'white'}}>
                                <div className="ios">
                                    <img className="apple" src="../assets/apple 1.svg" alt="apple"/>
                                    <p>Download on the App Store</p>
                                </div>
                            </a>
                            <a href="#" className="android-link" style={{color:'white'}}>
                                <div className="android">
                                    <img className="google" src="../assets/playstore 1.svg" alt="google"/>
                                    <p>Get the App on Google Play</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
