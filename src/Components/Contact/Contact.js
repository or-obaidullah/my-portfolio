import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faEnvelopeOpen, faPhoneSquare } from '@fortawesome/free-solid-svg-icons';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaDribbble } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import './Contact.css'

const Contact = () => {
    const [success, setSuccess] = useState();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_2us3oi7', 'template_ehickpz', e.target, 'user_IA9NMdQnRB23zcoVmKcNG')
            .then((result) => {
                // console.log(result.text);
                setSuccess(true);
            }, (error) => {
                // console.log(error.text);
            });
            e.target.reset();
    }


    return (
        <div className='container'>
            <div className='title-section'>
                <h1>Get in <span className='blog'>Touch</span></h1>
                <span className='posts'>Contact</span>
            </div>
            <div className="row pb-5  px-4 px-sm-0">
                <div className="col-12 col-sm-12 col-lg-4 contact-left-part">
                    <h3>DON'T BE SHY !</h3>
                    <p className='mb-4'>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                    <div className='d-flex'>
                        <FontAwesomeIcon icon={faEnvelopeOpen} className='envelope-icon' />
                        <div className='mail-me ml-4'>
                            <span className='d-block'>MAIL ME</span>
                            <span>orobaidullah.bd@mail.com</span>
                        </div>
                    </div>
                    <div className='d-flex'>
                        <FontAwesomeIcon icon={faPhoneSquare} className='phone-icon' />
                        <div className='call-me ml-4'>
                            <span className='d-block'>CALL ME</span>
                            <span>+880 1744844462</span>
                        </div>
                    </div>
                    <ul className='social-icon d-flex mt-2'>
                        <li>
                            <a href="">
                                <FaFacebookF />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <FaTwitter />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <FaLinkedinIn />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <FaDribbble />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="col-12 col-sm-12 col-lg-8 mt-lg-0 mt-md-5 mt-sm-5 mt-5">
                    <form onSubmit={sendEmail}>
                        <div className="row">
                            <div className="col-md-6">
                                <input className='form-control mb-4' type="text" placeholder='YOUR NAME' name="name" required/>
                            </div>
                            <div className="col-md-6">
                                <input className='form-control mb-4' type="email" placeholder='YOUR EMAIL *' name="email" required />
                            </div>
                            <div className="col-12">
                                <input className='form-control mb-4' type="text" placeholder='YOUR SUBJECT *' name="subject" required/>
                            </div>
                            <div className="col-12">
                                <textarea className="form-control" cols="30" rows="10" placeholder='YOUR MESSAGE' name="message" required></textarea>
                            </div>
                            <div className="col-12 ml-2">
                                {
                                    success && <span className="text-success">Message Successfully Sent</span>
                                }
                            </div>
                            <button className='button ml-3 mt-4 submitBtn' type="submit">
                                <span type="button" className='btnText'>Send Meaasge</span>
                                <span className='btnIcon'><FontAwesomeIcon icon={faPaperPlane} /></span>
                            </button>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;