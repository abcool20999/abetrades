// components/Layout/Footer.js

import React, {useEffect, useState, useContext} from 'react';
import { WebTraderContext } from './WebTraderContext';
import axios from 'axios'
import appConfig from '../../../app-config';
const Symbols = () => {
  const {interval, symbolInfo, setSymbolInfo, setCandleStickData } = useContext(WebTraderContext);

  useEffect(()=>{
    var startDate = new Date(2022,8,4, 15, 30, 0 )
    startDate = encodeURIComponent(startDate.toISOString());
    var endDate = new Date(Date.now())
    endDate.setDate(endDate.getDate() - 1);
    endDate =encodeURIComponent(endDate.toISOString());
    const options = {
      method: 'GET',
      url: `https://data.alpaca.markets/v2/stocks/bars?symbols=${symbolInfo.symbol}&timeframe=${interval || '1Min'}&start=${startDate}&end=${endDate}&limit=100&adjustment=raw&feed=sip&sort=asc`,
      // url: `https://data.alpaca.markets/v2/stocks/bars?symbols=${symbolInfo.symbol}&timeframe=${interval || '1Min'}&start=2022-01-03T00%3A00%3A00Z&end=2022-05-04T00%3A00%3A00Z&limit=100&adjustment=raw&feed=sip&sort=asc`,
      headers: {
        accept: 'application/json',
        'APCA-API-KEY-ID': appConfig['APCA-API-KEY-ID'],
        'APCA-API-SECRET-KEY': appConfig['APCA-API-SECRET-KEY']
      }
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        if(!(symbolInfo.symbol)) return
        let arrayResult = response.data.bars[symbolInfo.symbol]
        let length = arrayResult.length
        let price = arrayResult[length-1]['vw']
          //setSymbolInfo({symbol: symbolInfo.symbol, buyPrice: price, buyValue: 1.0000, sellPrice: price, sellValue: 1.0000})
        let candleStickData = arrayResult.map((tick)=>{
          // let formattedDate = formatDate(tick.t)
          // let time = extractTime(tick.t)
        return {
          time: Date.parse(tick.t)/1000, open: tick.o, high: tick.h, low: tick.l, close: tick.c
        }
      })
      setSymbolInfo((currentState)=> {
        currentState = {symbol: symbolInfo.symbol, buyPrice: price * symbolInfo.buyValue, buyValue: symbolInfo.buyValue, buyPricePerShare: price, sellPrice: price * symbolInfo.sellValue, sellValue: symbolInfo.sellValue, sellPricePerShare: price}
        return currentState
      })
      setCandleStickData(candleStickData)
      console.log(candleStickData)
      })
      .catch(function (error) {
        console.error(error);
      });
  },[])

  function setSymbol(event, symbol){
    var startDate = new Date(2022,8,4, 15, 30, 0 )
    startDate = encodeURIComponent(startDate.toISOString());
    var endDate = new Date(Date.now())
    endDate.setDate(endDate.getDate() - 1);
    endDate =encodeURIComponent(endDate.toISOString());
    const options = {
      method: 'GET',
      url: `https://data.alpaca.markets/v2/stocks/bars?symbols=${symbol}&timeframe=${interval || '1Min'}&start=${startDate}&end=${endDate}&limit=100&adjustment=raw&feed=sip&sort=asc`,
      // url: `https://data.alpaca.markets/v2/stocks/bars?symbols=${symbol}&timeframe=${interval || '1Min'}&start=2022-01-03T00%3A00%3A00Z&end=2022-05-04T00%3A00%3A00Z&limit=100&adjustment=raw&feed=sip&sort=asc`,
      headers: {
        accept: 'application/json',
        'APCA-API-KEY-ID': appConfig['APCA-API-KEY-ID'],
        'APCA-API-SECRET-KEY': appConfig['APCA-API-SECRET-KEY']
      }
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        if(!(symbol)) return
        let arrayResult = response.data.bars[symbol]
        let length = arrayResult.length
        let price = arrayResult[length-1]['vw']
          //setSymbolInfo({symbol: symbolInfo.symbol, buyPrice: price, buyValue: 1.0000, sellPrice: price, sellValue: 1.0000})
        let candleStickData = arrayResult.map((tick)=>{
          // let formattedDate = formatDate(tick.t)
          // let time = extractTime(tick.t)
        return {
          time: Date.parse(tick.t)/1000, open: tick.o, high: tick.h, low: tick.l, close: tick.c
        }
      })
      setSymbolInfo((currentState)=> {
        currentState = {symbol: symbol, buyPrice: price * symbolInfo.buyValue, buyValue: symbolInfo.buyValue, buyPricePerShare: price, sellPrice: price * symbolInfo.sellValue, sellValue: symbolInfo.sellValue, sellPricePerShare: price}
        return currentState
      })
      setCandleStickData(candleStickData)
      console.log(candleStickData)

        let selectedSymbolPrev = document.querySelectorAll('.selectedsymbol')
        Array.from(selectedSymbolPrev).forEach(element => {
          element.classList.remove('selectedsymbol');
        });
        console.log(event.target.getAttribute('className'))
        event.target.parentElement.classList.add('selectedsymbol')
      })
      .catch(function (error) {
        console.error(error);
      });

  }
  return (
    <div className='col' style={{'text-align': 'left'}}>
      <div className='row'>
        <div className='col-4 thick'>Stocks</div>

        {/* <div className='col-2'>Metals</div>
        <div className='col-2'>Coins</div>
        <div className='col-2'>Orders</div> */}

      </div>
      <table>
        <thead>
          <tr>
            <td className='px-1 thick'>Symbol</td>
            <td className='px-1 thick'>Price</td>
          </tr>
        </thead>
        <tbody>
          <tr onClick={(event) => setSymbol(event, 'AAPL') }>
            <td>AAPL</td>
            <td>157.037049</td>
          </tr>
          <tr onClick={(event) => setSymbol(event, 'GOOG') }>
            <td class='symbol'>GOOG</td>
            <td>108.293875</td>
          </tr>
          <tr onClick={(event) => setSymbol(event, 'MSFT') }>
            <td class='symbol'>MSFT</td>
            <td>256.624169</td>
          </tr>
          <tr onClick={(event) => setSymbol(event, 'FRD') }>
            <td class='symbol'>FRD</td>
            <td>8.8113</td>
          </tr>
          <tr onClick={(event) => setSymbol(event, 'ZSE') }>
            <td class='symbol'>ZSE</td>
            <td>4.6748</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Symbols;
