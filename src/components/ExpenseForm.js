import React, {Component} from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import "react-dates/initialize"; 
import 'react-dates/lib/css/_datepicker.css';

// const now = moment();
// console.log(now.format('DD-MM-YYYY'));

class ExpenseForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? props.expense.amount.toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false
        };
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        //this.setState( () => ({description: description})) // or
        this.setState(() => ({description }))
    }

    onChangeTextAre = (e) => {
        const note = e.target.value;
        this.setState (() => ({ note }))
    }

    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({amount}))
        }
    }

    onDateChange = (createdAt) => {
        // the if statement do not delete the input date value
        if(createdAt) {
            this.setState(() => ({createdAt}));
        }
    }

    onFocusChange = ({focused}) => { //documentation
        this.setState(() => ({calendarFocused: focused}));
    }

    onSubmit = (e) => {
        e.preventDefault();

        if(!this.state.description || !this.state.amount) {
            this.setState(() => ({errorMessage: 'Please provide description and amount'}))
        } else {
            this.setState(() => ({errorMessage: ''}))
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount),
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    }

    

    render() {
        return(
            <div>
                {this.state.errorMessage && <p>{this.state.errorMessage}</p>}
               <form onSubmit={this.onSubmit}>
                    <input 
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input
                        type="text"
                        placeholder="Amount"
                        value= {this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker
                        date= {this.state.createdAt}
                        onDateChange= {this.onDateChange}
                        focused= {this.state.calendarFocused}
                        onFocusChange= {this.onFocusChange}
                        numberOfMonths= {1}
                        isOutsideRange= {() => false}
                    />
                    <textarea
                        placeholder="Add a note for your expense (optional)"
                        value={this.state.note}
                        onChange={this.onChangeTextAre}
                    >
                    </textarea>

                    <button>Add Expense </button>
               </form>
            </div>
        )
    }
}

export default ExpenseForm;