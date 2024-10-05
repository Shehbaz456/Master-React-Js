import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../Features/todo/todoSlice'

const Todos = () => {

    const todos = useSelector((state)=>state.todos)
    const dispatch = useDispatch();
  return (
    <>
    <br />
      <div className='py-4 text-lg font-bold'>Todos List</div>
     
      <ul className='space-y-2 list-none' >
      {
        todos.map((todo)=>(
            <li key={todo.id} className="flex justify-between px-3 py-1 bg-gray-600 rounded" >
            <div className="flex justify-center items-center" > {todo.text} </div> 
            <button className="px-3 py-1 bg-red-500 rounded hover:bg-red-600 focus:outline-none"  onClick={()=>dispatch(removeTodo(todo.id))}>X</button>
            </li>
        ))
      }
      </ul>
    </>
  )
}

export default Todos

// 2:06:00