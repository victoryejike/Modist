import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div className="hero-wrap hero-bread" style={{backgroundImage: 'url("images/bg_6.jpg")'}}>
            <div className="container">
                <div className="row no-gutters slider-text align-items-center justify-content-center">
                <div className="col-md-9 ftco-animate text-center">
                    <h1 className="mb-0 bread">Blog Single</h1>
                    <p className="breadcrumbs"><span className="mr-2"><Link to="index.html">Home Blog</Link></span> <span>Blog Single</span></p>
                </div>
                </div>
            </div>
        </div>

    )
}

export default Header;