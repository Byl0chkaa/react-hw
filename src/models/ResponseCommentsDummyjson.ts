import type { Comments } from "./CommentModel";

export default interface ResponseCommentsDummyjson {
   comments: Comments[];
   total: number;
   skip: number;
   limit: number;
}
