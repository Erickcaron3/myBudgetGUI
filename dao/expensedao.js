import {Expense} from "../models/expense.js";

var expensesArray = [];

function addExpense(expense){
    expensesArray.push(expense);
}

function clearExpensesArray(){
    expensesArray = [];
}

export {addExpense, expensesArray, clearExpensesArray};
