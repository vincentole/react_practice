import Button from '../../global/Button';
import Card from '../../global/Card';
import InputWithLabel from '../../global/InputWithLabel';
import { MdOutlineAddShoppingCart } from 'react-icons/md';
import { useContext, useRef } from 'react';
import CartContext from '../../store/cart-context';

function MenuItem(props) {
    const price = `$${props.price.toFixed(2)}`
    const cartContext = useContext(CartContext);
    const amountInputRef = useRef(null);

    function addItemHandler(e) {
        e.preventDefault();
        const item = {
            id: props.id,
            name: props.name,
            description: props.description,
            price: props.price,
            amount: Number(amountInputRef.current.value),
        };
        cartContext.addItem(item);
    }

    return (
        <li>
            <Card className='flex justify-between'>
                <div className='flex flex-col gap-1'>
                    <h2 className='text-lg font-bold'>{props.name}</h2>
                    <span className='text-sm'>{props.description}</span>
                    <span className='text-sm font-bold'>{price}</span>
                </div>
                <form
                    onSubmit={addItemHandler}
                    className='flex flex-col justify-center items-center gap-1'
                >
                    <div className='flex justify-between w-full'>
                        <InputWithLabel
                            className='w-10 '
                            inputId='amount'
                            label='Amount'
                            type='number'
                            min={1}
                            max={5}
                            step={1}
                            defaultValue={1}
                            ref={amountInputRef}
                        />
                    </div>

                    <Button>
                        <MdOutlineAddShoppingCart className='text-lg' />
                        Add To Cart
                    </Button>
                </form>
            </Card>
        </li>
    );
}

export default MenuItem;
