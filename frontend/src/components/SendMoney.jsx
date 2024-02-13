import React from 'react'
import Heading from '../components/Heading'
import ProfilePhoto from '../components/ProfilePhoto'
import InputField from '../components/InputField'
import SubmitButton from '../components/SubmitButton'
function SendMoney() {
  return (
    <div className='min-w-xl max-w-4xl rounded-lg px-10 py-5 shadow-lg bg-white'>
        <div className='mb-10'>
            <Heading text="Send Money" center={true}></Heading>
        </div>
        <div className='flex flex-row space-x-4 items-center'>
            <ProfilePhoto text="A" color="bg-green-500"></ProfilePhoto>
            <div className='text-xl font-semibold'>Annabeth</div>
        </div>
        <div>Amount (in Rs)</div>
        <InputField placeholder="Enter amount"></InputField>
        <SubmitButton text="Initiate Transfer" bgcolor="bg-green-500" ></SubmitButton>
    </div>
    
  )
}

export default SendMoney