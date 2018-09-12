import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';
import ExpenseListFilters from '../components/ExpenseListFilters';

 const ExpenseList = (props) => (
     <div>
        <ExpenseListFilters />
        { 
             props.expenses.length === 0 ? (
                <p>No expenses</p>
             ) : (
                props.expenses.map((expense) => {
                    return <ExpenseListItem key={expense.id} { ...expense } />
                })
             )
        }
     </div>
 );

 const stateConnect = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
 }

 export default connect(stateConnect)(ExpenseList);

