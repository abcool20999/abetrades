// components/Layout/Footer.js

import React, {useEffect, useState, useContext, useRef} from 'react';
import { WebTraderContext } from './WebTraderContext';
import axios from 'axios'
import { AuthContext } from '../Pages/Auth/AuthProvider';
import appConfig from '../../../app-config';
const BuySell = () => {
  const { symbolInfo } = useContext(WebTraderContext);
  const { account, getAccountById } = useContext(AuthContext);

  useEffect(()=>{
    console.log('symbol info ', symbolInfo)
  },[symbolInfo, account])
  const buyValueRef = useRef()
  const sellValueRef = useRef()
  const [calculatedBuyPrice, setCalculatedBuyPrice] = useState(0);
  const [calculatedSellPrice, setCalculatedSellPrice] = useState(0);
  const [calculatedSellValue, setCalculatedSellValue] = useState(0);
  const [calculatedBuyValue, setCalculatedBuyValue] = useState(0);

  const handleBuyInputChange = () => {
    const inputValue = parseFloat(buyValueRef.current.value || "0");
    setCalculatedBuyPrice(symbolInfo.buyPricePerShare * inputValue);
    setCalculatedBuyValue(inputValue)
  };

  const handleSellInputChange = () => {
    const inputValue = parseFloat(sellValueRef.current.value || "0");
    setCalculatedSellPrice(symbolInfo.sellPricePerShare * inputValue);
    setCalculatedSellValue(inputValue)
  };
  function showSuccessModal() {
    const modal = document.getElementById("successModal");
    const span = document.getElementsByClassName("close")[0];
    const button = document.getElementsByClassName("modalbtn")[0];

    modal.style.display = "block";

    span.onclick = function () {
        modal.style.display = "none";
    }

    button.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
  }

  function showFailModal() {
    const modal = document.getElementById("failModal");
    const span = document.getElementsByClassName("close")[1];
    const button = document.getElementsByClassName("modalbtn")[1];

    modal.style.display = "block";

    span.onclick = function () {
        modal.style.display = "none";
    }

    button.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

  async function buy(){
    await placeOrder('buy')
  }
  async function sell(){
    await placeOrder('sell')
  }
  async function placeOrder(flag){
    let price
    let value
    let symbol = document.getElementById('symbol')
    switch (flag) {
      case 'buy':
        price = symbolInfo.buyPrice
        value = calculatedBuyValue || 0.001
       
        break;
    
      case 'sell':
        price = symbolInfo.sellPrice
        value = calculatedSellValue || 0.001
       
        break;

      default:
        break;
    }
    let body = {
      'symbol': symbolInfo.symbol,
      'side': flag,
      'price': price,
      'qty': value,
      'flag': flag
    }
    const token = localStorage.getItem("propAuthToken");

    let config = {
      method: 'post',
    
      headers: { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'authorization': `Bearer ${token}`
      },
      data: body
    };

    axios(`${appConfig.BACKEND_BASE_URL}/api/order/place_order`, config)
    .then((response) => {
      console.log(JSON.stringify(response.data));

      showSuccessModal()
    })
    .catch((error) => {
      console.log(error);
      showFailModal()
    });

    
    let account = await getAccountById()
  }
  return (
    <div className='col px-4 my-4'>
     

      <div className='row buysellalignleft'>
        <div className='col-6' style={{"margin-top": '24px'}}>
          <div className=' thick'>Spot Trading</div>
          <div className='row my-2'>
            <div className='col-4 thick'>Price Per Share</div>
            <div className='col-4' id=''>{symbolInfo.buyPricePerShare}</div>
          </div>
          <div className='row my-2'>
            <div className='col-4 thick'>Price</div>
            <div className='col-4' id='buyprice'>{calculatedBuyPrice}</div>
          </div>
          <div className='row my-2'>
            <div className='col-4 thick'>Value</div>
            
            <div className='col-4'><input ref={buyValueRef} onChange={handleBuyInputChange} type="number" id='buyvalue' style={{width: '100px'}} step="1" min="0" placeholder="Enter a number" /></div>
            {/* <div className='col-4' id='buyvalue'>{symbolInfo.buyValue}</div> */}
          </div>
          <div onClick = {buy} style={{"width": '235px'}} className='btn btn-success w-60'>
            Buy
          </div>
        </div>

        <div className='col-6'>
          <div className='thick'>{symbolInfo.symbol}</div>
          <div className=' thick' ><span>Available Balance </span><span><b>{account.last_equity}USD</b></span></div>
          <div className='row my-2'>
            <div className='col-4 thick'>Price Per Share</div>
            <div className='col-4' id='sellpricepershare'>{symbolInfo.sellPricePerShare}</div>
          </div>
          <div className='row my-2'>
            <div className='col-4 thick'>Price</div>
            <div className='col-4' id='sellprice'>{calculatedSellPrice}</div>
          </div>
          <div className='row my-2' >
            <div className='col-4 thick'>Value</div>
            
            <div className='col-4'><input ref={sellValueRef} onChange={handleSellInputChange} type="number" id='sellvalue' style={{width: '100px'}} step="1" min="0" placeholder="Enter a number" /></div>
            {/* <div className='col-4' id='sellvalue'>{symbolInfo.sellValue}</div> */}
          </div>
          <div onClick = {sell} style={{"width": '245px'}} className='btn row border-success text-success'>
            Sell
          </div>
        </div>
      </div>

      <div id="successModal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <image src="..\..\..\assets\correctmark.jpg" alt=""></image>
            <p>
                <bold>Successfully placed order</bold>
            </p>
            {/* <p>Keep Going!</p> */}
            <button class="modalbtn">Ok</button>
        </div>
      </div>

      <div id="failModal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <image src="./graphics/oops.jpg" alt=""></image>
            <p>
                <bold>Oops</bold>
            </p>
            <p>Please Try Again!</p>
            <button class="modalbtn">Ok</button>
        </div>
    </div>
    </div>
  );
};

export default BuySell;
