import ListItemCard from './ListItemCard';

function List(props) {
    return (
        <div className='mt-8 space-y-2'>
            {props.items.length === 0 && <h1>No expenses yet.</h1>}
            {props.items.length > 0 &&
                props.items.map((item) => {
                    return <ListItemCard />;
                })}
        </div>
    );
}

export default List;
