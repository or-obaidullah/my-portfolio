import React from 'react';
import Modal from 'react-modal';
import { GrClose } from 'react-icons/gr';
import { BiArrowToRight } from 'react-icons/bi';

const WorkingModal = (props) => {
    const { modalIsOpen, setIsOpen } = props;
    const {title, img , description, equipment, live, clientCode } = props.singleItem;
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            background:'#0a192f',
            borderRadius:'10px',
            width:'82%'
        },
    };
    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setIsOpen(false)}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <div className="">
            <div className="cardModal row p-4">
                    <button className='modalCloseBtn' onClick={() => setIsOpen(false)}><GrClose/></button>
                    <div className="col-lg-6 col-12 d-flex align-items-center" style={{borderRadius:'10px',background:'#122540'}}>
                        <div><img className='img-fluid border' src={img} alt=" " /></div>
                    </div>
                    <div className="col-lg-6 col-12 pl-3">
                        <h5 className='mt-3 mt-lg-0'>Featured -Design</h5>
                        <h1>{title}</h1>
                        <p>{description}</p>
                        <div className="apply-code">
                            {
                                equipment.map((item, index) => <span key={index}>{item}</span>)
                            }
                        </div>
                        <a className='modal-btn' href={clientCode}  target='blank'>Github <span><BiArrowToRight/></span></a>
                        <a className='modal-btn' href={live}  target="blank">View Project<span><BiArrowToRight/></span></a>
                    </div>
                </div>
            </div>

        </Modal>
    );
};

export default WorkingModal;