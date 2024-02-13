import React from 'react'

function SubmitButton(props) {
  const className = `my-5 py-1.5 px-4 w-full py-4 text-xl text-white ${props.bgcolor} font-semibold rounded-md`.toString()
  return (
    <div>
      <input type="submit" value={props.text} onClick={props.onClick} className={className}/>
    </div>
  )
}

export default SubmitButton
