import React, { Component } from 'react'
import './Footer.css'
import { Link } from 'react-router-dom';
export class Footer extends Component {
    render() {
        return (
            <div className="footer">
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
