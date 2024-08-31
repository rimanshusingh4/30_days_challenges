import React from 'react'

function Cards(props) {
  return (
    <>
        <div className='flex w-52 h-40 bg-slate-600 border-slate-700 border-4 items-center text-center justify-center rounded-3xl cursor-pointer shadow-xl'>
            <h1 className={`font-bold font-mono text-4xl ${props.color}`}>{props.name}</h1>
        </div>
    </>
  )
}

export default Cards