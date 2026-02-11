import type {PostModel} from "./PostModel";

export default interface ResponsePostDummyjson {
   posts: PostModel[];
   total: number;
   skip: number;
   limit: number;
}
