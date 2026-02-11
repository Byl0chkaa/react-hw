import {useEffect, useState} from "react";
import type {ToDoModel} from "../models/ToDoModel.ts";
import {loadTodos} from "../../service/api.service.ts";
import {ToDoComponent} from "../ToDoComponent/ToDoComponent.tsx";
import './ToDosComponent.css'

export const ToDosComponent = () => {
    const [todo, setTodo] = useState<ToDoModel[]>([])
    useEffect(() => {
        loadTodos().then(todos => setTodo(todos))
    }, []);
    return (
        <div className="todos-cards">
            {todo.map((todo) => (<ToDoComponent key={todo.id} todo={todo}/>))}
        </div>
    );
};