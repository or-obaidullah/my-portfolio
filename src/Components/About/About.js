import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDownload} from '@fortawesome/free-solid-svg-icons';
import './About.css';
const About = () => {
    return (
        <div className='container about'>
            <div className='title-section'>
                <h1>About <span className='blog'>Me</span></h1>
                <span className='posts'>Resume</span>
            </div>
            <div className="row my-auto">
                <div className="col-12 col-lg-6">
                    <h3 className='aboutHeading'>PERSONAL INFOS</h3>
                    <div className="row personInfo pb-4">
                        <div className="col-12 col-sm-6 col-md-6">
                            <ul>
                                <li> <span>First Name : </span> <span>Obaidur Rahman</span></li>
                                <li> <span>Last Name : </span> <span>Obaidullah</span></li>
                                <li> <span>Nationality : </span> <span>Bangladeshi</span></li>
                                <li> <span> Freelance : </span> <span>Available</span></li>
                            </ul>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 p-lg-0">
                            <ul>
                                <li> <span>Address : </span> <span>Dhaka,Bangladesh</span></li>
                                <li> <span>Phone : </span> <span>+880 1744844462</span></li>
                                <li> <span>Email : </span> <span>orobaidullah.bd@gmail.com</span></li>
                                <li> <span>Language : </span> <span>English, Bangla</span></li>
                            </ul>
                        </div>
                    </div>
                    <Link to="/about" className='button'>
                        <span className='btnText'>Download CV</span>
                        <span className='btnIcon'><FontAwesomeIcon icon={faDownload}/></span>
                    </Link>
                </div>
                <div className="col-12 col-lg-6 pl-lg-5  my-5 my-lg-0 ">
                <h3 className='aboutHeading'>MY SKILLS SET</h3>
                    <div className="apply-code">
                        <span>Javascript</span>
                        <span>ES6</span>
                        <span>React js</span>
                        <span>Node js</span>
                        <span>MongoDB</span>
                        <span>API</span>
                        <span>Express js</span>
                        <span>Firebase</span>
                        <span>Bootstrap4</span>
                        <span>Material UI</span>
                        <span>NPM</span>
                        <span>JSON</span>
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>SCSS</span>
                        <span>Material UI</span>
                        <span>Github</span>
                        <span>MySQL</span>
                        <span>C Programming</span>
                        <span>Java</span>
                        <span>Python</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;