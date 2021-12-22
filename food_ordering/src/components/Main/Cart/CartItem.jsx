import { useContext } from 'react';
import { AiOutlineMinus } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';
import ButtonSecondary from '../../global/ButtonSecondary';
import CartContext from '../../store/cart-context';

function CartItem(props) {
    const cartContext = useContext(CartContext);

    function addItemHandler() {
        const item = { ...props.item, amount: 1 };
        cartContext.addItem(item);
    }

    function removeItemHandler() {
        cartContext.removeItem(props.item.id);
    }

    return (
        <li className='flex justify-between border-b last:border-none py-3'>
            <div className='space-y-1'>
                <h2 className='text-lg font-bold'>{props.item.name}</h2>
                <div className='text-sm'>{props.item.description}</div>
                <div className='text-sm space-x-4'>
                    <span className='font-bold'>{`$${props.item.price.toFixed(2)}`}</span>
                    <span className='bg-slate-200 px-2 rounded'>{`×${props.item.amount}`}</span>
                </div>
            </div>
            <div className='flex justify-center items-center gap-2'>
                <ButtonSecondary onClick={removeItemHandler} className='w-8 h-6 text-base'>
                    <AiOutlineMinus />
                </ButtonSecondary>
                <ButtonSecondary onClick={addItemHandler} className='w-8 h-6 text-base'>
                    <AiOutlinePlus />
                </ButtonSecondary>
            </div>
        </li>
    );
}

export default CartItem;
