import React from 'react';
import workingData from '../../data/workingData';
import './Works.css';
import WorksCard from './WorksCard';

const Works = () => {

    return (
        
        <div className='container-fluid' style={{width:'90%'}}>
            <div className='title-section'>
                <h1>My <span className='blog'>portfolio</span></h1>
                <span className='posts'>Works</span>
            </div>

            <div className="row px-3 px-sm-0">
                {
                    workingData.map(item => <WorksCard key={item.id} singleItem={item}></WorksCard>)
                    
                }
            </div>
        </div>
    );
};

export default Works;