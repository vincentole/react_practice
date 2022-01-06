import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import { cartActions } from '../../store/cart-slice';
import CartItemModel from '../dataModels/CartItemType';
import Button from '../UI/Button';

const CartItem: React.FC<{ item: CartItemModel }> = (props) => {
    const dispatch = useDispatch<AppDispatch>();

    const onAddHandler = () => {
        dispatch(
            cartActions.addToCart({ title: props.item.title, amount: 1, price: props.item.amount }),
        );
    };

    const onRemoveHandler = () => {
        dispatch(cartActions.removeFromCart({ title: props.item.title }));
    };

    return (
        <div className='space-y-2'>
            <h3>{props.item.title}</h3>
            <dl className='flex justify-between'>
                <div>
                    <dt className='sr-only'>Item Amount</dt>
                    <dd>
                        <span aria-hidden='true'>x</span>
                        <span>{props.item.amount}</span>
                    </dd>
                </div>
                <div className='flex gap-2 items-center'>
                    <dt className='sr-only'>Item total</dt>
                    <dd>{`$${(props.item.price * props.item.amount).toFixed(2)}`}</dd>
                    <dt className='sr-only'>Item Price</dt>
                    <dd className='italic'>{`($${props.item.price.toFixed(2)} per Item)`}</dd>
                </div>
            </dl>
            <div className='flex justify-end gap-2'>
                <Button
                    onClick={onRemoveHandler}
                    ariaDescribedby={props.item.title}
                    ariaLabel='Remove Item'
                    displayLabel='-'
                />
                <Button
                    onClick={onAddHandler}
                    ariaDescribedby={props.item.title}
                    ariaLabel='Add Item'
                    displayLabel='+'
                />
            </div>
        </div>
    );
};

export default CartItem;
