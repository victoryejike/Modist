import React from 'react';
import NewNavbar from '../Reusable/NewNavbar';
import Footer from '../Reusable/Footer';
import Scripts from '../Reusable/Scripts';
import NinthSection from '../Reusable/NinthSection';
import Header from './Checkout Component/MyCheckout/Header';
import ThirdSection from './Home Component/ThirdSection';
//import Loader from './Components/Loader/Loader';
import MyCheckout from './Checkout Component/MyCheckout/MyCheckout';

function Checkout () {
    return (
      <div className='Checkout'>
            <NewNavbar />
            <Header />
            <MyCheckout />
            <ThirdSection />
            <NinthSection />
            <Footer />
            <Scripts />
        </div>  
    )
    
}

export default Checkout;