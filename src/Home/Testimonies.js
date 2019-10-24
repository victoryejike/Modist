import React from 'react';
import { GET_MYTESTIMONY } from '../actions/types';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
//import img from './person_1.jpg';
//import image from './person_2.jpg';
//import images from './person_3.jpg';

class Testimonies extends React.Component {
    componentDidMount() {
        this.props.getTestimony();
    }
    render(){
        const {peoplesTestimony} = this.props
        return (
        <section className="ftco-section testimony-section bg-light">
            <div className="container">
                <div className="row justify-content-center mb-3 pb-3">
                <div className="col-md-12 heading-section text-center ftco-animate fadeInUp ftco-animated">
                    <h1 className="big">Testimony</h1>
                </div>
                </div>
                <div className="row justify-content-center">
                <div className="col-md-8 ftco-animate fadeInUp ftco-animated">
                    <div className="row ftco-animate fadeInUp ftco-animated">
                    <div className="col-md-12">
                        <div className="carousel-testimony owl-carousel ftco-owl owl-loaded owl-drag">
                        {peoplesTestimony.map(testimony => {
                            return(
                                <div className="owl-stage-outer">
                            <div className="testimony-wrap py-4 pb-5">
                            <div className="user-img mb-4" style={{backgroundImage: testimony.picture}}>
                                <span className="quote d-flex align-items-center justify-content-center">
                                <i className="icon-quote-left" />
                                </span>
                            </div>
                            <div className="text text-center">
                                <p className="mb-4">{testimony.text}</p>
                                <p className="name">{testimony.name}</p>
                                <span className="position">Customer</span>
                            </div>
                            </div>
                        </div> ) 
                        })}
                        {/* <div className="item">
                            <div className="testimony-wrap py-4 pb-5">
                            <div className="user-img mb-4" style={{backgroundImage: 'url("images/person_2.jpg")'}}>
                                <span className="quote d-flex align-items-center justify-content-center">
                                <i className="icon-quote-left" />
                                </span>
                            </div>
                            <div className="text text-center">
                                <p className="mb-4">A small river named Duden flows by their place and supplies
                                it with the necessary regelialia. It is a paradisematic country, in
                                which roasted parts of sentences fly into your mouth.</p>
                                <p className="name">Roger Scott</p>
                                <span className="position">Customer</span>
                            </div>
                            </div>
                        </div> */}
                           
                        
                        {/* <div className="item">
                            <div className="testimony-wrap py-4 pb-5">
                            <div className="user-img mb-4" style={{backgroundImage: 'url("images/perrson_3.jpg")'}}>
                                <span className="quote d-flex align-items-center justify-content-center">
                                <i className="icon-quote-left" />
                                </span>
                            </div>
                            <div className="text text-center">
                                <p className="mb-4">A small river named Duden flows by their place and supplies
                                it with the necessary regelialia. It is a paradisematic country, in
                                which roasted parts of sentences fly into your mouth.</p>
                                <p className="name">Roger Scott</p>
                                <span className="position">Customer</span>
                            </div>
                            </div>
                        </div> */}
                        {/* <div className="item">
                            <div className="testimony-wrap py-4 pb-5">
                            <div className="user-img mb-4" style={{backgroundImage: 'url("images/person_1.jpg")'}}>
                                <span className="quote d-flex align-items-center justify-content-center">
                                <i className="icon-quote-left" />
                                </span>
                            </div>
                            <div className="text text-center">
                                <p className="mb-4">A small river named Duden flows by their place and supplies
                                it with the necessary regelialia. It is a paradisematic country, in
                                which roasted parts of sentences fly into your mouth.</p>
                                <p className="name">Roger Scott</p>
                                <span className="position">Customer</span>
                            </div>
                            </div>
                        </div> */}
                        {/* <div className="item">
                            <div className="testimony-wrap py-4 pb-5">
                            <div className="user-img mb-4" style={{backgroundImage: 'url("images/person_2.jpg")'}}>
                                <span className="quote d-flex align-items-center justify-content-center">
                                <i className="icon-quote-left" />
                                </span>
                            </div>
                            <div className="text text-center">
                                <p className="mb-4">A small river named Duden flows by their place and supplies
                                it with the necessary regelialia. It is a paradisematic country, in
                                which roasted parts of sentences fly into your mouth.</p>
                                <p className="name">Roger Scott</p>
                                <span className="position">Customer</span>
                            </div>
                            </div>
                        </div> */}
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
    }
    
}


Testimonies.propTypes = {
    peoplesTestimony: PropTypes.array.isRequired,
    getTestimony: PropTypes.func.isRequired
}

const mapStateToProps = (state)=>({
    peoplesTestimony: state.Testimony.peoplesTestimony
})

const mapDispatchToProps = (dispatch) => ({
    getTestimony: () => dispatch({type: GET_MYTESTIMONY})
});

export default connect(mapStateToProps, mapDispatchToProps)(Testimonies);
