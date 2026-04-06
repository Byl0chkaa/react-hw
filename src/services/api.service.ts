import axios from 'axios';
import type ICars from "../models/ICars.ts";

const axiosInstance = axios.create({
    baseURL: 'http://owu.linkpc.net/carsAPI/v1',
    headers: {'Content-Type': 'application/json'}
})

export const getCars = async (): Promise<ICars[]> => {
    const axiosResponse = await axiosInstance.get<ICars[]>('/cars');
    const cars = axiosResponse.data;
    return cars;
}

export const addCar = async (car: ICars) => {
    await axiosInstance.post('/cars', car);
}

