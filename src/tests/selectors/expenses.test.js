import moment from 'moment';
import selectExpenses from '../../selectors/expenses';
import expenses from '../fixtures/expenses';


// Text filter
test('should filter by value', () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate:undefined,
        endDate:undefined
    }
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([ expenses[2], expenses[1] ]);
});

// start date filter
test('should filter by start date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate:moment(0),
        endDate: undefined
    }
    const result = selectExpenses( expenses, filters );
    expect(result).toEqual([ expenses[2], expenses[0] ]);
});

// end date filter
test('should filter by end date', () => {
    const filters = {
        text:'',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0).add(2, 'days')
    }
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([ expenses[0], expenses[1] ]);
});

// sort by date
test('should filter by  date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate:undefined,
        endDate: undefined
    }
    const result = selectExpenses( expenses, filters );
    expect(result).toEqual([ expenses[2], expenses[0], expenses[1] ]);
});

// sort by amount
test('should filter by start amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate:undefined,
        endDate: undefined
    }
    const result = selectExpenses( expenses, filters );
    expect(result).toEqual([ expenses[1], expenses[2], expenses[0] ]);
});