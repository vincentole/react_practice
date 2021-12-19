import ListItemCard from './ListItemCard';

function List(props) {
    return (
        <div className='space-y-2'>
            {props.items.length === 0 && <h1 className='p-4'>No expenses to display.</h1>}
            {props.items.length > 0 &&
                props.items.map((item) => {
                    
                    return (
                        <ListItemCard
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            amount={item.amount}
                            date={item.date}
                            onDeleteItem={props.onDeleteItem}
                        />
                    );
                })}
        </div>
    );
}

export default List;
