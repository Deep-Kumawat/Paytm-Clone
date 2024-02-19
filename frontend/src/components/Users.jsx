import React from 'react'
import InputField from './InputField'
import UsersList from './UsersList'
function Users({ names }) {
  return (
    <>
        <div className='font-semibold text-lg my-5'>Users</div>
        <InputField placeholder="Search users..."></InputField>
        <UsersList text="Placeholder Name"></UsersList>
    </>
  )
}

export default Users