import Expense from "../models/expense.js";
import {addExpense, expensesArray, clearExpensesArray} from "../dao/expensedao.js";

$(document).ready(function(){

    $("#clear-all-expenses").on("click", function(){
        clearExpensesArray();
        loadExpenses();
    });

    $("#expense-adding-form-submit-button").on("click", function(event) {
        event.preventDefault();
        addExpenseProcedure();
        clearAddExpenseForm();
        loadExpenses();               
    });

    function loadExpenses(){
        clearExpenseTable();
        handleDisplayExpenses();
    };

    function clearAddExpenseForm(){
        $('#expense-adding-form')[0].reset();
    };

    function clearExpenseTable(){
        $("#expenses-table > tbody").empty();
    };



    function addExpenseProcedure(){
        const $totalAmountValue = $("#total-amount-input");
        const $currencyValue = $("#currency-input");
        const $shopNameValue = $("#shop-name-input");
        const $commentValue = $("#comment");
        const $payerValue = $("#payer-input");

        const expense = new Expense($totalAmountValue.val(), $currencyValue.val(),
                                    $shopNameValue.val(), $commentValue.val(),$payerValue.val());

        addExpense(expense); 
    };

    function handleDisplayExpenses(){
        fetchExpenses();
        console.log(expensesArray.length)
        handleViewAllExpensesContainer(expensesArray.length);
    }; 

    function fetchExpenses(){
        expensesArray.forEach((expense) => {
            var expenseToAdd = "<tr>"
                                    + "<td class='hidden-id'>" + expense.id +"</td>"
                                    + "<td class='table-body-row'>" + expense.amount + "</td>"
                                    + "<td class='table-body-row'>" + expense.currency + "</td>"
                                    + "<td class='table-body-row'>" + expense.shop + "</td>"
                                    + "<td class='table-body-row'>" + expense.comment + "</td>"
                                    + "<td class='table-body-row'>" + expense.payer + "</td>"
                                + "</tr>";
            $("#expenses-table-body").append(expenseToAdd);
        }); 
    };

    function handleViewAllExpensesContainer(){
        (expensesArray.lentgh === 0) ? 
        handleElementsDisplayWhileNoExpense()
        :handleElementsDisplayWhileOneOrMoreExpenses();
    };

    function handleElementsDisplayWhileNoExpense(){        
        handleElementDisplay("#expenses-table", false);
        handleElementDisplay("#clear-all-expenses-btn", false);
        handleElementDisplay("#no-expense-communicate", true);
    };

    function handleElementsDisplayWhileOneOrMoreExpenses(){
        handleElementDisplay("#expenses-table", false);
        handleElementDisplay("#clear-all-expenses-btn", false);
        handleElementDisplay("#no-expense-communicate", true);
    };

    function handleElementDisplay(path, shoudBeVisible){
        if(shoudBeVisible && $(path).is(":visible") || !shoudBeVisible && $(path).is(":hidden")){
            $(path).toggle();
        }; 
    };
});
