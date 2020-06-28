import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap'
import Location from '../assets/Location.svg'
import Mail from '../assets/Mail.svg'
import ContactUs from '../assets/ContactUs.svg'
import './Contact.css'
export class Contact extends Component {
    render() {
        return (
                <div className='contact-container'>
                    <div className="contact-ii">
                        <img className="contact-pic" style={{width:'500px', height:'500px'}} src={ContactUs} alt="contact"/>
                        <div className="contact-section">
                            <p id="cu">Contact Us</p>
                            <div className="location">
                                <img src={Location} style={{width:'25px', height:'25px'}}/>
                                <p style={{color:'white', color:'white'}}>No. 3a Ransom Kuti Way, Lekki, Lagos</p>
                            </div>
                            <div className="mail">
                                <img src={Mail} style={{width:'25px', height:'25px'}}/>
                                <p style={{color:'white', color:'white'}}>hello@swap.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="contact-form">
                        <h5>Any questions or suggestions ? Write to us!</h5><br></br>
                        <Form role='submit' onSubmit="google.com" style={{width:'50%'}}>
                            <Form.Group>
                                <Form.Control type="email" placeholder="email address" />
                                <Form.Text style={{textAlign:'left', color:'white'}}>
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group>
                                <Form.Control as="textarea" placeholder="your message"/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Check type="checkbox" label="Subscribe to our Newsletter" />
                            </Form.Group>
                            <Button variant="outline-secondary" type="submit">Submit</Button>
                        </Form>
                    </div> 
                </div>
        )
    }
}

export default Contact
