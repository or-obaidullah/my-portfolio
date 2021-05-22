import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPaperPlane, faEnvelopeOpen, faPhoneSquare } from '@fortawesome/free-solid-svg-icons';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaDribbble } from 'react-icons/fa';
import './Contact.css'

const Contact = () => {
    return (
        <div className='container'>
            <div className='title-section'>
                <h1>Get in <span className='blog'>Touch</span></h1>
                <span className='posts'>Contact</span>
            </div>
            <div className="row pb-5">
                <div className="col-12 col-sm-12 col-lg-4 contact-left-part">
                    <h3>DON'T BE SHY !</h3>
                    <p className='mb-4'>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                    <div className='d-flex'>
                        <FontAwesomeIcon icon={faEnvelopeOpen} className='envelope-icon'/>
                        <div className='mail-me ml-4'>
                            <span className='d-block'>MAIL ME</span>
                            <span>orobaidullah.bd@mail.com</span>
                        </div>
                    </div>
                    <div className='d-flex'>
                        <FontAwesomeIcon icon={faPhoneSquare} className='phone-icon'/>
                        <div className='call-me ml-4'>
                            <span className='d-block'>CALL ME</span>
                            <span>+880 1744844462</span>
                        </div>
                    </div>
                    <ul className='social-icon d-flex mt-2'>
                        <li>
                            <a href="">
                                <FaFacebookF/>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <FaTwitter/>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <FaLinkedinIn/>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <FaDribbble/>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="col-12 col-sm-12 col-lg-8 mt-lg-0 mt-md-5 mt-sm-5 mt-5">
                    <form>
                        <div className="row">
                            <div className="col-md-6">
                                <input className='form-control mb-4' type="text" placeholder='YOUR NAME' />
                            </div>
                            <div className="col-md-6">
                                <input className='form-control mb-4' type="email" placeholder='YOUR EMAIL *' required />
                            </div>
                            <div className="col-12">
                                <input className='form-control mb-4' type="text" placeholder='YOUR SUBJECT *' />
                            </div>
                            <div className="col-12">
                                <textarea className="form-control mb-4" cols="30" rows="10" placeholder='YOUR MESSAGE'></textarea>
                            </div>
                            <Link to="/home" className='button ml-3' type='submit'>
                                <span className='btnText'>Send Meaasge</span>
                                <span className='btnIcon'><FontAwesomeIcon icon={faPaperPlane}/></span>
                            </Link>
                            
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;