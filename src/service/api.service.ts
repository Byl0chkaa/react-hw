import type ResponseToDoDummyjson from "../components/models/ResponseToDoDummyjson.ts";
import type {ToDoModel} from "../components/models/ToDoModel.ts";

const toDoUrl= import.meta.env.VITE_TODO_URL + '/todos';


export const loadTodos = async (): Promise<ToDoModel[]> => {
    const response:ResponseToDoDummyjson = await fetch(toDoUrl).then(result => result.json());
return response.todos;
}
