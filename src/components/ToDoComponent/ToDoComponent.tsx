import type {ToDoModel} from "../models/ToDoModel.ts";
import type {FC} from "react";
import './ToDoComponent.css'

type ToDoProps = {todo: ToDoModel}
export const ToDoComponent:FC<ToDoProps> = ({todo:{id, todo, completed, userId}}) => {
    return (
        <div className={'todo-card'}>
            <p>UserID: {userId}</p>
            <p>ToDoID: {id}</p>
            <h3>UserToDo: {todo}</h3>
            <p>State: {completed.toString()}</p>
        </div>
    );
};