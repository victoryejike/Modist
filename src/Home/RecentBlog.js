import React from 'react';
import {Link} from 'react-router-dom';
//import img from './image_1.jpg';
//import image from './image_2.jpg';
//import images from './image_3.jpg';

const RecentBlog = () => {
    return(
        <section className="ftco-section">
            <div className="container">
                <div className="row justify-content-center mb-3 pb-3">
                <div className="col-md-12 heading-section text-center ftco-animate fadeInUp ftco-animated">
                    <h1 className="big">Blog</h1>
                    <h2>Recent Blog</h2>
                </div>
                </div>
                <div className="row d-flex">
                <div className="col-md-4 d-flex ftco-animate fadeInUp ftco-animated">
                    <div className="blog-entry align-self-stretch">
                    <Link to="blog-single.html" className="block-20" style={{backgroundImage: 'url("images/image_1.jpg")'}}>
                    </Link>
                    <div className="text mt-3 d-block">
                        <h3 className="heading mt-3"><Link to="#">Even the all-powerful Pointing has no control about the
                            blind texts</Link></h3>
                        <div className="meta mb-3">
                        <div><Link to="#">Dec 6, 2018</Link></div>
                        <div><Link to="#">Admin</Link></div>
                        <div><Link to="#" className="meta-chat"><span className="icon-chat" /> 3</Link></div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-md-4 d-flex ftco-animate fadeInUp ftco-animated">
                    <div className="blog-entry align-self-stretch">
                    <Link to="blog-single.html" className="block-20" style={{backgroundImage: 'url("images/image_2.jpg")'}}>
                    </Link>
                    <div className="text mt-3">
                        <h3 className="heading mt-3"><Link to="#">Even the all-powerful Pointing has no control about the
                            blind texts</Link></h3>
                        <div className="meta mb-3">
                        <div><Link to="#">Dec 6, 2018</Link></div>
                        <div><Link to="#">Admin</Link></div>
                        <div><Link to="#" className="meta-chat"><span className="icon-chat" /> 3</Link></div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-md-4 d-flex ftco-animate fadeInUp ftco-animated">
                    <div className="blog-entry align-self-stretch">
                    <Link to="blog-single.html" className="block-20" style={{backgroundImage: 'url("images/image_3.jpg")'}}>
                    </Link>
                    <div className="text mt-3">
                        <h3 className="heading mt-3"><Link to="#">Even the all-powerful Pointing has no control about the
                            blind texts</Link></h3>
                        <div className="meta mb-3">
                        <div><Link to="#">Dec 6, 2018</Link></div>
                        <div><Link to="#">Admin</Link></div>
                        <div><Link to="#" className="meta-chat"><span className="icon-chat" /> 3</Link></div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default RecentBlog;