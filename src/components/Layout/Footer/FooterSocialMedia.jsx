// components/Layout/Footer.js

import React from 'react';

const FooterSocialMedia = () => {
  return (
    <div>
      <h4 className="text-white">
        Find us on App Stores
      </h4>
      <div className="text-white">
        <img style={{width: '120px', height: '40px'}} src='..\..\..\assets\socialmedia\applestore.png'></img>
        <img style={{width: '120px', height: '40px'}} src='..\..\..\assets\socialmedia\googleplay.png'></img>
      </div>
      <div className="text-white">
        Join Us
      </div>
      <div className="text-white row">
        <img className='col-2' style={{width: '20px', height: '20px'}} src='..\..\..\assets\socialmedia\youtube.png'></img>
        <img className='col-2' style={{width: '10px', height: '10px'}} src='..\..\..\assets\socialmedia\facebook.png'></img>
        <img className='col-2' style={{width: '10px', height: '10px'}} src='..\..\..\assets\socialmedia\x.png'></img>
        <img className='col-2' style={{width: '10px', height: '10px'}} src='..\..\..\assets\socialmedia\instagram.png'></img>
      </div>
    </div>
  );
};

export default FooterSocialMedia;
