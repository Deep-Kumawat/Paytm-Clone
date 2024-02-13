import React from 'react'
import ProfilePhoto from './ProfilePhoto'
function UsersList(props) {
  return (
        <div className='flex flex-row items-center space-x-2 my-5'>
            <ProfilePhoto text="P" color="bg-gray-200"></ProfilePhoto>
            <div>{props.text}</div>
        </div>
    )
}

export default UsersList