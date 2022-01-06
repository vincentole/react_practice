import {useDispatch, useSelector} from 'react-redux'
import { AppDispatch, RootState } from '../../store';
import { uiActions } from '../../store/ui-slice';
import { cartId } from '../dataModels/html-ids';

const CartButton = () => {
    const totalAmount = useSelector((state: RootState) => state.cart.items.reduce((total,item) => total + item.amount, 0));
    const dispatch = useDispatch<AppDispatch>();
    const cartShown = useSelector((state: RootState) => state.ui.showCart);

    const onClickHandler = () => {
        dispatch(uiActions.toggleCart());
    };

    return (
        <button
            onClick={onClickHandler}
            className='bg-white hover:bg-gray-200 px-4 py-2 space-x-2 rounded'
            type='button'
            aria-expanded={cartShown}
            aria-controls={cartId}
        >
            <span>Your Cart</span>
            <span>|</span>
            <span>
                {totalAmount} <span className='sr-only'>items</span>
            </span>
        </button>
    );
};

export default CartButton;
