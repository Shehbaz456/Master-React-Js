import { useState } from 'react'
import './App.css'
import Card from './components/Card'


function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <h3 className="bg-blue-500 text-white p-4 color-red ">Hello, Tailwind CSS!</h3>
    <Card username ="Ultra Mora" textBtn = "Visit Me" />

   </>
  )
}

export default App
