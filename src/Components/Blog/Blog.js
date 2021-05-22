import React from 'react';
import './Blog.css';
import BlogCard from './BlogCard';

const Blog = () => {
    const blogCardDetails = [
        {
            image: 'https://swiftlet.co.th/wp-content/uploads/2020/01/Software-Developer.jpg',
            cardTitle: 'Everything You Need to Know About Web Accessibility',
            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore'
        },
        {
            image: 'https://i2.wp.com/www.skysilk.com/blog/wp-content/uploads/2017/11/python-django-logo.jpg?fit=1280%2C720&ssl=1',
            cardTitle: 'Everything You Need to Know About Web Accessibility',
            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore'
        },
        {
            image: 'https://www.londonacademyofit.co.uk/blog/images/1051/best-web-development-blogs-beginners.jpg',
            cardTitle: 'Everything You Need to Know About Web Accessibility',
            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore'
        },
        {
            image: 'https://www.techprevue.com/wp-content/uploads/2017/04/top-web-development-blogs.jpg',
            cardTitle: 'Everything You Need to Know About Web Accessibility',
            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore'
        },
        {
            image: 'https://hackr.io/blog/media/code-academy-web-developer-course.png',
            cardTitle: 'Everything You Need to Know About Web Accessibility',
            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore'
        },
        {
            image: 'https://rigorousthemescom-ebizon.netdna-ssl.com/blog/wp-content/uploads/2020/09/screely-1601375458629-1170x694.png',
            cardTitle: 'Everything You Need to Know About Web Accessibility',
            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore'
        }
    ]
    return (
        <div className='container'>
            <div className='title-section'>
                <h1>My <span className='blog'>Blog</span></h1>
                <span className='posts'>Posts</span>
            </div>
            <div className='main-section'>
                <div className="row">
                    {
                        blogCardDetails.map(cardDetails => <BlogCard card={cardDetails}></BlogCard>)
                    }
                </div>
                
            </div>
        </div>
    );
};

export default Blog;