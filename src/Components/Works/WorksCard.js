import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
const WorksCard = () => {
    return (
        <>
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 mb-5">
                <div className="card works-card">
                    <img src="https://www.webfx.com/blog/wp-content/uploads/2020/02/softdash-website-template.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Red Onion foods</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <div className="apply-code">
                            <span>React.js</span>
                            <span>Node.js</span>
                            <span>Express.js</span>
                            <span>MongoDB</span>
                            <span>Stripe.js</span>
                            <span>Firebase</span>
                            <span>Bootstrap4</span>
                        </div>
                    </div>
                    <div className="card-footer">
                        <ul className='works-icon'>
                            <li>
                                <a href="">
                                    <FaGithub />
                                </a>
                            </li>
                            <li className='ml-3'>
                                <a href="">
                                    <FaExternalLinkAlt />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    );
};

export default WorksCard;