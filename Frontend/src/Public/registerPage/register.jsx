import React from 'react'
import TextBox from '../../components/textBox'
import Button from '../../components/button'
import Dropdown from '../../components/dropdown'

const RegisterPage = () => {

  const graduationYear = ['Graduation Year','2021','2022','2023','2024']
  const Branch = ['Branch','Electrical','Computer Science','ECE','Mechanical']

  return (
 <>
 <form>
    <div className=' flex justify-center m-10'>
        <div className=' flex-col h-[50%] w-[30%] flex items-center justify-center border border-black'> 
            <div className='text-4xl p-4 font-bold'>College Social Media</div>
            <div className='text-3xl my-5 font-bold'>Register</div>
            <TextBox placeholder={"Enter Username"}/>
            <TextBox placeholder={"Enter Email"}/>
            <TextBox placeholder={"Enter Pasword"}/>
            <Dropdown listofitems={graduationYear}/>
            <TextBox placeholder={"Enter SID"}/>
            <Dropdown listofitems={Branch}/>    
            <TextBox placeholder={"Enter College"}/>
            <Button name={"Register"}/>
            <div className='p-4 font-bold'>Already registered <span className='text-blue-500 cursor-pointer'>Login</span></div>
        </div>
    </div>
    </form>
</>
  )
}

export default RegisterPage