import type postModel from "../model/postModel.ts";

const basePosts=import.meta.env.VITE_POSTS_URL + '/posts';

export const postsApi = async (): Promise<postModel[]> => {
    return await fetch(basePosts)
        .then(res => res.json());
}