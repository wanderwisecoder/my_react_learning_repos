import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("#000001")

  return (
    
      <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
<div className = "fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
<div className='flex flex-wrap justify-center gap-3 shadow-lg  px-3 py-2 rounded-3xl bg-white'>
  <button onClick={() => setColor("red")} className='outline-none px-4 rounded-full text-white shadow-lg' style={{backgroundColor: "red"}}>Red</button>
  <button onClick={() => setColor("yellow")} className='outline-none px-4 rounded-full text-white shadow-lg' style={{backgroundColor: "yellow"}}>Yellow</button>
  <button onClick={() => setColor("green")} className='outline-none px-4 rounded-full text-white shadow-lg' style={{backgroundColor: "green"}}>Green</button>
  <button onClick={() => setColor("blue")} className='outline-none px-4 rounded-full text-white shadow-lg' style={{backgroundColor: "blue"}}>Blue</button>
  <button onClick={() => setColor("black")} className='outline-none px-4 rounded-full text-white shadow-lg' style={{backgroundColor: "Black"}}>Black</button>
  <button onClick={() => setColor("orange")} className='outline-none px-4 rounded-full text-white shadow-lg' style={{backgroundColor: "orange"}}>Orange</button>
  <button onClick={() => setColor("purple")} className='outline-none px-4 rounded-full text-white shadow-lg' style={{backgroundColor: "purple"}}>Purple</button>
  <button onClick={() => setColor("grey")} className='outline-none px-4 rounded-full text-white shadow-lg' style={{backgroundColor: "grey"}}>Grey</button>
  <button onClick={() => setColor("gold")} className='outline-none px-4 rounded-full text-white shadow-lg' style={{backgroundColor: "gold"}}>Gold</button>
</div>
</div>
      </div>
    
  )
}

export default App
 