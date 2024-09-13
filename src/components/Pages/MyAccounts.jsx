// components/Pages/MyAccountsPage.js

import React from 'react';
import './MyAccountsPage.css';

const MyAccounts = () => {
  return (
    <div className="my-accounts-page">
      <h2>My Accounts</h2>
      <table className="accounts-table">
        <thead>
          <tr>
            <th>Account Type</th>
            <th>Balance</th>
            <th>Status</th>
            <th>Result</th>
            
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Beginners </td>
            <td>CA$500</td>
            <td>Active</td>
            <td>Ongoing</td>
           
          </tr>
          {/* Add more rows for additional challenges */}
        </tbody>
      </table>
    </div>
  );
};

export default MyAccounts;
