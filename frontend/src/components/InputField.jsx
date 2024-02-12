import React from 'react'

function InputField(props) {
  return (
    <div>
        <label htmlFor={props.name} className='mt-5 block mb-2 text-lg font-semibold'>{props.label}</label>
        <input type={props.type} name={props.name} placeholder={props.placeholder} className='block w-full rounded-md border-0 py-3 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'/>
    </div>
  )
}

export default InputField
