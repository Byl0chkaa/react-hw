import type {ProductModel} from "../models/ProductModel.ts";
import type ResponseProductDummyjson from "../models/ResponseProductDummyjson.ts";

const productsUrl= import.meta.env.VITE_PRODUCTS_URL + '/products';

export const loadProducts = async ():Promise<ProductModel[]> => {
    const response:ResponseProductDummyjson = await fetch(productsUrl)
        .then(res => res.json());
    return response.products;
}