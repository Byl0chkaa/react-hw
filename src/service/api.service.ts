import type {CommentsModel} from "../models/CommentsModel.ts";

const commentsUrl = import.meta.env.VITE_COMMENTS_URL + '/comments';

export const loadComments = async (): Promise<CommentsModel[]> => {
    return await fetch(commentsUrl).then(result => result.json());
}