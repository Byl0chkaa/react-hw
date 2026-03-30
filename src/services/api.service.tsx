import type {IUserResponseModel} from "../model/IUserResponseModel.ts";
const baseUrl= 'https://dummyjson.com'

export const getUsers = async (page: string):Promise<IUserResponseModel> => {
    const limit = 30;
    const skip = limit * (+page) - limit;
    return await fetch(baseUrl + '/users' + '?skip=' + skip)
        .then(res => res.json())
}