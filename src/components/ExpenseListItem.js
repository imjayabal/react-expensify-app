import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
        <div className="list-item" >
            <div>
                <h3 className="list-item__title">{ description }</h3>
                <span className="list-item__sub-title">{moment(createdAt).format('MMMM Do, YYYY')}</span>
            </div>
            <h3 className="list-item__data">&#x20b9;{numeral(amount).format('0,0.00')}</h3>
            <Link className="list-item__edit" to={`/edit/${id}`}><span className="mdi mdi-pencil"></span> Edit</Link>
        </div>
);


export default ExpenseListItem;