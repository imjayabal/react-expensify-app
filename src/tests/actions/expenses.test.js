import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

// Remove expenses
test('should setup remove expense action object', () => {
    const action = removeExpense({ id: 'test123' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: 'test123'
    })
});

// edit expenses
test('should setup edit expense action object', () => {
    const action = editExpense('test123', {note: 'New note value'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'test123',
        updates:{
            note: 'New note value'
        } 
    });
});

// add expenses with provide value 
test('should setup add expense action object with provided values', () => {
    const expensesData = {
        description: 'Rent',
        note: 'This is my last month Rent',
        amount: 12500,
        createdAt: 1000
    };
    const action = addExpense(expensesData);

    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense: {
            ...expensesData,
            id: expect.any(String)
        }
    });
});

// add expenses with default value 
test('should setup add expense action object with default values', () => {
    const expenseData = {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
});
