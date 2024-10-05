import React from 'react'
import { removeTodo } from '../features/todoSlice'
import { useSelector,useDispatch } from 'react-redux'


const Todos = () => {
   const todos = useSelector(state=>state.todos)
   const dispatch = useDispatch()
  return (
    <>
        <br />
      <h3><b>Todos List</b></h3>
      <br />
      <ul className='space-y-2 list-none'>
        {
            todos.map((todo)=>(
                <li className='flex justify-between px-3 py-1 bg-gray-600 rounded' key={todo.id} >
                    <div className="flex justify-center items-center">{todo.text}</div>
                    <button onClick={()=>dispatch(removeTodo(todo.id))} className="px-3 py-1 bg-red-500 rounded hover:bg-red-600 focus:outline-none" > X </button>
                </li>
            ))
        }
      </ul>
    </>
  )
}

export default Todos
