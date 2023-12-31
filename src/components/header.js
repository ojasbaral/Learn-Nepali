import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'

const Header = () => {
    const [collapsed, setCollapsed] = useState(true)
  return (
    <div className="nav w-screen bg-[#DC143C] text-white fixed top-0 right-0 shadow-2xl">
        <div className="bar max-w-[1560px] m-auto flex justify-between p-4 items-center">
            <div className="flex justify-between items-center w-full pl-4">
            <div className="font-bold text-xl">Learn Nepali</div>
            <AiOutlineMenu size={23} className="menu visible sm:invisible cursor-pointer" onClick={() => collapsed?setCollapsed(false):setCollapsed(true)}></AiOutlineMenu>
            </div>
            <ul className={collapsed?'hidden sm:flex list justify-between items-center gap-8':'flex list sm:justify-between sm:items-center sm:gap-8 gap-2 pt-2 text-center text-base w-full sm:w-auto'}>
                <li className="hover:bg-[#e02d51] w-full p-2 cursor-pointer rounded"><a className="">Lessons</a></li>
                <li className="hover:bg-[#e02d51] w-full p-2 cursor-pointer rounded"><a>Login</a></li>
                <li className="hover:bg-[#e02d51] w-full p-2 cursor-pointer rounded"><a>Register</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Header