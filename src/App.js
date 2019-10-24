import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import Blog from './Blog/BlogPost';
import Cart from './Cart/Cart';
import Contact from './Contact/Contact';
import Checkout from './Contact/Contact';
import Shop from './Shop/Shop';
import SingleProduct from './SingleProduct/SingleProduct';
import BlogSingle from './BlogSingle/BlogSingle'
import {Provider} from 'react-redux';
import store from'./store';


class App extends React.Component {
    render(){
        return(
            <Provider store={store}> 
           <div className='App'>
               <Router> 
                <Route exact path='/' component={Home} />
                <Route exact path="/about" component={About} /> 
                <Route exact path='/blog' component={Blog} />
                <Route exact path='/blog-single.html' component={BlogSingle} />
                <Route exact path='/cart' component={Cart} />
                <Route exact path='/contact' component={Contact} />
                <Route exact path='/checkout' component={Checkout} />
                <Route exact path='/shop' component={Shop} />
                <Route exact path='/singleproduct' component={SingleProduct} />
             </Router>
            </div>
            </Provider>
        )    
    }
}

export default App;