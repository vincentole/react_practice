import Card from "../../global/Card";
import Date from "./Date";

function ListItemCard(props) {
    return (
        <Card className='bg-primary-grey flex justify-between items-center'>
            <div className="flex items-center gap-4">
                <Date date={props.date} />
                <div>{props.title}</div>
            </div>

            <div>{props.amount}</div>
        </Card>
    );
}

export default ListItemCard;