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
      // let config = {
      //   method: 'get',
      //   maxBodyLength: Infinity,
      //   url: 'https://api-fxtrade.oanda.com/v3/instruments/EUR_USD/candles?count=6&price=M&granularity=S5',
      //   headers: { 
      //     'Accept': 'application/json'
      //   },
      // };
  
      // axios(config)
      // .then((response) => {
      //   candleStickData = response.data.map((tick)=>{
      //     return {
      //       time: tick.time, open: tick.mid.o, high: tick.mid.h, low: tick.mid.l, close: tick.mid.c
      //     }
      //   })
      //   console.log(JSON.stringify(response.data));
      // })
      // .catch((error) => {
      //   console.log(error);
      // });
  

      const options = {
        method: 'GET',
        url: `https://data.alpaca.markets/v2/stocks/bars?symbols=${symbolInfo.symbol}&timeframe=${interval || '1Min'}&start=2022-01-03T00%3A00%3A00Z&end=2022-05-04T00%3A00%3A00Z&limit=100&adjustment=raw&feed=sip&sort=asc`,
        headers: {
          accept: 'application/json',
          'APCA-API-KEY-ID': appConfig['APCA-API-KEY-ID'],
          'APCA-API-SECRET-KEY': appConfig['APCA-API-SECRET-KEY']
          // 'APCA-API-KEY-ID': 'PK1TBMOBMDHONGMRGIF6',
          // 'APCA-API-SECRET-KEY': 'Ghvq8PWfZQLH9ylxzAdG1LgIwQfahUOdgknxPVXp'
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
          // setSymbolInfo((currentState)=> {
          //   currentState = {symbol: symbolInfo.symbol, buyPrice: price, buyValue: 1.0000, sellPrice: price, sellValue: 1.0000}
          //   return currentState
          // })
            //setSymbolInfo({symbol: symbolInfo.symbol, buyPrice: price, buyValue: 1.0000, sellPrice: price, sellValue: 1.0000})
          let candleStickData = arrayResult.map((tick)=>{
            let formattedDate = formatDate(tick.t)
            let time = extractTime(tick.t)
          return {
            time: Date.parse(tick.t)/1000, open: tick.o, high: tick.h, low: tick.l, close: tick.c
          }
        })

          console.log(candleStickData)
          // setCandleStickData(candleStickData)
          // chartContainerRef.current.innerText = ''
          // display(candleStickData)
        })
        .catch(function (error) {
          console.error(error);
        });

        // console.log(candleStickData)
        chartContainerRef.current.innerText = ''
        display(candleStickData)

      // () => {
        var handleResize = () => {
            chart.applyOptions({ width: chartContainerRef.current.clientWidth });
        };

        // const chart = createChart(chartContainerRef.current, {
        //     layout: {
        //         background: { type: ColorType.Solid, color: backgroundColor },
        //         textColor,
        //     },
        //     width: chartContainerRef.current.clientWidth,
        //     height: 300,
        // });
        // chart.timeScale().fitContent();

        function extractTime(dateTimeString){
          const dateTime = new Date(dateTimeString);
          const timeString = dateTime.toTimeString().split(' ')[0]; // e.g., "14:38:00"
          console.log(timeString);

        }

        function formatDate(dateTimeString){
          const dateTime = new Date(dateTimeString);

          const year = dateTime.getFullYear();
          const month = String(dateTime.getMonth() + 1).padStart(2, '0'); // Months are 0-based, so add 1
          const day = String(dateTime.getDate()).padStart(2, '0');

          const formattedDate = `${year}-${month}-${day}`; // e.g., "2024-07-16"
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
      
          //   candlestickSeries.setData([
          //   { time: '2018-12-22', open: 75.16, high: 82.84, low: 36.16, close: 45.72 },
          //   { time: '2018-12-23', open: 45.12, high: 53.90, low: 45.12, close: 48.09 },
          //   { time: '2018-12-24', open: 60.71, high: 60.71, low: 53.39, close: 59.29 },
          //   { time: '2018-12-25', open: 68.26, high: 68.26, low: 59.04, close: 60.50 },
          //   { time: '2018-12-26', open: 67.71, high: 105.85, low: 66.67, close: 91.04 },
          //   { time: '2018-12-27', open: 91.04, high: 121.40, low: 82.70, close: 111.40 },
          //   { time: '2018-12-28', open: 111.51, high: 142.83, low: 103.34, close: 131.25 },
          //   { time: '2018-12-29', open: 131.33, high: 151.17, low: 77.68, close: 96.43 },
          //   { time: '2018-12-30', open: 106.33, high: 110.20, low: 90.39, close: 98.10 },
          //   { time: '2018-12-31', open: 109.87, high: 114.69, low: 85.66, close: 111.26 },
          // ]);
        
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




// export const ChartComponent = props => {
//   const {
//       data,
//       colors: {
//           backgroundColor = 'white',
//           lineColor = '#2962FF',
//           textColor = 'black',
//           areaTopColor = '#2962FF',
//           areaBottomColor = 'rgba(41, 98, 255, 0.28)',
//       } = {},
//   } = props;

  // const chartContainerRef = useRef();

//   useEffect(
//       () => {
//           const handleResize = () => {
//               chart.applyOptions({ width: chartContainerRef.current.clientWidth });
//           };

//           const chart = createChart(chartContainerRef.current, {
//               layout: {
//                   background: { type: ColorType.Solid, color: backgroundColor },
//                   textColor,
//               },
//               width: chartContainerRef.current.clientWidth,
//               height: 300,
//           });
//           chart.timeScale().fitContent();

//           const newSeries = chart.addAreaSeries({ lineColor, topColor: areaTopColor, bottomColor: areaBottomColor });
//           newSeries.setData(data);

//           window.addEventListener('resize', handleResize);

//           return () => {
//               window.removeEventListener('resize', handleResize);

//               chart.remove();
//           };
//       },
//       [data, backgroundColor, lineColor, textColor, areaTopColor, areaBottomColor]
//   );

//   return (
//       <div
//           ref={chartContainerRef}
//       />
//   );
// };

// const initialData = [
//   { time: '2018-12-22', value: 32.51 },
//   { time: '2018-12-23', value: 31.11 },
//   { time: '2018-12-24', value: 27.02 },
//   { time: '2018-12-25', value: 27.32 },
//   { time: '2018-12-26', value: 25.17 },
//   { time: '2018-12-27', value: 28.89 },
//   { time: '2018-12-28', value: 25.46 },
//   { time: '2018-12-29', value: 23.92 },
//   { time: '2018-12-30', value: 22.68 },
//   { time: '2018-12-31', value: 22.67 },
// ];

// export function App(props) {
//   return (
//       <ChartComponent {...props} data={initialData}></ChartComponent>
//   );
// }


export default CandleStickChart;
