import axios from "axios";
import type IUserWithTokens from "../models/IUserWithTokens.ts";
import type IProduct from "../models/IProduct.ts";
import type {IBaseResponseModel} from "../models/IBaseResponseModel.ts";
import {retriveLocalStorage} from "./helpers.ts";
import type ITokenPair from "../models/ITokenPair.ts";



const axiosInstance = axios.create({ // call axios
    baseURL: 'https://dummyjson.com/auth', // base URL
    headers: {} //empty object for headers
});


// catching get-requests
axiosInstance.interceptors.request.use((requestObject) => {
    //checking if the method is GET
    if (requestObject.method?.toUpperCase() === 'GET') {
        // If the request is "GET" adding to headers header "Authorization" that will be "Bearer + token". Token taking from LS with the help of reusable helping func retriveLocalStorage
        requestObject.headers.authorization = `Bearer ` + retriveLocalStorage<IUserWithTokens>('user').accessToken;
    }
//return modified request object
    return requestObject;
})

type loginData = {
    expiresInMins: number;
    username: string;
    password: string;
}

// method login
export const login = async ({username, password, expiresInMins}: loginData): Promise<IUserWithTokens> => {
    // creating an object with data for request on post-method
    const {data: userWithTokens} = await axiosInstance.post<IUserWithTokens>('/login', {
        //data
        username,
        password,
        expiresInMins
    });
    // setting data to local storage
    localStorage.setItem('user', JSON.stringify(userWithTokens));

    return userWithTokens
};

// method for uploading data from an authenticated point
export const loadAuthProducts = async (): Promise<IProduct[]> => {

    // creating an object with data for request on get-method
    const {data: {products}} = await axiosInstance.get<IBaseResponseModel>('/products');

    return products
}

// method refresh for token
export const refresh = async () => {
// getting user data from LS to take nulled refresh token
    const iUserWithTokens = retriveLocalStorage<IUserWithTokens>('user');

    // object for data with refresh token
    const {data: {accessToken, refreshToken}} = await axiosInstance.post<ITokenPair>('/refresh', {
        refreshToken: iUserWithTokens.refreshToken,
        expiresInMins: 1
    });

    // redefining new tokens
    iUserWithTokens.accessToken = accessToken;
    iUserWithTokens.refreshToken = refreshToken;

    //setting in local storage
    localStorage.setItem('user', JSON.stringify(iUserWithTokens));
}