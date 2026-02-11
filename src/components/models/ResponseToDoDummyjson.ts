import type {ToDoModel} from "./ToDoModel.ts";

export default interface ResponseToDoDummyjson {
   todos: ToDoModel[];
   total: number;
   skip: number;
   limit: number;
}

