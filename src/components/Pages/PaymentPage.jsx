import React, { useState } from 'react';

const PaymentPage = () => {
  const [commissionBalance, setCommissionBalance] = useState(500); // Example balance
  const [amount, setAmount] = useState('');
  const [withdrawalMethod, setWithdrawalMethod] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleWithdraw = (e) => {
    e.preventDefault();
    
    // Validate the amount
    if (amount > commissionBalance) {
      alert('Insufficient commission balance');
      return;
    }

    // Simulate withdrawal process (you'll need to implement actual API call)
    setCommissionBalance(commissionBalance - amount);
    setSuccessMessage(`You have successfully withdrawn $${amount}.`);
    setAmount('');
  };

  return (
    <div className="payment-page">
      <h2>Withdraw Your Commissions</h2>
      <p>Current Commission Balance: ${commissionBalance}</p>
      
      {successMessage && <p className="success-message">{successMessage}</p>}

      <form onSubmit={handleWithdraw} className='w-50 m-auto'>
        <div className="form-group">
          <label htmlFor="amount">Amount to Withdraw</label>
          <input className='w-50'
            type="number"
            id="amount"
            name="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="method">Withdrawal Method</label>
          <select
            id="method"
            name="method"
            value={withdrawalMethod}
            onChange={(e) => setWithdrawalMethod(e.target.value)}
            required
          >
            <option value="">Select Method</option>
            <option value="bank">Bank Transfer</option>
            <option value="paypal">PayPal</option>
            <option value="crypto">Cryptocurrency</option>
          </select>
        </div>

        <button type="submit" className='btn w-50 text-white' style={{'background-color': 'rgb(27, 63, 46)' }}>Withdraw</button>
      </form>
    </div>
  );
};

export default PaymentPage;
