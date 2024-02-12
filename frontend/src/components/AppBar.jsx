import React from 'react'
import Heading from './Heading'
import Greeting from './Greeting'

function AppBar(props) {
  return (
    <div className='p-5 border-b-2'>
        <Heading text={props.text} center={false}></Heading>
        <Greeting username="User"></Greeting>
    </div>
  )
}

export default AppBar
