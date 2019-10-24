import React from 'react';

const MyProduct = () => {
    return(
        <section className="ftco-section bg-light">
  <div className="container">
    <div className="row">
      <div className="col-lg-6 mb-5 ftco-animate">
        <a href="images/menu-2.jpg" className="image-popup"><img src="images/product-1.jpg" className="img-fluid" alt="Colorlib Template" /></a>
      </div>
      <div className="col-lg-6 product-details pl-md-5 ftco-animate">
        <h3>Young Woman Wearing Dress</h3>
        <p className="price"><span>$120.00</span></p>
        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
        <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.
        </p>
        <div className="row mt-4">
          <div className="col-md-6">
            <div className="form-group d-flex">
              <div className="select-wrap">
                <div className="icon"><span className="ion-ios-arrow-down" /></div>
                <select name='true' id='true' className="form-control">
                  <option value>Small</option>
                  <option value>Medium</option>
                  <option value>Large</option>
                  <option value>Extra Large</option>
                </select>
              </div>
            </div>
          </div>
          <div className="w-100" />
          <div className="input-group col-md-6 d-flex mb-3">
            <span className="input-group-btn mr-2">
              <button type="button" className="quantity-left-minus btn" data-type="minus" data-field>
                <i className="ion-ios-remove" />
              </button>
            </span>
            <input type="text" id="quantity" name="quantity" className="form-control input-number" defaultValue={1} min={1} max={100} />
            <span className="input-group-btn ml-2">
              <button type="button" className="quantity-right-plus btn" data-type="plus" data-field>
                <i className="ion-ios-add" />
              </button>
            </span>
          </div>
        </div>
        <p><a href="cart.html" className="btn btn-primary py-3 px-5">Add to Cart</a></p>
      </div>
    </div>
  </div>
</section>

    )
}

export default MyProduct;