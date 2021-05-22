import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import photo from '../../Photo/obaidur.jpg';
import './Home.css'
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div className='containerHome d-flex align-items-center mx-auto'>
            <div className="row mx-auto mt-md-4">
                <div className="col-12 col-md-4 homeLeftColor">
                    <img className='img-fluid portfolio-img' src={photo} alt="photo" />
                </div>
                <div className="col-12 col-md-7 d-flex align-items-center mx-auto">
                    <div className='home-details'>
                        <h1>I'm Obaidur Rahman</h1>
                        <ul>
                            <li>Web Developer</li>
                            <li>Programmer</li>
                        </ul>
                        <p>An accomplished individual with a strong background in Javascript, HTML and CSS. I strongly believes in the power of Internet and has an instense desire to learn how to improve the webs absolute core functionality and to also to be involved in its future development.</p>
                        <Link to="/about" className='button'>
                            <span className='btnText'>More About Me</span>
                            <span className='btnIcon'><FontAwesomeIcon icon={faArrowRight}/></span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;