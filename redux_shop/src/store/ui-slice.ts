import { createSlice, PayloadAction } from '@reduxjs/toolkit'; // PayloadAction
import ErrorToastType from '../components/dataModels/ErrorToast';

interface UiStateType {
    showCart: boolean;
    errorToast: null | ErrorToastType,
}

const initialState: UiStateType = { showCart: false, errorToast: null };

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        toggleCart: (state) => {
            state.showCart = !state.showCart;
        },
        showErrorToast: (state, action: PayloadAction<null | ErrorToastType>) => {
            state.errorToast = action.payload;
        }, 
    },
});

export default uiSlice;
export const uiActions = uiSlice.actions;
export type { UiStateType };
