import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center text-lg-start">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Electronics E-commerce</h5>
            <p>
              Your one-stop shop for the latest in electronic gadgets and accessories.
              Explore our wide range of products and enjoy seamless shopping experience.
            </p>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Quick Links</h5>
            <ul className="list-unstyled mb-0">
              <li><Link to="/" className="text-white">Home</Link></li>
              <li><Link to="/products" className="text-white">Products</Link></li>
              <li><Link to="/cart" className="text-white">Cart</Link></li>
              <li><Link to="/signup" className="text-white">Sign Up</Link></li>
              <li><Link to="/signin" className="text-white">Sign In</Link></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Contact Us</h5>
            <ul className="list-unstyled mb-0">
              <li><a href="mailto:info@electronics.com" className="text-white"><i className="fas fa-envelope me-2"></i>info@electronics.com</a></li>
              <li><a href="tel:+1234567890" className="text-white"><i className="fas fa-phone me-2"></i>+123 456 7890</a></li>
              <li><a href="/contact" className="text-white"><i className="fas fa-map-marker-alt me-2"></i>123 Electronics Street, Tech City</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Newsletter</h5>
            <form>
              <div className="form-outline form-white mb-4">
                <input type="email" id="form5Example21" className="form-control" placeholder="Email address" />
              </div>
              <button type="submit" className="btn btn-primary mb-4">Subscribe</button>
            </form>
            <h5 className="text-uppercase">Follow Us</h5>
            <a href="https://www.facebook.com" className="text-white me-4">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.twitter.com" className="text-white me-4">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com" className="text-white me-4">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com" className="text-white me-4">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center p-3 bg-secondary">
        <p className="mb-0">&copy; {new Date().getFullYear()} Electronics E-commerce. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
