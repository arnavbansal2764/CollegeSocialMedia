import React from 'react'
import TextBox from '../../components/textBox'
import Button from '../../components/button'

const LoginPage = () => {
  return (
 <>
 <form>
    <div className=' flex justify-center m-10 '>
        <div className=' flex-wrap h-[50%] w-[60%] flex items-center justify-center border border-black rounded-lg shadow-xl'> 
            <div className='text-4xl p-2 w-full text-center'>College Social Media</div>
            <div className='text-3xl my-5 font-bold w-full text-center'>Login</div>
            <div className='w-full flex flex-nowrap justify-center align-middle items-center'><TextBox placeholder={"Enter Username"}/></div>
            <div className='w-full flex flex-nowrap justify-center align-middle  items-center'><TextBox placeholder={"Enter Pasword"}/></div>
            <div className='w-full flex flex-nowrap justify-center align-middle  items-center my-2 '><div className='px-3 py-2 cursor-pointer bg-blue-700 rounded-md text-white'>Login</div></div>
            <div className='w-full text-center'>New User! <span className='text-blue-600 cursor-pointer'>Sign Up</span></div>
        </div>
    </div>
    </form>
</>
  )
}

export default LoginPage