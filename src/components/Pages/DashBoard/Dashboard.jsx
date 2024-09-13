// components/Pages/Dashboard.js

import React, {useState, useContext, useEffect} from 'react';
import Sidebar from '../../Layout/sidebar';
import CurrentResults from './CurrentResults';
import Status from './Status';
import DailySummary from './DailySummary';
import Objectives from './Objectives';
import { AuthContext } from '../Auth/AuthProvider';
import axios from 'axios'
import appConfig from '../../../../app-config';
import { DashBoardContextProvider } from './DashBoardContext';
const Dashboard = () => {

  const [orders, setOrders] = useState([])
  const { signIn, getAuthToken } = useContext(AuthContext);
  useEffect(()=>{
      async function getOrders(){
          try {
              let token = getAuthToken()
              if(!token){
                   console.log("token not found")
              }
              else{
                  let config = {
                      method: 'get',
                      // maxBodyLength: Infinity,
                      // url: 'http://localhost:5000/api/auth/login',
                      headers: { 
                          'Accept': 'application/json',
                          'Content-Type': 'application/json',
                          'authorization': `Bearer ${token}`
                      }
                      };
                  
                      var response = await axios(`${appConfig.BACKEND_BASE_URL}/api/order/get_orders`, config)
                      let data = response.data
                      if(data.data){
                      setOrders(data.data)
                      //return data
                      }
              }
            } catch (error) {
              console.log(error)
              //return null
            }
          }

      getOrders()
  }, [])

  return (
    <DashBoardContextProvider>
      <div className="dashboard row">
        <div className='col-2'>
          <Sidebar></Sidebar>
        </div>
        <div className='col col-10'>
          <div className='row'>
            <div className='col-8'><CurrentResults /></div>
            <div className='col-4'><Status /></div>
          </div>
          <div className=''>
            <DailySummary/>
            <Objectives/>
          </div>
        </div>
      </div>
    </DashBoardContextProvider>
  );
};

export default Dashboard;
