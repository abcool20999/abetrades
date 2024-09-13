// components/Layout/Footer.js

import React from 'react';
import './FooterCopyRight.css'; 

const FooterCopyRight = () => {
  return (
    <div className='footer-copyright'>
      <p>
        Abetrade &copy; {new Date().getFullYear()} All Rights Reserved
      </p>
      <div className='footer-extra'>
      
      </div>
    </div>
  );
};

export default FooterCopyRight;

