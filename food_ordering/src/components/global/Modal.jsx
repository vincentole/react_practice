import Card from './Card';

function Backdrop(props) {
    return (
        <div
            className='fixed top-0 left-0 w-screen h-screen bg-stone-900/70 z-40'
            onClick={props.onClickBackdrop}
        ></div>
    );
}

function ModalOverlay(props) {
    return (
        <div className='fixed inset-0 flex justify-center items-center pointer-events-none z-50'>
            <Card
                className={`pointer-events-auto max-h-[80vh] overflow-hidden overflow-y-auto ${props.className}`}
            >
                {props.children}
            </Card>
        </div>
    );
}

function Modal(props) {
    return (
        <>
            <Backdrop onClickBackdrop={props.onClickBackdrop} />
            <ModalOverlay className={props.className}>{props.children}</ModalOverlay>
        </>
    );
}

export default Modal;
