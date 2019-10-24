import React from 'react';
import NewNavbar from '../Reusable/NewNavbar';
import Footer from '../Reusable/Footer';
import Scripts from '../Reusable/Scripts';
//import NinthSection from './Reusable Component/NinthSection';
import Header from './Header';
//import Loader from './Components/Loader/Loader';
import ContactInfo from './ContactInfo';
import ContactUs from './ContactUs';

function Contact () {
    return (
      <div className='Contact'>
            <NewNavbar />
            <Header />
            <ContactInfo />
            <ContactUs />
            
            <Footer />
            <Scripts />
        </div>  
    )
    
}

export default Contact;