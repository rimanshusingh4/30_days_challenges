import React from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'
import Cards from './components/Cards'

function Layout() {
  return (
    <>
        <Header/>
        <Outlet/>
        <div className='w-full flex h-screen bg-gray-500 flex-wrap no-scrollbar'>
          <div className='m-20'>
            <Link to="/counter">
              <Cards name= "Counter" color="text-red-900"/>
            </Link>
            
          </div>
          <div className='m-20'>
            <Link to="/theme">
              <Cards name= "Theme" color= "text-green-900"/>
            </Link>
          </div>
          <Link to="/user_input">
            <div className='m-20'>
              <Cards name= "Display User Input" color="text-emerald-600"/>
            </div>
          </Link>
          
          <div className='m-20'>
            <Cards/>
          </div>
          <div className='m-20'>
            <Cards/>
          </div>
          <div className='m-20'>
            <Cards/>
          </div>
        </div>
    </>
  )
}

export default Layout