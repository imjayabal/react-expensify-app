import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numaral from 'numeral';
import SelectExpenses from '../selectors/expenses';
import SelectExpensesTotal from '../selectors/expenses-total';

const ExpensesSummary = ({ expenseCount, expenseTotal, expensesTotalCount }) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses' ;
    const FormattedExpenseTotal = numaral(expenseTotal).format('0,0.00');
    const hiddenExpenses = expensesTotalCount - expenseCount;

    return (
        <div className="page-header">
            <div className="content-container">
                <div className="page-header__count">
                    <p>Total expenses count: <span>{expensesTotalCount}</span></p>
                    <p>Hidden expenses count: <span>{hiddenExpenses}</span></p>
                </div>
                <h1 className="page-header__title">Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>&#x20b9;{FormattedExpenseTotal}</span></h1>
                <div className="page-header__actions">
                    <Link className="button" to="/create">Add Expense</Link>
                </div>
            </div>
        </div>
    )
}

const stateConnect = (state) => {
    const visibleExpenses = SelectExpenses(state.expenses, state.filters);
    const totalExpenses = state.expenses

    return{
        expenseCount: visibleExpenses.length,
        expenseTotal: SelectExpensesTotal(visibleExpenses),
        expensesTotalCount: totalExpenses.length
    }
};

export default connect(stateConnect)(ExpensesSummary);