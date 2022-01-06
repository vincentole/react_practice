import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import CartItem from './CartItem';
import { cartId } from '../dataModels/html-ids';

const Cart = () => {
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const cartList = cartItems.map((item) => <CartItem key={item.title} item={item} />);
    return (
        <div id={cartId} className='bg-gray-100 py-6 px-8 space-y-4 rounded'>
            <h2 className='text-xl font-bold'>Your Cart</h2>
            {cartList.length > 0 ? cartList : <p>There are no items in your cart.</p>}
        </div>
    );
};

export default Cart;
