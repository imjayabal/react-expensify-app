import React from 'react';
import { connect } from 'react-redux';
import ReactModal from 'react-modal';
import numeral from 'numeral';
import ExpenseForm from './ExpenseForm';
import { setEditExpese, startRemoveExpense } from '../actions/expenses';


class EditExpense extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false,
            expense: this.props.expense
        }
    }

    onSubmit =  (expenses) => {
        this.props.setEditExpese(this.props.expense.id, expenses);
        this.props.history.push('/');
    }

    onClick = () => {
        this.props.startRemoveExpense({id:this.props.expense.id});
        this.props.history.push('/');
    }

    openModal = () => {
        this.setState ({ isModalOpen:true });
    }
    closeModal = () => {
        this.setState ({ isModalOpen:false });
    }

    render() {
        const { isModalOpen, expense } = this.state;
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
                        onClick={this.openModal}
                    >Remove Expense</button>
                    
                    <ReactModal
                        isOpen={isModalOpen}
                        contentLabel="Remove Modal"
                        onRequestClose={this.closeModal}
                    >
                        <h3>Are you want to remove?</h3>

                        <div className="modal__remove">
                            <p>{expense.description}</p>
                            <p>&#x20b9; { numeral(expense.amount).format(0,0.00) }</p>
                        </div>
                        
                        <div className="modal__actions">
                            <button
                                className="button button--secondary"
                                onClick={this.closeModal}
                            >No</button>
                            <button
                                className="button button--primary"
                                onClick={this.onClick}
                            >Yes</button>
                        </div>
                        
                    </ReactModal>

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