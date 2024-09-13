// components/Layout/Footer.js

import React from 'react';
import FooterTop from './FooterTop';
import FooterAboutUs from './FooterAboutUs';
import FooterPropTradingAccount from './FooterPropTradingAccount';
import FooterSocialMedia from './FooterSocialMedia';
import FooterSupport from './FooterSupport';
import FooterCopyRight from './FooterCopyRight';

const Footer = () => {
  return (
    <div style={{backgroundColor: '#003939'}} className='p-4 mt-5'>
      <FooterTop/>
      <div className='row'>
        <div className='col-3 my-4'><FooterAboutUs/></div>
        <div className='col-3 my-4'><FooterPropTradingAccount/></div>
        <div className='col-3 my-4'><FooterSupport/></div>
        <div className='col-3 my-4'><FooterSocialMedia/></div>
      </div>
      <FooterCopyRight/>
    </div>
    // <footer className="footer mt-5">
    //   <div className="footer-top row justify-content-between">
    //     <div className="footer-left col-4">
    //       <img src="/path/to/propfirm-logo.png" alt="Prop Firm Logo" />
    //       <span>Prop Firm Name</span>
    //     </div>
    //     <form className="footer-right row col-8">
    //       <input type="email" placeholder="Your Email" className='col-8 rounded-5 border-2' />
    //       <button type="submit" className='col-4 rounded-5 border-white text-white border-3 bg-black'>Subscribe</button>
    //     </form>
    //   </div>
    //   <hr />
    //   <div className="footer-middle">
    //     <div className="footer-column">
    //       <h4>Join Us</h4>
    //       <ul>
    //         <li><a href="https://www.youtube.com">YouTube</a></li>
    //         <li><a href="https://www.facebook.com">Facebook</a></li>
    //         <li><a href="https://www.twitter.com">Twitter</a></li>
    //         <li><a href="https://www.instagram.com">Instagram</a></li>
    //       </ul>
    //     </div>
    //     <div className="footer-column">
    //       <h4>Download Our App</h4>
    //       <div className="app-buttons">
    //         <img src="/path/to/appstore.png" alt="App Store" />
    //         <img src="/path/to/googleplay.png" alt="Google Play" />
    //       </div>
    //     </div>
    //   </div>
    //   <hr />
    //   <div className="footer-bottom">
    //     <p>Prop Firm Name &copy; {new Date().getFullYear()} All Rights Reserved</p>
    //   </div>
    // </footer>
  );
};

export default Footer;
