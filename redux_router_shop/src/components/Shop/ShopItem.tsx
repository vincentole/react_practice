import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppDispatch } from '../../store';
import { cartActions } from '../../store/cart-slice';
import Button from '../UI/Button';

const ShopItem: React.FC<{ title: string; price: number }> = (props) => {
    const dispatch = useDispatch<AppDispatch>();

    const onClickHandler = () => {
        dispatch(cartActions.addToCart({ title: props.title, amount: 1, price: props.price }));
    };

    return (
        <div className='space-y-2'>
            <div className='flex justify-between'>
                <Link to={`items/${props.title.replaceAll(' ', '-').toLowerCase()}`} className='hover:text-gray-700 space-x-1 hover:space-x-2 transition-all duration-75' >
                    <h3 className='inline-block'>{props.title}</h3>
                    <h3 className='inline-block transition-all'>›</h3>
                </Link>

                <div className='flex flex-col items-center gap-2'>
                    <dl className='flex justify-between'>
                        <dt className='sr-only'>Item Price</dt>
                        <dd>{`$${props.price.toFixed(2)}`}</dd>
                    </dl>
                    <Button onClick={onClickHandler} displayLabel='Add to Cart' />
                </div>
            </div>
        </div>
    );
};

export default ShopItem;
