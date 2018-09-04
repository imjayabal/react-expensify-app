import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ( { id, description, amount, createdAt }) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{ description }</h3>
        </Link>
        <p>{amount} - {createdAt}</p>
    </div>
);

// or

// const ExpenseListItem = ( props ) => (
//     <div>
//         <h3>{ props.description }</h3>
//         <p>{props.amount} - {props.createdAt}</p>
//         <button onClick={ (e) => {
//             props.dispatch(removeExpense({id: props.id}))
//         }}>Remove</button>
//     </div>
// );


export default ExpenseListItem;