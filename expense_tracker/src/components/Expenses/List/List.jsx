import ListItemCard from './ListItemCard';
import { nanoid } from 'nanoid';

function List(props) {
    return (
        <div className='mt-8 space-y-2'>
            {props.items.length === 0 && <h1 className='p-4'>No expenses yet.</h1>}
            {props.items.length > 0 &&
                props.items.map((item) => {
                    return <ListItemCard key={nanoid()} title={item.title} amount={item.amount} date={item.date}/>;
                })}
        </div>
    );
}

export default List;
