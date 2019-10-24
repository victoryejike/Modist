import React from 'react';

const Header = () => {
    return (
        <div className="hero-wrap hero-bread" style={{backgroundImage: 'url("images/bg_6.jpg")'}}>
            <div className="container">
                <div className="row no-gutters slider-text align-items-center justify-content-center">
                <div className="col-md-9 ftco-animate text-center">
                    <h1 className="mb-0 bread">About Us</h1>
                    <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home</a></span> <span>About</span></p>
                </div>
                </div>
            </div>
        </div>

    )
}

export default Header;