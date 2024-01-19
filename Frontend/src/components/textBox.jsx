import React, { useState } from 'react'

const TextBox = ({placeholder}) => {

  const[message , setMessage] = useState('') 

  const valueChange = (e) => {
    setMessage(e.target.value)
  }

  return (
    <div>
      <input className='bg-gray-100 p-2.5 border border-gray-300 m-1 w-[20rem] rounded' placeholder={placeholder} value={message} onChange={valueChange}></input>
    </div>
  )
}

export default TextBox