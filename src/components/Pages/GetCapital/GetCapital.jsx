// components/Pages/GetCapitalPage.js
import React from 'react';
import Sidebar from '../../Layout/sidebar';
import CapitalClass from './CapitalClass';
import './GetCapitalPage.css';

const GetCapital = () => {
  return (
    <div className="row">
      <div className='col-4'>
        <Sidebar />
      </div>
      <div className='row col-8'>
        <div className='col-4'>
          <CapitalClass
            amount="CA$500"
            level="Beginner"
            profitShare="90%"
            daysChallenge="20"
            daysVerification="10"
          />
        </div>
        <div className='col-4'>
          <CapitalClass
            amount="CA$1000"
            level="Intermediate"
            profitShare="85%"
            daysChallenge="30"
            daysVerification="15"
          />
        </div>
        <div className='col-4'>
          <CapitalClass
            amount="CA$2000"
            level="Advanced"
            profitShare="80%"
            daysChallenge="40"
            daysVerification="20"
          />
        </div>
      </div> 
    </div>
  );
};

export default GetCapital;



<div>

</div>