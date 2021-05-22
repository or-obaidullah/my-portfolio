import React from 'react';
import './Works.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import WorksCard from './WorksCard';
const Works = () => {
    return (
        <div className='container'>
            <div className='title-section'>
                <h1>My <span className='blog'>portfolio</span></h1>
                <span className='posts'>Works</span>
            </div>

            <div className="row">
                <WorksCard></WorksCard>
                <WorksCard></WorksCard>
                <WorksCard></WorksCard>
                <WorksCard></WorksCard>
                <WorksCard></WorksCard>
                <WorksCard></WorksCard>
                                   
            </div>
        </div>
    );
};

export default Works;