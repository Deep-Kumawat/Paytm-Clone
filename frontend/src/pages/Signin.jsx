import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Heading from '../components/Heading'
import Subheading from '../components/Subheading'
import InputField from '../components/InputField'
import SubmitButton from '../components/SubmitButton'
import BottomWarning from '../components/BottomWarning'
import Error from './Error'
import axios from 'axios'


function signInOnClick(username, password, setErrorFlag, setStatus){
  axios({
    method: "post",
    url: `http://localhost:3000/api/v1/user/signin`,
    data: {
      username: username,
      password: password
    }
  })
  .then((response)=>{
    console.log("inside then of signin");
    // console.log(response.data);
    localStorage.setItem('token', response.data.token);
    window.open('http://localhost:5173/dashboard');
  })
  .catch((error)=>{
    setErrorFlag(true);
    setStatus(error.response.status);
    console.log("inside error of signin error");
  });
  
}

function Signin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorFlag, setErrorFlag] = useState(false);
  const [status, setStatus] = useState(200);
  return (
    <div className='p-5'>
      <Error status={status} flag={errorFlag} />
      <Heading text="Sign In" center={true} />
      <Subheading text="Enter your credentials to access your account" />
      <InputField name="email" type="text" label="Email" placeholder="johndoe@example.com" onChange={(e) => setUsername(e.target.value)} />
      <InputField name="password" type="password" label="Password" onChange={(e)=>setPassword(e.target.value)} />
      <SubmitButton text="Sign In" onClick={()=>signInOnClick(username, password, setErrorFlag, setStatus)} bgcolor="bg-black" />
      <BottomWarning text="Don't have an account? " linkText="Sign Up" link="http://localhost:5173/signup" />
    </div>
  )
}

export default Signin
