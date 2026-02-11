import type {PostModel} from "../models/PostModel.ts";

const basePosts=import.meta.env.VITE_POSTS_URL + '/posts';

export const loadPosts = async (): Promise<PostModel[]> => {
    return await fetch(basePosts)
        .then(response => response.json());
}