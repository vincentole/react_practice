import { useContext } from 'react';
import headerImg from '../../assets/food.jpg';
import CartBtn from '../Main/Cart/CartBtn';
import CartContext from '../store/cart-context';

function Header(props) {
    const cartContext = useContext(CartContext);
    const numberOfCartItems = cartContext.items.reduce((total, item) => total + item.amount, 0);

    return (
        <header className='bg-rose-900 text-white'>
            <div className='fixed z-10 w-full bg-rose-900 shadow-md shadow-black/10'>
                <div className='cstm-container min-h-[3.5rem] px-8 flex justify-between items-center'>
                    <h1>Order Food</h1>
                    <CartBtn numberOfItems={numberOfCartItems} onClick={props.onShowCart} />
                </div>
            </div>

            <div className='h-96 mt-14'>
                <img
                    className='w-full h-full object-cover object-top'
                    src={headerImg}
                    alt='Fresh Italian vegetables.'
                />
            </div>
        </header>
    );
}

export default Header;