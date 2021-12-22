import { useContext, useEffect, useState } from 'react';
import { MdOutlineShoppingCart } from 'react-icons/md';
import Button from '../../global/Button';
import CartContext from '../../store/cart-context';

function CartBtn(props) {
    const htmlProps = { ...props };
    delete htmlProps.numberOfItems;
    const { items } = useContext(CartContext);
    const [btnAnimation, setBtnAnimation] = useState(false)
    

    useEffect(() => {
        if (!items.length) return;
        
        setBtnAnimation(true)
        const timeout = setTimeout(() => setBtnAnimation(false), 200);

        return () => clearTimeout(timeout);
    }, [items]);

    return (
        <Button {...htmlProps} className={btnAnimation && 'animate-puls-fwd'}>
            <MdOutlineShoppingCart className='text-lg' />
            <span>Your Cart</span>
            <span className='py-1 px-1.5 bg-rose-900 rounded-full ml-1'>{props.numberOfItems}</span>
        </Button>
    );
}

export default CartBtn;
