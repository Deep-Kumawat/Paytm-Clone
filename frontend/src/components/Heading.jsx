import React from 'react'

function Heading(props) {
    const className = ['font-sans py-4 text-4xl font-bold', props.center ? 'text-center':""].join(' ');
  return (
    <div>
      <h1 className={className}>{props.text}</h1>
    </div>
  )
}

export default Heading
