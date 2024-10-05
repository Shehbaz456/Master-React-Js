import { useEffect, useState,useCallback,useRef } from 'react';
// import './App.css'
// import { useCallback } from 'react';

function App() {
  const [length,setLength] = useState(8);
  const [numberAllowed,setNumberAllowed] = useState(false);
  const [charAllowed , setCharAllowed] = useState(false);

  const [password,setPassword] =useState("");

  //useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllowed) str += "0123456789";
    if(charAllowed) str += "~!#$%^&*(){}[]~`@";

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random()*str.length + 1 );
      console.log(char);
      
      pass += str.charAt(char);
      console.log(pass);
    }
    setPassword(pass)

  },[length,numberAllowed,charAllowed,password])


  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,101);
    window.navigator.clipboard.writeText(password)
  },[password]);

  useEffect(()=>{
    passwordGenerator();
  },[length,numberAllowed,charAllowed,setPassword]);


  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700' >
    <h1 className=" text-white text-center">Password Generator</h1>
    
    <div className=' flex shadow rounded-lg overflow-hidden  mb-4 my-3 '>
    <input type="text" 
    value={password}
    className='outline-none w-full py-1 px-3'
    placeholder='Password'
    readOnly
    ref={passwordRef}
    />
    <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 shrink-0' >copy</button>
    </div>

    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>

    </div>
    
    </div>
    </>
  )
}

export default App;
