import {urls} from "../constants/urls.ts";
import type JsonUsersModel from "../models/users/JsonUsersModel.ts";
import type {DummyResponseUserModel} from "../models/users/DummyResponseUserModel.ts";
import type JsonPostsModel from "../models/posts/JsonPostsModel.ts";
import type JsonCommentsModel from "../models/comments/JsonCommentsModel.ts";
import type {DummyResponseCommentsModel} from "../models/comments/DummyResponseCommentsModel.ts";
import type {DummyResponsePostsModel} from "../models/posts/DummyResponsePostsModel.ts";

export const JsonUserService = {
    getUsers: async (): Promise<JsonUsersModel[]> => {
        return await fetch(urls.users.allUsersJson).then(res => res.json())
    },
    getPosts: async (): Promise<JsonPostsModel[]> => {
        return await fetch(urls.posts.allPostsJson).then(res => res.json())
    },
    getComments: async (): Promise<JsonCommentsModel[]> => {
        return await fetch(urls.comments.allCommentsJson).then(res => res.json())
    }

};

export const DummyUserService = {
    getUsers: async (): Promise<DummyResponseUserModel> => {
        return await fetch(urls.users.allUsersDummy).then(res => res.json())
    },
    getPosts: async (): Promise<DummyResponsePostsModel> => {
        return await fetch(urls.posts.allPostsDummy).then(res => res.json())
    },
    getComments: async (): Promise<DummyResponseCommentsModel> => {
        return await fetch(urls.comments.allCommentsDummy).then(res => res.json())
    }
};