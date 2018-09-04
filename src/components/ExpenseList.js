import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';
import ExpenseListFilters from './ExpenseListFilters';

 const ExpenseList = (props) => (
     <div>
         <h1>Expense List</h1>
         <ExpenseListFilters />
         { props.expenses.map( (data) => {
             return <ExpenseListItem key={data.id} { ...data } />
         })}
     </div>
 );

 const stateConnect = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
 }

 export default connect(stateConnect)(ExpenseList);

