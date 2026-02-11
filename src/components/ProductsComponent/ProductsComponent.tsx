import {useEffect, useState} from "react";
import type {ProductModel} from "../../models/ProductModel.ts";
import {loadProducts} from "../../service/api.service.ts";
import {ProductComponent} from "../ProductComponent/ProductComponent.tsx";
import './ProductsComponent.css'

export const ProductsComponent = () => {
    const [product, setProduct] = useState<ProductModel[]>([])
    useEffect(() => {
        loadProducts().then(result => setProduct(result))
    }, []);
    return (
        <div className={'products-cards'}>
            {
                product.map((product) =>(<ProductComponent key={product.id} product={product}/>))
            }
        </div>
    );
};