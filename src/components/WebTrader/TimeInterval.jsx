// components/Layout/Footer.js

import React, {useEffect, useState, useContext} from 'react';
import { WebTraderContext } from './WebTraderContext';
const TimeInterval = () => {
  const { setInterval } = useContext(WebTraderContext);
  return (
    <div className='row'>
      <div id='' className='col-1'>
        Time
      </div>
      <div id='' className='col-1' onClick={() => setInterval('1Min')}>
        1m
      </div>
      <div id='' className='col-1' onClick={() => setInterval('15Min')}>
        15m
      </div>
      <div id='' className='col-1' onClick={() => setInterval('1Hour')}>
        1h
      </div>
      <div id='' className='col-1' onClick={() => setInterval('4Hour')}>
        4h
      </div>
      <div id='' className='col-1' onClick={() => setInterval('1Day')}>
        1D
      </div>
      <div id='' className='col-1' onClick={() => setInterval('1Week')}>
        1w
      </div>
      <div id='' className='col-1'>
        &#11206
      </div>

    </div>
  );
};

export default TimeInterval;
