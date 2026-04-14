import type IProduct from "./IProduct.ts";

export interface IBaseResponseModel {
    total: number;
     skip: number;
     limit: number;
     products: IProduct[];

}
