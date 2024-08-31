import React, { useState } from 'react'

function Theme() {
  let [darkMode, setDarkMode] = useState(false);
  function on(){
    if(darkMode === false){
      setDarkMode(true);
    }
  }
  function off(){
    if(darkMode === true){
      setDarkMode(false);
    }
  }
  return (
    <>
      <div className={`flex flex-col font-mono ${darkMode? 'bg-slate-600 text-white' : 'bg-white text-black'} h-screen justify-center items-center gap-4`}>
        <h1 className='text-3xl'>Dark Mode ?</h1>
        <button className={`${darkMode ? 'bg-white text-black' : 'bg-black text-white'} rounded-3xl px-8 py-3 shadow-2xl`} onClick={on}>On</button>
        <button className={`${darkMode ? 'bg-white text-black' : 'bg-black text-white'} rounded-3xl px-8 py-3 shadow-2xl`} onClick={off}>Off</button>
      </div>
    </>
  )
}

export default Theme