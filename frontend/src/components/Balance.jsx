import React from 'react'

function Balance(props) {
  return (
    <div className='flex flex-row items-center space-x-5'>
        <div className='font-semibold text-lg'>Your balance</div>
        <div className='font-medium'>${props.balance}</div>

    </div>
  )
}

export default Balance