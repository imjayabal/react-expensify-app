import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTexFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';

class ExpenseListFilters extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            calendarFocused: null
        }
    }
    
    onTextChange = (e) => {
        this.props.setTexFilter(e.target.value);
    }
    onSortChange = (e) => {
        if(e.target.value === 'date') {
            this.props.sortByDate();
        } else if (e.target.value === 'amount') {
            this.props.sortByAmount();
        }
    }
    onDatesChange = ({startDate, endDate}) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    }
    onFocusChange = (calendarFocused) => {
        this.setState( () => ({
            calendarFocused
        }))
    }
    render() {
        return (
            <div>
                <input 
                    type="text" 
                    value={this.props.filters.text} 
                    onChange={this.onTextChange}
                />
                <select 
                    value={this.props.filters.sortBy} 
                    onChange={this.onSortChange}
                >
                    <option value='date'>Date</option>
                    <option value='amount'>Amount</option>
                </select>

                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    startDateId={'startDate'}
                    endDate={this.props.filters.endDate}
                    endDateId={'endDate'}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={() => {false}}

                />
            </div>
        );
    }
}

const stateConnect = (state) => {
    return {
        filters: state.filters
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setTexFilter: (text) => dispatch(setTexFilter(text)),
        sortByDate: () => dispatch(sortByDate()),
        sortByAmount: () => dispatch(sortByDate()),
        setStartDate: (startDate) => dispatch(setStartDate(startDate)),
        setEndDate: (endDate) => dispatch(setEndDate(endDate))
    }
}

export default connect(stateConnect, mapDispatchToProps)(ExpenseListFilters);