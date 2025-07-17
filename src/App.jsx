import { useState } from 'react'
import './App.css'
import './components/Card'

function App() {
 const[color, setColor] = useState('bg-blue-500');


  return (
    <>
      
      <div className={`min-h-screen w-full p-0 m-0  ${color} duration-200 flex items-center justify-center`} >
       <h1 className="text-4xl font-extrabold text-white text-shadow-lg drop-shadow-lg">
          Color Changer App
        </h1>
    <div className = 'fixed flex flex-wrap justify-center bottom-12   items-center flex-row inset-x-0'>
     
      <div className='flex items-center justify-center w-60  gap-1.5 h-10 bg-[#F1F1F1] border-2 border-solid rounded-3xl' >
         <button className='border-1 bg-red-600 text-white w-15 border-solid rounded-2xl cursor-pointer' onClick={()=> setColor('bg-red-500')}>Red</button>
         <button className='border-1 bg-green-500 text-white w-15 border-solid  rounded-2xl cursor-pointer' onClick = {()=>setColor('bg-green-500')} >Green</button>
         <button className='border-1 bg-blue-500 text-white w-15 border-solid  rounded-2xl cursor-pointer'onClick={()=>setColor('bg-blue-500')} >Blue</button>
      </div>
     
    </div>
    </div>
    </>
  )
}

export default App
