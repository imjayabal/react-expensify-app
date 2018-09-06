import React from 'react';
import { connect } from 'react-redux';
import numaral from 'numeral';
import SelectExpenses from '../selectors/expenses';
import SelectExpensesTotal from '../selectors/expenses-total';

const ExpensesSummary = ({ expenseCount, expenseTotal }) => {
    const TotalCountText = expenseCount === 1 ? 'expense' : 'expenses' ;
    const FormattedExpenseTotal = numaral(expenseTotal).format('$0,0.00');

    return (
        <div>
            <h1>Total count is {expenseCount} {TotalCountText} and amount is {FormattedExpenseTotal}</h1>
        </div>
    )
}

const stateConnect = (state) => {
    const visibleExpenses = SelectExpenses(state.expenses, state.filters);

    return{
        expenseCount: visibleExpenses.length,
        expenseTotal: SelectExpensesTotal(visibleExpenses)
    }
};

export default connect(stateConnect)(ExpensesSummary);