import type {ToDoModel} from "../../Models/ToDoModel.ts";
import type {FC} from "react";
import './TodoComponent.css'

type TodoComponentProps = {todo: ToDoModel}
const TodoComponent: FC<TodoComponentProps> = ({todo:{title, userId, id, completed}}) => {
    return (
        <div className={'todo-card'}>
            <h2>Title: {title}</h2>
            <h3>ToDosID: {id}</h3>
            <h3>UserId: {userId}</h3>
            <p>State: {completed.toString()}</p>
        </div>
    );
};

export default TodoComponent;