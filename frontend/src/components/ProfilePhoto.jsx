import React from 'react'

function ProfilePhoto(props) {
  let containerClassName = `h-12 w-12 flex flex-row justify-center ${props.color} rounded-full items-center`
  containerClassName.toString();
  return (
    <div className={containerClassName}>
      <div className='text-center text-xl border-7'>
        <p>{props.text}</p>
      </div>
    </div>
  )
}

export default ProfilePhoto
