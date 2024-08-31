import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
        <div className='w-full bg-slate-700 text-white flex justify-center iteam-center'>
          <Link to="/">
            <h1 className=' text-center font-thin text-5xl p-2'>Home</h1>          
          </Link>
        </div>
    </>
  )
}

export default Header