// components/Pages/HowItWorks.js
import React from 'react';
import './HowItworks.css'; 

const HowItWorks = () => {
  return (
    <div className="how-it-works-page">
      <h2>How It Works</h2>
      <div className="steps-container">
        <div className="step">
          <h3>1. Create an Account</h3>
          <p>Sign up by providing your details to get started.</p>
        </div>
        <div className="step">
          <h3>2. Get Capital</h3>
          <p>Click the "Get Capital" button and choose the amount you want to trade with.</p>
        </div>
        <div className="step">
          <h3>3. Start Trading</h3>
          <p>After choosing your amount, begin trading to make profits.</p>
        </div>
        <div className="step">
          <h3>4. Withdraw Profits</h3>
          <p>Once you've made profits, you can withdraw them. Keep in mind, you'll receive 90% of the profits while the firm takes 10%.</p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
