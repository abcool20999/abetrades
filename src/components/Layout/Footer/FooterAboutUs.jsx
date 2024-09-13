import React from 'react';
import './FooterAboutUs.css';

const FooterAboutUs = () => {
  return (
    <div className="footer-aboutus p-4">
      <h4 className="text-white mb-3">About Us</h4>
      <ul className="list-unstyled">
        <li className="mb-2 text-white footer-link">
          <a href="#company-history" className="text-white text-decoration-none">Company History</a>
        </li>
        <li className="mb-2 text-white footer-link">
          <a href="#mission-values" className="text-white text-decoration-none">Mission & Values</a>
        </li>
        <li className="mb-2 text-white footer-link">
          <a href="#careers" className="text-white text-decoration-none">Careers</a>
        </li>
      </ul>
    </div>
  );
};

export default FooterAboutUs;
