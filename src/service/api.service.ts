import type ResponsePostDummyjson from "../models/ResponsePostDummyjson.ts";
import type {PostModel} from "../models/PostModel.ts";

const postsUrl = import.meta.env.VITE_POSTS_URL + '/posts';

export const loadPosts = async ():Promise<PostModel[]> => {
    const response:ResponsePostDummyjson = await fetch(postsUrl)
        .then(result => result.json());
    return response.posts;
}