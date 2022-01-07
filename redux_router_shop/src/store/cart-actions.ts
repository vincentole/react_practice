import { AppDispatch } from '.';
import CartItemType from '../components/dataModels/CartItemType';
import CartType from '../components/dataModels/CartType';
import { cartActions } from './cart-slice';
import { uiActions } from './ui-slice';

const sendCartData = (cart: CartType) => {
    return async (dispatch: AppDispatch) => {
        dispatch(
            uiActions.showErrorToast({
                status: 'pending',
                title: 'Sending...',
                message: 'Sending cart data.',
            }),
        );

        const sendRequest = async () => {
            const response = await fetch(
                'https://redux-store-aa0fe-default-rtdb.europe-west1.firebasedatabase.app/cart.json',
                {
                    method: 'PUT',
                    body: JSON.stringify(cart.items),
                },
            );

            if (!response.ok) {
                throw new Error('Sending cart data failed.');
            }
        };

        try {
            await sendRequest();
            dispatch(
                uiActions.showErrorToast({
                    status: 'success',
                    title: 'Cart Sent: ',
                    message: 'Cart data has been sent.',
                }),
            );
        } catch (error: any) {
            let message = 'Unknown Error';
            if (typeof error.message === 'string') message = error.message;
            dispatch(
                uiActions.showErrorToast({ status: 'error', title: 'Error: ', message: message }),
            );
        }
    };
};

const fetchCartData = () => {
    return async (dispatch: AppDispatch) => {
        dispatch(
            uiActions.showErrorToast({
                status: 'pending',
                title: 'Requesting...',
                message: 'Requesting cart data.',
            }),
        );

        const fetchData = async () => {
            const request = await fetch(
                'https://redux-store-aa0fe-default-rtdb.europe-west1.firebasedatabase.app/cart.json',
            );

            if (!request.ok) {
                throw new Error('Failed to fetch cart data.');
            }

            return (await request.json()) as CartItemType[];
        };

        try {
            const cartItems = await fetchData();
            if (!cartItems) {
                dispatch(
                    uiActions.showErrorToast({
                        status: 'success',
                        title: 'No Cart',
                        message: 'Cart does not exists yet.',
                    }),
                );
                return;
            }
            dispatch(cartActions.replaceCart(cartItems));
            dispatch(
                uiActions.showErrorToast({
                    status: 'success',
                    title: 'Cart fetched',
                    message: 'Cart data has been fetched.',
                }),
            );
        } catch(error: any) {
            let message = 'Unknown Error';
            if (typeof error.message === 'string') message = error.message;
            dispatch(
                uiActions.showErrorToast({ status: 'error', title: 'Error: ', message: message }),
            );
        }
    };

};

export { sendCartData, fetchCartData };
