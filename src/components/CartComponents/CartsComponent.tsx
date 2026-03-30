import {useEffect, useState} from "react";
import type ICart from "../../models/ICart.ts";
import {useParams} from "react-router-dom";
import {cartService} from "../../services/api.service.ts";
import {CartComponent} from "./CartComponent.tsx";

export const CartsComponent = () => {
    const {id} = useParams();
    const [carts, setCarts] = useState<ICart[]>([]);
    useEffect(() => {
        cartService.getCart().then(res => setCarts(res.carts));
    },[id]);
    return (
        <div>
            {
                carts.map(cart => <CartComponent key={cart.id} cart={cart}/>)
            }
        </div>
    );
};