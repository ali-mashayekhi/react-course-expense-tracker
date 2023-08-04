import React from "react";
import "./NewExpense.css";
import Card from "../UI/Card";
import ExpenseForm from "./ExpenseForm";

function newExpense(props) {
  function saveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  }

  return (
    <Card className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </Card>
  );
}

export default newExpense;
