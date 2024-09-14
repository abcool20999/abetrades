// components/Layout/Footer.js

import React from 'react';
import appleUrl from '../../../assets/socialmedia/applestore.png';
import googleUrl from '../../../assets/socialmedia/googleplay.png';
import facebookUrl from '../../../assets/socialmedia/facebook.png';
import xUrl from '../../../assets/socialmedia/x.png';
import instagramUrl from '../../../assets/socialmedia/instagram.png';

const FooterSocialMedia = () => {
  return (
    <div>
      <h4 className="text-white">
        Find us on App Stores
      </h4>
      <div className="text-white">
        <img style={{width: '120px', height: '40px'}} src={appleUrl}></img>
        <img style={{width: '120px', height: '40px'}} src={googleUrl}></img>
      </div>
      <div className="text-white">
        Join Us
      </div>
      <div className="text-white row">
        <img className='col-2' style={{width: '20px', height: '20px'}} src={facebookUrl}></img>
        <img className='col-2' style={{width: '10px', height: '10px'}} src={xUrl}></img>
        <img className='col-2' style={{width: '10px', height: '10px'}} src={instagramUrl}></img>
        
      </div>
    </div>
  );
};

export default FooterSocialMedia;
