import { createRef, useEffect } from 'react';
import Button from './Button';
import Card from './Card';

function Modal(props) {
    const closeBtnRef = createRef(null);

    function handleKeyDown(e) {
            if (e.key === 'Tab') {
                e.preventDefault();
                return;
            }
    }

    useEffect(() => {
        closeBtnRef.current.focus();
        window.addEventListener('keydown', handleKeyDown);
        
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    });

    function handleClick() {
        props.setActive(false);
        props.focusAfterCloseRef.current.focus();
    }

    return (
        props.active && (
            <>
                <div
                    className='fixed top-0 left-0 w-screen h-screen bg-gray-900/90'
                    onClick={handleClick}
                ></div>
                <div className='fixed top-0 left-0 w-screen h-screen flex flex-col justify-center items-center pointer-events-none'>
                    <Card className='p-0 max-w-xl mb-[15%] pointer-events-auto'>
                        <header className='bg-gray-700 text-white p-2 pt-3 rounded-t-md'>
                            <h1 className='text-xl font-bold'>{props.title}</h1>
                        </header>
                        <p className='bg-white p-2 py-4'>{props.message}</p>
                        <footer className='flex justify-end bg-white p-2 rounded-b-md'>
                            <Button type='button' onClick={handleClick} ref={closeBtnRef}>
                                Close
                            </Button>
                        </footer>
                    </Card>
                </div>
            </>
        )
    );
}

// eslint-disable-next-line no-func-assign


export default Modal;
