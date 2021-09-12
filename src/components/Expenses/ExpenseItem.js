import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {

    const deleteHandler = () => {
        props.onDelete(props.id);
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">{props.price}</div>
                <div>
                    <button onClick={deleteHandler}>Delete</button>
                </div>
            </div>
        </Card>
    );
}

export default ExpenseItem;