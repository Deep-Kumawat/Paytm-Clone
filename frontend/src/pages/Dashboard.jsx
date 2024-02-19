import React, { useEffect, useState } from 'react'
import AppBar from '../components/AppBar'
import Balance from '../components/Balance'
import Users from '../components/Users'
import axios from 'axios'
function Dashboard() {
  const [balance, setBalance] = useState(0);
  const [firstName, setFirstName] = useState('User');
  useEffect(()=>{
    axios.get('http://localhost:3000/api/v1/account/balance',
    {
      headers:{
        authorization: localStorage.getItem('token'),
      },
    })
    .then((response)=>{
      console.log(response.data);
      console.log(response.data.balance);
      setBalance(Math.round(response.data.balance));
    })
    .catch((error)=>{
      console.log("balance request error:\n");
      console.log(error);
    })
  }, [balance]);

  useEffect(()=>{
    axios.get('http://localhost:3000/api/v1/user/user-info',
    {
      headers:{
        authorization: localStorage.getItem('token'),
      },
    })
    .then((response)=>{
      console.log("below is response.data.firstName of 2nd uE");
      console.log(response.data.firstName);
      setFirstName(response.data.firstName);
    })
    .catch((error)=>{
      console.log("balance request error:\n");
      console.log(error);
    })
  }, []);

  useEffect(()=>{
    axios.get('http://localhost:3000/api/v1/user/bulk',
    {
      headers:{
        authorization: localStorage.getItem('token'),
      },
    })
    .then((response)=>{
      console.log("below is response.data.firstName of 2nd uE");
      console.log(response.data.firstName);
      setFirstName(response.data.firstName);
    })
    .catch((error)=>{
      console.log("balance request error:\n");
      console.log(error);
    })
  }, [])
  
  return (
    <div>
      <AppBar text="Payments App" firstName={firstName}></AppBar>
      <div className='p-5'>
        <Balance balance={balance}></Balance>
        <Users names={names}></Users>
      </div>
    </div>
  )
}

export default Dashboard
