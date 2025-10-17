import './App.css'
import Counter from './components/Counter'
import { useDispatch } from 'react-redux'
function App() {
  const dispatch = useDispatch();
  return (
    <>
      <h1>Counter app</h1>
      <br /><br /><br />
      <Counter/>
      
      <div className="card flex justify-center align-middle gap-5">
        <button onClick={()=>dispatch({type:"UP"})} >
        ➕ Up
        </button>
        <button onClick={()=>dispatch({type:"DOWN"})} >
        ➖ Down
        </button>
       
      </div>
     
    </>
  )
}

export default App
