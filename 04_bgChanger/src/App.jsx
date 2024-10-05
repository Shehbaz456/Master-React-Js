
import { useState } from 'react'
// import './App.css'

function App() {
  let [color,setColor] = useState("olive");


  return (
   <>
    {/* <h1 style={{paddingTop:'220px', fontSize:'26px', fontWeight:'bold' }} >Change Background Color</h1>
    <br /><br /> */}
    <div className='w-full h-screen duration-200' style={{backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2" >
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={()=>setColor('red')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:'red'}} >Red</button>

          <button onClick={()=>setColor('green')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:'green'}} >Green</button>

          <button onClick={()=>setColor('blue')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:'blue'}} >Blue</button>

          <button onClick={()=>setColor('olive')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:'olive'}} >olive</button>

          <button onClick={()=>setColor('#232323')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:'black'}} >black</button>

          <button onClick={()=>setColor('white')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg hover:shadow-2xl' style={{backgroundColor:'white',color:'black',border:'1px solid black'}} >White</button>

        </div>
      </div>
    </div>


  
  


   </>
  )
}

export default App
