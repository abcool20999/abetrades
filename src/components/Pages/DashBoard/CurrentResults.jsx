import React, {useEffect, useState, useContext} from 'react';
import appConfig from '../../../../app-config';
import axios from 'axios'
import { AuthContext } from '../Auth/AuthProvider';
import { DashBoardContext } from './DashBoardContext';
const CurrentResults = () => {
    // const [orders, setOrders] = useState([])
    const {  getAuthToken } = useContext(AuthContext);
    const { orders, setOrders, positions, setPositions } = useContext(DashBoardContext);

    useEffect(()=>{
       
    }, [orders, setOrders, positions, setPositions])

    return (
        <div className='row m-3 border-2 border-black'>
            <div className=''>
                <h4>Current Results</h4>
            </div>
            <div className=''>
                {!orders?<div>No data to show yet...start trading to start tracking results</div>:
                                <table className=''>
                                <thead>
                                    <tr>
                                        <th className='px-1 table-header'>OrderId</th>
                                        <th className='px-1 table-header'>Side</th>
                                        <th className='px-1 table-header'>Symbol</th>
                                        <th className='px-1 table-header'>Qty</th>
                                        <th className='px-1 table-header'>FilledQty</th>
                                        <th className='px-1 table-header'>Status</th>
                                        <th className='px-1 table-header'>SubmittedAt</th>
                                        <th className='px-1 table-header'>Filled Average Price</th>
                                        {/* <th className='px-1 table-header'>Current Price</th> */}
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                {orders.map((order, index) => (
                                    // Use index or a unique identifier as key
                                    <tr key={index}>
                                        {/* <td>{order.id}</td> */}
                                        <td>{++index}</td>
                                        <td>{order.side}</td>
                                        <td>{order.symbol}</td>
                                        <td>{order.qty}</td>
                                        <td>{order.filled_qty}</td>
                                        <td>{order.status}</td>
                                        <td>{order.submitted_at}</td>
                                        <td>{order.filled_avg_price}</td>
                               

                                    </tr>
                                ))}
                                </tbody>
                            </table>
            
                }
                
            </div>
        </div>
    )};


export default CurrentResults;