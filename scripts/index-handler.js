import {Expense} from "../models/expense.js";
import {addExpense, expensesArray, clearExpensesArray} from "../dao/expensedao.js";

$(document).ready(function(){

    $("#clear-all-expenses").on("click", function(){
        clearExpensesArray();
        loadExpenses();
    });

    $("#expense-adding-form-submit-button").on("click", function(event) {
        event.preventDefault();
        addExpenseProcedure();
        clearForm();
        loadExpenses();               
    });


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

    function clearForm(){
        $('#expense-adding-form')[0].reset();
    }


    function loadExpenses(){
        clearExpenseTable();
        displayExpenses();
    };


    function clearExpenseTable(){
        $("#expenses-table > tbody").empty();
    };


    function displayExpenses(){
        if(expensesArray.length !== 0 ){

            if( $("#expenses-table").is(":hidden") ){
                $("#expenses-table").toggle();
            };

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
    
            if( $("#clear-all-expenses").is(":hidden")){
                $("#clear-all-expenses").toggle();  
            };

            if( $("#no-expense-communicate").is(":visible")){
                $("#no-expense-communicate").toggle();  
            };

        } else {

            if( $("#no-expense-communicate").is(":hidden") ){
                $("#no-expense-communicate").toggle();
            };

            if( $("#expenses-table").is(":visible") ){
                $("#expenses-table").toggle();
            };

            if( $("#clear-all-expenses").is(":visible") ){
                $("#clear-all-expenses").toggle();
            };

        };

    }; 

});
