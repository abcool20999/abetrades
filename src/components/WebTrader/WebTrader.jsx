// components/Layout/Footer.js

import React, {useEffect, useState} from 'react';
import CandleStickChart from './CandleStickChart'
import TimeInterval from './TimeInterval'
import BuySell from './BuySell'
import Symbols from './Symbols';
import {WebTraderContextProvider} from './WebTraderContext'
import Sidebar from '../Layout/sidebar';
import './WebTrader.css'; 

const WebTrader = () => {

  return (
    <div className='row'>
      <div className='col-3'>
        <Sidebar></Sidebar>
      </div>
      <div className='col-9'>
        <WebTraderContextProvider>
          <TimeInterval />
          <div className='row chart-status'>
            <div className='col-8'>
              <CandleStickChart />
            </div>
            <div className='col-4'>
              <Symbols />
            </div>
          </div>
          <BuySell />
        </WebTraderContextProvider>
      </div>
    </div>
  );
};

export default WebTrader;
