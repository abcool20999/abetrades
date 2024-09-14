

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

  );
};

export default Footer;
