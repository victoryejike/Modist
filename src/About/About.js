import React from 'react';
import NewNavbar from '../Reusable/NewNavbar';
import Footer from '../Reusable/Footer';
import Scripts from '../Reusable/Scripts';
import Subscribe from '../Reusable/Subscribe';
import Header from './Header';
import ModistOnlineShop from '../Home/ModistOnlineShop';
import Testimonies from '../Home/Testimonies';
import RecentBlog from '../Home/RecentBlog';
import Accolades from '../Home/Accolades';
import Services from '../Home/Services';


//import Loader from './Components/Loader/Loader';
function About () {
    return (
      <div className='About'>
            <Scripts />
            <NewNavbar />
            <Header />
            <ModistOnlineShop />
            <Testimonies />
            <RecentBlog />
            <Accolades />
            <Services />
            <Subscribe />
            <Footer />
        </div>  
    )
    
}

export default About;