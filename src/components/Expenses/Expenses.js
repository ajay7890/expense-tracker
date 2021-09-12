import './Expenses.css';
import React, {useState} from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2021');

    let filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear() === parseInt(filteredYear);
    });

    const filterChangeHandler = selectedyear => {
        setFilteredYear(selectedyear);
    }

    const deleteHandler = id => {
        props.onDeleteExpense(id);
    }

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            {filteredExpenses.map(expense => {
                return (
                    <ExpenseItem
                        key={expense.id}
                        id={expense.id}
                        date={expense.date}
                        title={expense.title}
                        price={expense.amount}
                        onDelete={deleteHandler}
                    />
                );
            })}
        </Card>
    );

}

export default Expenses;