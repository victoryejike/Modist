import React from 'react';
import NewNavbar from '../Reusable/NewNavbar';
import Footer from '../Reusable/Footer';
import Scripts from '../Reusable/Scripts';
import Subscribe from '../Reusable/Subscribe';
import Header from './Header';
import RelatedProduct1 from './RelatedProduct1';
import MyProduct from './MyProduct';
//import Loader from './Components/Loader/Loader';


function SingleProduct () {
    return (
      <div className='About'>
            <NewNavbar />
            <Header />
            <MyProduct />
            <RelatedProduct1 />
            <Subscribe />
            <Footer />
            <Scripts />
        </div>  
    )
    
}

export default SingleProduct;