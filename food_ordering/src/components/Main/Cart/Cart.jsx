import { useContext } from "react";
import Button from "../../global/Button";
import ButtonSecondary from "../../global/ButtonSecondary";
import Modal from "../../global/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

function Cart(props) {
    const cartContext = useContext(CartContext);
    const cartList = cartContext.items.map(item => <CartItem key={item.id} item={item}/>);

    return (
        <Modal className='max-w-2xl w-[80%] space-y-4 py-0 pb-5' onClickBackdrop={props.onHideCart}>
            <header className="pt-6 pb-3 sticky top-0 bg-white border-b">
                <h1 className='text-xl font-bold text-rose-700'>Your Order</h1>
            </header>
            <ul>{cartList}</ul>
            <div className='flex justify-between font-bold'>
                <span>Total Amount</span>
                <span className='border-t border-stone-900 w-20 text-right'>{`$${cartContext.totalAmount.toFixed(2)}`}</span>
            </div>
            <footer className='flex justify-end gap-2'>
                <ButtonSecondary className='w-20' onClick={props.onHideCart}>
                    Close
                </ButtonSecondary>
                <Button className='w-20'>Order</Button>
            </footer>
        </Modal>
    );
}

export default Cart;