import React from 'react';
import {Link} from 'react-router-dom';
//import img from './bg_1.jpg';

const Header = () => {
    return (
        <div className="hero-wrap js-fullheight" style={{backgroundImage: 'url("images/bg_1.jpg")', height: 695}}>
            <div className="overlay"></div>
            <div className="container">
                <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center" style={{height: 695}}>
                    <h3 className="v">Modist - Time to get dress</h3>
                    <h3 className="vr">Since - 1985</h3>
                    <div className="col-md-11 ftco-animate text-center fadeInUp ftco-animated">
                        <h1>Le Stylist</h1>
                        <h2><span>Wear Your Dress</span></h2>
                    </div>
                    <div className="mouse">
                        <Link to="#" className="mouse-icon">
                        <div className="mouse-wheel"><span className="ion-ios-arrow-down"></span></div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;