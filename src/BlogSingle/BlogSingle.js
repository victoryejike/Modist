import React from 'react';
import Header from './Header';
import NewNavbar from '../Reusable/NewNavbar';
import Footer from '../Reusable/Footer';
import Scripts from '../Reusable/Scripts';
import Subscribe from '../Reusable/Subscribe';
import MyBlogSingle from './MyBlogSingle'

function BlogSingle () {
    return (
      <div className='Shop'>
            <NewNavbar />
            <Header />
            <MyBlogSingle />
            <Subscribe />
            <Footer />
            <Scripts />
        </div>  
    )
    
}

export default BlogSingle;