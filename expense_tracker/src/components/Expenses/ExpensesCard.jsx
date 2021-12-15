import Card from '../global/Card';
import ExpensesFilter from './ExpensesFilterCard';
import List from './List/List';

function ExpensesCard(props) {
    return (
        <Card className='bg-primary-teal shadow-primary-teal/20'>
            <ExpensesFilter />
            <List items={props.items} />
        </Card>
    );
}

export default ExpensesCard;
