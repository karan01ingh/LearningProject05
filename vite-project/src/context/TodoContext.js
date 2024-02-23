import {useContext,createContext} from "react";
export const TodoContext=createContext({
    todos:[{
        id:1,todomessage:"teri maa ka bhosda"
    },
    ],
    addTodo:(todomessage)=>{},
    DeleteTodo:(id)=>{},
    EditTodo:(todomessage,id)=>{}

})
export const TodoProvider=TodoContext.Provider
export const  useTodo=()=>{
    return useContext(TodoContext)
}