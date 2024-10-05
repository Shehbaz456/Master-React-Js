import { useState } from 'react'
import './App.css'

function App() {
  const [ submitData,setsubmitData] = useState(null)
  const [formData,setformData] = useState({
    username:"",
    email:"",
    password:"",
    confirmPassword:"",
  });

  const handelInput = (e) =>{
    const name = e.target.name;
    const value = e.target.value;

    setformData((prev)=>{
      return {...prev , [name]:value}
    })

  }
  
  const eventHandler=(e)=>{
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("password not matched");
      return;
    }

    setsubmitData(
      {
        username:formData.username,
        email:formData.email
      }
    )
  }

  return (
    <>
<div className="bg-gray-300 h- h-screen w-full pt-20 pb-20 ">
<div className="bg-white rounded-lg w-[80%] m-auto text-center p-5  ">
  <div className="flex p-2 gap-1">
    <div className="">
      <span className="bg-blue-500 inline-block center w-3 h-3 rounded-full"></span>
    </div>
    <div className="circle">
      <span className="bg-purple-500 inline-block center w-3 h-3 rounded-full"></span>
    </div>
    <div className="circle">
      <span className="bg-pink-500 box inline-block center w-3 h-3 rounded-full"></span>
    </div>
  </div>
  <div className="card__content">
  </div>

    <div className='flex justify-center align-middle'>    
    <div className='p-4 m-4 bg--300 bg-gray-400 rounded-2xl w-1/2 '>
<input value={formData.name} onChange={handelInput} name='username' className=' p-3 rounded-xl  w-full'  type="text" placeholder='enter name' /><br /><br />
<input value={formData.email} onChange={handelInput} name='email'  className='p-3  rounded-xl  w-full ' type="email" placeholder='emailId name' /><br /><br />

      <input value={formData.password} onChange={handelInput} name='password' className='p-3  rounded-xl  w-full' type="password" placeholder='enter password' /><br /><br />
<input value={formData.confirmPassword} onChange={handelInput} name='confirmPassword'  className='p-3  rounded-xl  w-full ' type="password" placeholder='confirm password' /><br /><br />
      <button onClick={eventHandler} className='p-3  rounded-xl  w-full bg-blue-400 text-white' type="submit">Submit</button>
    </div>
    </div>

      { submitData && ( 
        <h1>Thanks to submit form UserName : { submitData.username}, {submitData.email}</h1>
      )
      }
      
    </div>
    </div>

    </>
  )
}

export default App
