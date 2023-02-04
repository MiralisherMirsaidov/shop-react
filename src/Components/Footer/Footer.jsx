import React from 'react';
import logo from '..//../img/ebay.png';

const Footer = () => {
    return (
      <div className="container py-5 d-flex justify-content-around">
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
          <h3>Account</h3>
          <ul className="list-unstyled">
            <li>Wishlist</li>
            <li>Cart</li>
            <li>Track Order</li>
            <li>Shipping Details</li>
          </ul>
        </div>
        <div>
          <h3>Useful links</h3>
          <ul className="list-unstyled">
            <li>About Us</li>
            <li>Conact</li>
            <li>Hot deals</li>
            <li>Promotions</li>
            <li>New products</li>
          </ul>
        </div>
        <div>
          <h3>Help Center</h3>
          <ul className="list-unstyled">
            <li>Payments</li>
            <li>Refund</li>
            <li>Checkout</li>
            <li>Shipping</li>
            <li>Q&A</li>
            <li>Q&Privacy Policy</li>
          </ul>
        </div>
      </div>
    );
}

export default Footer;
