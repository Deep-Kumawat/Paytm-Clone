import React from 'react'
import Heading from '../components/Heading'
import Subheading from '../components/Subheading'
import InputField from '../components/InputField'
import SubmitButton from '../components/SubmitButton'
import BottomWarning from '../components/BottomWarning'

function goToDashboard(){

}

function Signin() {
  return (
    <div className='p-5'>
      <Heading text="Sign In" center={true}></Heading>
      <Subheading text="Enter your credentials to access your account"></Subheading>
      <InputField name="email" type="text" label="Email" placeholder="johndoe@example.com"></InputField>
      <InputField name="password" type="password" label="Password" ></InputField>
      <SubmitButton text="Sign In" onClick={goToDashboard}></SubmitButton>
      <BottomWarning text="Don't have an account? " linkText="Sign Up" link="#"></BottomWarning>
    </div>
  )
}

export default Signin
