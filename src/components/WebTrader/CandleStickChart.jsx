// components/Layout/Footer.js

import React, {useEffect, useState, useRef, useContext} from 'react';
import { createChart, ColorType } from 'lightweight-charts';
import axios from 'axios'
import { WebTraderContext } from './WebTraderContext';
import appConfig from '../../../app-config';

const CandleStickChart = () => {
  // const [key, setKey] = useState(null)
  // setKey(props.key)
  const { interval, symbolInfo, setSymbolInfo, candleStickData, setCandleStickData } = useContext(WebTraderContext);

  // var candleStickData
  const chartContainerRef = useRef();
  const {
    data,
    colors: {
        backgroundColor = 'white',
        lineColor = '#2962FF',
        textColor = 'black',
        areaTopColor = '#2962FF',
        areaBottomColor = 'rgba(41, 98, 255, 0.28)',
    } = {},
  } = {};

  useEffect(()=>{
     

      const options = {
        method: 'GET',
        url: `https://data.alpaca.markets/v2/stocks/bars?symbols=${symbolInfo.symbol}&timeframe=${interval || '1Min'}&start=2022-01-03T00%3A00%3A00Z&end=2022-05-04T00%3A00%3A00Z&limit=100&adjustment=raw&feed=sip&sort=asc`,
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
         
          let candleStickData = arrayResult.map((tick)=>{
            let formattedDate = formatDate(tick.t)
            let time = extractTime(tick.t)
          return {
            time: Date.parse(tick.t)/1000, open: tick.o, high: tick.h, low: tick.l, close: tick.c
          }
        })

          console.log(candleStickData)
         
        })
        .catch(function (error) {
          console.error(error);
        });

       
        chartContainerRef.current.innerText = ''
        display(candleStickData)

     
        var handleResize = () => {
            chart.applyOptions({ width: chartContainerRef.current.clientWidth });
        };

       

        function extractTime(dateTimeString){
          const dateTime = new Date(dateTimeString);
          const timeString = dateTime.toTimeString().split(' ')[0]; 
          console.log(timeString);

        }

        function formatDate(dateTimeString){
          const dateTime = new Date(dateTimeString);

          const year = dateTime.getFullYear();
          const month = String(dateTime.getMonth() + 1).padStart(2, '0'); 
          const day = String(dateTime.getDate()).padStart(2, '0');

          const formattedDate = `${year}-${month}-${day}`; 
          console.log(formattedDate);
          return formattedDate
        }
        function display(candleStickData){
          if(candleStickData.length<1) return
          var chartElement = document.getElementById('container')
          const chartOptions = { 
            layout: { 
              textColor: 'black', background: { type: ColorType.Solid, color: backgroundColor },
            }, 
            width: chartContainerRef.current.clientWidth- 100, height: 300,
          };
          debugger
          const chart = createChart(chartContainerRef.current, chartOptions);
          chart.timeScale().fitContent();
      
          const candlestickSeries = chart.addCandlestickSeries({
            upColor: '#26a69a', downColor: '#ef5350', borderVisible: false,
            wickUpColor: '#26a69a', wickDownColor: '#ef5350',
          });
      
          candlestickSeries.setData(candleStickData);
      
        
        
          window.addEventListener('resize', handleResize);
      
      
          return () => {
              window.removeEventListener('resize', handleResize);
      
              chart.remove();
          };
      
        //}
      }
  }, [interval, candleStickData, backgroundColor, lineColor, textColor, areaTopColor, areaBottomColor])

  return (
    <div className = 'chart-container'
        ref={chartContainerRef}
    />
  );
};






export default CandleStickChart;
