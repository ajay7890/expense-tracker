import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const addExpenseHandler = (expenseObject) => {
        const expenseData = {
            ...expenseObject,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    }

    return (
        <div className="new-expense">
            <ExpenseForm onExpenseSubmit={addExpenseHandler} />
        </div>
    );
}

export default NewExpense;