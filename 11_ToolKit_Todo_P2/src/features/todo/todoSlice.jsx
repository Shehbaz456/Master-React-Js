import {createSlice,nanoid} from "@reduxjs/toolkit"


export const TodoSlice = createSlice({
    name:"todo",
    initialState:{
        todos:[{id:1, text:"Hello World"}]
    },
    reducers:{
        addTodo:(state,action)=>{
           const todo = {
            id:nanoid(),
            text:action.payload
            }
            state.todos.push(todo);
        },
        removeTodo:(state,action)=>{
            state.todos = state.todos.filter((todo)=>(todo.id!==action.payload))
        },
        editTodo: (state, action) => {
            const { id, newText } = action.payload;
            const todoToEdit = state.todos.find((todo) => todo.id === id);
            if (todoToEdit) {
              todoToEdit.text = newText;
            }
        }
    }
})


export const {addTodo,removeTodo,editTodo} = TodoSlice.actions;

export default TodoSlice.reducer
