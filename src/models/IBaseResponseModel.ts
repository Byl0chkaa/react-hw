import type IProduct from "./IProduct.ts";

export interface IBaseResponseModel { // model for response from dummyjson
    total: number;
     skip: number;
     limit: number;
     products: IProduct[];

}
