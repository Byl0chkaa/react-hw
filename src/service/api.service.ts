import type {ToDoModel} from "../Models/ToDoModel.ts";

const baseUrlToDos = import.meta.env.VITE_API_URL + '/todos';

export const loadToDos = async (): Promise<ToDoModel[]> => {
    return await fetch(baseUrlToDos)
        .then(response => response.json());
}