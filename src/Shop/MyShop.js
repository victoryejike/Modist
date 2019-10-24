import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {GET_MYSHOP} from '../actions/types'

class MyShop extends React.Component {
    componentDidMount(){
       this.props.getProducts(); 
    }
    render(){
        const {shopProducts} = this.props;
        return (
            
        <section className="ftco-section bg-light">
            <div className="container-fluid">
                <div className="row">
                
                    {shopProducts.map((product) => {
                        return(
                            <div className="col-sm col-md-6 col-lg-3 ftco-animate">
                                <div className="product">
                                <Link to="#" className="img-prod"><img className="img-fluid" src={product.picture} alt="Colorlib Template" />
                                    <span className="status">{product.status}</span>
                                </Link>
                                <div className="text py-3 px-3">
                                    <h3><Link to="#">{product.title}</Link></h3>
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
                                    <hr />
                                    <p className="bottom-area d-flex">
                                    <Link to="#" className="add-to-cart"><span>Add to cart <i className="ion-ios-add ml-1" /></span></Link>
                                    <Link to="#" className="ml-auto"><span><i className="ion-ios-heart-empty" /></span></Link>
                                    </p>
                                </div>
                                </div>
                                </div>
                            )
                        })
                    }
                
                {/*<div className="col-sm col-md-6 col-lg-3 ftco-animate">
                    <div className="product">
                    <Link to="#" className="img-prod"><img className="img-fluid" src="images/product-2.jpg" alt="Colorlib Template" />
                        <span className="status">New Arrival</span>
                    </Link>
                    <div className="text py-3 px-3">
                        <h3><Link to="#">Young Woman Wearing Dress</Link></h3>
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
                </div>
                <div className="col-sm col-md-6 col-lg-3 ftco-animate">
                    <div className="product">
                    <Link to="#" className="img-prod"><img className="img-fluid" src="images/product-3.jpg" alt="Colorlib Template" /></Link>
                    <div className="text py-3 px-3">
                        <h3><Link to="#">Young Woman Wearing Dress</Link></h3>
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
                {/* <div className="col-sm col-md-6 col-lg-3 ftco-animate">
                    <div className="product">
                    <Link to="#" className="img-prod"><img className="img-fluid" src="images/product-4.jpg" alt="Colorlib Template" /></Link>
                    <div className="text py-3 px-3">
                        <h3><Link to="#">Young Woman Wearing Dress</Link></h3>
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
                {/* <div className="col-sm col-md-6 col-lg-3 ftco-animate">
                    <div className="product">
                    <Link to="#" className="img-prod"><img className="img-fluid" src="images/product-5.jpg" alt="Colorlib Template" /></Link>
                    <div className="text py-3 px-3">
                        <h3><Link to="#">Young Woman Wearing Dress</Link></h3>
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
                </div>
                <div className="col-sm col-md-6 col-lg-3 ftco-animate">
                    <div className="product">
                    <Link to="#" className="img-prod"><img className="img-fluid" src="images/product-6.jpg" alt="Colorlib Template" /></Link>
                    <div className="text py-3 px-3">
                        <h3><Link to="#">Young Woman Wearing Dress</Link></h3>
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
                </div>
                <div className="col-sm col-md-6 col-lg-3 ftco-animate">
                    <div className="product">
                    <Link to="#" className="img-prod"><img className="img-fluid" src="images/product-7.jpg" alt="Colorlib Template" /></Link>
                    <div className="text py-3 px-3">
                        <h3><Link to="#">Young Woman Wearing Dress</Link></h3>
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
                </div>
                <div className="col-sm col-md-6 col-lg-3 ftco-animate">
                    <div className="product">
                    <Link to="#" className="img-prod"><img className="img-fluid" src="images/product-8.jpg" alt="Colorlib Template" />
                        <span className="status">Best Sellers</span>
                    </Link>
                    <div className="text py-3 px-3">
                        <h3><Link to="#">Young Woman Wearing Dress</Link></h3>
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
                <div className="row mt-5">
                <div className="col text-center">
                    <div className="block-27">
                    <ul>
                        <li><Link to="#">&lt;</Link></li>
                        <li className="active"><span>1</span></li>
                        <li><Link to="#">2</Link></li>
                        <li><Link to="#">3</Link></li>
                        <li><Link to="#">4</Link></li>
                        <li><Link to="#">5</Link></li>
                        <li><Link to="#">&gt;</Link></li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
        </section>

    )
    }
    
}

MyShop.propTypes = {
    shopProducts: PropTypes.array.isRequired,
    getProducts: PropTypes.func.isRequired
}

const mapStateToProps = (state)=>({
    shopProducts: state.Shop.shopProducts
})

const mapDispatchToProps = (dispatch) => ({
    getProducts: () => dispatch({type: GET_MYSHOP})
});

export default connect(mapStateToProps, mapDispatchToProps)(MyShop);