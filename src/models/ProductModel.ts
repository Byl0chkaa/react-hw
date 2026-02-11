import type {Dimensions} from "./DimensionsModel.ts";
import type {Reviews} from "./ReviewModel.ts";
import type {Meta} from "./MetaModel.ts";

export interface ProductModel {
    id: number;
    title: string;
    description: string;
    category?: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    sku: string;
    weight: number;
    dimensions: Dimensions;
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: Reviews[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: Meta;
    images: string[];
    thumbnail?: string;
}