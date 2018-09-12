import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListItem from './ExpenseListItem';
import ExpensesSummary from './ExpensesSummary';
// import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashboard = () => (
    <div>
        {/* <ExpenseListFilters /> */}
        <ExpensesSummary />
        <ExpenseList />
        <ExpenseListItem />
        
    </div>
)

export default ExpenseDashboard;