import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  const[color,setcolor] = useState("olive")
  return (
    <div className='w-full h-screen duration-200' style = {{backgroundColor:color}}>  
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
       <div className='flex flex-wrap rounded-3xl px-3 py-2 justify-center gap-3 bg-white'>
        <button onClick={()=>setcolor("red")} className='outline-none px-4 py-1 rounded-full shadow-lg text-white'style={{backgroundColor:"red"}}>Red</button>
        <button onClick={()=>setcolor("green")} className='outline-none px-4 py-1 rounded-full shadow-lg text-white'style={{backgroundColor:"green"}}>Green</button>
        <button onClick={()=>setcolor("blue")} className='outline-none px-4 py-1 rounded-full shadow-lg text-white'style={{backgroundColor:"blue"}}>Blue</button>
        <button onClick={()=>setcolor("olive")} className='outline-none px-4 py-1 rounded-full shadow-lg text-white'style={{backgroundColor:"olive"}}>olive</button>
        <button onClick={()=>setcolor("gray")} className='outline-none px-4 py-1 rounded-full shadow-lg text-white'style={{backgroundColor:"gray"}}>gray</button>
        <button onClick={()=>setcolor("yellow")} className='outline-none px-4 py-1 rounded-full shadow-lg text-black'style={{backgroundColor:"yellow"}}>yellow</button>
        <button onClick={()=>setcolor("pink")} className='outline-none px-4 py-1 rounded-full shadow-lg text-black'style={{backgroundColor:"pink"}}>pink</button>
        <button onClick={()=>setcolor("purple")} className='outline-none px-4 py-1 rounded-full shadow-lg text-white'style={{backgroundColor:"purple"}}>purple</button>
        <button onClick={()=>setcolor("lavender")} className='outline-none px-4 py-1 rounded-full shadow-lg text-black'style={{backgroundColor:"lavender"}}>lavender</button>
        <button onClick={()=>setcolor("white")} className='outline-none px-4 py-1 rounded-full shadow-2xl text-black'style={{backgroundColor:"white"}}>white</button>
        <button onClick={()=>setcolor("black")} className='outline-none px-4 py-1 rounded-full shadow-lg text-white'style={{backgroundColor:"black"}}>black</button>
       </div>
    </div>
    </div>
  )
}

export default App
