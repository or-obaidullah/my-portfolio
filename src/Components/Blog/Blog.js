import React from 'react';
import blogData from '../../data/blogData';
import './Blog.css';
import BlogCard from './BlogCard';

const Blog = () => { 
    return (
        <div className='container'>
            <div className='title-section'>
                <h1>My <span className='blog'>Blog</span></h1>
                <span className='posts'>Posts</span>
            </div>
            <div className='main-section  px-4 px-sm-0'>
                <div className="row" style={{display:'contents', textAlign:'center'}}>
                    <h1 className='display-1 mt-5' style={{color: 'cadetBlue'}}>Comming Soon...</h1>
                    {/* {
                        blogData.map(cardDetails => <BlogCard card={cardDetails}></BlogCard>)
                    } */}
                </div>
                
            </div>
        </div>
    );
};

export default Blog;