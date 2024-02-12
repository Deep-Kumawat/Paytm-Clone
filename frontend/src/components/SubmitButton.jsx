import React from 'react'

function SubmitButton(props) {
  return (
    <div>
      <input type="submit" value={props.text} onClick={props.onClick} className='my-5 py-1.5 px-4 w-full py-4 text-xl text-white bg-black font-semibold rounded-md'/>
    </div>
  )
}

export default SubmitButton
