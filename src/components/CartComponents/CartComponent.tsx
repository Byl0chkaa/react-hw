import type ICart from "../../models/ICart.ts";

interface CartComponentProps {
    cart: ICart
}

export const CartComponent = ({cart}: CartComponentProps) => {
    return (
        <div>
            <p>{cart.title}</p>
            <p>{cart.price}</p>
            <p>{cart.thumbnail}</p>
            <p>{cart.total}</p>
        </div>
    );
};