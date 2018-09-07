import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

class EditExpense extends React.Component {

    onSubmit =  (expenses) => {
        this.props.editExpense(this.props.expense.id, expenses);
        this.props.history.push('/');
    }

    onClick = () => {
        this.props.removeExpense({id:this.props.expense.id});
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <ExpenseForm 
                    expense={this.props.expense}
                    onSubmit={this.onSubmit}
                />

                <button
                    onClick={this.onClick}
                >Remove</button>

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
        editExpense: (id, expenses) => dispatch(editExpense(id, expenses)),
        removeExpense: (data) => dispatch(removeExpense(data))
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(EditExpense);