import React from 'react';
import NewNavbar from '../Reusable/NewNavbar';
import Footer from '../Reusable/Footer';
import Scripts from '../Reusable/Scripts';
import Subscribe from '../Reusable/Subscribe';
import Header from './Header';
import RelatedProducts from './RelatedProducts';
import MyCart from './MyCart';
//import Loader from './Components/Loader/Loader';


function Cart () {
    return (
      <div className='Cart'>
            <NewNavbar />
            <Header />
            <MyCart />
            <RelatedProducts />
            <Subscribe />
            <Footer />
            <Scripts />
        </div>  
    )
    
}

export default Cart;