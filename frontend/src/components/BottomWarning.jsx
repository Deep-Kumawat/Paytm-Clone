import React from 'react'

function BottomWarning(props) {
  return (
    <div>
      <div className='text-center font-semibold'>{props.text}<a href={props.link} className='underline decoration-2'>{props.linkText}</a></div>
    </div>
  )
}

export default BottomWarning
