import React from 'react';
import { BsBoxArrowInUpRight } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import WorkingModal from './WorkingModal';


const WorksCard = (props) => {
    const { title, img, category } = props.singleItem;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    return (
        <>
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 mb-5 rounded">
                <div onClick={() => setIsOpen(true)} className="card works-card p-4">
                    <div className='card-img-part'>
                        <img className="card-img-top" src={img} alt="..." />
                    </div>
                    <div>
                        <div className='d-flex justify-content-between align-items-center'>
                            <small className='d-block my-3'>{category}</small>
                            <span className='git-icon'><FaGithub/></span>
                        </div>
                        <h4 className='font-weight-bold' data-toggle="modal" data-target="#exampleModalCenter">{title}
                            <span className='card-icon'>
                                <BsBoxArrowInUpRight />
                            </span>
                        </h4>
                    </div>
                </div>
                <WorkingModal singleItem={props.singleItem} modalIsOpen={modalIsOpen} setIsOpen={setIsOpen}></WorkingModal>
            </div>

        </>
    );
};

export default WorksCard;