import React from 'react';
import NewNavbar from '../Reusable/NewNavbar';
import Header from './Header';
import Blog from './Blog';
import Subscribe from '../Reusable/Subscribe';
import Footer from '../Reusable/Footer';
//import Loader from './Components/Loader/Loader';
import Scripts from '../Reusable/Scripts';

function BlogPost () {
    return (
      <div className='BlogPost'>
            <NewNavbar />
            <Header />
            <Blog />
            <Subscribe />
            <Footer />
            <Scripts />
        </div>  
    )
    
}

export default BlogPost