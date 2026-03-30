import type ICart from "../../models/ICart.ts";

interface CartComponentProps {
    cart: ICart
}

export const CartComponent = ({cart}: CartComponentProps) => {
    return (
        <div>
            <p>Total: {cart.total} </p>
            <p>Discounted Total: {cart.discountedTotal}</p>
            <hr/>
        </div>
    );
};