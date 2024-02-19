import React from 'react'
import Heading from './Heading'
import Greeting from './Greeting'
import ProfilePhoto from './ProfilePhoto'

function AppBar({ text, firstName }) {
  console.log("from appbar: " + firstName);
  return (
    <div className='flex flex-1 p-3 border-b-2 items-center'>
        <Heading text={text} center={false}></Heading>
        <div className='flex flex-row space-x-4 justify-center items-center absolute right-0 mr-4'>
          <Greeting firstName={firstName}></Greeting>
          <ProfilePhoto text={firstName[0].toUpperCase()} color="bg-gray-200"></ProfilePhoto>
        </div>
    </div>
  )
}

export default AppBar
