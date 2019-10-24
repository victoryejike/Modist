import React from 'react';
import NewNavbar from '../Reusable/NewNavbar';
import Footer from '../Reusable/Footer';
import Scripts from '../Reusable/Scripts';
import Subscribe from '../Reusable/Subscribe';
import Header from './Header';
//import Loader from './Components/Loader/Loader';
import MyShop from './MyShop';

function Shop () {
    return (
      <div className='Shop'>
            <NewNavbar />
            <Header />
            <MyShop />
            <Subscribe />
            <Footer />
            <Scripts />
        </div>  
    )
    
}

export default Shop