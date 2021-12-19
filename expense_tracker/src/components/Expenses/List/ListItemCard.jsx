import Card from '../../global/Card';
import IconDelete from '../../global/IconDelete';
import Amount from './Amount';
import Date from './Date';

function ListItemCard(props) {

    const onDeleteItem = () => {
        props.onDeleteItem(props.id);
    };    

    return (
        <Card className='bg-primary-grey flex justify-between items-center gap-8 flex-col xs:flex-row sm:gap-0'>
            <div className='flex items-center gap-4 flex-col xs:flex-row w-full xs:w-auto'>
                <Date date={props.date} />
                <div>{props.title}</div>
            </div>

            <div className='flex items-center gap-4 flex-col xs:flex-row w-full xs:w-auto'>
                <Amount amount={props.amount} />
                <button onClick={onDeleteItem}>
                    <IconDelete />
                </button>
            </div>
        </Card>
    );
}

export default ListItemCard;
