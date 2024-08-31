import React from 'react'
import { useState } from 'react'

export default function UserInput() {
    const [input, setInput] = useState('');
  return (
    <>
        <div className='flex flex-col justify-center items-center h-screen gap-5 bg-slate-600'>
            <h1 className='text-2xl font-mono text-white'>
                Enter your Input Here.
            </h1>
            <input className='w-52' onChange={(e)=>setInput(e.target.value)}></input>
            <h1 className='text-2xl font-mono text-white'>
                {input}
            </h1>
        </div>
    </>
  )
}
