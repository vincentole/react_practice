import { useContext, useState } from 'react';
import Button from '../../global/Button';
import ButtonSecondary from '../../global/ButtonSecondary';
import Modal from '../../global/Modal';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
import OrderForm from './OrderForm';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

function Cart(props) {
    const cartContext = useContext(CartContext);
    const cartList = cartContext.items.map((item) => <CartItem key={item.id} item={item} />);
    const [isConfirming, setIsConfirming] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [didSubmit, setDidSubmit] = useState(false);
    
    function handleOrdering() {
        setIsConfirming(true);
    }

    function cancelOrdering() {
        setIsConfirming(false);
    }

    async function submitOrderHandler(userData) {
        setIsSubmitting(true);
        const response = await fetch(
            'https://order-food-f1b91-default-rtdb.europe-west1.firebasedatabase.app/orders.json',
            {
                method: 'POST',
                body: JSON.stringify({
                    user: userData,
                    orderedItems: cartContext.items,
                }),
            },
        );
        setIsSubmitting(false);
        setDidSubmit(true);
        cartContext.resetItems();
    }

    return (
        <Modal className='max-w-2xl w-[80%] space-y-4 py-0 pb-5' onClickBackdrop={props.onHideCart}>
            {isSubmitting && (
                <div className='text-center space-y-2'>
                    <AiOutlineLoading3Quarters className='animate-spin text-rose-900 text-xl mx-auto' />
                    <div>Processing ...</div>
                </div>
            )}
            {!isSubmitting && !didSubmit && (
                <>
                    <header className='pt-6 pb-3 sticky top-0 bg-white border-b'>
                        <h1 className='text-xl font-bold text-rose-700'>Your Order</h1>
                    </header>
                    <ul>{cartList}</ul>
                    <div className='flex justify-between font-bold'>
                        <span>Total Amount</span>
                        <span className='border-t border-stone-900 w-20 text-right'>{`$${cartContext.totalAmount.toFixed(
                            2,
                        )}`}</span>
                    </div>
                    {isConfirming && (
                        <OrderForm
                            onCancelOrdering={cancelOrdering}
                            onSubmit={submitOrderHandler}
                        />
                    )}
                    {!isConfirming && (
                        <footer className='flex justify-end gap-2'>
                            <ButtonSecondary className='w-20' onClick={props.onHideCart}>
                                Close
                            </ButtonSecondary>
                            <Button className='w-20' onClick={handleOrdering}>
                                Order
                            </Button>
                        </footer>
                    )}
                </>
            )}
            {!isSubmitting && didSubmit && (
                <>
                    <header className='pt-6 pb-3 sticky top-0 bg-white border-b'>
                        <h1 className='text-xl font-bold text-rose-700'>Success</h1>
                    </header>
                    <p>Thank you!</p>
                    <p>Your order has been sent.</p>
                    <footer className='flex justify-end gap-2'>
                        <ButtonSecondary className='w-20' onClick={props.onHideCart}>
                            Close
                        </ButtonSecondary>
                    </footer>
                </>
            )}
        </Modal>
    );
}

export default Cart;
