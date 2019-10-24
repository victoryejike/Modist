import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {GET_ALLPRODUCTS} from '../actions/types'
//import img from './product-1.jpg';
//import image from './product-2.jpg';
//import images from './product-3.jpg';
//import productimg from './product-4.jpg';

class Products extends React.Component{
    render(){
        const {allProducts} = this.props;
        return(
        <section className="ftco-section bg-light">
            <div className="container">
                <div className="row justify-content-center mb-3 pb-3">
                <div className="col-md-12 heading-section text-center ftco-animate fadeInUp ftco-animated">
                    <h1 className="big">Products</h1>
                    <h2 className="mb-4">Our Products</h2>
                </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                {allProducts.map(product => {
                    return(
                        <div className="col-sm col-md-6 col-lg ftco-animate fadeInUp ftco-animated">
                            <div className="product">
                            <Link to="/singleproduct" className="img-prod"><img className="img-fluid" src={product.picture} alt="Colorlib Template" /></Link>
                            <div className="text py-3 px-3">
                                <h3><Link to="/singleproduct">{product.title}</Link></h3>
                                <div className="d-flex">
                                <div className="pricing">
                                    <p className="price"><span>{product.realPrice}</span></p>
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
                                <hr />
                                <p className="bottom-area d-flex">
                                <Link to="#" className="add-to-cart"><span>Add to cart <i className="ion-ios-add ml-1" /></span></Link>
                                <Link to="#" className="ml-auto"><span><i className="ion-ios-heart-empty" /></span></Link>
                                </p>
                            </div>
                            </div>
                        </div>
                    )
                })}
              
                {/* <div className="col-sm col-md-6 col-lg ftco-animate fadeInUp ftco-animated">
                    <div className="product">
                    <Link to="/singleproduct" className="img-prod"><img className="img-fluid" src="images/product-2.jpg" alt="Colorlib Template" /></Link>
                    <div className="text py-3 px-3">
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
                        <hr />
                        <p className="bottom-area d-flex">
                        <Link to="#" className="add-to-cart"><span>Add to cart <i className="ion-ios-add ml-1" /></span></Link>
                        <Link to="#" className="ml-auto"><span><i className="ion-ios-heart-empty" /></span></Link>
                        </p>
                    </div>
                    </div>
                </div> */}
                {/* <div className="col-sm col-md-6 col-lg ftco-animate fadeInUp ftco-animated">
                    <div className="product">
                    <Link to="/singleproduct" className="img-prod"><img className="img-fluid" src="images/product-3.jpg" alt="Colorlib Template" /></Link>
                    <div className="text py-3 px-3">
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
                        <hr />
                        <p className="bottom-area d-flex">
                        <Link to="#" className="add-to-cart"><span>Add to cart <i className="ion-ios-add ml-1" /></span></Link>
                        <Link to="#" className="ml-auto"><span><i className="ion-ios-heart-empty" /></span></Link>
                        </p>
                    </div>
                    </div>
                </div> */}
                {/* <div className="col-sm col-md-6 col-lg ftco-animate fadeInUp ftco-animated">
                    <div className="product">
                    <Link to="/singleproduct" className="img-prod"><img className="img-fluid" src="images/product-4.jpg" alt="Colorlib Template" /></Link>
                    <div className="text py-3 px-3">
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
                        <hr />
                        <p className="bottom-area d-flex">
                        <Link to="#" className="add-to-cart"><span>Add to cart <i className="ion-ios-add ml-1" /></span></Link>
                        <Link to="#" className="ml-auto"><span><i className="ion-ios-heart-empty" /></span></Link>
                        </p>
                    </div>
                    </div>
                </div> */}
                </div>
            </div>
        </section>
    )
    }
    
}

Products.propTypes = {
    allProducts: PropTypes.array.isRequired,
    getAllProducts: PropTypes.func.isRequired
}

const mapStateToProps = (state)=>({
    allProducts: state.allProducts.allProducts
})

const mapDispatchToProps = (dispatch) => ({
    getAllProducts: () => dispatch({type: GET_ALLPRODUCTS})
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);