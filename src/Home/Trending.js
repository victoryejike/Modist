import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {GET_MYSHOP} from '../actions/types'
//import img from './product-1.jpg';
//import image from './product-2.jpg';
//import images from './product-3.jpg';
//import productimg from './product-4.jpg';
//import productimage from './product-5.jpg';
//import productimages from './product-6.jpg';
//import './bootstrap.min.css';
//import './owl.carousel.min.css';

class Trending extends React.Component{
  render(){
    const {shopProducts} = this.props;
    return (
<section className="ftco-section ftco-product">
  <div className="container">
    <div className="row justify-content-center mb-3 pb-3">
      <div className="col-md-12 heading-section text-center ftco-animate">
        <h1 className="big">Trending</h1>
        <h2 className="mb-4">Trending</h2>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <div className="product-slider owl-carousel ftco-animate">
        {shopProducts.map((product) => {
        return(
          <div className="item">
            <div className="product">
              <Link to="/singleproduct" className="img-prod"><img className="img-fluid" src={product.picture} alt="Colorlib Template" />
                <span className="status">{product.status}</span>
              </Link>
              <div className="text pt-3 px-3">
                <h3><Link to="/singleproduct">{product.title}</Link></h3>
                <div className="d-flex">
                  <div className="pricing">
                    <p className="price"><span className="mr-2 price-dc">{product.realPrice}</span><span className="price-sale">{product.discountPrice}</span></p>
                  </div>
                  <div className="rating">
                    <p className="text-right">
                      <span className="ion-ios-star-outline" />
                      <span className="ion-ios-star-outline" />
                      <span className="ion-ios-star-outline" />
                      <span className="ion-ios-star-outline" />
                      <span className="ion-ios-star-outline" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          )
          })
        }
           {/* <div className="item">
            <div className="product">
              <Link to="/singleproduct" className="img-prod"><img className="img-fluid" src="images/product-2.jpg" alt="Colorlib Template" /></Link>
              <div className="text pt-3 px-3">
                <h3><Link to="/singleproduct">Young Woman Wearing Dress</Link></h3>
                <div className="d-flex">
                  <div className="pricing">
                    <p className="price"><span>$120.00</span></p>
                  </div>
                  <div className="rating">
                    <p className="text-right">
                      <span className="ion-ios-star-outline" />
                      <span className="ion-ios-star-outline" />
                      <span className="ion-ios-star-outline" />
                      <span className="ion-ios-star-outline" />
                      <span className="ion-ios-star-outline" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="product">
              <Link to="/singleproduct" className="img-prod"><img className="img-fluid" src="images/product-3.jpg" alt="Colorlib Template" /></Link>
              <div className="text pt-3 px-3">
                <h3><Link to="/singleproduct">Young Woman Wearing Dress</Link></h3>
                <div className="d-flex">
                  <div className="pricing">
                    <p className="price"><span>$120.00</span></p>
                  </div>
                  <div className="rating">
                    <p className="text-right">
                      <span className="ion-ios-star-outline" />
                      <span className="ion-ios-star-outline" />
                      <span className="ion-ios-star-outline" />
                      <span className="ion-ios-star-outline" />
                      <span className="ion-ios-star-outline" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="product">
              <Link to="/singleproduct" className="img-prod"><img className="img-fluid" src="images/product-4.jpg" alt="Colorlib Template" /></Link>
              <div className="text pt-3 px-3">
                <h3><Link to="/singleproduct">Young Woman Wearing Dress</Link></h3>
                <div className="d-flex">
                  <div className="pricing">
                    <p className="price"><span>$120.00</span></p>
                  </div>
                  <div className="rating">
                    <p className="text-right">
                      <span className="ion-ios-star-outline" />
                      <span className="ion-ios-star-outline" />
                      <span className="ion-ios-star-outline" />
                      <span className="ion-ios-star-outline" />
                      <span className="ion-ios-star-outline" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="product">
              <Link to="/singleproduct" className="img-prod"><img src="images/product-5.jpg" alt="Colorlib Template" />
                <span className="status">30%</span>
              </Link>
              <div className="text pt-3 px-3">
                <h3><Link to="/singleproduct">Young Woman Wearing Dress</Link></h3>
                <div className="d-flex">
                  <div className="pricing">
                    <p className="price"><span className="mr-2 price-dc">$120.00</span><span className="price-sale">$80.00</span></p>
                  </div>
                  <div className="rating">
                    <p className="text-right">
                      <span className="ion-ios-star-outline" />
                      <span className="ion-ios-star-outline" />
                      <span className="ion-ios-star-outline" />
                      <span className="ion-ios-star-outline" />
                      <span className="ion-ios-star-outline" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="product">
              <Link to="/singleproduct" className="img-prod"><img src="images/product-6.jpg" alt="Colorlib Template" /></Link>
              <div className="text pt-3 px-3">
                <h3><Link to="/singleproduct">Young Woman Wearing Dress</Link></h3>
                <div className="d-flex">
                  <div className="pricing">
                    <p className="price"><span>$120.00</span></p>
                  </div>
                  <div className="rating">
                    <p className="text-right">
                      <span className="ion-ios-star-outline" />
                      <span className="ion-ios-star-outline" />
                      <span className="ion-ios-star-outline" />
                      <span className="ion-ios-star-outline" />
                      <span className="ion-ios-star-outline" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  </div>
</section>

    )
  }
  

    
}

Trending.propTypes = {
  shopProducts: PropTypes.array.isRequired,
  getProducts: PropTypes.func.isRequired
}

const mapStateToProps = (state)=>({
  shopProducts: state.Shop.shopProducts
})

const mapDispatchToProps = (dispatch) => ({
  getProducts: () => dispatch({type: GET_MYSHOP})
});

export default connect(mapStateToProps, mapDispatchToProps)(Trending);
