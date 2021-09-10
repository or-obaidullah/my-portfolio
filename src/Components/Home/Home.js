import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Home.css'
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter'

const Home = () => {
    return (
        <div className='containerHome d-flex align-items-center mx-auto px-3 px-sm-0'>
            <div className="row mx-auto mt-md-4">
                <div className="col-12 col-md-4 homeLeftColor">
                    <img className='img-fluid portfolio-img' src='https://i.postimg.cc/DZVfFB4C/obaidur-min.png' alt="photo" />
                </div>
                <div className="col-12 col-md-7 d-flex align-items-center mx-auto">
                    <div className='home-details'>
                        <h1><span style={{ color: '#fff' }}>Hi, I'm</span> Obaidur Rahman</h1>
                        <h2>a {' '}
                            <span style={{ color: '#72b626'}}>
                                <Typewriter
                                    words={['Web Developer', 'Programmer']}
                                    loop={true}
                                    cursor
                                    cursorStyle='|'
                                    typeSpeed={40}
                                    deleteSpeed={20}
                                    delaySpeed={1500}
                                />
                            </span>
                        </h2>
                            <p className='mt-5'>An accomplished individual with a strong background in Javascript, HTML and CSS. I strongly believes in the power of Internet and has an instense desire to learn how to improve the webs absolute core functionality and to also to be involved in its future development.</p>
                            <Link to="/about" className='button'>
                                <span className='btnText'>More About Me</span>
                                <span className='btnIcon'><FontAwesomeIcon icon={faArrowRight} /></span>
                            </Link>
                    </div>
                    </div>
                </div>
            </div>
            );
};

            export default Home;