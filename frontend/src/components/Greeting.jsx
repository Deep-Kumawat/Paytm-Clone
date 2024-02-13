import React from 'react'

function Greeting(props) {
  return (
    <div className='text-xl'>
      Hello, {props.username}
    </div>
  )
}

export default Greeting
