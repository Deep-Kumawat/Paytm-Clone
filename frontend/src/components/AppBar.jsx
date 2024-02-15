import React from 'react'
import Heading from './Heading'
import Greeting from './Greeting'
import ProfilePhoto from './ProfilePhoto'

function AppBar(props) {
  return (
    <div className='flex flex-1 p-3 border-b-2 items-center'>
        <Heading text={props.text} center={false}></Heading>
        <div className='flex flex-row space-x-4 justify-center items-center absolute right-0 mr-4'>
          <Greeting username="User"></Greeting>
          <ProfilePhoto text="U" color="bg-gray-200"></ProfilePhoto>
        </div>
    </div>
  )
}

export default AppBar
