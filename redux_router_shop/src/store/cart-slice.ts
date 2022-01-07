import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import CartItemType from '../components/dataModels/CartItemType';
import CartType from '../components/dataModels/CartType';

const initialState: CartType = {
    items: [],
    changed: false,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItemType>) => {
            state.changed = true;
            const item = state.items.find((item) => item.title === action.payload.title);
            if (!item) {
                state.items.push(action.payload);
            }
            if (item) {
                item.amount += 1;
            }
        },

        removeFromCart: (state, action: PayloadAction<{ title: string }>) => {
            state.changed = true;
            const item = state.items.find((item) => item.title === action.payload.title);
            if (item!.amount === 1) {
                state.items = state.items.filter(item => item.title !== action.payload.title);
            }
            if (item!.amount > 1) {
                item!.amount -= 1;
            }
        },

        replaceCart: (state, action: PayloadAction<CartItemType[]>) => {
            state.items = action.payload;
        },
    },
});

export default cartSlice;
export const cartActions = cartSlice.actions;
