import React from 'react';
import './FooterTop.css';
import logo2Url from '../../../assets/logo2.png';


const FooterTop = () => {
  return (
    <div>
      <div className="footer-top row justify-content-between align-items-center">
        <div className="footer-left col-4">
          <img src={logo2Url} alt="Prop Firm Logo" />
          <span className='text-white ms-2'>betrade</span>
        </div>
        <div className="form">
          <form className="footer-right col-8">
            <input type="email" placeholder="Your Email" className='email-input me-3 rounded-5 border-2' />
            <button type="submit" className='subscribe-btn rounded-5 border-white text-white border-3 bg-black'>Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;

