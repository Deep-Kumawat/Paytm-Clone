import React from 'react'

function Error({ status, flag }) {
    if(flag){
        return (
            <div className='text-center'>
            <pre>Error something went wrong Error code: {status}
        </pre>
    </div>
  )
}
}

export default Error