import React,{ useState,useRef } from 'react'
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css'

function App() {
  
  //Username Generator
  const [length,setLength] = useState(15);
  
  //Password Generator
  const [password,setPassword] = useState("");
  const [inclideChar, setInclideChar] = useState(false);
  const [includeNumber,setincludeNumber] = useState(false);
  
  // //useRef hook
  const passwordRef = useRef(null);
  
  //Generate password 
  const GeneratePassword = () => {
    let numbers = "0123456789";
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let symbols = "!@#$%^&*()_+{}|:<>?-=[];',./";
    
    if (inclideChar) characters += symbols;
    if(includeNumber) characters += numbers
    
    let newpassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random()* characters.length+1);
      newpassword += characters.charAt(randomIndex)
    } 
    setPassword(newpassword);
    toast.success("Password Generated !");
  }

    // Copy password to clipboard
    const copyToClipboard = () => {
      passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,100);
      navigator.clipboard.writeText(password);
      toast.success("Copied form clipboard !");
    };

  return (
   <>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-md shadow-md text-center w-2/4 ">
        <h1 className="text-white text-xl mb-4">Password Generator</h1>

        <div className="bg-gray-700 rounded-md p-4 flex justify-between items-center mb-4">
          <input
            type="text"
            value={password}
            ref={passwordRef}
            readOnly
            className="bg-transparent text-white w-full focus:outline-none"
          />
          <button className="bg-blue-600 text-white px-4 py-2 ml-4 rounded-md"
          onClick={copyToClipboard} > Copy </button>
        </div>

        <div className="flex items-center justify-between mb-4">
          <label className="text-white">Length: {length}</label>
          <input
            type="range"
            min="4"
            max="100"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-1/2"
          />
        </div>

        <div className="flex items-center justify-between mb-4">
          <label className="text-white">Numbers</label>
          <input
            type="checkbox"
            checked={includeNumber}
            onChange={(e) => setincludeNumber(e.target.value)}
            className="form-checkbox text-blue-600"
          />
        </div>

        <div className="flex items-center justify-between mb-4">
          <label className="text-white">Characters</label>
          <input
            type="checkbox"
            checked={inclideChar}
            onChange={(e)=> setInclideChar(e.target.value)}
            className="form-checkbox text-blue-600"
          />
        </div>

        <button
          onClick={GeneratePassword}
          className="bg-blue-600 text-white px-4 py-2 rounded-md w-full"
        >
          Generate Password
        </button>
      </div>
    </div>

    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
transition: Bounce
/>
   </>
  )
}

export default App
