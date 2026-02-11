import {useEffect, useState} from "react";
import type {ToDoModel} from "../../Models/ToDoModel.ts";
import {loadToDos} from "../../service/api.service.ts";
import TodoComponent from "../ToDoComponent/TodoComponent.tsx";
import './ToDoComponents.css'

const ToDoComponents = () => {
    const [todos, setTodos] = useState<ToDoModel[]>([]);
    useEffect(() => {
       loadToDos().then( value => setTodos(value))
    }, [])
    return (
        <div className={'todos-card'}>
            {
                todos.map(todo => <TodoComponent key={todo.id} todo={todo}/>)
            }
        </div>
    );
};

export default ToDoComponents;