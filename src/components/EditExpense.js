import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { setEditExpese, startRemoveExpense } from '../actions/expenses';

class EditExpense extends React.Component {

    onSubmit =  (expenses) => {
        this.props.setEditExpese(this.props.expense.id, expenses);
        this.props.history.push('/');
    }

    onClick = () => {
        this.props.startRemoveExpense({id:this.props.expense.id});
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Expense</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm 
                        expense={this.props.expense}
                        onSubmit={this.onSubmit}
                    />

                    <button
                        className="button button--secondary"
                        onClick={this.onClick}
                    >Remove Expense</button>

                </div>
            </div>
            
        )
    }
}

const mapStatetoProps = (state, props) => {
    return{
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        setEditExpese: (id, expenses) => dispatch(setEditExpese(id, expenses)),
        startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(EditExpense);