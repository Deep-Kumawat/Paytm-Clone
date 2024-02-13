import React from 'react'

function Heading(props) {
    const className = ['font-sans py-4 text-3xl font-bold', props.center ? 'text-center':""].join(' ');
  return (
    <div>
      <h2 className={className}>{props.text}</h2>
    </div>
  )
}

export default Heading
