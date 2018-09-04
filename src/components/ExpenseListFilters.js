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

    
    onChangeInput = (e) => {
        this.props.dispatch(setTexFilter(e.target.value))
    }
    onChangeDropDown = (e) => {
        if(e.target.value === 'date') {
            this.props.dispatch(sortByDate());
        } else if (e.target.value === 'amount') {
            this.props.dispatch(sortByAmount());
        }
    }
    onDatesChange = ({startDate, endDate}) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
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
                    onChange={this.onChangeInput}
                />
                <select 
                    value={this.props.filters.sortBy} 
                    onChange={this.onChangeDropDown}
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

export default connect(stateConnect)(ExpenseListFilters);