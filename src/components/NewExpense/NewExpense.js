import React, { useState } from "react";
import "./NewExpense.css";
import Card from "../UI/Card";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  // Set value for displaying form or not
  const [isEditing, setIsEditing] = useState(false);
  function formDisplayHandler() {
    if (isEditing) setIsEditing(false);
    else setIsEditing(true);
  }

  // Save Expense Date function that executes in child component expenseForm
  function saveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    setIsEditing(false);
  }

  return (
    <Card className="new-expense">
      {!isEditing && (
        <button className="btn" onClick={formDisplayHandler}>
          Add New Expense
        </button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onFormDisplayHandler={formDisplayHandler}
        />
      )}
    </Card>
  );
}

export default NewExpense;
