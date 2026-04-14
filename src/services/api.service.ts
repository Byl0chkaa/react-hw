import axios from "axios";
import type IUserWithTokens from "../models/IUserWithTokens.ts";
import type IProduct from "../models/IProduct.ts";
import type {IBaseResponseModel} from "../models/IBaseResponseModel.ts";
import {retriveLocalStorage} from "./helpers.ts";
import type ITokenPair from "../models/ITokenPair.ts";



const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/auth',
    headers: {}
});


axiosInstance.interceptors.request.use((requestObject) => {
    if (requestObject.method?.toUpperCase() === 'GET') {
        requestObject.headers.authorization = `Bearer ` + retriveLocalStorage<IUserWithTokens>('user').accessToken;
    }

    return requestObject;
})

type loginData = {
    expiresInMins: number;
    username: string;
    password: string;
}

export const login = async ({username, password, expiresInMins}: loginData): Promise<IUserWithTokens> => {
    const {data: userWithTokens} = await axiosInstance.post<IUserWithTokens>('/login', {
        username,
        password,
        expiresInMins
    });
    localStorage.setItem('user', JSON.stringify(userWithTokens));
    return userWithTokens
};

export const loadAuthProducts = async (): Promise<IProduct[]> => {
    const {data: {products}} = await axiosInstance.get<IBaseResponseModel>('/products');

    return products
}

export const refresh = async () => {

    const iUserWithTokens = retriveLocalStorage<IUserWithTokens>('user');
    const {data: {accessToken, refreshToken}} = await axiosInstance.post<ITokenPair>('/refresh', {
        refreshToken: iUserWithTokens.refreshToken,
        expiresInMins: 1
    });
    iUserWithTokens.accessToken = accessToken;
    iUserWithTokens.refreshToken = refreshToken;
    localStorage.setItem('user', JSON.stringify(iUserWithTokens));
}