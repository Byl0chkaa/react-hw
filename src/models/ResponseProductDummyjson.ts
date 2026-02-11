import type {ProductModel} from "./ProductModel.ts";

export default interface ResponseProductDummyjson {
   products: ProductModel[];
   total: number;
   skip: number;
   limit: number;
}
