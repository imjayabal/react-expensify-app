import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
    <div>
        { id && 
            <div>
                <Link to={`/edit/${id}`}>
                    <h3>{ description }</h3>
                </Link>
                <p>
                    {numeral(amount).format('$0,0.00')}
                    - 
                    {moment(createdAt).format('MMMM Do, YYYY')}
                </p>
            </div>
        }
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