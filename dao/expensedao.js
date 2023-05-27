var expensesArray = [];

function addExpense(expense){
    expensesArray.push(expense);
}

function clearExpensesArray(){
    expensesArray = [];
}

export {addExpense, expensesArray, clearExpensesArray};
