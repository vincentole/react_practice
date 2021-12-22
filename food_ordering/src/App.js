import { useState } from 'react';
import { createPortal } from 'react-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Cart from './components/Main/Cart/Cart';
import Menu from './components/Main/Menu/Menu';
import Restaurant from './components/Main/Restaurant';
import CartProvider from './components/store/CartProvider';

function App() {
    const [cartShown, setCartShown] = useState(false);

    function showCart() {
        setCartShown(true);
    }

    function hideCart() {
        setCartShown(false);
    }

    return (
        <CartProvider>
            <div className='min-h-screen grid grid-flow-row grid-rows-[auto_1fr_auto] bg-stone-200 text-stone-900'>
                {cartShown &&
                    createPortal(
                        <Cart onHideCart={hideCart} />,
                        document.querySelector('#overlays'),
                    )}
                <Header onShowCart={showCart} />
                <main>
                    <div className='cstm-container'>
                        <Restaurant />
                        <Menu />
                    </div>
                </main>
                <Footer className='self-end' />
            </div>
        </CartProvider>
    );
}

export default App;
