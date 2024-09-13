import React, { createContext, useState, useEffect, useContext} from 'react';
import axios from 'axios'
import appConfig from '../../../../app-config';
import { AuthContext } from '../Auth/AuthProvider';
const DashBoardContext = createContext();

const DashBoardContextProvider = ({ children }) => {
  const [orders, setOrders] = useState([])
  const [positions, setPositions] = useState([])
  const { signIn, getAuthToken } = useContext(AuthContext);
  useEffect(()=>{
      async function getOrders(){
          try {
              let token = getAuthToken()
              if(!token){
                   console.log("token not found")
              }
              else{
                  let getConfig = {
                      method: 'get',
                      headers: { 
                          'Accept': 'application/json',
                          'Content-Type': 'application/json',
                          'authorization': `Bearer ${token}`
                      }
                  };

                var requests = [
                        axios(`${appConfig.BACKEND_BASE_URL}/api/order/get_orders`, getConfig),
                        axios(`${appConfig.BACKEND_BASE_URL}/api/order/get_positions`, getConfig)
                      ]

                      var results = await Promise.all(requests)
                      let orderResponse = results[0]
                      let data = orderResponse.data
                      if(data.data){
                        console.log('orders')
                        console.log(data.data)
                        setOrders(data.data)
                        //return data
                      }

                      let positionResponse = results[1]
                      let pos_data = positionResponse.data
                      if(pos_data.data){
                        console.log('positions')
                        console.log(pos_data.data)
                        setPositions(pos_data.data)
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
    <DashBoardContext.Provider value={{ orders, setOrders, positions, setPositions }}>
      {children}
    </DashBoardContext.Provider>
  );
};

export { DashBoardContext, DashBoardContextProvider };
