import React from 'react';
//import './App.css';
import Navbar from './Navbar';
import Header from './Header';
import Trending from './Trending';
import GotoSection from './GotoSection'
import ModistOnlineShop from './ModistOnlineShop';
import Scripts from '../Reusable/Scripts';
import Products from './Products';
import SummerSale from './SummerSale';
import Testimonies from './Testimonies';
import RecentBlog from './RecentBlog';
import Accolades from './Accolades';
import Services from './Services';
import Subscribe from '../Reusable/Subscribe';
import Footer from '../Reusable/Footer';
//import Loader from './Reusable/Loader';


function Home() {
    return (
      <div className="Home">
       {/*<Loader />*/ }
       <Navbar />
       <Header />
       <GotoSection />
    {/*<Trending1 />*/}
       <Trending />
       <ModistOnlineShop />
       <Products />
       <SummerSale />
       {/*<Testimonies1 />*/}
       <Testimonies />
       <RecentBlog />
       <Accolades />
       <Services />
       <Subscribe />
       <Footer />
       <Scripts />
      </div>
    );
  }
  
  export default Home;
  