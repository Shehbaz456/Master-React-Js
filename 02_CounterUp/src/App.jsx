import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

    const [count, setCount] = useState(0);
    const [email,setEmail] = useState("");
    const [liked,setLiked] = useState(true);
    const [car,setCar] = useState({
      brand:"Ferrari",
      color:"Red",
      model:"Roma",
      year:2023
    })

    const handelbtn=()=>{
      setCar((prev)=>{
        return {...prev,color : "blue"}
      }) 
    }
   
    function CounterUp() {
        setCount(count+1)
      }
    
    function CounterDown() {
      setCount(count-1)
    }

    function handelchange(e) {
      setEmail(e.target.value);
    }
  


  return (
    <>
      {/* <div className="card">
      <h3>{count}</h3>
        <button onClick={CounterUp}>
          Count increases 
        </button> <br /><br />
        <button onClick={CounterDown}>
          count Decreases 
        </button>
      </div> */}
      

      
  {/* <section className="bg-gray-50">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input value={email} onChange={handelchange} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                  </div>
                  <div>
                      <label  htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                  </div>
                  <div className="flex items-center justify-between">
                      <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" checked={liked} onClick={(e)=>{setLiked(e.target.checked)}} className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                          </div>
                      </div>
                      <a href="#" className="text-sm text-white font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                  </div>
                  <button type="submit" className="w-full text-white bg-primary-600  hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 bg-blue-600">Sign in</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                  </p>
                  <p className='text-white' >your email is {email} </p>
              </form>
          </div>
      </div>
  </div>
</section> */}

    <div className='flex align-center justify-center h-screen flex-col font-semibold text-xl w-[50%] m-auto ' >
      <h1 className='text-center'>My {car.brand} </h1>
      <h3 className='text-center' > It is a {car.color} {car.model} from {car.year} </h3>
<button onClick={handelbtn}  className=' w-[20%] m-5 p-2 bg-gray-700 rounded-lg text-white align-center' >Blue</button>
    </div>
    </>
  )
}

export default App
