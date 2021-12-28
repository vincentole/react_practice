import { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
    items: [],
    totalAmount: 0,
};

function cartReducer(state, action) {
    if (action.type === 'ADD') {
        const itemIndex = state.items.findIndex((item) => item.id === action.item.id);
        const stateItem = state.items[itemIndex];
        let newItems;
     
        if (stateItem) {
            const item = {...stateItem, amount: stateItem.amount + 1};
            newItems = [...state.items];
            newItems[itemIndex] = item;
        } else {
            newItems = state.items.concat(action.item);
        }

        return {
            items: newItems,
            totalAmount: state.totalAmount + action.item.amount * action.item.price,
        };
    }

    if (action.type === 'REMOVE') {
        const itemIndex = state.items.findIndex((item) => item.id === action.id);
        const stateItem = state.items[itemIndex];
        let newItems;

        if (stateItem.amount <= 1) {
            newItems = state.items.filter((item) => item.id !== action.id);
        } else {
            const item = { ...stateItem, amount: stateItem.amount - 1 };
            newItems = [...state.items];
            newItems[itemIndex] = item;
        }

        return {
            items: newItems,
            totalAmount: state.totalAmount - stateItem.price,
        };
    }
    
    if (action.type === 'RESET') {
        return defaultCartState;
    }

    return defaultCartState;
}

function CartProvider(props) {
    const [state, dispatch] = useReducer(cartReducer, defaultCartState);

    function addItemHandler(item) {
        dispatch({ type: 'ADD', item: item });
    }

    function removeItemHandler(id) {
        dispatch({ type: 'REMOVE', id: id });
    }

    function resetItemsHandler() {
        dispatch({type: 'RESET'});
    }

    const cartContext = {
        items: state.items,
        totalAmount: state.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
        resetItems: resetItemsHandler,
    };

    return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
}

export default CartProvider;
