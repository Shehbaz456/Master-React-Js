import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../Features/todo/todoSlice';

const AddTodo = () => {
    const [input,setInput] = useState('');
    const dispatch = useDispatch();

    const addTodoHandler = (e) =>{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }


  return (
    <>
     <form onSubmit={addTodoHandler} className='space-x-3 mt-12' >

     <input type="text" className="bg-gray-800 rounded border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="Enter a Todo" value={input} 
     onChange={(e)=>setInput(e.target.value)}
      />

     <button type='submit' >
        Add Todo
     </button> 


     </form> 
    </>
  )
}

export default AddTodo
