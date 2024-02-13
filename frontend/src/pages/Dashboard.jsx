import React from 'react'
import AppBar from '../components/AppBar'
import Balance from '../components/Balance'
import Users from '../components/Users'
function Dashboard() {
  return (
    <div>
      <AppBar text="Payments App"></AppBar>
      <div className='p-5'>
        <Balance balance="5000"></Balance>
        <Users></Users>
      </div>
    </div>
  )
}

export default Dashboard
