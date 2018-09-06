import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListItem from './ExpenseListItem';
import ExpensesSummary from './ExpensesSummary';

const ExpenseDashboard = () => (
    <div>
        <ExpensesSummary />
        <ExpenseList />
        <ExpenseListItem />
    </div>
)

export default ExpenseDashboard;