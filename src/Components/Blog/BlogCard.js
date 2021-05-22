import React from 'react';
import './BlogCard.css'
const BlogCard = (props) => {
    
    const {image,cardTitle, description} = props.card;
    return (
        <div className="col-12 col-sm-6 col-lg-4 mb-5">
            <div className="card">
                <div className='card-image'>
                    <a href="" className='d-block'>
                        <img src={image} className="card-img-top" alt="image" />
                    </a>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{cardTitle}</h5>
                    <p className="card-text">{description}...</p>
                </div>
            </div>
        </div>

    );
};

export default BlogCard;