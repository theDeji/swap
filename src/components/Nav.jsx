import React, { Component } from 'react'
import './Nav.css'
export class Nav extends Component {
    render() {
        return (
            <div>
                <div className="pages">
                    <div className="contactpage">
                        <a href="/Contact" style={{color:'white', textDecoration:'none'}}>Contact Us</a>
                    </div>
                    {/* <div className="privacy">
                        <a href="/Privacy" style={{color:'white', textDecoration:'none'}}>Privacy Policy</a>
                    </div> */}
                </div>
            </div>
        )
    }
}

export default Nav
