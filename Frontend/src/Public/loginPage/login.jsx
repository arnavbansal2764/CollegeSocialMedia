import React from 'react'
import TextBox from '../../components/textBox'
import Button from '../../components/button'

const LoginPage = () => {
  return (
 <>
 <form>
    <div className=' flex justify-center m-10'>
        <div className=' flex-col h-[50%] w-[30%] flex items-center justify-center border border-black'> 
            <div className='text-4xl p-2'>College Social Media</div>
            <div className='text-3xl my-5 font-bold'>Login</div>
            <TextBox placeholder={"Enter Username"}/>
            <TextBox placeholder={"Enter Pasword"}/>
            <Button/>
            <div>New User! <span className='text-blue-600 cursor-pointer'>Sign Up</span></div>
        </div>
    </div>
    </form>
</>
  )
}

export default LoginPage