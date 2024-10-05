import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todoSlice'

const AddTodo = () => {

    const [todoText,setTodoText] = useState("")
    const dispatch = useDispatch();
    const addTodoHandler =(e)=>{
        e.preventDefault()
        if(!todoText.trim()) return;
        dispatch(addTodo(todoText))
        setTodoText("")
    }
    
  return (
    <>
       <form onSubmit={addTodoHandler} className="flex items-center space-x-2">
      <input
        type="text"
        placeholder="Add a new todo..."
        value={todoText}
        onChange={(e)=>setTodoText(e.target.value)}
        className="px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 flex-grow"
      />
      <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none">
        Add Todo
      </button>
    </form>
    </>
  )
}

export default AddTodo
