import Card from '../global/Card';
import ExpensesFilterCard from './ExpensesFilterCard';
import GraphCard from './Graph/GraphCard';
import List from './List/List';

const MONTH_NAMES = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
];

function ExpensesCard(props) {
    const chartDataPoints = MONTH_NAMES.map((name) => ({ label: name, value: 0 }));
    const years = props.items.map(item => item.date.getFullYear()).filter((v, i, a) => a.indexOf(v) === i);

    props.filteredItems.forEach((item) => {
        const month = item.date.getMonth();
        chartDataPoints[month].value += item.amount;
    });

    return (
        <Card className='bg-primary-teal shadow-primary-teal/20 space-y-8'>
            <ExpensesFilterCard
                options={years}
                onSetYearFilter={props.onSetYearFilter}
                yearFilter={props.yearFilter}
            />
            <GraphCard dataPoints={chartDataPoints} />
            <List items={props.filteredItems} onDeleteItem={props.onDeleteItem} />
        </Card>
    );
}

export default ExpensesCard;
