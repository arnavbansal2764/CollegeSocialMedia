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
        <div className=' flex-wrap h-[50%] w-[60%] flex items-center align-baseline justify-center border border-black rounded-lg shadow-xl'> 
            <div className='text-4xl p-4 font-bold w-full text-center'>College Social Media</div>
            <div className='text-3xl my-5 font-bold w-full text-center'>Register</div>
            <TextBox placeholder={"Enter Username"}/>
            <TextBox placeholder={"Enter Email"}/>
            <TextBox placeholder={"Enter Pasword"}/>
            <Dropdown listofitems={graduationYear}/>
            <TextBox placeholder={"Enter SID"}/>
            <Dropdown listofitems={Branch}/>    
            <TextBox placeholder={"Enter College"}/>
            <Button name={"Register"}/>
            <div className='font-bold w-full text-center'>Already registered?</div>
            <div className='text-blue-500 cursor-pointer w-full p-4 font-bold text-center'>Login</div>
        </div>
    </div>
    </form>
</>
  )
}

export default RegisterPage