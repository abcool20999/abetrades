import React, {useContext, useEffect, useState} from 'react';
import { DashBoardContext } from './DashBoardContext';
const DailySummary = () => {
  const {positions} = useContext(DashBoardContext)
  // let [aggregatePL, setAggregatePL] = useState()
  let [aggregateP, setAggregateP] = useState()
  let [aggregateL, setAggregateL] = useState()
  let [aggregateTP, setAggregateTP] = useState()
  let [aggregateTL, setAggregateTL] = useState()
  let [aggregateLastReadEquity, setAggregateLastReadEquity] = useState()

  useEffect(()=>{
    if(positions && positions.length>0){
      // aggregatePL = positions.reduce((accumulator, position) => accumulator + position.market_value, 0);
      // setAggregatePL(aggregatePL)

      aggregateP = positions.reduce((accumulator, position) => accumulator + parseFloat(position.change_today), 0);
      setAggregateP(aggregateP)

      aggregateL = positions.reduce((accumulator, position) => accumulator + parseFloat(position.change_today), 0);
      setAggregateL(aggregateL)

      aggregateTP = positions.reduce((accumulator, position) => accumulator + parseFloat(position.unrealized_pl), 0);
      setAggregateTP(aggregateTP)

      aggregateTL = positions.reduce((accumulator, position) => accumulator + parseFloat(position.unrealized_pl), 0);
      setAggregateTL(aggregateTL)
      
      aggregateLastReadEquity = positions.reduce((accumulator, position) => accumulator + parseFloat(position.market_value), 0);
      setAggregateLastReadEquity(aggregateLastReadEquity)
    }
  }, [positions])
    return (
        <div className="my-5 border-dark">
          <h6 className='text-start'>Daily Summary</h6>
          <table className='table'>
            <thead>
              <tr>
                <th className='mr-1'><small>Today's Loss</small></th>
                <th className='mr-1'><small>Total Loss</small></th>
                <th className='mr-1'><small>Max Permitted Loss</small></th>
                <th className='mr-1'><small>Daily Drawdown</small></th>
                <th className='mr-1'><small>Today's Profit</small></th>
                <th className='mr-1'><small>Total Profit</small></th>
                <th className='mr-1'><small>Last Read Equity</small></th>
              </tr>
            </thead>
            <tbody>

                <th><small>{aggregateL<0? aggregateL: '-'}</small></th>
                <th><small>{aggregateTL<0? aggregateTL: '-'}</small></th>
               <th><small> - </small></th>
                <th><small> - </small></th>
                <th><small>{aggregateP>0? aggregateP: '-'}</small></th>
               <th><small>{aggregateTP>0? aggregateTP: '-'}</small></th>
                <th><small>{aggregateLastReadEquity}</small></th>
            </tbody>
          </table>
        </div>
)};


export default DailySummary;