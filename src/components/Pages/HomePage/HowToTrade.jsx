import React from 'react';
import howtotradeUrl from '../../../assets/howtotrade.jpg';

const HowToTrade = () => {
    return (

        <div id='howtotrade' className='p-3 bg-black bg-opacity-10 pt-5'>
        <h3>How to trade with AbeTrade</h3>
        <p>
        To start trading, simply create an account and choose the capital you wish to trade with. After that, access our WebTrader platform to place your trades. Once you've made a profit, you can withdraw 90% of your earnings while the firm retains 10%. It's an easy and straightforward process designed to help you maximize your trading success.
        </p>
        <div className='row p-4 mx-auto w-75'>
        <img src={howtotradeUrl} className='w-50 mx-5'></img>
        <div className='w-25 mx-6'>
            <h3>Steps to access Fund</h3>
            <div className='row rounded-5 bg-white border-light p-2 mt-2'>
                <div className='d-inline-block col-2 rounded-5 bg-black text-white'>01</div>
                <div className='d-inline-block col-10 text-black'>Create an account</div>
            </div>
            <div className='row rounded-5 bg-white border-light p-2 mt-2'>
                <div className='d-inline-block col-2 rounded-5 bg-black text-white'>02</div>
                <div className='d-inline-block col-10 text-black'>Select fund amount</div>
            </div>
            <div className='row rounded-5 bg-white border-light p-2 mt-2'>
                <div className='d-inline-block col-2 rounded-5 bg-black text-white'>03</div>
                <div className='d-inline-block col-10 text-black'>Start Trading</div>
            </div>
            <div className='row rounded-5 bg-white border-light p-2 mt-2'>
                <div className='d-inline-block col-2 rounded-5 bg-black text-white'>04</div>
                <div className='d-inline-block col-10 text-black'>Earn 90% of profits</div>
            </div>
        </div>
        </div>
        </div>
    )
}

export default HowToTrade