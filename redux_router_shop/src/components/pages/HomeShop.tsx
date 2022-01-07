import Cart from '../Cart/Cart';
import CartButton from '../Cart/CartButton';
import Shop from '../Shop/Shop';
import ErrorToast from '../UI/ErrorToast';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { useEffect } from 'react';
import { fetchCartData, sendCartData } from '../../store/cart-actions';

let isInit = true;

function HomeShop() {
    const dispatch = useDispatch<AppDispatch>();
    const cartShown = useSelector((state: RootState) => state.ui.showCart);
    const state = useSelector((state: RootState) => state);

    useEffect(() => {
        dispatch(fetchCartData());
    }, [dispatch]);

    useEffect(() => {
        if (isInit) {
            isInit = false;
            return;
        }

        if (state.cart.changed) {
            dispatch(sendCartData(state.cart));
        }
    }, [dispatch, state.cart]);

    return (
        <>
            <header className='bg-gray-700'>
                <div className='max-w-4xl mx-auto py-6 px-8 flex justify-between'>
                    <h1 className='text-3xl text-white'>Redux Store</h1>
                    <CartButton />
                </div>
            </header>
            <ErrorToast />
            <main className='space-y-4'>
                <div className='mt-12'></div>
                <section className='max-w-4xl mx-auto'>{cartShown && <Cart />}</section>

                <section className='max-w-4xl mx-auto'>
                    <Shop />
                </section>
            </main>
        </>
    );
}

export default HomeShop;
