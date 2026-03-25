import {urls} from "../constants/urls.ts";
import type JsonUsersModel from "../models/users/JsonUsersModel.ts";
import type {DummyResponseUserModel} from "../models/users/DummyResponseUserModel.ts";

export const JsonUserService ={
    getUsers: async(): Promise<JsonUsersModel[]> =>{
        return await fetch(urls.users.allUsersJson).then(res => res.json())
    }
};

export const DummyUserService ={
    getUsers: async(): Promise<DummyResponseUserModel[]> =>{
        return await fetch(urls.users.allUsersDummy).then(res => res.json())
    }
};