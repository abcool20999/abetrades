import React from 'react';

const CapitalClass = ({ amount, description, level, daysChallenge, daysVerification, profitShare }) => {
  return (
    <div className="subscription-card">
      <h3>{amount}</h3>
      <p>{description}</p>
      <p>{level}</p>
      <hr />
      <ul>
        <li><span className="check-mark">&#x2713;</span> Zero Minimum Trading days</li>
        <li><span className="check-mark">&#x2713;</span> Immediate Payout</li>
        <li><span className="check-mark">&#x2713;</span> Profit Share {profitShare}</li>
        <li><span className="check-mark">&#x2713;</span> {daysChallenge} Days per Challenge</li>
        <li><span className="check-mark">&#x2713;</span> {daysVerification} Days per Verification</li>
      </ul>
      <a className='btn bg-dark text-white' href='/GetCapitalConfirm'>Get Capital</a>
    </div>
  );
}

export default CapitalClass;