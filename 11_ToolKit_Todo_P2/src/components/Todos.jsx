import React from 'react'
import { removeTodo } from '../features/todo/todoSlice'
import { useSelector,useDispatch } from 'react-redux'

const Todos = () => {
  const todos = useSelector((state)=> state.todos )
  const dispatch = useDispatch();

  return (
    <>
      <div>Todo List </div>
      <ul className='space-y-2 list-none'>
        {
          todos.map((todo)=>(
            <li key={todo.id} className="flex justify-between px-3 py-1 bg-gray-600 rounded">
              <div className="flex justify-center items-center">{todo.text}</div>

              <button 
            // onClick={handleEdit}
            className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none mr-2"
          > Edit </button>

              <button className="px-3 py-1 bg-red-500 rounded hover:bg-red-600 focus:outline-none"  onClick={()=>dispatch(removeTodo(todo.id))} >Delete</button>
            </li>
          )) 
        }
      </ul>
    </>
  )
}

export default Todos
