import React, {useEffect, useState} from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const [expenses, setExpenses] = useState([
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { 
      id: 'e2', 
      title: 'New TV', 
      amount: 799.49, 
      date: new Date(2021, 2, 12) 
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
    {
      id: 'e5',
      title: 'New Desk (Glass)',
      amount: 1050,
      date: new Date(2021, 5, 30),
    },
  ]);

  useEffect(() => {
    fetch("http://localhost:8080/CMS/customer")
    .then(res => res.json())
    .then(cus => {
      console.log(cus)
    })
    .catch(err => {
      console.log('err', err);
    });
  }, []);



  const addExpenseHandler = (expenseData) => {
    setExpenses((prevExpenses) => {
      return [expenseData, ...expenses];
    });
  }

  const deleteExpenseHandler = id => {
    setExpenses((prevExpenses) => {
      return expenses.filter(expense => expense.id !== id)
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} onDeleteExpense={deleteExpenseHandler} />
    </div>
  );
}

export default App;
