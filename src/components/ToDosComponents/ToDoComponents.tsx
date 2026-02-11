import {useEffect, useState} from "react";
import type {ToDoModel} from "../../Models/ToDoModel.ts";

const ToDoComponents = () => {
    const [todos, setTodos] = useState<ToDoModel>([]);
    useEffect(() => {
       // loadToDos().then()
    }, [])
    return (
        <div>

        </div>
    );
};

export default ToDoComponents;