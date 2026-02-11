import type ResponseCommentsDummyjson from "../models/ResponseCommentsDummyjson.ts";
import type {Comments} from "../models/CommentModel.ts";

const commentsUrl = import.meta.env.VITE_COMMENTS_URL + '/comments';

export const loadComments = async ():Promise<Comments[]> => {
    const response:ResponseCommentsDummyjson = await fetch(commentsUrl)
        .then(response => response.json());
return response.comments;
}