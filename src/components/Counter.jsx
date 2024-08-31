import React, { useState } from 'react'

function Counter() {
  let [value, setValue] = useState(0);
  function increase(){
      setValue(value+1);
    }
    function decrease(){
      if(value > 0){
        setValue(value-1)
      }
    }
  return (
    <>
      <div className='w-full h-screen flex flex-col text-white font-mono font-semibold bg-stone-600 justify-center items-center'>
        <h1 className='text-5xl'>Counter</h1>
        <h1>{value}</h1>
        <div className='flex gap-4'>
        <button className='p-4 border rounded-2xl' onClick={increase}>Increase</button>
        <button className='p-4 border rounded-2xl' onClick={decrease}>Decrease</button>
        </div>
      </div>
    </>
  )
}

export default Counter