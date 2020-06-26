import React, { Component } from 'react'
import './Footer.css'
export class Footer extends Component {
    render() {
        return (
            <div className="footer">
                Copyright &copy; swap 2020 <br></br>
                <a href="/Privacy" style={{color:'black', textDecoration:'none', fontSize:'12px'}}>Terms &and; Condition | Privacy Policy</a>
            </div>
            // <a href="/Privacy" ></a>
        )
    }
}

export default Footer
