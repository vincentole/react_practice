import CartItemType from "./CartItemType";

type CartType = {
    items: CartItemType[];
    changed: boolean;
}

export default CartType;